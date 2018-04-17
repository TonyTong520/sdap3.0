<template>
    <div id="match">
        <!-- 比赛信息板 -->
        <div class="match-info-board">
            <div class="bx">
                <div class="board-main">
                    <div class="board-top clearfix">
                        <div class="board-t-l team">
                            <div class="team-avatar">
                                <div class="team-logo"></div>
                                <h3>广州恒大淘宝</h3>
                            </div>
                            <ul class="normal-events events">
                                <li>
                                    <i class="goal"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="yellow-card"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="red-card"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="yellow-to-red"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                            </ul>
                            <ul class="penalty-kick-event events">
                                <li>
                                    <i class="penalty-kick-no"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-no"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-yes"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-yes"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-yes"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                            </ul>
                        </div>
                        <div class="board-t-c">
                            <div class="match-round">
                                <p>2017-09-02 19:30</p>
                                <p>2017赛季中超联赛第20轮</p>
                            </div>
                            <div class="match-result">
                                <div class="home-score score clearfix">
                                    <span class="penalty-kick-score">(5)</span>
                                    <span class="normal-score">4</span>
                                </div>
                                <div class="line">—</div>
                                <div class="away-score score clearfix">
                                    <span class="penalty-kick-score">(5)</span>
                                    <span class="normal-score">4</span>
                                </div>
                            </div>
                            <p class="match-status">已完赛</p>
                        </div>
                        <div class="board-t-r team">
                            <div class="team-avatar">
                                <div class="team-logo"></div>
                                <h3>广州恒大淘宝</h3>
                            </div>
                            <ul class="normal-events events">
                                <li>
                                    <i class="goal"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="yellow-card"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="red-card"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="yellow-to-red"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                            </ul>
                            <ul class="penalty-kick-event events">
                                <li>
                                    <i class="penalty-kick-no"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-no"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-yes"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-yes"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                                <li>
                                    <i class="penalty-kick-yes"></i>
                                    <span class="time">30'</span>
                                    <span class="line">—</span>
                                    <span class="player">郜林</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="time-title">
                        <p>时间轴</p>
                    </div>
                    <div class="time-shaft">
                        <div class="time-shaft-bar penalty-kick clearfix">
                            <ul class="home-team-events team-events">
                                <li class="goal"><span>豪哥-30'-点球进球<b></b></span></li>
                                <li class="goal" id="goal1"><span>豪哥-30'-点球进球点球进球<b></b></span></li>
                                <li class="yellow-card"><span>豪哥-30'-黄牌<b></b></span></li>
                                <li class="red-card"><span>豪哥-30'-红牌<b></b></span></li>
                                <li class="yellow-to-red"><span>豪哥-30'-黄转红下场<b></b></span></li>
                            </ul>
                            <div class="half"><span><b>45'<i></i></b></span></div>
                            <div class="half"><span><b>90'<i></i></b></span></div>
                            <div class="injury"><span><b>94'<i></i></b></span></div>
                            <div class="injury"><span><b>98'<i></i></b></span></div>
                            <div class="penalty"><span><b>110'<i></i></b></span></div>
                            <ul class="away-team-events team-events">
                                <li class="goal"><span>豪哥-30'-点球进球<b></b></span></li>
                                <li class="substitute"><span>豪哥（上）-30'-谷歌（下）<b></b></span></li>
                                <li class="penalty-kick-success"><span>豪哥-30'-点球进球<b></b></span></li>
                                <li class="penalty-kick-failure"><span>豪哥-30'-点球未进<b></b></span></li>
                            </ul>
                        </div>
                        <div class="home-logo-mini logo-mini"></div>
                        <div class="away-logo-mini logo-mini"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 球员站位 -->
        <div class="position data-details">
            <div class="bx">
                <div class="tab-bar">
                    <ul class="clearfix" id="tab1">
                        <li class="f-l tab-selected" data-value="player-position">球员站位</li>
                        <li class="f-l" data-value="data-comparison">数据对比</li>
                    </ul>
                    <div class="data-details-main clearfix" id="player-position">
                        <div class="main-left f-l">
                            <div class="data-type-tab" id="tab11">
                                <ul class="clearfix">
                                    <li class="f-l type-selected" data-value="first-lineup-position">
                                        <a href="javascript:;">首发站位</a>
                                        <b class="triangle"></b>
                                    </li>
                                    <li class="f-l"  data-value="average-position">
                                        <a href="javascript:;">平均站位</a>
                                        <b class="triangle"></b>
                                    </li>
                                    <li class="f-l" data-value="average-line">
                                        <a href="javascript:;">攻防均线</a>
                                        <b class="triangle"></b>
                                    </li>
                                </ul>
                            </div>
                            <!-- 首发站位 -->
                            <div class="filter-box" id="first-lineup-position">
                                <div class="filter-box-t">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>查看号码</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>查看评分</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--  平均站位   -->
                            <div class="filter-box hide" id="average-position">      
                                <div class="filter-box-t">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>常规全场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>上半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>下半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>0-15分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>15-30分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>30-45分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>45-60分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>60-75分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>75-90分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>加时赛上</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>加时赛下</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 攻防均线 -->
                            <div class="filter-box hide" id="average-line">                       
                                <div class="filter-box-t">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>常规全场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>上半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>下半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>0-15分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>15-30分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>30-45分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>45-60分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>60-75分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>75-90分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>加时赛上</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>加时赛下</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="main-right f-r clearfix" id="first-lineup-position-main">
                            <div class="football-court left f-l">
                                <p class="title">主队4-4-2</p>
                                <!-- 主场阵型 -->
                                <div class="court"> 
                                    <ul class="forward two">
                                        <li>
                                            <span class="mvp"><em>111</em><b>范伟</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                    <ul class="midfielder">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <ul class="center four">
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                    <ul class="back four">
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                    <ul class="goalkeeper">
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                            <div class="football-court right f-r">
                                <p class="title">客队4-1-3-1 </p>
                                <!-- 主场阵型 -->
                                <div class="court away"> 
                                    <ul class="forward two">
                                        <li>
                                            <span><em>111</em><b>范伟</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                    <ul class="midfielder five">
                                        <li>
                                            <span><em>111</em><b>范伟</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                        <li>
                                            <span class="mvp"><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                    <ul class="center two">
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                    <ul class="back three">
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                        <li>
                                            <span><em>111</em><b>尼古拉斯-赵四</b></span>
                                        </li>
                                    </ul>
                                    <ul class="goalkeeper">
                                        <li>
                                            <span><em>111</em><b>罗纳尔多</b></span>
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                        </div>
                        <div class="main-right f-r clearfix hide" id="average-position-main">
                            <div class="football-court left f-l">
                                <p class="title">主队</p>
                                <!-- 主队平均站位 -->
                                <div class="court"> 
                                    <div id="div_title_position1" class="details_float"></div>
                                    <svg id="home-team-players-position" xmlns="http://www.w3.org/2000/svg" version="1.1" height="588px" width="396px"></svg>
                                </div>
                            </div>
                            <div class="football-court right f-r">
                                <p class="title">客队</p>
                                <!-- 客队平均站位 -->
                                <div class="court away">    
                                    <div id="div_title_position2" class="details_float"></div>  
                                    <svg id="away-team-players-position" xmlns="http://www.w3.org/2000/svg" version="1.1" height="588px" width="396px"></svg>              
                                </div>
                            </div>
                        </div>
                        <div class="main-right f-r clearfix hide" id="average-line-main">
                            <div class="football-court left f-l">
                                <p class="title">主队</p>
                                <!-- 主队均线 -->
                                <div class="court"> 
                                    <div class="attack-line line home">进攻平均线 = <span>0</span> 米</div>
                                    <div class="defend-line line home">防守平均线 = <span>0</span> 米</div>
                                </div>
                            </div>
                            <div class="football-court right f-r">
                                <p class="title">客队</p>
                                <!-- 客队均线 -->
                                <div class="court away"> 
                                    <div class="attack-line line away">进攻平均线 = <span>0</span> 米</div>
                                    <div class="defend-line line away">防守平均线 = <span>0</span> 米</div>                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 数据对比 -->
                    <div class="data-details-main clearfix hide" id="data-comparison">
                    
                        <div class="main-left f-l">
                            <div class="filter-box" id="first-lineup-position">
                                <div class="filter-box-t">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>主要</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>进攻</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>防守</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>定位球</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>传球</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>其他</span>
                                        </li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>全场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>上半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>下半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>加时上</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>加时下</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="main-right f-r clearfix ">
                            <div class="hedge-figure">
                                <p class="data-title">控球率</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">51%</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:51%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">49%</span>
                                </div>
                                <p class="data-title">射门</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">60</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:60%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">40</span>
                                </div>
                                <p class="data-title">射正</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">35</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:70%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">15</span>
                                </div>
                                <p class="data-title">红黄牌</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">10</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:40%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">15</span>
                                </div>
                                <p class="data-title">犯规</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">7</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:70%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">3</span>
                                </div>
                                <p class="data-title">射门成功率</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">60%</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:60%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">40%</span>
                                </div>
                                <p class="data-title">红黄牌</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">10</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:40%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">15</span>
                                </div>
                                <p class="data-title">犯规</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">7</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:70%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">3</span>
                                </div>
                                <p class="data-title">射门成功率</p>
                                <div class="data-bar clearfix">
                                    <span class="data-text f-l">60%</span>
                                    <div class="bar">
                                        <div class="bar-per" style="width:60%;"></div>
                                        <div class="scale-half"></div>
                                    </div>
                                    <span class="data-text f-r">40%</span>
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 数据项 -->
        <div class="data-module">
            <div class="bx clearfix">
                <div class="list-menu f-l">
                    <div class="title">数据项</div>
                    <ul class="lv1st-list">
                        <li class="lv1" data-value="attack">
                            <input class="lv1-check" type="checkbox" name="attack-all">进攻
                        </li>
                        <ul class="lv2nd-list attack">
                            <li>
                                <input class="lv2-check attack" value="1" name="attack" type="checkbox">进球
                            </li>
                            <li>
                                <input class="lv2-check attack" value="90" name="attack" type="checkbox">射正
                            </li>
                            <li>
                                <input class="lv2-check attack" value="500" name="attack" type="checkbox">射偏
                            </li>
                            <li>
                                <input class="lv2-check attack" value="8" name="attack" type="checkbox">射门被封堵
                            </li>
                            <li>
                                <input class="lv2-check attack" value="171" name="attack" type="checkbox" id="dribbles_check">过人
                            </li>
                            <li>
                                <input class="lv2-check attack" value="78" name="attack" type="checkbox">助攻
                            </li>
                            <li>
                                <input class="lv2-check attack" value="504" name="attack" type="checkbox">关键传球
                            </li>
                            <li>
                                <input class="lv2-check attack" value="411" name="attack" type="checkbox">绝对机会
                            </li>
                            <li>
                                <input class="lv2-check attack" value="410" name="attack" type="checkbox">直塞
                            </li>
                            <li>
                                <input class="lv2-check attack" value="9" name="attack" type="checkbox">传中
                            </li>
                            <li>
                                <input class="lv2-check attack" value="49" name="attack" type="checkbox">转移
                            </li>
                        </ul>
                        <li class="lv1" data-value="defend">
                            <input class="lv1-check" type="checkbox">防守
                        </li>
                        <ul class="lv2nd-list defend">
                            <li>
                                <input class="lv2-check defend" value="358" name="defend" type="checkbox" id="tackles_check">抢断
                            </li>
                            <li>
                                <input class="lv2-check defend" value="32" name="defend" type="checkbox">拦截
                            </li>
                            <li>
                                <input class="lv2-check defend" value="28" name="defend" type="checkbox">解围
                            </li>
                            <li>
                                <input class="lv2-check defend" value="205" name="defend" type="checkbox">封堵射门
                            </li>
                            <li>
                                <input class="lv2-check defend" value="204" name="defend" type="checkbox">封堵传球
                            </li>
                            <li>
                                <input class="lv2-check defend" value="502" name="defend" type="checkbox">守门员扑救
                            </li>
                            <li>
                                <input class="lv2-check defend" value="359" name="defend" type="checkbox">守门员出击
                            </li>
                            <li>
                                <input class="lv2-check defend" value="27" name="defend" type="checkbox">回抢
                            </li>
                        </ul>
                        <li class="lv1" data-value="set-pieces">
                            <input class="lv1-check" type="checkbox">定位球
                        </li>
                        <ul class="lv2nd-list set-pieces">
                            <li>
                                <input class="lv2-check set-pieces" value="2" name="set-pieces" type="checkbox">点球
                            </li>
                            <li>
                                <input class="lv2-check set-pieces" value="10" name="set-pieces" type="checkbox">任意球
                            </li>
                            <li>
                                <input class="lv2-check set-pieces" value="14" name="set-pieces" type="checkbox">角球
                            </li>
                            <li>
                                <input class="lv2-check set-pieces" value="19" name="set-pieces" type="checkbox">界外球
                            </li>
                            <li>
                                <input class="lv2-check set-pieces" value="17" name="set-pieces" type="checkbox">球门球
                            </li>
                
                        </ul>
                        <li class="lv1" data-value="passes">
                            <input class="lv1-check passes" type="checkbox">传球
                        </li>
                        <ul class="lv2nd-list passes">
                            <li>
                                <input class="lv2-check passes" value="47" name="check-passes" type="checkbox">长传
                            </li>
                            <li>
                                <input class="lv2-check passes" value="51" name="check-passes" type="checkbox">短传
                            </li>
                            <hr>
                            <li>
                                <input class="lv2-check passes" value="53" name="check-passes-action" type="checkbox">直传
                            </li>
                            <li>
                                <input class="lv2-check passes" value="55" name="check-passes-action" type="checkbox">斜传
                            </li>
                            <li>
                                <input class="lv2-check passes" value="57" name="check-passes-action" type="checkbox">横传
                            </li>
                            <li>
                                <input class="lv2-check passes" value="59" name="check-passes-action" type="checkbox">回传
                            </li>
                            <hr>
                            <li>
                                <input class="lv2-check passes" value="505" name="check-recive" type="checkbox" id="check_recive">接球
                            </li>
                        </ul>
                        <li class="lv1" data-value="fouls">
                            <input class="lv1-check" type="checkbox">犯规
                        </li>
                        <ul class="lv2nd-list fouls">
                            <li>
                                <input class="lv2-check fouls" value="62" name="fouls" type="checkbox">越位
                            </li>
                            <li>
                                <input class="lv2-check fouls" value="21" name="fouls" type="checkbox">犯规
                            </li>
                            <li>
                                <input class="lv2-check fouls" value="24" name="fouls" type="checkbox">黄牌
                            </li>
                            <li>
                                <input class="lv2-check fouls" value="25" name="fouls" type="checkbox">红牌
                            </li>
                        </ul>
                        <li class="lv1" data-value="duels">
                            <input class="lv1-check" type="checkbox">对抗
                        </li>
                        <ul class="lv2nd-list duels">
                            <li>
                                <input class="lv2-check duels" value="356" name="duels" type="checkbox">空中对抗
                            </li>
                            <li>
                                <input class="lv2-check duels" value="357" name="duels" type="checkbox" id="ground_duel">地面对抗
                            </li>
                        </ul>
                        <li class="lv1" data-value="other">
                            <input class="lv1-check" type="checkbox">其他
                        </li>
                        <ul class="lv2nd-list other">
                            <li>
                                <input class="lv2-check other" value="413" name="other" type="checkbox">头球
                            </li>
                            <li>
                                <input class="lv2-check other" value="412" name="other" type="checkbox">失误
                            </li>
                            <li>
                                <input class="lv2-check other" value="503" name="other" type="checkbox">球权转换
                            </li>
                        </ul>
                    </ul>
                    <div class="tactics-data">
                        <input type="button" value="战术数据">    
                    </div>                
                </div>
                <div class="data-main f-r clearfix">
                    <div class="home-player-list player-list f-l">
                        <div class="title">
                            <input type="checkbox" class="check-all-h">主队
                        </div>
                        <ul class="lv1st-list first-team-home">
                            <!-- <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li> -->
                        </ul>
                        <ul class="lv1st-list sub-home">
                            <!-- <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-h">球员
                            </li> -->
                        </ul>
                    </div>
                    <div class="data-main-c f-l">
                        <div class="football-court">
                            <div id="div_title_trace" class="details_float" style="margin-left: 371px; margin-top: 325px; display: none;">20 Yu Hanchao 38'39'' 关键传球</div>
                            <svg id="chalk-board" xmlns="http://www.w3.org/2000/svg" version="1.1" height="441px" width="655px"></svg>
                        </div>
                        <div class="time-filter-bar">
                            <div class="progress-bar">
                                <div class="slider-left slider" value="0">0</div>
                                <div class="slider-right slider" value="90+"></div>
                                <div class="inner-bar"></div>
                            </div>
                            <div class="scale-bar">
                                <div class="scale m45"></div>
                                <div class="scale m45plus"></div>
                                <div class="scale m90"></div>
                                <span class="zero">0</span>
                                <span class="half">45</span>
                                <span class="halfplus">45+</span>
                                <span class="ninety">90</span>
                                <span class="all">90+</span>
                                <span class="first-half">上半场</span>
                                <span class="second-half">下半场</span>
                            </div>
                        </div>
                        <div class="area-filter">
                            <div class="area-filter-box event-start">
                                <p>选择事件发生区域</p>
                                <ul class="area-start clearfix">
                                    <li class="all select"></li>
                                    <li class="left"></li>
                                    <li class="right"></li>
                                    <li class="center"></li>
                                    <li class="top"></li>
                                    <li class="bottom"></li>
                                    <li class="middle"></li>
                                </ul>
                            </div>
                            <div class="area-filter-box event-end disabled">
                                <p>选择事件结束区域</p>
                                <ul class="area-start clearfix">
                                    <li class="all select"></li>
                                    <li class="left"></li>
                                    <li class="right"></li>
                                    <li class="center"></li>
                                    <li class="top"></li>
                                    <li class="bottom"></li>
                                    <li class="middle"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="away-player-list player-list f-l">
                        <div class="title">
                            <input type="checkbox" class="check-all-a">客队
                        </div>
                        <ul class="lv1st-list first-team-away">
                            <!-- <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li> -->
                        </ul>
                        <ul class="lv1st-list sub-away">
                            <!-- <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li>
                            <li>
                                <input type="checkbox" class="check-a">球员
                            </li> -->
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <!-- 传球、进攻比例、进攻方式        数据项明细 -->
        <div class="data-details">
            <div class="bx">
                <div class="tab-bar">
                    <ul class="clearfix" id="tab2">
                        <li class="f-l tab-selected" data-value="pass">传球</li>
                        <li class="f-l" data-value="attack-percentage">进攻比例</li>
                        <li class="f-l" data-value="attack-way">进攻方式</li>
                    </ul>
                    <!-- 传球 -->
                    <div class="data-details-main clearfix" id="pass">
                        <div class="main-left f-l">
                            <div class="data-type-tab" id="tab21">
                                <ul class="clearfix">
                                    <li class="f-l type-selected" data-value="pass-ctrl-network">
                                        <a href="javascript:;">传控网络</a>
                                        <b class="triangle"></b>
                                    </li>
                                    <li class="f-l" data-value="pass-analyze">
                                        <a href="javascript:;">传球分析</a>
                                        <b class="triangle"></b>
                                    </li>
                                </ul>
                            </div>
                            <div class="filter-box">
                                <!-- 传控网络 -->
                                <div class="filter-box-t" id="pass-ctrl-network-filter">
                                    <ul class="clearfix">
                                        <li class="f-l viewType select" value="1">
                                            <i></i>
                                            <span>只看首发</span>
                                        </li>
                                        <li class="f-l viewType" value="2">
                                            <i></i>
                                            <span>看全部球员</span>
                                        </li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li class="f-l lineType select" name="lineType" value="1">
                                            <i></i>
                                            <span>所有传球</span>
                                        </li>
                                        <li class="f-l lineType" name="lineType" value="2">
                                            <i></i>
                                            <span>2次以上传球</span>
                                        </li>
                                        <li class="f-l lineType" name="lineType" value="5">
                                            <i></i>
                                            <span>5次以上传球</span>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 传球分析 -->
                                <div class="filter-box-t hide" id="pass-analyze-filter">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>查看主队</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>查看客队</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="passing-count">
                                <div class="title">传球统计</div>
                                <div class="home-team-count team-count clearfix">
                                    <span>主队</span>
                                    <div class="count-bar f-l">
                                        <div class="team-pass-per"></div>
                                    </div>
                                    <span class="num">213/600(67%)</span>
                                </div>
                                <div class="away-team-count team-count">
                                    <span>客队</span>
                                    <div class="count-bar f-l">
                                        <div class="team-pass-per"></div>
                                    </div>
                                    <span class="num">213/600(67.55%)</span>
                                </div>
                            </div>
                            <div class="main-left-b" id="pass-ctrl-network-table">
                                <div class="data-type-tab" id="home-or-away">
                                    <ul class="clearfix">
                                        <li class="f-l type-selected">
                                            <a href="javascript:;">主队</a>
                                            <b class="triangle"></b>
                                        </li>
                                        <li class="f-l">
                                            <a href="javascript:;">客队</a>
                                            <b class="triangle"></b>
                                        </li>
                                    </ul>
                                </div>
                                <table class="count-table">
                                    <thead>
                                        <tr>
                                            <th>传球最多</th>
                                            <th>总数</th>
                                            <th>成功</th>
                                            <th>成功率</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>1</span>孔芮</td>
                                            <td>500</td>
                                            <td>500</td>
                                            <td>40%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>2</span>孔芮</td>
                                            <td>1100</td>
                                            <td>500</td>
                                            <td>40%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>3</span>孔芮</td>
                                            <td>50000</td>
                                            <td>50000</td>
                                            <td>40%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="count-table group">
                                    <thead>
                                        <tr>
                                            <th>传球最多组合</th>
                                            <th></th>
                                            <th></th>
                                            <th>总数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>1</span>孔芮 - 鲁哈</td>
                                            <td style="background-color: #35aae5;pointer-events: none;"></td>
                                            <td></td>
                                            <td>40%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>2</span>孔芮 - 鲁哈</td>
                                            <td></td>
                                            <td></td>
                                            <td>40%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>3</span>孔芮 - 鲁哈</td>
                                            <td></td>
                                            <td></td>
                                            <td>40%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="main-left-b hide" id="pass-analyze-table">
                                <div class="wrapper">
                                    <div id="continuity_pass_chart"></div>                      
                                </div>
                            </div>

                        </div>
                        <div class="main-right f-r clearfix" id="pass-ctrl-network-main">
                            <div class="football-court left f-l">
                                <p class="title">主队</p>
                                <div class="court">
                                    <!-- <div id="div_network_home_title_position" class="details_float"></div>   -->
                                    <svg id="svg_pass_network_home_trace" xmlns="http://www.w3.org/2000/svg" version="1.1" height="588px" width="396px"></svg>
                                </div>
                            </div>
                            <div class="football-court right f-r">
                                <p class="title">客队</p>
                                <div class="court">
                                    <svg id="svg_pass_network_away_trace" xmlns="http://www.w3.org/2000/svg" version="1.1" height="588px" width="396px"></svg>
                                </div>
                            </div>
                        </div>
                        <div class="main-right f-r clearfix hide" id="pass-analyze-main">
                            <table id="passingCount">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>
                                            <span>11. 卡洛斯 特维斯</span</th>
                                                <th>
                                                    <span>11. 名字特别长的话的10个字</span>
                                                </th>
                                                <th>
                                                    <span>11. 实在说如果太多的话那就…</span>
                                                </th>
                                                <th>
                                                    <span>Richardson Patters Law</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                                <th>
                                                    <span>11. 卡洛斯 特维斯</span>
                                                </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="pointer-events:none;">11. 卡洛斯 特维斯</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">实在说如果太多的话那就…</td>
                                        <td>111</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td style="opacity:0.3;pointer-events:none;">0</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="opacity:0.3;pointer-events:none;">0</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="opacity:0.3;pointer-events:none;">0</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td style="opacity:0.3;pointer-events:none;">0</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td style="opacity:0.3;pointer-events:none;">0</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td style="opacity:0.3;pointer-events:none;">0</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                        <td>222</td>
                                    </tr>
                                    <tr>
                                        <td style="pointer-events:none;">11. 名字特别长的话的10个字</td>
                                        <td>111</td>
                                        <td>222</td>
                                        <td>333</td>
                                        <td>222</td>
                                        <td>211</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td style="background-color: #35aae5;pointer-events: none;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- 进攻比例 -->
                    <div class="data-details-main clearfix hide" id="attack-percentage">
                        <div class="main-left f-l">
                            <div class="data-type-tab" id="tab22">
                                <ul class="clearfix">
                                    <li class="f-l type-selected" data-value="attack-area">
                                        <a href="javascript:;">进攻区域</a>
                                        <b class="triangle"></b>
                                    </li>
                                    <li class="f-l" data-value="half-ctrl-percentage">
                                        <a href="javascript:;">半场控球比</a>
                                        <b class="triangle"></b>
                                    </li>
                                    <li class="f-l" data-value="three-area-percentage">
                                        <a href="javascript:;">三区控球比</a>
                                        <b class="triangle"></b>
                                    </li>
                                </ul>
                            </div>
                            <div class="filter-box">
                                <!-- 进攻区域 -->
                                <div class="filter-box-t" id="attack-area-filter">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>两队</span>
                                        </li>
                                        <li class="f-l disabled">
                                            <i></i>
                                            <span>只看主队</span>
                                        </li>
                                        <li class="f-l disabled">
                                            <i></i>
                                            <span>只看客队</span>
                                        </li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>常规区域</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>上半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>下半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>0-15分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>15-30分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>30-45分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>45-60分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>60-75分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>75分钟-结束</span>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 半场控球比 -->
                                <div class="filter-box-t hide" id="half-ctrl-percentage-filter">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>两队</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>只看主队</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>只看客队</span>
                                        </li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>常规区域</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>上半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>下半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>0-15分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>15-30分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>30-45分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>45-60分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>60-75分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>75分钟-结束</span>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 三区控球比 -->
                                <div class="filter-box-t hide" id="three-area-percentage-filter">
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>两队</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>只看主队</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>只看客队</span>
                                        </li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li class="f-l select">
                                            <i></i>
                                            <span>常规区域</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>上半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>下半场</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>0-15分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>15-30分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>30-45分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>45-60分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>60-75分钟</span>
                                        </li>
                                        <li class="f-l">
                                            <i></i>
                                            <span>75分钟-结束</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="main-right f-r" id="attack-area-main">
                            <div class="title">进攻区域比例 - 两队 - 常规全场</div>
                            <div class="football-court-horizontal">
                                <span class="home-left">50%</span>
                                <span class="home-center">50%</span>
                                <span class="home-right">50%</span>
                                <span class="away-left">10%</span>
                                <span class="away-center">10%</span>
                                <span class="away-right">10%</span>
                            </div>
                            <div class="newpossession_bar_box">
                                <div class="home-team-logo logo"></div>
                                <div class="newpossession_bar">
                                    <p>控球率</p>
                                    <div id="possession_home" class="newpossession_bar_left newpossession_bar" style="width: 50.6%;">
                                        <span>50.6%</span>
                                        <div class="scale"></div>
                                    </div>
                                    <div id="possession_guest" class="newpossession_bar_right newpossession_bar" style="width: 49.4%;">
                                        <span>49.4%</span>
                                    </div>
                                </div>
                                <div class="away-team-logo logo"></div>
                            </div>
                        </div>
                        <div class="main-right half-ctrl-percentage f-r clearfix hide" id="half-ctrl-percentage-main">
                            <div class="title">半场控球比例 - 两队 - 常规全场</div>
                            <div class="football-court-horizontal">
                                <div id="bfDiv1" class="court_bg2_data1">主队</div>
                                <div id="bfDiv2" class="court_bg2_data2">客队</div>
                                <div id="bfDiv3" class="court_bg2_column1" style="height: 28.2%;">
                                    <p>前场28.2%</p>
                                </div>
                                <div id="bfDiv4" class="court_bg2_column2" style="height: 18.2%;">
                                    <p>后场18.2%</p>
                                </div>
                                <div id="bfDiv5" class="court_bg2_column3" style="height: 27.4%;">
                                    <p>前场27.4%</p>
                                </div>
                                <div id="bfDiv6" class="court_bg2_column4" style="height: 26.2%;">
                                    <p>后场26.2%</p>
                                </div>
                            </div>
                            <div class="newpossession_bar_box">
                                <div class="home-team-logo logo"></div>
                                <div class="newpossession_bar">
                                    <p>控球率</p>
                                    <div id="possession_home" class="newpossession_bar_left newpossession_bar" style="width: 50.6%;">
                                        <span>50.6%</span>
                                        <div class="scale"></div>
                                    </div>
                                    <div id="possession_guest" class="newpossession_bar_right newpossession_bar" style="width: 49.4%;">
                                        <span>49.4%</span>
                                    </div>
                                </div>
                                <div class="away-team-logo logo"></div>
                            </div>
                        </div>
                        <div class="main-right three-area-percentage f-r clearfix hide" id="three-area-percentage-main">
                            <div class="title">三区控球比例 - 两队 - 常规全场</div>
                            <div class="football-court-horizontal">
                                <div id="lmrDiv1" class="court_bg3_data1">26.4%</div>
                                <div id="lmrDiv2" class="court_bg3_data2">39.0%</div>
                                <div id="lmrDiv3" class="court_bg3_data3">34.6%</div>
                                <div id="lmrDiv4" class="court_bg3_column1" style="height: 16.3%;">
                                    <p>16.3%</p>
                                </div>
                                <div id="lmrDiv5" class="court_bg3_column2" style="height: 10.1%;">
                                    <p>10.1%</p>
                                </div>
                                <div id="lmrDiv6" class="court_bg3_column3" style="height: 22.6%;">
                                    <p>22.6%</p>
                                </div>
                                <div id="lmrDiv7" class="court_bg3_column4" style="height: 16.4%;">
                                    <p>16.4%</p>
                                </div>
                                <div id="lmrDiv8" class="court_bg3_column5" style="height: 16.7%;">
                                    <p>16.7%</p>
                                </div>
                                <div id="lmrDiv9" class="court_bg3_column6" style="height: 18%;">
                                    <p>18.0%</p>
                                </div>
                            </div>
                            <div class="newpossession_bar_box">
                                <div class="home-team-logo logo"></div>
                                <div class="newpossession_bar">
                                    <p>控球率</p>
                                    <div id="possession_home" class="newpossession_bar_left newpossession_bar" style="width: 50.6%;">
                                        <span>50.6%</span>
                                        <div class="scale"></div>
                                    </div>
                                    <div id="possession_guest" class="newpossession_bar_right newpossession_bar" style="width: 49.4%;">
                                        <span>49.4%</span>
                                    </div>
                                </div>
                                <div class="away-team-logo logo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 球员数据明细 -->
        <div class="player-modal bx">
            <div class="modal-head">
                <div class="season filter clearfix">
                    <span>球队：</span>
                    <ul>
                        <li>
                            <a class="active" href="javascript:;">主队</a>
                        </li>
                        <li>
                            <a href="javascript:;">客队</a>
                        </li>
                    </ul>
                </div>
                <div class="data filter">
                    <span>数据分类：</span>
                    <ul>
                        <li>
                            <a class="active" href="javascript:;">基本</a>
                        </li>
                        <li>
                            <a href="javascript:;">主场</a>
                        </li>
                        <li>
                            <a href="javascript:;">客场</a>
                        </li>
                    </ul>
                </div>
            </div>
            <table class="players-table" id="players-table-match">
                <thead>
                    <tr>
                        <th>
                            <a href="javascript:;" data-value="1" name="num">号码</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="2" name="">信息
                                <b>一二三四五六七八九</b>
                            </a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="3" name="matchCount">出场次数</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="4" name="matchTime">出场时间</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="5" name="goal">进球</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="6" name="xG">xG</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="7" name="assist">助攻</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="8" name="keyPass">关键传球</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="9" name="pass">传球</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="10" name="passSuccessRate">传球成功率</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="11" name="averageScore">平均评分</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="12" name="nearestFiveTimeAvScore">近5场评分</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="13" name="nearestFiveTimeAvScore">近5场评分</a>
                        </th>
                        <th>
                            <a href="javascript:;" data-value="14" name="nearestFiveTimeAvScore">传球</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr data-value="1">
                        <td>
                            <a href="javascript:;" data-value="1">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">90</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">10%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="2">
                        <td>
                            <a href="javascript:;" data-value="1">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">100</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">20%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="3">
                        <td>
                            <a href="javascript:;" data-value="1">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">5</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">80</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">50%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="4">
                        <td>
                            <a href="javascript:;" data-value="1">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">40%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="5">
                        <td>
                            <a href="javascript:;" data-value="1">5</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">60%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="6">
                        <td>
                            <a href="javascript:;" data-value="1">6</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">10%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="7">
                        <td>
                            <a href="javascript:;" data-value="1">7</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">20%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="8">
                        <td>
                            <a href="javascript:;" data-value="1">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">40%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="9">
                        <td>
                            <a href="javascript:;" data-value="1">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">30%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="10">
                        <td>
                            <a href="javascript:;" data-value="1">10</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">20%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="13">2</a>
                        </td>
                    </tr>
                    <tr data-value="11">
                        <td>
                            <a href="javascript:;" data-value="1">11</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="2">
                                <p class="name">一二三四五六七八九十一二</p>
                                <p class="position">前峰</p>
                            </a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="3">1</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="4">60</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="5">0</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="6">2</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="7">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="8">3</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="9">4</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="10">10%</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="11">9</a>
                        </td>
                        <td>
                            <a href="javascript:;" data-value="12">8</a>
                        </td>
                        <td>
                                <a href="javascript:;" data-value="13">2</a>
                            </td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>


// import CommonHeader from './CommonHeader'
// import NavBar from './NavBar'
// import CommonFooter from './CommonFooter'
export default {
  name: 'match',
  data () {
    return {
        
    }
  },
  components: {
    // CommonHeader,
    // NavBar,
    // CommonFooter
  }
}
</script>

<style lang="less" scoped>
.match-info-board { /*比赛信息板*/
    .bx {
        .board-main {
            width: 1200px;
            // height: 628px;
            margin: 36px 0;
            background: url("../assets/images/board_bg.png");
            background-size: cover;
            padding-top: 28px;
            color: #fff;
            background-color: none;
            .board-top {
                width: 967px;
                // height: 400px; //
                // background-color: pink;
                margin: 0 auto;
                text-align: center;
                position: relative;
                >.team {
                    width: 172px;
                    // background-color: aqua;
                    // position: absolute;
                    display: inline-block;
                    .team-avatar {
                        width: 100%;
                        height: 140px; 
                        .team-logo {
                            width: 90px;
                            height: 90px;
                            background:url("../assets/images/gzhd1.png") no-repeat;
                            background-size: 90px;
                            background-position: center center;
                            margin: 0 auto;
                        }
                        >h3 {
                            height: 49px;
                            line-height: 49px;
                            font-size: 18px;
                            text-align: center;
                        }
                    }
                    .events {
                        padding: 2px 0;
                        border-top: 1px dashed #fff;
                        >li {
                            height: 17px;
                            line-height: 17px;
                            font-size: 12px;
                            margin: 10px 10px;
                            vertical-align: middle;
                            >span,i {
                                float: right;
                                margin: 0 3px;
                            }
                            >i {
                                width: 10px;
                                height: 17px;
                                background-color: red;
                                vertical-align: middle;
                            }
                            .goal {
                                background: url("../assets/images/goal_trans.png") no-repeat;
                                background-size: 10px;
                                background-position: center center;
                            }
                            .yellow-card {
                                background: url("../assets/images/yellow_card.png") no-repeat;
                                background-size: 10px;
                                background-position: center center;
                            }
                            .red-card {
                                background: url("../assets/images/red_card.png") no-repeat;
                                background-size: 10px;
                                background-position: center center;
                            }
                            .yellow-to-red {
                                background: url("../assets/images/2yellow1red.png") no-repeat;
                                background-size: 10px;
                                background-position: center center;
                            }
                            .penalty-kick-no {
                                background: url("../assets/images/penalty_kick_no.png") no-repeat;
                                background-size: 10px;
                                background-position: center center;
                            }
                            .penalty-kick-yes {
                                background: url("../assets/images/penalty_kick_yes.png") no-repeat;
                                background-size: 10px;
                                background-position: center center;
                            }
                        }
                    }
                }
                .board-t-l {
                    float: left;
                }
                .board-t-r {
                    float: right;
                    .events {
                        >li {
                            >span,i {
                                float: left;
                            }
                        }
                    }
                }
                .board-t-c {
                    display: inline-block;
                    width: 361px;
                    // height: 400px;
                    margin: 0 auto;
                    padding-top: 6px;
                    .match-round {
                        width: 262px;
                        height: 40px;
                        margin: 0 auto 13px;
                        >p {
                            font-size: 14px;
                            text-align: center;
                        }
                    }
                    >.match-result {
                        height: 69px;
                        border-top: 1px solid #fff;
                        border-bottom: 1px solid #fff;  
                        position: relative;
                        .score {
                            height: 69px;
                            line-height: 69px;
                            font-size: 40px;
                            position: absolute;
                            margin: 0 5px;
                            >span {
                                display: inline-block;
                                height: 69px;
                            }
                            .penalty-kick-score {
                                display: inline-block;
                                width: 56px;
                                height: 69px;
                                text-align: center;
                                font-size: 30px!important;
                            }
                        }
                        .normal-score {
                            margin: 0 5px;
                        }
                        .home-score {
                            left: 0;
                            top:0;
                            >span {
                               float: left;
                            }
                        }
                        .away-score {
                            right: 0;
                            top:0;
                            >span {
                                float: right;
                            }
                        }
                        .line {
                            height: 69px;
                            line-height: 69px;                        
                            text-align: center;
                        }
                    }
                    .match-status {
                        font-size: 30px;
                        height: 42px;
                        line-height: 42px;
                        text-align: center;
                        margin-top: 12px;
                    }
                }
            }
            .time-title {
                width: 23px;
                height: 38px;
                margin: 27px auto 0;
                border-top:1px solid #fff;
                border-bottom:1px solid #fff;
                position: relative;
                >p {
                    width: 100px;
                    font-size: 14px;
                    line-height: 38px;
                    position: absolute;
                    top:0;
                    left: 50%;
                    margin-left: -50px;
                    text-align: center;
                }
            }
            .time-shaft {
                height: 117px;
                width: 1200px;
                margin-top: 18px;
                background-color: rgba(0, 0, 0, 0.2);
                padding: 18px 137.5px;
                position: relative;
                .logo-mini {
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    left: 137.5px;
                }
                .home-logo-mini {
                    top: 18px;
                    background:url("../assets/images/gzhd.png") no-repeat;
                    background-size: 30px;
                    background-position: center center;
                }
                .away-logo-mini {
                    bottom: 18px;
                    background:url("../assets/images/gzhd.png") no-repeat;
                    background-size: 30px;
                    background-position: center center;
                }
                .time-shaft-bar {
                    width: 883px;
                    height: 8px;
                    border: 1px solid #fff;
                    background-color: #fff;
                    position: absolute;
                    left: 179.5px;
                    top:50%;
                    margin-top: -4px;
                    >div {
                        border-right: 20px solid #4a5266;
                        float: left;
                        position: relative;
                        >span { 
                            position: absolute;
                            width: 20px;
                            height: 8px;
                            right:-20px;
                            top:-1px;
                            cursor: pointer;
                            >b {
                                display: none;
                                font-size: 12px;
                                padding:5px;
                                background: #fff;
                                color: #464646;
                                border-radius: 2px;
                                white-space:nowrap;
                                box-shadow: 0px 0px 4px #000;
                                position: absolute;
                                left:-4px;
                                bottom: 30px;
                                >i {
                                    display: block;
                                    width: 0;
                                    height: 0;
                                    border-width: 8px 8px;
                                    border-style: solid;
                                    border-bottom-color: transparent;
                                    border-top-color: #fff;
                                    border-left-color: transparent;
                                    border-right-color: transparent;
                                    position: absolute;
                                    left: 6px;
                                    bottom: -16px;
                                }
                            }
                        }
                        >span:hover {
                            >b {
                                display: block;
                            }
                        }
                    }
                    // .first-half {
                    //     width: 50%;
                    // }
                    // .second-half {
                    //     width: 50%;
                    // }
                    .team-events {
                        height: 18px;
                        width: 883px;
                        // background-color: pink;
                        position: absolute;
                        left: -1px;
                        > li:hover {
                            >span {
                                display: block;
                            }
                        }
                        >.goal {
                            width: 14px;
                            height: 14px;
                            background: url("../assets/images/goal_trans.png") no-repeat;  
                            background-size: cover;  
                            margin-left: -7px;                    
                        }
                        >.yellow-card {
                            width: 12px;
                            height: 17px;
                            background: url("../assets/images/yellow_card.png") no-repeat;  
                            background-size: cover;  
                            margin-left: -6px;          
                        }
                        >.red-card {
                            width: 12px;
                            height: 17px;
                            background: url("../assets/images/red_card.png") no-repeat;  
                            background-size: cover;  
                            margin-left: -6px;           
                        }
                        .yellow-to-red {
                            width: 12px;
                            height: 17px;
                            background: url("../assets/images/2yellow1red.png") no-repeat;  
                            background-size: cover;  
                            margin-left: -6px;       
                        }
                        .substitute {
                            width: 9px;
                            height: 18px;
                            background: url("../assets/images/substitute.png") no-repeat;  
                            background-size: 9px 18px;  
                            margin-left: -4.5px;       
                        }
                        .penalty-kick-success {
                            width: 14px;
                            height: 14px;
                            background: url("../assets/images/penalty_kick_yes.png") no-repeat;  
                            background-size: cover;  
                            margin-left: -7px; 
                        }
                        .penalty-kick-failure {
                            width: 14px;
                            height: 14px;
                            background: url("../assets/images/penalty_kick_no.png") no-repeat;  
                            background-size: cover;  
                            margin-left: -7px; 
                        }
                    }
                    .home-team-events {
                        top: -24px;
                        bottom: 0;
                        >li {                    
                            position: absolute;
                            cursor: pointer;
                            >span {
                                padding:5px 5px;
                                position: absolute;
                                left:-10px;
                                bottom: 30px;
                                font-size: 12px;
                                color: #464646;
                                background-color: #fff;
                                border-radius: 2px;
                                white-space:nowrap;
                                box-shadow: 0px 0px 4px #000;
                                display: none;
                                >b {
                                    display: block;
                                    width: 0;
                                    height: 0;
                                    border-width: 8px 8px;
                                    border-style: solid;
                                    border-bottom-color: transparent;
                                    border-top-color: #fff;
                                    border-left-color: transparent;
                                    border-right-color: transparent;
                                    position: absolute;
                                    left: 8px;
                                    bottom: -16px;
                                }
                            }                       
                        }
                        .goal {
                            left: 40%;
                        }
                        #goal1 {
                            left:41%;
                        }
                        .yellow-card {
                            left:51%;
                        }
                        .red-card {
                            left: 54%;
                        }
                        .yellow-to-red {
                            left: 60%;
                        }
                    }
                    .away-team-events {
                        bottom: -24px;
                        // background-color: blue;
                        >li {                    
                            position: absolute;
                            top: 0;
                            cursor: pointer;
                            >span {
                                padding:5px 5px;
                                position: absolute;
                                left:-10px;
                                top: 30px;
                                font-size: 12px;
                                color: #464646;
                                background-color: #fff;
                                border-radius: 2px;
                                white-space:nowrap;
                                box-shadow: 0px 0px 4px #000;
                                display: none;
                                >b {
                                    display: block;
                                    width: 0;
                                    height: 0;
                                    border-width: 8px 8px;
                                    border-style: solid;
                                    border-bottom-color: #fff;
                                    border-top-color: transparent;
                                    border-left-color: transparent;
                                    border-right-color: transparent;
                                    position: absolute;
                                    left: 9px;
                                    top: -16px;
                                }
                            }                       
                        }
                        .goal {
                            left: 65%;
                        }
                        .substitute {
                            left:63%;
                            b {
                                left:6px;
                            }
                        }
                        .penalty-kick-success {
                            left: 92%;
                        }
                        .penalty-kick-failure {
                            left: 94%;
                        }
                    }
                }
                .normal {
                    .half {
                        height: 6px;
                        width: 50%;
                    }
                }
                .injury-time {
                    .half {
                        height: 6px;
                        width: 40%;
                    }
                    .injury {
                        height: 6px;
                        width: 10%;
                    }
                }
                .penalty-kick {
                    .half {
                        height: 6px;
                        width: 35%;
                    }
                    .injury {
                        height: 6px;
                        width: 10%;
                    }
                    .penalty {
                        height: 6px;
                        width: 10%;
                    }
                }
            }
        }
    }
}

.data-module { /*数据项*/
    .bx {
        height: 670px;
        background-color: #fff;
        margin-bottom: 42px;
        .list-menu {
            height: 670px;
            width: 182px;
            background-color: #f2f2f2;
            padding: 0 9px;
            position: relative;
            .title {
                height: 56px;
                line-height: 56px;
                font-size: 14px;
                padding-left: 6px;
                font-weight: 600;
            }
            .lv1st-list {
                border-top: 1px solid #c4c4c4;
                height: 613px;
                overflow: auto;
                padding-bottom: 50px;
                >li {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    padding-left: 6px;
                    margin: 14px 0;

                    >input {
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                        margin-right: 10px;
                        padding-left: 10px;
                    
                    }
                    
                }
                li:hover {
                    background-color: #ccc;
                }
                .lv2nd-list {
                    display: none;
                    >li {
                        height: 17px;
                        line-height: 17px;
                        font-size: 12px;
                        margin: 12px 0;
                        padding-left: 16px;
                        >input {
                            width: 14px;
                            height: 14px;
                            vertical-align: text-bottom;
                            margin-right: 10px;
                            padding-left: 10px;
 
                        }
                    }
                }
                
            }
            .tactics-data {
                background-color: #f2f2f2;
                width: 147px;
                height: 50px;
                position: absolute;
                left:0;
                bottom:0;
                >input {
                    width: 112px;
                    height: 30px;
                    font-size: 16px;
                    color: #fff;
                    border-radius: 5px;
                    position: absolute;
                    left: 35px;
                    top:10px;
                    background-color:#35aae5; 
                    cursor: pointer;
                }
            }
        }
        .data-main {
            height: 670px;
            width: 1018px;
            background-color: #fff;
            .player-list {
                width: 176px;
                height: 670px;      
                padding: 0 12px; 
                overflow: auto;
                .title {
                    height: 56px;
                    line-height: 56px;
                    font-size: 14px;
                    padding-left: 6px;
                    >input {
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                        margin-right: 10px;
                        padding-left: 10px;         
                    }
                }  
                .lv1st-list {
                    border-top: 1px solid #c4c4c4;
                    >li {
                        height: 20px;
                        line-height: 20px;
                        font-size: 14px;
                        padding-left: 6px;
                        margin: 14px 0;
    
                        >input {
                            width: 14px;
                            height: 14px;
                            vertical-align: middle;
                            margin-right: 10px;
                            padding-left: 10px;
                        
                        }
                        
                    }
                    li:hover {
                        background-color: #ccc;
                    }
                    .lv2nd-list {
    
                        >li {
                            height: 17px;
                            line-height: 17px;
                            font-size: 12px;
                            margin: 12px 0;
                            padding-left: 16px;
                            >input {
                                width: 14px;
                                height: 14px;
                                vertical-align: text-bottom;
                                margin-right: 10px;
                                padding-left: 10px;
     
                            }
                        }
                    }
                    
                }
            }
            .data-main-c {
                width: 666px;
                height: 670px;
                background-color: #f2f2f2;
                .football-court {
                    width: 655px;
                    height: 441px;
                    background: url("../assets/images/football_court.png") no-repeat;
                    background-size: 655px;
                    margin: 10px auto 0;
                    font-size: 12px;
                    >.details_float {
                        background-color: #FFF;
                        color: #333;
                        padding: 2px 8px;
                        border: 1px #eee solid;
                        position: absolute;
                        display: none;
                        border-radius: 4px;
                    }
                }
                .time-filter-bar {
                    width: 600px;
                    height: 43px;
                    // background-color: pink;
                    margin: 11px auto 0;
                    padding-top: 5px;
                    .progress-bar {
                        width: 600px;
                        height: 8px;
                        background-color: #fff;
                        margin: 0 auto;
                        position: relative;
                        .slider {
                            width: 20px;
                            height: 20px;
                            border-radius: 10px;
                            background-color: #fff;
                            border: 1px solid #35aae5;
                            position: absolute;
                            top: 4px;
                            z-index: 1;
                            font-size: 12px;
                            text-align: center;
                            line-height: 18px;
                            cursor: pointer;
                        }
                        .slider-left {
                            left:-10px;
                            margin-top: -10px;
                        }
                        .slider-right {
                            right:-10px;
                            margin-top: -10px;
                        }
                        .focus {
                            background-color: #35aae5;
                        }
                        .inner-bar {
                            height: 8px;
                            left:0px;
                            right: 0px;
                            position: absolute;
                            background-color: #35aae5;
                        }
                    }
                    .scale-bar {
                        width: 602px;
                        height: 8px;
                        background-color: none;
                        margin: 0 auto;
                        border-left: 2px solid #c4c4c4;
                        border-right: 2px solid #c4c4c4;
                        margin-left: -1px;
                        position: relative;
                        .scale {
                            width: 50%;
                            height: 8px;
                            border-right: 2px solid #c4c4c4;
                            position: absolute;
                            left: 2px;
                            top: 0;
                        }
                        .m45 {
                            width: 45%;
                        }
                        .m45plus {
                            width:50%;
                        }
                        .m90 {
                            width: 95%;
                        }
                        >span {
                            font-size: 12px;
                            position: absolute;
                            top:10px;
                        }
                        .zero {
                            left:-4px;
                        }
                        .half {
                            left:270px;
                            margin-left: -7px;
                        }
                        .halfplus {
                            left:297px;
                            margin-left: -7px;
                        }
                        .ninety {
                            left:95%;
                            margin-left: -7px;
                        }
                        .all {
                            left:100%;
                            margin-left: -7px;
                        }
                        .first-half {
                            left:25%;
                            margin-left: -18px;
                            cursor: pointer;
                        }
                        .second-half {
                            left:75%;
                            margin-left: -18px;
                            cursor: pointer;
                        }
                    }
                }
                .area-filter {
                    width: 575px;
                    height: 155px;
                    border-top: 1px solid #e3e3e3;
                    margin: 8px auto 0;
                    padding-top: 10px;
                    .area-filter-box {
                        width: 575px;
                        height: 55px;  
                        >p {
                            font-size: 12px;
                            height: 17px;
                            line-height: 17px;
                        }  
                        >ul {
                            height: 30px;
                            margin-top: 8px;
                            >li {
                                float: left;
                                width: 50px;
                                height: 30px;
                                margin-right: 37px;
                                cursor: pointer;
                            }
                            >li:last-child {
                                margin-right: 0;
                            }
                            .all {
                                background: url("../assets/images/all-n.png");
                            }
                            .all.select {
                                background: url("../assets/images/all-s.png");
                            }
                            .left {
                                background: url("../assets/images/left-n.png");
                            }
                            .right {
                                background: url("../assets/images/right-n.png");
                            }
                            .center {
                                background: url("../assets/images/center-n.png");
                            }
                            .top {
                                background: url("../assets/images/top-n.png");
                            }
                            .bottom {
                                background: url("../assets/images/bottom-n.png");
                            }
                            .middle {
                                background: url("../assets/images/middle-n.png");
                            }
                            .left.select {
                                background: url("../assets/images/left-s.png");
                            }
                            .right.select {
                                background: url("../assets/images/right-s.png");
                            }
                            .center.select {
                                background: url("../assets/images/center-s.png");
                            }
                            .top.select {
                                background: url("../assets/images/top-s.png");
                            }
                            .bottom.select {
                                background: url("../assets/images/bottom-s.png");
                            }
                            .middle.select {
                                background: url("../assets/images/middle-s.png");
                            }
                        }                 
                    }
                    .event-start {
                        margin-bottom: 19px;
                    }
                    .event-end {
                        margin-bottom: 0;
                    }
                    .event-end.disabled,.event-end.disabled {
                        >p {
                            color: #dcdcdc;
                        }
                        >ul {
                            opacity: 1;
                            >li {
                                cursor: default;
                            }
                            .all {
                                background: url("../assets/images/all-d.png");
                            }
                            .left {
                                background: url("../assets/images/left-d.png");
                            }
                            .right {
                                background: url("../assets/images/right-d.png");
                            }
                            .center {
                                background: url("../assets/images/center-d.png");
                            }
                            .top {
                                background: url("../assets/images/top-d.png");
                            }
                            .bottom {
                                background: url("../assets/images/bottom-d.png");
                            }
                            .middle {
                                background: url("../assets/images/middle-d.png");
                            }
                        }
                    } 
                }
            }
        }
    }
}

.data-details { /*数据项明细*/
    .bx {
        height: 708px;
        margin-bottom: 42px;
        .tab-bar {
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
        .data-details-main {
            background-color: #fff;
            height: 660px;
            position: relative;
            .main-left {
                width: 356px;
                height: 660px;
                padding: 6px 7px 0 14px;
                .data-type-tab {
                    ul {
                        padding-top: 11px;
                        border-bottom: 5px solid #e3e3e3;
                        li {
                            height: 34px;
                            width:50%;
                            border-right: 1px solid #f2f2f2;
                            cursor: pointer;
                            position: relative;
                            >a {
                                display: block;
                                height: 24px;
                                line-height: 24px;
                                font-size: 12px;
                                text-align: center;
                            }
                        }
                        li:last-child {
                            border-right: none;
                        }
                        .type-selected {
                            > a {                              
                                font-weight: 700;
                            }
                            > b {
                                display: block;
                                width: 0;
                                height: 0;
                                border-width:0 8px 8px;
                                border-style:solid;
                                border-bottom-color:#e3e3e3;
                                border-top-color:transparent;
                                border-left-color:transparent;
                                border-right-color:transparent;
                                position: absolute;
                                left: 76px;
                                bottom:0;
                               
                            }
                        }
                    }
                }
                #tab22 {
                    ul {
                        li {
                            width: 33.33%;
                        }
                        .type-selected {
                            > b {
                                left: 46px;           
                            }
                        }
                    }
                }
                .filter-box {
                    width: 100%;
                    height: 199px;
                    border-bottom: solid 5px #858585;
                    .filter-box-t {
                        >ul {
                            width: 100%;
                            padding: 12px 10px;
                            border-bottom: solid 3px #e3e3e3;
                            >li {
                                width: 130px;
                                height: 40px;
                                background-color: rgba(0, 0, 0, 0.05);
                                margin-right: 55px;
                                line-height: 40px;
                                position: relative;
                                cursor: pointer;
                                >span {
                                    font-size: 12px;
                                    height: 17px;
                                    line-height: 17px;
                                    margin-left: 40px;
                                }
                                >i {
                                    position: absolute;
                                    left: 8px;
                                    top: 8px;
                                    width: 24px;
                                    height: 24px;
                                    border-radius: 2px;
                                    background: url("../assets/images/icon_data.png");
                                }
                            }
                            >li:nth-child(2n) {
                                margin-right: 0;
                            }
                            >li:nth-child( n+3 ) {
                                margin-top: 13px;
                            }
                        }
                        >ul:last-child {
                            border: none;
                        }
                    }
                }
                .passing-count {
                    .title {
                        height: 50px;
                        line-height: 50px;
                        font-size: 14px;
                    }
                    .team-count {
                        height: 22px;
                        line-height: 22px;
                        >span {
                            font-size: 12px;
                            float: left;
                            line-height: 22px;
                            margin-right: 15px;
                        }
                        .count-bar {
                            height: 22px;
                            width: 171px;
                            background-color: #4a5266;
                            position: relative;
                            .team-pass-per {
                                height: 22px;
                                width: 60%;
                                position: absolute;
                                left: 0;
                                top: 0;
                                background-color: #35aae5;
                            }
                        }
                        .num {
                            float: right;
                            margin-right: 5px;
                            width: 101px;
                            text-align: right;
                            font-weight: 600;
                        }
                    } 
                    .home-team-count {
                        margin-bottom: 26px;
                    }
                }
                .main-left-b {
                    width: 335px;
                    height: 248px;
                    #home-or-away {
                        margin-top: 17px;
                    }
                    .count-table {
                        width: 335px;
                        height: 88px;
                        >thead {
                            tr {
                                font-size: 12px;
                                height: 38px;
                                line-height: 38px;
                                   
                                >th {
                                    width: 60px;
                                    text-align: center;
                                    >span {
                                        margin: 0 8px;
                                    }
                                }
                                >th:nth-child(1) {
                                    width: 155px;
                                    text-align: left;
                                }        
                            }     
                        }  
                        >tbody {
                            >tr {
                                background-color: #dde0e4;
                                height: 20px!important;
                                margin:0;
                                font-size: 12px;
                                border-top: 2px solid #fff;
                                >td {
                                    width: 60px;
                                    font-weight: 600;
                                    text-align: center;
                                    >span {
                                        margin: 0 8px;
                                    }
                                }
                                >td:nth-child(1) {
                                    width: 155px;
                                    text-align: left;
                                    font-weight: 400;
                                }
                                >td:nth-child(2n+1) {
                                    background-color: #edeff2;
                                }
                            }
                        }
                    }
                    .count-table.group {
                        margin: 0px 0px;
                        td {
                            background-color: #edeff2!important;
                        }
                        td:last-child {
                            background-color: #dde0e4!important;
                        }
                    }
                    .wrapper {
                        height: 248px;
                      
                        margin-top: 17px;
                        border-top: 1px solid #e3e3e3;
                        padding-top: 17px;
                        #continuity_pass_chart {
                            width: 335px;
                            height: 230px;
                        }
                    }
                }
               
            }
            .main-right {
                width: 844px;
                height: 660px;
                padding: 0 18px 0 14px;
                background-color: rgba(0, 0, 0, 0.05);           
                .football-court {
                    width: 396px;           
                    >.title {
                        height: 58px;
                        font-size: 14px;
                        line-height: 58px;
                    }
                    .court {
                        width: 396px;
                        height: 588px;
                        background: url("../assets/images/coaching-board.png") no-repeat;
                        background-size: cover;
                        position: relative;
                        >svg {
                            >text {
                                font-size: 12px;
                            }
                        }
                    }
                }
                >table {
                    width: 812px;
                    height: 630px;
                    margin: 15px auto;
                    font-size: 12px;
                    >thead {
                        tr {
                            height: 162px;
                            th {
                                height: 162px;
                                width: 12px;
                                overflow: hidden;
                                // writing-mode: vertical-lr;
                                // writing-mode: tb-lr;
                                // -webkit-transform: rotate(-90deg);
                                // -moz-transform: rotate(-90deg);
                                // white-space: nowrap;
                                vertical-align: bottom;
                                span {
                                    display: block;
                                    width:12px;
                                    margin: 0 auto;
                                    line-height: 12px;
                                    -webkit-transform: rotate(-90deg);
                                    -moz-transform: rotate(-90deg);
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }                         
                        }
                    }
                    >tbody {
                        height: 448px;
                        >tr {
                            >td {
                                text-align: center;
                                border: 1px solid #dcdcdc;
                                overflow: hidden;
                                // white-space: nowrap;
                                text-overflow: ellipsis;
                                cursor: pointer;
                            }
                            td:first-child,td:first-child:hover {
                                text-align: left;
                                text-indent: 5px;
                                cursor: default;
                            }
                        }
                    }
                }
                >.title {
                    height: 58px;
                    font-size: 14px;
                    line-height: 58px;
                }
                .football-court-horizontal {
                    height: 357px;
                    background: url("../assets/images/court_bg1.png") no-repeat;
                    background-size: cover;
                    margin-top:20px;
                    margin-bottom: 20px;
                    position: relative;
                    >span {
                        font-size: 18px;
                        color: #fff;
                        position: absolute;
                    }
                    .home-left {        
                        left: 305px;
                        top: 53px;
                    }
                    .home-center {        
                        left: 296px;
                        top: 149px;
                    }
                    .home-right {        
                        left: 288px;
                        top: 254px;                    
                    }
                    .away-left {        
                        right: 286px;
                        top: 254px;             
                    }
                    .away-center {        
                        right: 296px;
                        top: 149px;               
                    }
                    .away-right {        
                        right: 302px;
                        top: 53px;           
                    }
                }
                .newpossession_bar_box {
                    height:60px;
                    box-sizing: border-box;
                    text-align: center;
                    border-top: 1px solid #ccc;
                    padding: 30px 0px;
                    position: relative;
                    .newpossession_bar {
                        width: 630px;
                        height: 60px;
                        margin: 0 auto;
                        > p {
                            font-size: 12px;
                            line-height: 20px;
                            color: #5F5F5F;
                            margin-bottom: 10px;
                        }
                        .newpossession_bar_left {
                            background-color: #35aae6;
                            // border-radius: 4px 0 0 4px;
                            text-align: left;
                            padding-left: 10px;
                            box-sizing: border-box;
                            position: relative;
                            >.scale {
                                height: 30px;
                                width: 315px;
                                position: absolute;
                                left:0;
                                top:0;
                                border-right: 1px solid #fff;
                            }
                        }
                        .newpossession_bar_right {
                            background-color: #a7afbd;
                            // border-radius: 0 4px 4px 0;
                            text-align: right;
                            padding-right: 10px;
                            box-sizing: border-box;
                        }
                        .newpossession_bar {
                            float: left;
                            height: 30px;
                            line-height: 30px;
                            color: #fff;
                            font-size: 12px;
                        }
                    }
                    .logo {
                        height:30px;
                        width: 26px;
                        margin-top: 30px;
                    }
                    .home-team-logo {
                        position: absolute;
                        left: 0;
                        top:30px;
                        background: url("../assets/images/gzfl.png");
                        background-size: cover;
                        margin-left: 50px;
                    }
                    .away-team-logo {
                        position: absolute;
                        right: 0;
                        top:30px;
                        background: url("../assets/images/tjqj.png");
                        background-size: cover;
                        margin-right: 50px;
                    }
                }
            }
            .main-right.half-ctrl-percentage {
                .football-court-horizontal {
                    background: url("../assets/images/court_bg2.png") no-repeat;
                    background-size: cover;
                    .court_bg2_data1, .court_bg2_data2 {
                        position: absolute;
                        color: #5F5F5F;
                        font-size: 20px;
                    }
                    .court_bg2_data1 {
                        top: 50px;
                        left: 220px;
                    }
                    .court_bg2_data2 {
                        top: 50px;
                        left: 532px;
                    }
                    .court_bg2_column1, .court_bg2_column2, .court_bg2_column3, .court_bg2_column4 {
                        border-radius: 4px 4px 0 0;
                        width: 40px;
                        text-align: center;
                        box-sizing: border-box;
                        position: absolute;
                        >p {
                            margin-top: -35px;
                            font-size: 12px;
                        }
                    }
                    .court_bg2_column1, .court_bg2_column3 {
                        background-color: #2faae8;
                    }
                    .court_bg2_column2, .court_bg2_column4 {
                        background-color: #fff;
                    }
                    .court_bg2_column1 {
                        bottom: 32px;
                        left: 199px;
                    }
                    .court_bg2_column2 {
                        bottom: 32px;
                        left: 249px;
                    }
                    .court_bg2_column3 {
                        bottom: 32px;
                        left: 509px;
                    }
                    .court_bg2_column4 {
                        bottom: 32px;
                        left: 559px;
                    }
                }
            }
            .main-right.three-area-percentage {
                .football-court-horizontal {
                    background: url("../assets/images/court_bg3.png") no-repeat;
                    background-size: cover;
                    .court_bg3_data1, .court_bg3_data2, .court_bg3_data3 {
                        position: absolute;
                        color: #5F5F5F;
                        font-size: 20px;
                    }
                    .court_bg3_data1 {
                        top: 50px;
                        left: 160px;
                    }
                    .court_bg3_data2 {
                        top: 50px;
                        left: 350px;
                    }
                    .court_bg3_data3 {
                        top: 50px;
                        left: 540px;
                    }
                    .court_bg3_column1, .court_bg3_column2, .court_bg3_column3, .court_bg3_column4, .court_bg3_column5, .court_bg3_column6 {
                        border-radius: 4px 4px 0 0;
                        width: 40px;
                        text-align: center;
                        box-sizing: border-box;
                        position: absolute;
                        >p {
                            margin-top: -20px;
                            font-size: 12px;
                        }
                    }
                    .court_bg3_column1, .court_bg3_column3, .court_bg3_column5 {
                        background-color: #2faae8;
                    }
                    .court_bg3_column2, .court_bg3_column4, .court_bg3_column6 {
                        background-color: #fff;
                    }
                    .court_bg3_column1 {
                        bottom: 32px;
                        left: 130px;
                    }
                    .court_bg3_column2 {
                        bottom: 32px;
                        left: 184px;
                    }
                    .court_bg3_column3 {
                        bottom: 32px;
                        left: 360px;
                    }
                    .court_bg3_column4 {
                        bottom: 32px;
                        left: 414px;
                    }
                    .court_bg3_column5 {
                        bottom: 32px;
                        left: 600px;
                    }
                    .court_bg3_column6 {
                        bottom: 32px;
                        left: 654px;
                    }
                }
                }
            }
        }
        #attack-percentage {
            .filter-box {
                height: auto;
                border-bottom: none;
            }
    }
}

.position.data-details {/*球员站位*/
    .bx {
        .data-details-main {
            .main-left {
                .data-type-tab {
                    ul {
                        li {
                            width:33.3%;
                        }
                        .type-selected {
                            > b {                               
                                left: 47px;                      
                            }
                        }
                    }
                }
                .filter-box {
                    width: 100%;
                    height: auto;
                    border-bottom: none;
                }
            }
            .main-right {
                width: 844px;
                height: 660px;
                padding: 0 18px 0 14px;
                background-color: rgba(0, 0, 0, 0.05);
                .football-court {
                    width: 396px;           
                    >.title {
                        height: 58px;
                        font-size: 14px;
                        line-height: 58px;
                    }
                    >.away {
                        >ul {
                            >li {
                                >span {
                                    >em {
                                        background-color: #4a5266!important;
                                    }
                                }
                                
                            }
                        }
                    }
                    .court {
                        background-color: pink;
                        width: 396px;
                        height: 588px;
                        background: url("../assets/images/coaching-board.png") no-repeat;
                        background-size: cover;
                        position: relative;
                        >.details_float { /*平均站位球员悬浮框*/
                            background-color: #FFF;
                            color: #333;
                            padding: 2px 8px;
                            border: 1px #eee solid;
                            position: absolute;
                            display: none;
                            border-radius: 4px;
                            overflow: visible;
                            font-size: 12px;
                            white-space: nowrap;
                            box-shadow: -2px -2px 4px #000;
                            >i {
                                width: 0;
                                height: 0;
                                border-width: 5px 5px;
                                border-style: solid;
                                border-bottom-color: transparent;
                                border-top-color: #fff;
                                border-left-color: transparent;
                                border-right-color: transparent;
                                position: absolute;
                                left: 5px;
                                bottom: -10px;
                                z-index: 0;
                            }
                        }
                        >svg { /*平均站位球员位置svg图*/
                            position: absolute;
                            left: 0;
                            top:0;
                            text,circle {
                                cursor: pointer;
                            }
                        }
                        >ul { /*首发站位*/
                            width: 100%;
                            height: 30px;
                            position: absolute;
                            >li {
                                position: absolute;
                                top:50%;
                                margin-top: -15px;
                                height:30px;
                                text-align: center;
                                >span {
                                    width: 30px;
                                    height: 30px;
                                    position: absolute;
                                    animation: mymove 0.5s ease;
                                    margin-left: -15px;
                                    >em {
                                        width: 30px;
                                        height: 30px;
                                        border-radius: 15px;
                                        border:1px solid #fff;
                                        background-color: #35aae5;
                                        position: absolute;
                                        font-size: 12px;
                                        line-height: 28px;
                                        text-align: center;
                                        font-weight: 700;
                                        color: #fff;
                                        margin-left: -15px;
                                        // animation: mymove 1s ease;
                                    }
                                    >b {
                                        position: absolute;
                                        left:50%;
                                        margin-left: -100px;
                                        bottom:-20px;
                                        width: 200px;
                                        font-size: 12px;
                                        font-weight: 400;
                                        color: #fff;
                                    }
                                }
                                @keyframes mymove
                                {
                                    0% {

                                        transform: scale(0);
                                    }
                                    100% {

                                        transform: scale(1);
                                    }

                                }

                                .mvp {
                                    >em {
                                        border:1px solid gold;
                                        color:gold;     
                                    }                             
                                }
                            }
                        }
                        .two {/*首发站位*/
                            >li {
                                width: 50%;
                            }
                            >li:nth-child(1){
                                left:0;   
                                >span {
                                    right: 17%;
                                }
                            }
                            >li:nth-child(2){
                                left:50%;   
                                >span {
                                    left: 17%;
                                    margin-left: 0;
                                }                  
                            }
                        }
                        .three {/*首发站位*/
                            >li {
                                width: 33.33%;
                               
                            }
                            >li:nth-child(1){
                                left:0;
                            }
                            >li:nth-child(2){
                                left:33.33%;
                            }
                            >li:nth-child(3){
                                left:66.66%;
                            }
                        }
                        .four {/*首发站位*/
                            >li {
                                width: 25%;
                                
                            }
                            >li:nth-child(1){
                                left:0;
                            }
                            >li:nth-child(2){
                                left:25%;
                            }
                            >li:nth-child(3){
                                left:50%;
                            }
                            >li:nth-child(4){
                                left:75%;
                            }
                        }
                        .five {/*首发站位*/
                            >li {
                                width: 20%;
                            }
                            >li:nth-child(1){
                                left:0;
                            }
                            >li:nth-child(2){
                                left:20%;
                            }
                            >li:nth-child(3){
                                left:40%;
                            }
                            >li:nth-child(4){
                                left:60%;
                            }
                            >li:nth-child(5){
                                left:80%;
                            }
                        }
                        .forward {   /*首发站位*/
                            top: 115px;
                        }
                        .midfielder {/*首发站位*/
                            top: 202px;
                        }
                        .center {/*首发站位*/
                            top: 296px;
                        }
                        .back {/*首发站位*/
                            top:400px;
                        }
                        .goalkeeper {/*首发站位*/
                            top:500px;
                            >li {
                                left:50%;
                            }
                        }
                        >.line {
                            height: 20px;
                            width: 337px;
                            position: absolute;
                            left:30px;
                            text-align: center;
                            font-size: 12px;
                            line-height: 17px;
                            color: #000;
                        }
                        >.attack-line {
                            border-bottom: 3px solid red;
                            top:22px;
                            transition: top 1s;
                            
                        }
                        >.defend-line {
                            border-top: 3px solid #35aae6;
                            bottom:22px;
                            transition: bottom 1s;
                        }
                    }
                }
                >table {
                    width: 812px;
                    height: 630px;
                    margin: 15px auto;
                    font-size: 12px;
                    >thead {
                        tr {
                            height: 162px;
                            th {
                                height: 162px;
                                width: 12px;
                                overflow: hidden;
                                // writing-mode: vertical-lr;
                                // writing-mode: tb-lr;
                                // -webkit-transform: rotate(-90deg);
                                // -moz-transform: rotate(-90deg);
                                // white-space: nowrap;
                                vertical-align: bottom;
                                span {
                                    display: block;
                                    width:12px;
                                    margin: 0 auto;
                                    line-height: 12px;
                                    -webkit-transform: rotate(-90deg);
                                    -moz-transform: rotate(-90deg);
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }                         
                        }
                    }
                    >tbody {
                        height: 448px;
                        >tr {
                            >td {
                                text-align: center;
                                border: 1px solid #dcdcdc;
                                overflow: hidden;
                                // white-space: nowrap;
                                text-overflow: ellipsis;
                                cursor: pointer;
                            }
                            td:first-child {
                                text-align: left;
                                text-indent: 5px;
                                cursor: default;
                            }
                        }
                        >tr:nth-child(1){
                            >td:nth-child(2){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(2){
                            >td:nth-child(3){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(3){
                            >td:nth-child(4){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(4){
                            >td:nth-child(5){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(5){
                            >td:nth-child(6){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(6){
                            >td:nth-child(7){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(7){
                            >td:nth-child(8){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(8){
                            >td:nth-child(9){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(9){
                            >td:nth-child(10){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(10){
                            >td:nth-child(11){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(11){
                            >td:nth-child(12){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(12){
                            >td:nth-child(13){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(13){
                            >td:nth-child(14){
                                background-color: #35aae5;
                            }
                        }
                        >tr:nth-child(14){
                            >td:nth-child(15){
                                background-color: #35aae5;
                            }
                        }

                    }
                }
                .hedge-figure {
                    padding:10px;
                    .data-title {
                        height: 41px;
                        line-height: 41px;
                        text-align: center;
                        font-size: 12px;                                 
                    }
                    .data-bar {
                        height: 12px;
                        text-align: center;
                        .bar {
                            width: 650px;
                            height: 12px;
                            display: inline-block;
                            background-color: #3d4254;
                            vertical-align: top;
                            position: relative;
                            .bar-per {
                                background-color: #35aae6;
                                height: 12px;
                                
                            }
                            .scale-half {
                                width: 50%;
                                position: absolute;
                                border-right: 1px solid #fff;
                                height: 12px;
                                left:0;
                                top:0;
                            }
                        }
                        .data-text {
                            width: 58px;
                            height: 12px;
                            line-height: 12px;
                            text-align: center;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}

.player-modal { /*球员数据明细*/
    width: 1200px;
    background-color: #ffffff;
    margin-bottom: 50px;
    .modal-head {
        padding: 10px 285px 24px 23px;
        .filter {
            height: 48px;
            line-height: 46px;
            border-bottom: 2px dashed #d7d7d7;
            >span {
                font-size: 14px;
                font-weight: 600;
                float: left;
                margin-right: 40px;
                width: 70px;
            }
            >ul {
                float: left;
                font-size: 14px;
                >li {
                    float: left;
                    margin-right: 55px;
                    > a:hover {
                        text-decoration: underline;
                    }
                }                   
            }
        }   
    }
    >table {
        width: 100%;
        >thead {
            // display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background-color: #4a5266;
            font-size: 0;
            tr {
                height: 40px;
                display: inline-block;
                th {
                    height: 40px!important;
                    display: inline-block;
                    >a {
                        display: inline-block;
                        padding: 0 10.5px;
                        height: 40px;
                        line-height: 40px;
                        margin: 0 8.5px;
                        color: #fff;
                        // width:68px;
                        text-align: center;
                        font-size: 12px;
                        border-left: 1px solid #4a5266;
                        border-right: 1px solid #4a5266;
                        >b {
                            color: #4a5266;
                        }
                    }
                    a:hover {
                        border-left-color:#fff;
                        border-right-color:#fff;
                        color: #35a7e3;
                    }
                    a.active {
                        border-left-color:#fff;
                        border-right-color:#fff;
                        color: #35a7e3;
                    }
                    
                }
                th:nth-child(2){
                    >a {
                        width: 163px;;
                    }
                }
            }
        }
        >tbody {
            display: block;
            width: 100%;
            font-size: 0;
            tr {
                height: 50px;
                display: inline-block;
                td {              
                    height: 50px;
                    display: inline-block;
                    a {
                        text-align: center;
                        display: inline-block;
                        padding: 0 8.5px;
                        height: 50px;
                        line-height: 50px;
                        margin: 0 8.5px;
                        font-size: 12px;   
                        cursor: default;                   
                    }
                    a:nth-child(1){
                        width: 47px;
                    }
                    .sort {
                        background-color: rgba(0, 0, 0, 0.1)
                    }
                }
                td:nth-child(2) {
                    >a {
                        width: 163px;;
                        text-align: left;   
                        cursor: pointer;              
                        >p {
                            font-size: 12px;
                            line-height: 25px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .name {
                            font-weight: 500;
                        }
                        .position {
                            color: #97979a;
                        }
                    }
                }
                td:nth-child(3),td:nth-child(4),td:nth-child(8),td:nth-child(11) {
                    >a {
                        width: 71px;;
                    }
                }
                td:nth-child(5),td:nth-child(7),td:nth-child(9),td:nth-child(14)  {
                    >a {
                        width: 47px;;
                    }
                }
                td:nth-child(6) {
                    >a {
                        width: 38.02px;;
                    }
                }
                td:nth-child(10) {
                    >a {
                        width: 83px;;
                    }
                }
                td:nth-child(12),td:nth-child(13) {
                    >a {
                        width: 78.05px;;
                    }
                }
            }
            tr:nth-child(2n){
                background-color: #f4f4f4;
            }
        }
    }
} 

</style>