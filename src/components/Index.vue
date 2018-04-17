<template>
    <div id="index" class="index-main main">
        <team-nav></team-nav>
        <div class="bx clearfix">
            <div class="game-info f-l">
                <div class="league-tab">
                    <ul class="clearfix">
                        <li class="f-l " v-for="item in leagueTabLists" :class="{'tab-selected':selectedLeagueId == item.leagueId}" @click="selectTab(item)">{{item.leagueName}}</li>         
                    </ul>
                </div>
                <div class="game-info-body clearfix">
                    <div class="chart-l f-l">
                        <div class="chart-l-t">
                            <p class="chart-title">表现分析</p>
                            <div class="chart-body">
                                <p class="best">在<span class="league-name-str">所有比赛</span>中最佳</p>  
                                <div class="bar-wrapper">
                                    <div class="bar1 bar">                                      
                                        <div class="team-num" :style="{height:transFloatToPercent((teamPerformance.xgTp.xg/teamPerformance.xgTp.maxXg).toFixed(4))}" ></div>
                                        <div class="average-num" :style="{bottom:transFloatToPercent((teamPerformance.xgTp.avgXg/teamPerformance.xgTp.maxXg).toFixed(4))}"></div>
                                        <div class="hover-area" name="期待进球（xG）" @mouseenter="showTheBarTips(1)" @mouseleave="hideTheBarTip">
                                            <span class="triangle" :class="{'show':shouldBeShowBarNum == 1}"></span>
                                        </div>
                                        
                                    </div>
                                    <div class="bar2 bar">
                                        <div class="team-num" :style="{height:transFloatToPercent((teamPerformance.gxgTp.gxg/teamPerformance.gxgTp.maxGxg).toFixed(4))}"></div>
                                        <div class="average-num" :style="{bottom:transFloatToPercent((teamPerformance.gxgTp.avgGxg/teamPerformance.gxgTp.maxGxg).toFixed(4))}"></div>
                                        <div class="hover-area" name="进球-期待进球（进球-xG）" @mouseenter="showTheBarTips(2)" @mouseleave="hideTheBarTip">
                                            <span class="triangle" :class="{'show':shouldBeShowBarNum == 2}"></span>
                                        </div>
                                    </div>
                                    <div class="bar3 bar">
                                        <div class="team-num" :style="{height:transFloatToPercent((teamPerformance.dxgTp.xg/teamPerformance.dxgTp.maxXg).toFixed(4))}"></div>
                                        <div class="average-num" :style="{bottom:transFloatToPercent((teamPerformance.dxgTp.avgXg/teamPerformance.dxgTp.maxXg).toFixed(4))}"></div>
                                        <div class="hover-area" name="期待失球" @mouseenter="showTheBarTips(3)" @mouseleave="hideTheBarTip">
                                            <span class="triangle" :class="{'show':shouldBeShowBarNum == 3}"></span>
                                        </div>
                                    </div>
                                    <div class="bar4 bar">
                                        <div class="team-num" :style="{height:transFloatToPercent((teamPerformance.lxgTp.gxg/teamPerformance.lxgTp.maxGxg).toFixed(4))}"></div>
                                        <div class="average-num" :style="{bottom:transFloatToPercent((teamPerformance.lxgTp.avgGxg/teamPerformance.lxgTp.maxGxg).toFixed(4))}"></div>
                                        <div class="hover-area right" name="期待失球-失球" @mouseenter="showTheBarTips(4)" @mouseleave="hideTheBarTip"> 
                                            <span class="triangle" :class="{'show':shouldBeShowBarNum == 4}"></span>
                                        </div>
                                    </div>
                                    <div class="bar5 bar">
                                        <div class="team-num" :style="{height:transFloatToPercent((teamPerformance.headingTp.succHeadingDuel/teamPerformance.headingTp.maxSuccHeadingDuel).toFixed(4))}"></div>
                                        <div class="average-num" :style="{bottom:transFloatToPercent((teamPerformance.headingTp.avgSuccHeadingDuel/teamPerformance.headingTp.maxSuccHeadingDuel).toFixed(4))}"></div>
                                        <div class="hover-area right" name="场均赢得空中对抗" @mouseenter="showTheBarTips(5)" @mouseleave="hideTheBarTip">
                                            <span class="triangle" :class="{'show':shouldBeShowBarNum == 5}"></span>
                                        </div>
                                    </div>
                                    <div class="bar6 bar">
                                        <div class="team-num" :style="{height:transFloatToPercent((teamPerformance.timeValidTp.timeValid/teamPerformance.timeValidTp.maxTimeValid).toFixed(4))}"></div>
                                        <div class="average-num" :style="{bottom:transFloatToPercent((teamPerformance.timeValidTp.avgTimeValid/teamPerformance.timeValidTp.maxTimeValid).toFixed(4))}"></div>
                                        <div class="hover-area right" name="场均净比赛时间" @mouseenter="showTheBarTips(6)" @mouseleave="hideTheBarTip">
                                            <span class="triangle" :class="{'show':shouldBeShowBarNum == 6}"></span>
                                        </div>
                                    </div>
                                </div> 
                                <p class="worst">在<span class="league-name-str">所有比赛</span>中欠佳</p> 
                                <div class="hover-tips clearfix" :class="{'show':shouldBeShowBarNum != 0}" :style="{left: shouldBeShowBarNum <= 3? 0 : 44+'px'}">
                                    <p class="category-name f-l">{{barTipsItemName}}</p> 
                                    <div class="tip-box-m f-l">
                                        <p>{{isAboveAverage == true ? "高于" : "低于"}}{{selectedLeagueName}}比赛平均水平</p>
                                        <p class="ranking">中超联赛<span>第{{myRanking}}名</span></p>
                                    </div>
                                    <span class="f-r">--平均  <b class="league-avg">{{avgTeamScore}}</b></span>   
                                    <span class="f-r">--本队  <b class="league-home">{{myTeamScore}}</b></span>   
                                    <div class="wrapper clearfix f-l">
                                        <div class="tip-box-b clearfix">
                                                <div class="best-team f-l">
                                                    <span>最佳</span><b class="league-best" style="margin-left:15px;">{{theBestTeamScore}}</b>
                                                    <p>{{theBestTeamName}}</p>
                                                </div>
                                                <div class="worst-team f-r">
                                                    <span>欠佳</span><b class="league-worst" style="margin-left:15px;">{{theWorstTeamScore}}</b>
                                                    <p>{{theWorstTeamName}}</p>
                                                </div>
                                        </div>
                                    </div>                                      
                                </div>  
                            </div> 
                            <ul class="x-categories clearfix">
                                <li>xG</li>
                                <li>进球-xG</li>
                                <li>xGa</li>
                                <li>xGa-失球</li>
                                <li>空中对抗</li>
                                <li style="width:60px">净比赛时间</li>
                            </ul>                              

                        </div>    
                        <div class="chart-l-m">
                            <p class="chart-title chart2">进失球时间段</p>
                            <ul class="goal-num clearfix">
                                <li>{{goalsDistribution.goalTime15}}</li>
                                <li>{{goalsDistribution.goalTime30}}</li>
                                <li>{{goalsDistribution.goalTime45}}</li>
                                <li>{{goalsDistribution.goalTime45I}}</li>
                                <li>{{goalsDistribution.goalTime60}}</li>
                                <li>{{goalsDistribution.goalTime75}}</li>
                                <li>{{goalsDistribution.goalTime90}}</li>
                                <li>{{goalsDistribution.goalTime90I}}</li>
                            </ul>
                            <ul class="fumble-num clearfix">
                                <li>{{goalsDistribution.lossTime15}}</li>
                                <li>{{goalsDistribution.lossTime30}}</li>
                                <li>{{goalsDistribution.lossTime45}}</li>
                                <li>{{goalsDistribution.lossTime45I}}</li>
                                <li>{{goalsDistribution.lossTime60}}</li>
                                <li>{{goalsDistribution.lossTime75}}</li>
                                <li>{{goalsDistribution.lossTime90}}</li>
                                <li>{{goalsDistribution.lossTime90I}}</li>
                            </ul>
                            <ul class="time-section clearfix">
                                <li>1-15</li>
                                <li>16-30</li>
                                <li>31-45</li>
                                <li>45+</li>
                                <li>46-60</li>
                                <li>61-75</li>
                                <li>76-90</li>
                                <li>90+</li>
                            </ul>
                        </div>    
                        <div class="chart-l-b">
                            <p class="chart-title chart3">传球数据</p>
                            <div id="chart-of-passball" class="chart-body clearfix" style="width: 325px;height:188px;">
                                <highcharts :id="chartId" :option="chartOption"></highcharts>
                                <!-- <highcharts-renderer :width="300" :height="100"></highcharts-renderer> -->
                            </div>
                            
                            <ul class="legend">
                                <li>
                                    <i></i><span>短传</span> 
                                </li>
                                <li>
                                    <i></i><span>中传</span> 
                                </li>
                                <li>
                                    <i></i><span>长传</span> 
                                </li>
                            </ul>
                        </div>    
                    </div>   
                    <div class="chart-m f-l">
                        <div class="chart-m-t">
                            <p class="chart-title">防守与进攻</p>
                            <div class="img-wrapper">
                                <img src="../assets/images/football-field.png" alt="" width="266" class="football-field">
                                <div class="attack-line line-box">
                                    <p>射门位置平均线=<span>0</span>米</p>
                                </div>
                                <div class="defense-line line-box" :style="{'height':avgDefendLine+'px'}">
                                    <p>防守平均线=<span>{{(tacticsLineData.defendLine / 5.14).toFixed(1)}}</span>米</p>
                                </div>
                            </div>                          
                        </div>
                        <div class="chart-m-b">
                            <div class="img-wrapper">
                                <img class="half-field" src="../assets/images/half-field.png" width="266" alt="" >
                                <div class="penalty-in-wrapper clearfix">
                                    <div class="penalty-in-area1 f-l">{{teamShotAreaData.b1}}</div>
                                    <div class="penalty-in-area3 f-l clearfix">
                                        <div class="penalty-in-area3-1 f-l">{{teamShotAreaData.c1+teamShotAreaData.e1}}</div>
                                        <div class="penalty-in-area3-2 f-l">{{teamShotAreaData.d1}}</div>
                                    </div>
                                    <div class="penalty-in-area2 f-r">{{teamShotAreaData.f1}}</div>
                                </div>
                                <p class="penalty-area-num">{{teamShotAreaData.a1+teamShotAreaData.g1+teamShotAreaData.h1+teamShotAreaData.j1+teamShotAreaData.k1+teamShotAreaData.l1+teamShotAreaData.i1}}</p>     
                                <p class="penalty-area-in shoot-times clearfix">禁区内射门<span class="f-r">{{teamShotAreaData.b1+teamShotAreaData.f1+teamShotAreaData.c1+teamShotAreaData.e1+teamShotAreaData.d1}}</span></p>
                                <p class="penalty-area-out shoot-times clearfix">禁区外射门<span class="f-r">{{teamShotAreaData.a1+teamShotAreaData.g1+teamShotAreaData.h1+teamShotAreaData.j1+teamShotAreaData.k1+teamShotAreaData.l1+teamShotAreaData.i1}}</span></p>
                            </div>
                        </div>
                    </div>   
                    <div class="chart-r f-l">
                        <div class="chart-r-t">
                            <p class="chart-title clearfix">控球<span class="f-r">*统计联赛平均值</span></p>
                            <div class="img-wrapper">
                                <img src="../assets/images/football-field2.png" alt="" width="266" class="football-field2"> 
                                <div class="ball-ctrl-per frontfield">
                                    <p>前场控球比</p>    
                                    <p>本队<span class="f-r" id="team_possAtt">{{transFloatToPercent(teamTacticsData.possAtt)}}</span></p>    
                                    <p>平均<span class="f-r" id="avg_possAtt">{{transFloatToPercent(teamTacticsData.avgPossAtt)}}</span></p>    
                                </div>                                   
                                <div class="ball-ctrl-per midfield">
                                    <p>中场场控球比</p>    
                                    <p>本队<span class="f-r" id="team_possMiddle">{{transFloatToPercent(teamTacticsData.possMiddle)}}</span></p>    
                                    <p>平均<span class="f-r" id="avg_possMiddle">{{transFloatToPercent(teamTacticsData.avgPossMiddle)}}</span></p>       
                                </div>                                   
                                <div class="ball-ctrl-per backfield">
                                    <p>后场控球比</p>    
                                    <p>本队<span class="f-r" id="team_possBack">{{transFloatToPercent(teamTacticsData.possBack)}}</span></p>    
                                    <p>平均<span class="f-r" id="avg_possBack">{{transFloatToPercent(teamTacticsData.avgPossBack)}}</span></p>       
                                </div>                                   
                            </div>
                        
                        </div>
                        <div class="chart-r-b">
                            <div class="img-wrapper">
                                <img class="half-field2" src="../assets/images/half-field2.png" width="266" alt="" >
                                <div class="ball-ctrl-per-x leftfield">
                                    <p>左路控球比</p>    
                                    <p>本队<span class="f-r" id="team_attLeft">{{transFloatToPercent(teamTacticsData.attLeft)}}</span></p>    
                                    <p>平均<span class="f-r" id="avg_attLeft">{{transFloatToPercent(teamTacticsData.avgAttLeft)}}</span></p>    
                                </div>
                                <div class="ball-ctrl-per-x centerfield">
                                    <p>中路控球比</p>    
                                    <p>本队<span class="f-r" id="team_attCenter">{{transFloatToPercent(teamTacticsData.attCenter)}}</span></p>    
                                    <p>平均<span class="f-r" id="avg_attCenter">{{transFloatToPercent(teamTacticsData.avgAttCenter)}}</span></p>    
                                </div>
                                <div class="ball-ctrl-per-x rightfield">
                                    <p>右路控球比</p>    
                                    <p>本队<span class="f-r" id="team_attRight">{{transFloatToPercent(teamTacticsData.attRight)}}</span></p>    
                                    <p>平均<span class="f-r" id="avg_attRight">{{transFloatToPercent(teamTacticsData.avgAttRight)}}</span></p>    
                                </div>
                            </div>
                            
                        </div>
                    </div>   
                </div>
            </div>

            <div class="players-score f-r">
                <div class="players-score-header clearfix">
                    <p>球员评分</p>
                    <a class="detail-score f-r" href="javascript:;" id="players-detial">详细</a>
                </div>
                <div class="players-list">
                    <ul class="menjiang">
                        <li v-for="item in playerScoreDataByPosition.goalKeeperArr">
                            <a href="personal_data.html">{{item.name}}<span>{{Number(item.totalScore).toFixed(1)}}</span></a>
                        </li>
                    </ul>
                    <ul class="houwei">
                        <li v-for="item in playerScoreDataByPosition.backArr">
                            <a href="personal_data.html">{{item.name}}<span>{{Number(item.totalScore).toFixed(1)}}</span></a>
                        </li>
                    </ul>
                    <ul class="zhongchang">
                        <li v-for="item in playerScoreDataByPosition.centerArr">
                            <a href="personal_data.html">{{item.name}}<span>{{Number(item.totalScore).toFixed(1)}}</span></a>
                        </li>
                    </ul>
                    <ul class="qianfeng">
                        <li v-for="item in playerScoreDataByPosition.strikerArr">
                            <a href="personal_data.html">{{item.name}}<span>{{Number(item.totalScore).toFixed(1)}}</span></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="data-info-filter f-l">
                <div class="filter-condition">

                        <div id="season-filter" class="filter-c-row clearfix">
                            <span class="f-l">赛季：</span>
                            <!-- <a class="f-l active all" href="javascript:;" :class="active: selectedSeasonStr == 'all' " @click="selectSeasonFilter()">所有</a> -->
                            <a class="f-l all" href="javascript:;" :class="{active: selectedSeasonStr == 'all'}" @click="selectSeasonFilter()">所有</a>
                            <ul class="f-l clearfix">
                                <li class="f-l" v-for="item in teamSeasonData" v-if="item.season >= 2014"  @click="selectSeasonFilter(item.season)"><a :class="{active: selectedSeasonStr.indexOf(item.season) != -1}" href="javascript:;">{{item.season}}</a></li>   
                            </ul>
                        </div>
                        <div id="match-filter" class="filter-c-row clearfix">
                            <span class="f-l">赛事：</span>
                            <a class="f-l active all" href="javascript:;">所有</a>
                            <ul class="f-l clearfix">
                                <li class="f-l" v-for="item in teamLeagueData"><a href="javascript:;">{{item.leagueName}}</a></li>
                            </ul>
                        </div>
                        <div id="home-and-away-filter" class="filter-c-row clearfix">
                            <span class="f-l">主客场：</span>
                            <a class="f-l active all" href="javascript:;">所有</a>
                            <ul class="f-l clearfix">
                                <li class="f-l"><a href="javascript:;">主场</a></li>
                                <li class="f-l"><a href="javascript:;">客场</a></li>
                            </ul>
                        </div>
                        <div id="record-filter" class="filter-c-row clearfix">
                            <span class="f-l">战绩：</span>
                            <a class="f-l active all" href="javascript:;">所有</a>
                            <ul class="f-l clearfix">
                                <li class="f-l"><a href="javascript:;">胜</a></li>
                                <li class="f-l"><a href="javascript:;">平</a></li>
                                <li class="f-l"><a href="javascript:;">负</a></li>
                                
                            </ul>
                        </div>
                    
                </div>

                <div class="filter-result">
                    <ul class="result-item">
                        <li class="result-list clearfix" v-for="item in matchList">
                            <div class="match-info f-l">
                                <p class="match-name">{{item.name}}</p>
                                <p class="match-round">{{item.round}}</p>
                            </div>
                            <div class="match-data f-r">
                                <ul class="clearfix">
                                    <li class="f-l report clearfix">
                                        <img class="f-l" src="../assets/images/report.png" alt="" width="24">
                                        <!-- <span class="f-l">下载报告</span> -->
                                         <router-link class="f-l" to="/report">下载报告</router-link>
                                    </li>
                                    <li class="f-l details clearfix">
                                        <img class="f-l" src="../assets/images/details.png" alt="" width="24">
                                        <!-- <span class="f-l">比赛详情</span> -->
                                        <router-link class="f-l" to="/match">比赛详情</router-link>
                                    </li>
                                    <li class="f-l all-goals clearfix">
                                        <img class="f-l" src="../assets/images/all-goals.png" alt="" width="24">
                                        <!-- <span class="f-l">所有进球</span> -->
                                         <router-link class="f-l" to="/video-analysis">所有进球</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="filter-pagination">
                    <button class="prev-page"><</button>
                    <ul class="pagination-bar clearfix">
                     
                        <li class="page-item f-l select">1</li>
                        <li class="page-item f-l">2</li>
                        <li class="page-item f-l">3</li>
                        <li class="page-item f-l">4</li>
                        <li class="page-item f-l">5</li>
                        <li class="page-item f-l">6</li>
                        <li class="page-item f-l">...</li>
                        <li class="page-item f-l">31</li>
                                           
                    </ul>
                    <button class="next-page">></button>
                </div>


            </div>

        </div>  
    </div>
</template>

<script>
import '../assets/css/base.css'
import Vue from 'vue'
import VueHighcharts from 'vue-highcharts'
import TeamNav from './TeamNav'
import router from '../router'
import Highcharts from 'Highcharts'
// import HighChart from './Chart'
// import options from '../chart-options/options'
Vue.use(VueHighcharts, { Highcharts: Highcharts });

export default {
    name: 'index',
    data () {
        return {
            matchList: [
                { name: "切尔西 6-1 曼彻斯特联队", round: "2017-06-12 英超联赛第32轮"},
                { name: "切尔西 6-2 曼彻斯特联队", round: "2017-06-13 英超联赛第32轮"},
                { name: "切尔西 6-13 曼彻斯特联队", round: "2017-06-14 英超联赛第32轮"},
                { name: "切尔西 6-4 曼彻斯特联队", round: "2017-06-15 英超联赛第32轮"},
                { name: "切尔西 6-5 曼彻斯特联队", round: "2017-06-16 英超联赛第32轮"},
            ],
            leagueLists:[{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"",leagueId:"1",leagueName:"中超","leagueType":0,"matchDate":"","result":"","round":"","season":"","status":0,"teamId":""}],
            selectedLeagueId: "",
            selectedLeagueName: "所有",
            teamPerformance:{"timeValidTp":{"avgGxg":"","avgSuccHeadingDuel":"14.28787273","avgTimeValid":"3150.63990000","avgTotalScore":"","avgXg":"","gxg":"","maxGxg":"","maxSuccHeadingDuel":"13.0000","maxTeamId":1526,"maxTeamName":"川崎前锋","maxTimeValid":"3861.0000","maxTotalScore":"","maxXg":"","minGxg":"","minSuccHeadingDuel":"12.8333","minTeamId":1036,"minTeamName":"深圳佳兆业","minTimeValid":"2831.6667","minTotalScore":"","minXg":"","pm":20,"succHeadingDuel":"13.8333","teamId":1012,"teamName":"江苏苏宁易购","timeValid":"3177.8333","totalScore":"","xg":""},"lxgTp":{"avgGxg":"-0.021500000000003785","avgSuccHeadingDuel":"","avgTimeValid":"","avgTotalScore":"","avgXg":"","gxg":"-1.6799000000000062","maxGxg":"-0.3793000000000024","maxSuccHeadingDuel":"","maxTeamId":1005,"maxTeamName":"广州富力","maxTimeValid":"","maxTotalScore":"","maxXg":"","minGxg":"3.328299999999997","minSuccHeadingDuel":"","minTeamId":1001,"minTeamName":"山东鲁能泰山","minTimeValid":"","minTotalScore":"","minXg":"","pm":3,"succHeadingDuel":"","teamId":1012,"teamName":"江苏苏宁易购","timeValid":"","totalScore":"","xg":"6.320099999999994"},"gxgTp":{"avgGxg":"0.02150000000000407","avgSuccHeadingDuel":"","avgTimeValid":"","avgTotalScore":"","avgXg":"9.353499999999997","gxg":"-2.1206000000000014","maxGxg":"8.566400000000003","maxSuccHeadingDuel":"","maxTeamId":1008,"maxTeamName":"上海上港","maxTimeValid":"","maxTotalScore":"","maxXg":"12.433599999999997","minGxg":"-5.446299999999994","minSuccHeadingDuel":"","minTeamId":1013,"minTeamName":"长春亚泰","minTimeValid":"","minTotalScore":"","minXg":"12.446299999999994","pm":13,"succHeadingDuel":"","teamId":1012,"teamName":"江苏苏宁易购","timeValid":"","totalScore":"","xg":"12.120600000000001"},"dxgTp":{"avgGxg":"","avgSuccHeadingDuel":"","avgTimeValid":"","avgTotalScore":"","avgXg":"9.35349999999999625","gxg":"-1.6799000000000062","maxGxg":"","maxSuccHeadingDuel":"","maxTeamId":1014,"maxTeamName":"河南建业","maxTimeValid":"","maxTotalScore":"","maxXg":"10.238699999999993","minGxg":"","minSuccHeadingDuel":"","minTeamId":1031,"minTeamName":"河北华夏幸福","minTimeValid":"","minTotalScore":"","minXg":"9.650299999999998","pm":7,"succHeadingDuel":"","teamId":1012,"teamName":"江苏苏宁易购","timeValid":"","totalScore":"","xg":"6.320099999999994"},"xgTp":{"avgGxg":"0.02150000000000407","avgSuccHeadingDuel":"","avgTimeValid":"","avgTotalScore":"","avgXg":"9.353499999999997","gxg":"-2.1206000000000014","maxGxg":"-0.2769999999999886","maxSuccHeadingDuel":"","maxTeamId":1000,"maxTeamName":"广州恒大淘宝","maxTimeValid":"","maxTotalScore":"","maxXg":"14.276999999999989","minGxg":"-1.2166999999999994","minSuccHeadingDuel":"","minTeamId":1004,"minTeamName":"大连一方","minTimeValid":"","minTotalScore":"","minXg":"4.2166999999999994","pm":4,"succHeadingDuel":"","teamId":1012,"teamName":"江苏苏宁易购","timeValid":"","totalScore":"","xg":"12.120600000000001"},"headingTp":{"avgGxg":"","avgSuccHeadingDuel":"14.28787273","avgTimeValid":"3150.63990000","avgTotalScore":"","avgXg":"","gxg":"","maxGxg":"","maxSuccHeadingDuel":"26.0000","maxTeamId":1536,"maxTeamName":"大阪樱花","maxTimeValid":"2951.0000","maxTotalScore":"","maxXg":"","minGxg":"","minSuccHeadingDuel":"8.3333","minTeamId":1004,"minTeamName":"大连一方","minTimeValid":"3337.5000","minTotalScore":"","minXg":"","pm":23,"succHeadingDuel":"13.8333","teamId":1012,"teamName":"江苏苏宁易购","timeValid":"3177.8333","totalScore":"","xg":""}},
            shouldBeShowBarNum: 0,
            barTipsItemName:"",
            isAboveAverage:true,
            myRanking:0,
            avgTeamScore:0,
            myTeamScore:0,
            theBestTeamScore:0,
            theBestTeamName:"",
            theWorstTeamScore:0,
            theWorstTeamName:"",
            goalsDistribution:{"firstHalfGoals":0,"flag":0,"fromRound":"","goalTime15":2,"goalTime30":0,"goalTime45":1,"goalTime45I":0,"goalTime60":2,"goalTime75":2,"goalTime90":3,"goalTime90I":0,"homeAway":"","id":"","leagueId":"","lossTime15":1,"lossTime30":3,"lossTime45":1,"lossTime45I":0,"lossTime60":1,"lossTime75":2,"lossTime90":1,"lossTime90I":0,"matchId":"","season":"","secondHalfGoals":0,"teamId":"","teamName":"","time10":0,"time100":0,"time20":0,"time30":0,"time40":0,"time50":0,"time60":0,"time70":0,"time80":0,"time90":0,"toRound":"","totalGoals":0},
            chartId:"chart-of-passball",
            obj: {"attCenter":"0.1994","attLeft":"0.4771","attRight":"0.3236","attackMeter30":0,"avgAttCenter":"0.2147","avgAttLeft":"0.4045","avgAttRight":"0.3808","avgGoals":0,"avgGoalsdifference":0,"avgLongPassRate":"0.0682","avgLongPasses":"200.98","avgLoseGoals":0,"avgMiddlePassRate":"0.3819","avgMiddlePasses":"1112.10","avgPossAtt":"0.2441","avgPossBack":"0.3336","avgPossMiddle":"0.4223","avgScore":0,"avgShortPassRate":"0.5500","avgShortPasses":"1592.61","avgSuccLongPass":"0.45","avgSuccMiddlePass":"0.80","avgSuccShortPass":"0.79","breakThrows":0,"breakThrowsGoals":0,"breakThrowsShots":0,"center":0,"centerLeftGoals":0,"centerLeftShots":0,"centerLeftSucc":0,"centerMatch":0,"centerMatchSucc":0,"centerRightGoals":0,"centerRightShots":0,"centerRightSucc":0,"centerSucc":0,"centersFortyFive":0,"clearances":0,"conversionRates":0,"corners":0,"cornersGoals":0,"cornersMatch":0,"cornersMatchSucc":0,"cornersShots":0,"cornersSucc":0,"draw":0,"freekicksDirect":0,"freekicksIndirect":0,"frontDirectFreeKicks":0,"frontDirectFreeKicksGoals":0,"frontDirectFreeKicksShots":0,"frontFreeKicks":0,"frontFreeKicksGoals":0,"frontFreeKicksMatch":0,"frontFreeKicksMatchSucc":0,"frontFreeKicksShots":0,"frontFreeKicksSucc":0,"frontIndirectFreeKicks":0,"frontIndirectFreeKicksGoals":0,"frontIndirectFreeKicksShots":0,"games":0,"goalDifference":0,"goalFirst":0,"goalKick":0,"goals":0,"goalsHead":0,"goalsLeft":0,"goalsOther":0,"goalsRight":0,"headingDuel":0,"homeAway":"","id":"","interceptions":0,"league":"","leagueId":"","longPassRate":"0.0656","longPasses":248,"loseGoals":0,"loss":0,"lossFirst":0,"lossShotsRate":0,"metter30":0,"middlePassRate":"0.3861","middlePasses":1460,"middlePermeabilityGoals":0,"middlePermeabilityShots":0,"midfieldDefensiveFoul":0,"ownGoals":0,"pass":0,"passAttacking":0,"passAttackingSucc":0,"passBackend":0,"passBackendSucc":0,"passBlocks":0,"passMiddle":0,"passMiddleSucc":0,"passRate":0,"passSucc":0,"penalties":0,"placekick":0,"placekickGoal":0,"possAtt":"0.2730","possBack":"0.2910","possMiddle":"0.4358","possessionAttacking":0,"possessionBackend":0,"possessionMiddle":0,"redCard":0,"revoveries":0,"round":"","saves":0,"score":0,"season":"","shortPassRate":"0.5483","shortPasses":2073,"shots":0,"shotsBlocks":0,"shotsInPenaltyArea":0,"shotsMatch":0,"shotsOnTarget":0,"shotsOnTargetMatch":0,"shotsOutPenaltyArea":0,"shotsSuccRate":0,"succLongPasses":117,"succMiddlePasses":1166,"succShortPasses":1642,"tackles":0,"tacklesConneceded":0,"team":"","teamId":"1012","throwIns":0,"throwInsGoals":0,"throwInsShots":0,"win":0,"yellowCard":0},
            tacticsLineData:{"createTime":null,"defendLine":212.60889,"half":0,"id":0,"interception":173.75722,"matchId":0,"shift":209.81166,"tackle":233.82167,"teamId":0},
            teamShotAreaData:{"a":2,"a1":1,"b":7,"b1":7,"c":3,"c1":4,"d":11,"d1":41,"e":0,"e1":3,"f":5,"f1":7,"g":0,"g1":0,"goalsA":1,"goalsB":4,"goalsC":0,"goalsD":3,"goalsE":0,"goalsF":2,"goalsG":0,"h":2,"h1":0,"homeAway":"","i":0,"i1":0,"id":0,"j":4,"j1":20,"k":3,"k1":12,"l":0,"l1":0,"leagueId":"","m":5,"matchId":"","o":1,"p":5,"q":2,"r":3,"s":1,"season":"","t":3,"teamId":"","totalGoals":10,"totalShots":95},
            teamTacticsData:{"attCenter":"0.1994","attLeft":"0.4771","attRight":"0.3236","attackMeter30":0,"avgAttCenter":"0.2143","avgAttLeft":"0.4042","avgAttRight":"0.3815","avgGoals":0,"avgGoalsdifference":0,"avgLongPassRate":"0.0682","avgLongPasses":"202.75","avgLoseGoals":0,"avgMiddlePassRate":"0.3819","avgMiddlePasses":"1121.31","avgPossAtt":"0.2439","avgPossBack":"0.3335","avgPossMiddle":"0.4225","avgScore":0,"avgShortPassRate":"0.5499","avgShortPasses":"1605.02","avgSuccLongPass":"0.45","avgSuccMiddlePass":"0.80","avgSuccShortPass":"0.79","breakThrows":0,"breakThrowsGoals":0,"breakThrowsShots":0,"center":0,"centerLeftGoals":0,"centerLeftShots":0,"centerLeftSucc":0,"centerMatch":0,"centerMatchSucc":0,"centerRightGoals":0,"centerRightShots":0,"centerRightSucc":0,"centerSucc":0,"centersFortyFive":0,"clearances":0,"conversionRates":0,"corners":0,"cornersGoals":0,"cornersMatch":0,"cornersMatchSucc":0,"cornersShots":0,"cornersSucc":0,"draw":0,"freekicksDirect":0,"freekicksIndirect":0,"frontDirectFreeKicks":0,"frontDirectFreeKicksGoals":0,"frontDirectFreeKicksShots":0,"frontFreeKicks":0,"frontFreeKicksGoals":0,"frontFreeKicksMatch":0,"frontFreeKicksMatchSucc":0,"frontFreeKicksShots":0,"frontFreeKicksSucc":0,"frontIndirectFreeKicks":0,"frontIndirectFreeKicksGoals":0,"frontIndirectFreeKicksShots":0,"games":0,"goalDifference":0,"goalFirst":0,"goalKick":0,"goals":0,"goalsHead":0,"goalsLeft":0,"goalsOther":0,"goalsRight":0,"headingDuel":0,"homeAway":"","id":"","interceptions":0,"league":"","leagueId":"","longPassRate":"0.0656","longPasses":248,"loseGoals":0,"loss":0,"lossFirst":0,"lossShotsRate":0,"metter30":0,"middlePassRate":"0.3861","middlePasses":1460,"middlePermeabilityGoals":0,"middlePermeabilityShots":0,"midfieldDefensiveFoul":0,"ownGoals":0,"pass":0,"passAttacking":0,"passAttackingSucc":0,"passBackend":0,"passBackendSucc":0,"passBlocks":0,"passMiddle":0,"passMiddleSucc":0,"passRate":0,"passSucc":0,"penalties":0,"placekick":0,"placekickGoal":0,"possAtt":"0.2730","possBack":"0.2910","possMiddle":"0.4358","possessionAttacking":0,"possessionBackend":0,"possessionMiddle":0,"redCard":0,"revoveries":0,"round":"","saves":0,"score":0,"season":"","shortPassRate":"0.5483","shortPasses":2073,"shots":0,"shotsBlocks":0,"shotsInPenaltyArea":0,"shotsMatch":0,"shotsOnTarget":0,"shotsOnTargetMatch":0,"shotsOutPenaltyArea":0,"shotsSuccRate":0,"succLongPasses":117,"succMiddlePasses":1166,"succShortPasses":1642,"tackles":0,"tacklesConneceded":0,"team":"","teamId":"1012","throwIns":0,"throwInsGoals":0,"throwInsShots":0,"win":0,"yellowCard":0},
            playerScoreData: [{"id":1141,"name":"杨博宇","position":"后卫","totalScore":"60.4486190"},{"id":1227,"name":"杨家威","position":"中场","totalScore":"56.3626000"},{"id":1371,"name":"顾超","position":"门将","totalScore":"60.1254286"},{"id":1381,"name":"曹海清","position":"后卫","totalScore":"58.0982222"},{"id":1388,"name":"谢鹏飞","position":"中场","totalScore":"59.5766207"},{"id":1396,"name":"汪嵩","position":"中场","totalScore":"63.0352000"},{"id":1410,"name":"周云","position":"后卫","totalScore":"61.5746585"},{"id":1414,"name":"吴曦","position":"中场","totalScore":"65.8186452"},{"id":1416,"name":"杨笑天","position":"后卫","totalScore":"63.5432667"},{"id":1420,"name":"李昂","position":"后卫","totalScore":"63.6290968"},{"id":1422,"name":"张新林","position":"中场","totalScore":"81.0600000"},{"id":1423,"name":"刘建业","position":"中场","totalScore":"57.9113077"},{"id":1425,"name":"张晓彬","position":"中场","totalScore":"59.7076452"},{"id":1428,"name":"吉翔","position":"后卫","totalScore":"63.5739722"},{"id":1433,"name":"陶源","position":"中场","totalScore":"57.9594444"},{"id":4173,"name":"拉米雷斯","position":"中场","totalScore":"71.6910357"},{"id":7396,"name":"特谢拉","position":"中场","totalScore":"68.6067931"},{"id":8131,"name":"南小亨","position":"中场","totalScore":"61.0766667"},{"id":8135,"name":"高天意","position":"中场","totalScore":"56.2905357"},{"id":9103,"name":"黄紫昌","position":"前锋","totalScore":"64.2233333"},{"id":9439,"name":"田依浓","position":"中场","totalScore":"63.5336176"},{"id":10749,"name":"李海涛","position":"门将","totalScore":"59.3860000"},{"id":10934,"name":"叶尔凡","position":"前锋","totalScore":"50.4160000"},{"id":10946,"name":"齐雨熙","position":"门将","totalScore":""},{"id":11745,"name":"帕莱塔","position":"后卫","totalScore":"69.9230000"},{"id":16446,"name":"阿不都海米提","position":"中场","totalScore":"64.8017143"},{"id":21777,"name":"高大伦","position":"中场","totalScore":"72.0900000"},{"id":21779,"name":"里奇蒙德 博阿基耶","position":"前锋","totalScore":"72.3210000"},{"id":21780,"name":"梁金虎","position":"后卫","totalScore":"64.9530000"},{"id":21781,"name":"吴凡","position":"中场","totalScore":"54.2000000"},{"id":21782,"name":"张劲一","position":"门将","totalScore":""},{"id":21783,"name":"张凌峰","position":"中场","totalScore":"55.5667500"}],
            teamSeasonData:[{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2009","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2010","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2011","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2012","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2013","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2014","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2015","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2016","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2017","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"","leagueName":"","leagueType":0,"matchDate":"","result":"","round":"","season":"2018","status":0,"teamId":""}],
            teamLeagueData:[{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"1","leagueName":"中超","leagueType":0,"matchDate":"","result":"","round":"","season":"","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"5","leagueName":"足协杯","leagueType":0,"matchDate":"","result":"","round":"","season":"","status":0,"teamId":""},{"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"","leagueId":"7","leagueName":"亚冠","leagueType":0,"matchDate":"","result":"","round":"","season":"","status":0,"teamId":""}],
            selectedSeasonStr:"all"
        }
    },
    computed: {
        leagueTabLists:function(){
            this.leagueLists.unshift({"guest":"","guestScore":"","guestteamId":"","home":"","homeAway":"","homeScore":"","hometeamId":"","id":"",leagueId:"",leagueName:"所有","leagueType":0,"matchDate":"","result":"","round":"","season":"","status":0,"teamId":""})
            return this.leagueLists
        },
        chartOption: function(){
            var that = this
            return {
                chart: {
                    type: 'solidgauge',
                    marginLeft: 80
                },
                title: {
                    text: null
                },
                pane: {
                    startAngle: 0,
                    endAngle: 360,
                    background: [{ 
                        outerRadius: '72',
                        innerRadius: '70',
                        backgroundColor: '#4b5266',
                        borderWidth: 0
                    }, { 
                        outerRadius: '56',
                        innerRadius: '54',
                        backgroundColor: "#9a9a9e",
                        borderWidth: 0
                    }, { 
                        outerRadius: '38',
                        innerRadius: '36',
                        backgroundColor: "#cdcdcd",
                        borderWidth: 0
                    }]
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    followPointer: true,
                    formatter: function(){
                        var seriesAvgPasses = "";
                        var seriesPassesRate = "";
                        var seriesAvgPassesRate = "";
                        var seriesSuccPassesRate = "";
                        var seriesAvgSuccPassesRate = "";
                        if(this.series.name == "短传"){
                            that.obj.avgShortPasses == "" ? seriesAvgPasses = 0 :seriesAvgPasses = that.obj.avgShortPasses;
                            seriesPassesRate = that.transFloatToPercent(Number(that.obj.shortPassRate).toFixed(4))
                            seriesAvgPassesRate = that.transFloatToPercent(Number(that.obj.avgShortPassRate).toFixed(4))
                            that.obj.shortPasses == 0 ? seriesSuccPassesRate = "0%" :seriesSuccPassesRate = that.transFloatToPercent((that.obj.succShortPasses/that.obj.shortPasses).toFixed(4))
                            that.obj.avgShortPasses == 0 ? seriesAvgSuccPassesRate = "0%" :seriesAvgSuccPassesRate = that.transFloatToPercent((that.obj.avgSuccShortPass/that.obj.avgShortPasses).toFixed(4))
                        }else if(this.series.name == "中传"){
                            that.obj.avgMiddlePasses == "" ? seriesAvgPasses = 0 :seriesAvgPasses = that.obj.avgMiddlePasses;
                            seriesPassesRate = that.transFloatToPercent(Number(that.obj.middlePassRate).toFixed(4))
                            seriesAvgPassesRate = that.transFloatToPercent(Number(that.obj.avgMiddlePassRate).toFixed(4))
                            that.obj.middlePasses == 0 ? seriesSuccPassesRate = "0%" :seriesSuccPassesRate =  that.transFloatToPercent((that.obj.succMiddlePasses/that.obj.middlePasses).toFixed(4))
                            that.obj.avgMiddlePasses == 0 ? seriesAvgSuccPassesRate = "0%" :seriesAvgSuccPassesRate = that.transFloatToPercent((that.obj.avgSuccMiddlePass/that.obj.avgMiddlePasses).toFixed(4))
                        }else if(this.series.name == "长传"){
                            that.obj.avgLongPasses == "" ? seriesAvgPasses = 0 :seriesAvgPasses = that.obj.avgLongPasses;
                            seriesPassesRate = that.transFloatToPercent(Number(that.obj.longPassRate).toFixed(4))
                            seriesAvgPassesRate = that.transFloatToPercent(Number(that.obj.avgLongPassRate).toFixed(4))
                            that.obj.longPasses == 0 ? seriesSuccPassesRate = "0%" :seriesSuccPassesRate = that.transFloatToPercent((that.obj.succLongPasses/that.obj.longPasses).toFixed(4))
                            that.obj.avgLongPasses == 0 ? seriesAvgSuccPassesRate = "0%" :seriesAvgSuccPassesRate = that.transFloatToPercent((that.obj.avgSuccLongPass/that.obj.avgLongPasses).toFixed(4))
                        }
                        return '<table style="width:200px;font-size:12px;">'+
                            '<thead>'+
                            '<tr>'+
                            '<th style="text-align:center;color:#35aae6;font-weight:600;">'+this.series.name+'数据</th>'+
                            '<th style="text-align:center;font-weight:600;">本队</th>'+
                            '<th style="text-align:center;font-weight:600;">联赛平均</th>'+
                            '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                            '<tr>'+
                            '<td style="text-align:center;">数据</td>'+
                            '<td style="text-align:center;">'+this.y+'</td>'+
                            '<td style="text-align:center;">'+seriesAvgPasses+'</td>'+
                            '</tr>'+
                            '<tr>'+
                            '<td style="text-align:center;">占总数</td>'+
                            '<td style="text-align:center;">'+seriesPassesRate+'</td>'+
                            '<td style="text-align:center;">'+seriesAvgPassesRate+'</td>'+
                            '</tr>'+
                            '<tr>'+
                            '<td style="text-align:center;">准确率</td>'+
                            '<td style="text-align:center;">'+seriesSuccPassesRate+'</td>'+
                            '<td style="text-align:center;">'+seriesAvgSuccPassesRate+'</td>'+
                            '</tr>'+
                            '</tbody>'+
                            '</table>'
                    },
                    backgroundColor: '#fff',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    padding: 0,
                    textStyle: {
                        color: '#000',
                        fontSize: 10,
                        lineHeight: 12,
                    }
                },
                yAxis: {
                    min: 0,
                    max: this.obj.shortPasses+this.obj.middlePasses+this.obj.longPasses,
                    lineWidth: 0,
                    tickPositions: []
                },
                plotOptions: {
                    solidgauge: {
                        borderWidth: '4px',
                        dataLabels: {
                            enabled: false
                        },
                        linecap: '',
                        stickyTracking: false
                    }
                },
                series: [{
                    name: '短传',
                    borderColor:'#008cd6',
                    data: [{
                        color: "#008cd6",
                        radius: '108',
                        innerRadius: '100',
                        y: this.obj.shortPasses
                    }]
                }, {
                    name: '中传',
                    borderColor: '#35aae6',
                    data: [{
                        color: '#35aae6',
                        radius: '84',
                        innerRadius: '76',
                        y: this.obj.middlePasses
                    }]
                }, {
                    name: '长传',
                    borderColor:'#80d4ff',
                    data: [{
                        color: '#80d4ff',
                        radius: '58',
                        innerRadius: '50',
                        y: this.obj.longPasses
                    }]
                }]
            }
        },
        avgDefendLine: function(){
            var realCourtHeight = 100;  //根据后台传来的数据赋值，这里实验先直接赋值  
            var picCourtHeight = 400;  //页面上球场中球场区域高度
            var defendLine = this.tacticsLineData.defendLine / 5.14;
            return picCourtHeight - picCourtHeight * defendLine / realCourtHeight
        },
        playerScoreDataByPosition: function(){
            var goalKeeperArr = [];
            var backArr = [];
            var centerArr = [];
            var strikerArr = [];
            this.playerScoreData.forEach(function(v,i){
                if(v.position == "门将" && v.totalScore != ""){
                    goalKeeperArr.push(v)
                }else if(v.position == "后卫" && v.totalScore != ""){
                    backArr.push(v)
                }else if(v.position == "中场" && v.totalScore != ""){
                    centerArr.push(v)
                }else if(v.position == "前锋" && v.totalScore != ""){
                    strikerArr.push(v)
                }
            })
            return {
                goalKeeperArr:goalKeeperArr,
                backArr:backArr,
                centerArr:centerArr,
                strikerArr:strikerArr
            }
        }
        
    },
    methods: {
        selectTab(item){
            this.selectedLeagueId = item.leagueId
            this.selectedLeagueName = item.leagueName
        },
        transFloatToPercent(float){
            let result = "";
            // float = Number(float).toFixed(4)
            if(float == 1){
                result = "100%"
            }else if(float == ""){
                result = "0%";
            }else{
                result = float.toString().split(".")[1];
                result = (result/100).toFixed(1) + "%"
            }
            return result;
        },
        showTheBarTips(num){
            this.shouldBeShowBarNum = num
            switch(this.shouldBeShowBarNum){
                case 1:
                    this.barTipsItemName="期待进球（xG）"
                    this.isAboveAverage = this.teamPerformance.xgTp.xg-this.teamPerformance.xgTp.avgXg>=0? true : false
                    this.myRanking=this.teamPerformance.xgTp.pm
                    this.avgTeamScore=Number(this.teamPerformance.xgTp.avgXg).toFixed(1)
                    this.myTeamScore=Number(this.teamPerformance.xgTp.xg).toFixed(1)
                    this.theBestTeamScore=Number(this.teamPerformance.xgTp.maxXg).toFixed(1)
                    this.theBestTeamName=this.teamPerformance.xgTp.maxTeamName
                    this.theWorstTeamScore=Number(this.teamPerformance.xgTp.minXg).toFixed(1)
                    this.theWorstTeamName=this.teamPerformance.xgTp.minTeamName
                break
                case 2:
                    this.barTipsItemName="进球-期待进球（进球-xG）"
                    this.isAboveAverage = this.teamPerformance.gxgTp.gxg-this.teamPerformance.gxgTp.avgGxg>=0? true : false
                    this.myRanking=this.teamPerformance.gxgTp.pm
                    this.avgTeamScore=Number(this.teamPerformance.gxgTp.avgGxg).toFixed(1)
                    this.myTeamScore=Number(this.teamPerformance.gxgTp.gxg).toFixed(1)
                    this.theBestTeamScore=Number(this.teamPerformance.gxgTp.maxGxg).toFixed(1)
                    this.theBestTeamName=this.teamPerformance.gxgTp.maxTeamName
                    this.theWorstTeamScore=Number(this.teamPerformance.gxgTp.minGxg).toFixed(1)
                    this.theWorstTeamName=this.teamPerformance.gxgTp.minTeamName
                break
                case 3:
                    this.barTipsItemName="期待失球"
                    this.isAboveAverage = this.teamPerformance.dxgTp.xg-this.teamPerformance.dxgTp.avgXg>=0? true : false
                    this.myRanking=this.teamPerformance.dxgTp.pm
                    this.avgTeamScore=Number(this.teamPerformance.dxgTp.avgXg).toFixed(1)
                    this.myTeamScore=Number(this.teamPerformance.dxgTp.xg).toFixed(1)
                    this.theBestTeamScore=Number(this.teamPerformance.dxgTp.maxXg).toFixed(1)
                    this.theBestTeamName=this.teamPerformance.dxgTp.maxTeamName
                    this.theWorstTeamScore=Number(this.teamPerformance.dxgTp.minXg).toFixed(1)
                    this.theWorstTeamName=this.teamPerformance.dxgTp.minTeamName
                break
                case 4:
                    this.barTipsItemName="期待失球-失球"
                    this.isAboveAverage = this.teamPerformance.lxgTp.gxg-this.teamPerformance.lxgTp.avgGxg>=0? true : false
                    this.myRanking=this.teamPerformance.lxgTp.pm
                    this.avgTeamScore=Number(this.teamPerformance.lxgTp.avgGxg).toFixed(1)
                    this.myTeamScore=Number(this.teamPerformance.lxgTp.gxg).toFixed(1)
                    this.theBestTeamScore=Number(this.teamPerformance.lxgTp.maxGxg).toFixed(1)
                    this.theBestTeamName=this.teamPerformance.lxgTp.maxTeamName
                    this.theWorstTeamScore=Number(this.teamPerformance.lxgTp.minGxg).toFixed(1)
                    this.theWorstTeamName=this.teamPerformance.lxgTp.minTeamName
                break
                case 5:
                    this.barTipsItemName="场均赢得空中对抗"
                    this.isAboveAverage = this.teamPerformance.headingTp.succHeadingDuel-this.teamPerformance.headingTp.avgSuccHeadingDuel>=0? true : false
                    this.myRanking=this.teamPerformance.headingTp.pm
                    this.avgTeamScore=Number(this.teamPerformance.headingTp.avgSuccHeadingDuel).toFixed(1)
                    this.myTeamScore=Number(this.teamPerformance.headingTp.succHeadingDuel).toFixed(1)
                    this.theBestTeamScore=Number(this.teamPerformance.headingTp.maxSuccHeadingDuel).toFixed(1)
                    this.theBestTeamName=this.teamPerformance.headingTp.maxTeamName
                    this.theWorstTeamScore=Number(this.teamPerformance.headingTp.minSuccHeadingDuel).toFixed(1)
                    this.theWorstTeamName=this.teamPerformance.headingTp.minTeamName
                break
                case 6:
                    this.barTipsItemName="场均净比赛时间"
                    this.isAboveAverage = this.teamPerformance.timeValidTp.timeValid-this.teamPerformance.timeValidTp.avgTimeValid>=0? true : false
                    this.myRanking=this.teamPerformance.timeValidTp.pm
                    this.avgTeamScore=Number(this.teamPerformance.timeValidTp.avgTimeValid).toFixed(1)
                    this.myTeamScore=Number(this.teamPerformance.timeValidTp.timeValid).toFixed(1)
                    this.theBestTeamScore=Number(this.teamPerformance.timeValidTp.maxTimeValid).toFixed(1)
                    this.theBestTeamName=this.teamPerformance.timeValidTp.maxTeamName
                    this.theWorstTeamScore=Number(this.teamPerformance.timeValidTp.minTimeValid).toFixed(1)
                    this.theWorstTeamName=this.teamPerformance.timeValidTp.minTeamName
                break
            }
        },
        hideTheBarTip(){
            this.shouldBeShowBarNum = 0
        },
        selectSeasonFilter(season){
            if(season){
                if((this.selectedSeasonStr).indexOf('all') >= 0){
                    this.selectedSeasonStr = ""
                    this.selectedSeasonStr += ","+season 
                }else{
                    var length = (this.selectedSeasonStr).length
                    var index = (this.selectedSeasonStr).indexOf(season)
                    if(index != -1){
                        if(length > 5){
                            this.selectedSeasonStr = (this.selectedSeasonStr).replace(","+season,"")
                        }else{
                            return
                        }             
                    }else{
                        this.selectedSeasonStr += ","+season
                    }
                }
            }else{
                this.selectedSeasonStr = "all"
            }
        }
    },
    components: {
        TeamNav,
        // highChart
        // HighChart
    },
    mounted(){
        Highcharts.chart(this.chartId,this.chartOption)
        // console.log(333)
        // this.$http.get(
        // 'http://localhost:8080/sdap/getMatchPositionListAjax.html?matchId=14925&half=0')
        // .then(function (res) {
        //     console.log(res.data)
        // })
        // .catch(e => {
        //       // 打印一下错误
        //       console.log('error')
        //       console.log(e)
        //   })
    },
    ready:function(){
    //      this.$http.jsonp(
    //     '/api/getTeamLeagueAjax.html',
    //     {
    //       params:{
    //         teamId:1012,
    //         season:"2018"
    //       }
    //     }
    //   ).then(function (res) {
    //     console.log(res)
    //   }).catch(e => {
    //           // 打印一下错误
    //           console.log(e)
    //       })
       
    },
}
</script>

<style lang="less" scoped>
#chart-of-passball {
    width: 325px;
    height: 188px;
}
.index-main .bx {
    padding-bottom:30px;
    .game-info {/*比赛数据*/
        width: 930px;
        height: 687px;
        margin-right: 17px;
        margin-bottom: 14px;
        .league-tab {
            height: 40px;
            >ul {
                >li {
                    width: 117px;
                    line-height: 32px;
                    border-top:4px solid transparent;
                    border-bottom:4px solid transparent;
                    font-size: 14px;
                    text-align: center;
                    cursor: pointer;
                    font-weight: 600;
                }
            }
        }
        .game-info-body {
            height:647px;
            background-color: #fff;
            padding-left:14px;
            .chart-title {
                font-size:12px;
                color:#97979a;
                line-height: 49px;
            }
            .chart-l {
                width: 325px;
                height: 647px;
                margin-right: 20px;
                .chart-l-t {
                    height: 310px;
                    margin-bottom:4px;

                    .chart-body {
                        position: relative;
                        >p {
                            font-size: 12px;
                            line-height: 26px;
                            background-color: #c3e6f7;
                            text-align: center;
                            color:#35aae6;
                        }
                        >p:last-child {
                            background-color: #efefef;
                            color:#9aa9aa;
                        }
                        .bar-wrapper {
                            height: 181px;
                            border-top:1px solid #35aae6;
                            border-bottom:1px solid #c9c9c9;
                            position: relative;
                            .bar {
                                width: 20px;
                                height: 179px;
                                background-color: #c9c9c9;
                                position: absolute;
                                top:0;
                                .average-num {
                                    width: 28px;
                                    height:2px;
                                    background-color: #979797;
                                    position: absolute;
                                    left:-4px;
                                    // bottom: 120px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    width: 20px;
                                    // height: 150px;  /*本队表现值动态改变*/
                                    background-color: #35aae6;
                                    position: absolute;
                                    left: 0;
                                    bottom:0;
                                }
                                .hover-area {
                                    width: 40px;
                                    height: 179px;
                                    position: absolute;
                                    left:-10px;
                                    top:0;
                                    cursor: pointer;
                                    .triangle {
                                        display: none;
                                        width: 0;
                                        height: 0;
                                        border-width: 11px 10px;
                                        border-style: solid;
                                        border-bottom-color: transparent;
                                        border-top-color: #fff;
                                        border-left-color: transparent;
                                        border-right-color: transparent;
                                        position: absolute;
                                        left: 10px;
                                        top: -15px;
                                    }
                                }
                                

                            } 
                            .bar1 {
                                left:15px;
                                .average-num {
                                    bottom: 120px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    height: 150px;  /*本队表现值动态改变*/
                                }
                            }
                            .bar2 {
                                left:70px;
                                .average-num {
                                    bottom: 130px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    height: 130px;  /*本队表现值动态改变*/
                                }                               
                            }
                            .bar3 {
                                left:125px;
                                .average-num {
                                    bottom: 110px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    height: 90px;  /*本队表现值动态改变*/
                                }
                            }
                            .bar4 {
                                left:180px;
                                .average-num {
                                    bottom: 120px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    height: 130px;  /*本队表现值动态改变*/
                                }
                            }
                            .bar5 {
                                left:235px;
                                .average-num {
                                    bottom: 150px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    height: 145px;  /*本队表现值动态改变*/
                                }
                            }
                            .bar6 {
                                left:290px;
                                .average-num {
                                    bottom: 120px;  /*平均值动态改变*/
                                }
                                .team-num {
                                    height: 150px;  /*本队表现值动态改变*/
                                }
                            }
                        }

                        .hover-tips {
                            width: 280px;
                            height: 150px;
                            background-color: #fff;
                            position: absolute;
                            left: 0;
                            top: -138px;
                            border-radius: 6px;
                            box-shadow: 0 -2px 4px #999999;
                            z-index: 999;
                            display:none;
                            >p {
                                font-size: 14px;
                                color:#35aae6;
                                width: 180px;
                                margin-left: 10px;
                                margin-top:15px;
                                line-height: 1;
                            }
                            >span {
                                font-size: 12px;
                                margin-right: 10px;
                                margin-top:15px;
                                line-height: 1;
                            }
                            .tip-box-m {
                                margin-left:10px;
                                margin-top:11px;
                                >p {
                                    font-weight: 600;
                                }
                                .ranking {
                                    font-size: 12px;
                                    font-weight: 400;
                                    margin-top:8px;
                                    >span {
                                        margin-left: 5px;
                                    }
                                }
                            }
                            .wrapper {
                                width:100%;
                                .tip-box-b {
                                    border-top: 1px solid #ccc;
                                    margin: 13px 5px 0;
                                    padding: 8px 5px 0;
                                    font-size: 12px;
                                    >div {
                                        width: 50%;
                                        >p {
                                            font-weight: 600;
                                        }
                                    }
                                }
                            }                        
                        }
                    }
                    .x-categories {
                        width:330px;
                        overflow: visible;
                        >li {
                            width: 54px;
                            line-height: 28px;
                            float:left;
                            text-align: center;
                            font-size:12px;
                            color:#4e5569;
                        }
                    }
                }
                .chart-l-m {
                    height: 104px;
                    margin-bottom:4px;
                    .chart2 {
                        line-height: 39px;
                    }
                    ul {
                        margin-bottom: 6px;
                        li {
                            float:left;
                            width: 38px;
                            height:17px;
                            line-height: 17px;
                            font-size:12px;
                            font-weight: 600;
                            text-align: center;
                            margin-right: 3px;
                        }
                        li:last-child {
                            margin-right: 0;
                        }
                    }
                    .goal-num {
                        li:nth-child(1) {
                            background-color: rgba(53, 170, 230, 0.2);
                        }
                        li:nth-child(2) {
                            background-color: rgba(53, 170, 230, 0.3);
                        }
                        li:nth-child(3) {
                            background-color: rgba(53, 170, 230, 0.4);
                        }
                        li:nth-child(4) {
                            background-color: rgba(53, 170, 230, 0.5);
                        }
                        li:nth-child(5) {
                            background-color: rgba(53, 170, 230, 0.6);
                        }
                        li:nth-child(6) {
                            background-color: rgba(53, 170, 230, 0.7);
                        }
                        li:nth-child(7) {
                            background-color: rgba(53, 170, 230, 0.8);
                        }
                        li:nth-child(8) {
                            background-color: rgba(53, 170, 230, 1);
                        }
                    }
                    .fumble-num {
                        li:nth-child(1) {
                            background-color: rgba(179,178,178, 0.2);
                        }
                        li:nth-child(2) {
                            background-color: rgba(179,178,178, 0.3);
                        }
                        li:nth-child(3) {
                            background-color: rgba(179,178,178, 0.4);
                        }
                        li:nth-child(4) {
                            background-color: rgba(179,178,178, 0.5);
                        }
                        li:nth-child(5) {
                            background-color: rgba(179,178,178, 0.6);
                        }
                        li:nth-child(6) {
                            background-color: rgba(179,178,178, 0.7);
                        }
                        li:nth-child(7) {
                            background-color: rgba(179,178,178, 0.8);
                        }
                        li:nth-child(8) {
                            background-color: rgba(179,178,178, 1);
                        }
                    }
                    .time-section {
                        li {
                            font-weight: 400;
                        }    
                    }
                }
                .chart-l-b {
                    height: 225px;
                    position: relative;
                    .chart3 {
                        line-height: 37px;
                    }
                    .legend {
                        position: absolute;
                        left:20px;
                        top:50px;
                        >li {
                            font-size: 12px;    
                            margin-bottom: 10px;
                            >i {
                                display: inline-block;
                                border-radius: 2px;
                                width: 12px;
                                height: 12px;
                                background-color: #008cd6;
                                vertical-align: middle;
                                margin-right: 10px;
                            }
                            >span {
                                height: 12px;
                                line-height: 12px;
                                vertical-align: middle;
                            }
                        }
                        >li:nth-child(2){
                            >i {
                                background-color: #35aae6;
                            }
                        }
                        >li:nth-child(3){
                            >i {
                                background-color: #80d4ff;
                            }
                        }
                    }
                }
            }
            .chart-m {
                width: 266px;
                height:647px;
                margin-right: 19px;
                .chart-m-t {                 
                    .img-wrapper {
                        margin-bottom:19px;
                        height: 400px;
                        position: relative;
                        .football-field {
                            margin-top:-3px;
                        }
                        .line-box {
                            width: 264px;
                            height: 100px;
                            border-bottom:2px solid #d0021b;
                            position: absolute;
                            left:1px;
                            top:0px;
                            >p {
                                height: 25px;
                                line-height: 25px;
                                font-size:12px;
                                margin-left:-52px;
                                position: absolute;
                                left:50%;
                                bottom: 0;
                            }
                        }
                        .attack-line {
                            height: 0px;
                            border-bottom:2px solid #d0021b;
                            span {
                                color:#d0021b;
                            }
                        }
                        .defense-line {
                            height: 400px;
                            border-bottom:2px solid #35aae6;
                            span {
                                color:#35aae6;
                            }
                        }
                    }
                    
                }
                .chart-m-b {
                    .img-wrapper {
                        position: relative;
                        .half-field {
                            margin-top:-3px;    
                        }
                        .shoot-times {
                            width: 249px;
                            height: 20px;
                            line-height: 20px;
                            padding-left: 12px;
                            position: absolute;
                            left:6px;
                            font-size: 12px;
                            span {
                                margin-right:8px;
                                font-weight: 600;
                            }
                        } 
                        .penalty-area-in {
                            bottom:35px;
                        }
                        .penalty-area-out {
                            bottom:10px;
                        }
                        .penalty-area-num {
                            position: absolute;
                            left:50%;
                            bottom:64px;
                            margin-left:-20px;
                            font-size: 12px;
                            width:40px;
                            text-align: center;
                            font-weight: 600;
                        }
                        .penalty-in-wrapper {
                            width: 141px;
                            height: 56px;
                            font-size: 12px;
                            text-align: center;
                            font-weight: 600;
                            position: absolute;
                            left:63px;
                            top:1px;;
                            .penalty-in-area1,.penalty-in-area2 {
                                width: 39px;
                                height: 56px;
                                line-height: 56px;
                            }
                            .penalty-in-area3 {
                                width: 63px;
                                height: 56px;
                                line-height: 56px;
                                .penalty-in-area3-1 {
                                    width: 63px;
                                    height: 15px;
                                    line-height: 15px;
                                }
                                .penalty-in-area3-2 {
                                    width: 62px;
                                    height: 40px;
                                    line-height: 40px;
                                }
                            }
                            
                        }
                    }
                    
                }
            }
            .chart-r {
                width: 266px;
                height:647px;
                .chart-r-t {
                    
                    .img-wrapper {
                        position: relative;
                        margin-bottom:19px;
                        .football-field2 {
                            margin-top:-3px;                            
                        }
                        .ball-ctrl-per {
                            width: 112px;
                            height: 80px;
                            position: absolute;
                            left:139px;
                            p {
                                height:26px;
                                line-height: 26px;
                                padding:0 8px;
                                font-size:12px;
                                span {
                                    font-weight: 600;
                                }
                            }
                            p:first-child {
                                color:#3bade7;
                            }
                        }
                        .frontfield {
                            top:23px;
                            
                        }
                        .midfield {
                            top:156px;
                        }
                        .backfield {
                            top:290px;
                        }
                    }

                }
                .chart-r-b {
                    .img-wrapper {
                        position: relative;
                        .half-field2 {
                            margin-top:-3px;
                        }
                        .ball-ctrl-per-x {
                            width: 70px;
                            height: 80px;
                            position: absolute;
                            top:63px;
                            p {
                                height:26px;
                                line-height: 26px;
                                font-size:12px;
                                span {
                                    font-weight: 600;
                                }
                            }
                            p:first-child {
                                color:#3bade7;
                            }
                        }
                        .leftfield {
                            left:10px;
                            
                        }
                        .centerfield {
                            left:98px;
                        }
                        .rightfield {
                            left:187px;
                        }
                    }
                   
                }
            }
        }
    }
    
    .players-score {/*球员评分*/
        width: 253px;
        background-color: #fff;
        .players-score-header {
            height: 40px;
            background-color: #4b5266;
            line-height: 40px;
            >p {
                font-size:15px;
                font-weight: 600;
                color: #fff;
                display: inline-block;
                margin-left:19px;
            }
            >a {
                width: 40px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                background-color: #35aae6;
                border-radius: 2px;
                margin: 12px 15px 0 0;
                color: #fff;
                font-size:12px;
            }
        }
        .players-list {
            padding: 3px 15px 3px;
            ul {
                border-bottom:1px solid #4b5266;
                li {
                    >a {
                        display: block;
                        height: 40px;
                        border-bottom:1px solid #e8e8e8;
                        line-height: 40px;
                        padding:0 9px 0 7px;
                        font-size:14px;
                        span {
                            float:right;
                            font-weight:700;
                        }
                    }
                    
                }
                li:last-child {
                    border-bottom: none;
                }
                li:hover {
                    background-color: #ecf0f1;
                }
            }
            ul:last-child {
                border-bottom: none;
            }
        }
    }
    
    .data-info-filter {/*比赛数据筛选*/
        width: 930px;
        .filter-condition {
            background-color: #fff;
            padding:0 50px 0 20px;
            margin-bottom: 12px;
            >.filter-c-row {
                
                line-height: 46px;
                border-bottom:1px dashed #d8d8d8;
                padding: 0 2px 0;
                span {
                    font-size:14px;
                    font-weight: 600;
                    display: inline-block;
                    width: 102px;
                }
                a {
                    margin-right:46px;
                    font-size:13px;
                }
                a:hover {text-decoration:underline;} 
                > ul {
                    width: 680px;
                    display: inline-block;
                    >li {
                        height: 46px;
                    }
                }
                
            }
            >.filter-c-row:last-child {
                border-bottom:none;
            }
            
        }
        .filter-result {
            margin-bottom: 31px;    
            .result-item {
                .result-list {
                    height: 68px;
                    line-height: 68px;
                    background-color: #fff;
                    margin-bottom: 10px;
                    .match-info {
                        width: 538px;
                        .match-round {
                            font-size:14px;
                            font-weight: 500;
                            line-height: 14px;
                            margin-left: 18px;
                        }
                        .match-name {
                            font-size:18px;
                            font-weight: 500;
                            line-height: 18px;
                            margin:12px 0 11px 18px;
                        }
                    }
                    .match-data {
                        margin-right:25px;
                        >ul {
                            >li {
                                line-height: 40px;
                                height: 40px;
                                width: 96px;
                                border-radius: 2px;
                                margin-left:33px;
                                margin-top: 14px;
                                text-align: center;
                                cursor: pointer;
                                >img {                               
                                    margin:8px 0 0 8px;
                                }
                                >a {
                                    font-size:12px;
                                    margin:15px 0 0 9px;
                                    line-height: 12px;
                                }
                            }
                            >li:hover {
                                background-color: #ecf0f1;
                            }
                            >li:first-child {
                                margin-left:0;
                            }
                        }
                    }
                }
            }
        }
    }
}
/* 分组导航 */ 
.filter-pagination {
    text-align: center;
    line-height: 24px;
    height: 24px;
    .prev-page,.next-page {
        display: inline-block;
        background-color: #35aae6;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color:#4b5266;
        cursor: pointer;
        font-size:12px;
        font-weight: 600;
        vertical-align: top;
    }
    .pagination-bar {
        display: inline-block;
        .page-item,.page-item-dots {
            background-color: #fff;
            width: 24px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            margin: 0 1px;
            color:#4b5266;
            
            font-size:12px;
            font-weight: 600;
        }
        .page-item {
            cursor: pointer;
        }
    }
}

</style>
