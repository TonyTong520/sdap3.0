<template>
    <div id="player">
        <!-- 个人简介栏 -->
        <div class="personal-resume-bar">
            <div class="bx">
                <div class="pesonal-resume-wrapper">
                    <div class="personal-avatar">

                    </div>
                    
                    <div class="team-avatar">
                        <div class="team-logo"></div>
                        <p class="team-name">广州恒大淘宝</p>
                    </div>
                    <div class="resume-info">
                        <div class="personal-name">
                            <span class="name">里奥·梅西</span>
                            <span>——</span> 
                            <span class="season">2017赛季</span>
                        </div>
                        <ul class="info-list clearfix">
                            <li>
                                <p class="li-t">年龄</p>
                                <p class="li-b">24</p>
                            </li>
                            <li>
                                <p class="li-t">国籍</p>
                                <p class="li-b">阿根廷</p>
                            </li>
                            <li>
                                <p class="li-t">身高</p>
                                <p class="li-b">193cm</p>
                            </li>
                            <li>
                                <p class="li-t">体重</p>
                                <p class="li-b">86kg</p>
                            </li>
                            <li>
                                <p class="li-t">位置</p>
                                <!-- <p class="li-b" id="player-position">守门员</p> -->
                                <p class="li-b" id="player-position"></p>
                            </li>
                            <li>
                                <p class="li-t">赛季评分</p>
                                <p class="li-b">98.2</p>
                            </li>
                            
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 个人数据板主体 -->
        <div class="personal-data-main">
            <div class="bx clearfix">
                <!-- 个人数据列表 -->
                <div class="personal-data-wrapper f-l">
                    <div class="tab-bar">
                        <ul class="clearfix">
                            <li class="f-l tab-selected">基本</li>
                            <li class="f-l">进攻</li>
                            <li class="f-l">防守</li>
                            <li class="f-l">控球</li>
                        </ul>
                    </div>
                    <div class="personal-data-body">
                        <div class="table-box">
                            <table class="personal-data-table">
                                <thead>
                                    <tr>
                                        <th><a href="javascript:;" data-value="1" name="num">赛事</a></th>
                                        <th><a href="javascript:;" data-value="2" name="matchCount">出场次数</a></th>
                                        <th><a href="javascript:;" data-value="3" name="matchTime">出场时间</a></th>
                                        <th><a href="javascript:;" data-value="4" name="xG">xG</a></th>
                                        <th><a href="javascript:;" data-value="5" name="assist">助攻</a></th>
                                        <th><a href="javascript:;" data-value="6" name="keyPass">关键传球</a></th>
                                        <th><a href="javascript:;" data-value="7" name="pass">传球</a></th>
                                        <th><a href="javascript:;" data-value="8" name="passSuccessRate">传球成功率</a></th>
                                        <th><a href="javascript:;" data-value="9" name="averageScore">平均评分</a></th>
                                        <th><a href="javascript:;" data-value="10" name="nearestFiveTimeAvScore">近5场评分</a></th>
                                    </tr>                  
                                </thead>
                                <tbody>
                                    <tr data-value="1">
                                        <td><a href="javascript:;" data-value="1">中超</a></td>
                                        <td><a href="javascript:;" data-value="2">1</a></td>
                                        <td><a href="javascript:;" data-value="3">1</a></td>
                                        <td><a href="javascript:;" data-value="4">1</a></td>
                                        <td><a href="javascript:;" data-value="5">1</a></td>
                                        <td><a href="javascript:;" data-value="6">1</a></td>
                                        <td><a href="javascript:;" data-value="7">1</a></td>
                                        <td><a href="javascript:;" data-value="8">1</a></td>
                                        <td><a href="javascript:;" data-value="9">1</a></td>
                                        <td><a href="javascript:;" data-value="10">1</a></td>
                                    </tr>  
                                    <tr data-value="2">
                                        <td><a href="javascript:;" data-value="1">足协杯</a></td>
                                        <td><a href="javascript:;" data-value="2">1</a></td>
                                        <td><a href="javascript:;" data-value="3">1</a></td>
                                        <td><a href="javascript:;" data-value="4">1</a></td>
                                        <td><a href="javascript:;" data-value="5">1</a></td>
                                        <td><a href="javascript:;" data-value="6">1</a></td>
                                        <td><a href="javascript:;" data-value="7">1</a></td>
                                        <td><a href="javascript:;" data-value="8">1</a></td>
                                        <td><a href="javascript:;" data-value="9">1</a></td>
                                        <td><a href="javascript:;" data-value="10">1</a></td>
                                    </tr>  
                                    <tr data-value="3">
                                        <td><a href="javascript:;" data-value="1">亚冠</a></td>
                                        <td><a href="javascript:;" data-value="2">1</a></td>
                                        <td><a href="javascript:;" data-value="3">1</a></td>
                                        <td><a href="javascript:;" data-value="4">1</a></td>
                                        <td><a href="javascript:;" data-value="5">1</a></td>
                                        <td><a href="javascript:;" data-value="6">1</a></td>
                                        <td><a href="javascript:;" data-value="7">1</a></td>
                                        <td><a href="javascript:;" data-value="8">1</a></td>
                                        <td><a href="javascript:;" data-value="9">1</a></td>
                                        <td><a href="javascript:;" data-value="10">1</a></td>
                                    </tr>  
                                </tbody>
                                <tfoot>
                                    <tr data-value="sum">
                                        <td><a href="javascript:;" data-value="1">总计/平均</a></td>
                                        <td><a href="javascript:;" data-value="2">1</a></td>
                                        <td><a href="javascript:;" data-value="3">1</a></td>
                                        <td><a href="javascript:;" data-value="4">1</a></td>
                                        <td><a href="javascript:;" data-value="5">1</a></td>
                                        <td><a href="javascript:;" data-value="6">1</a></td>
                                        <td><a href="javascript:;" data-value="7">1</a></td>
                                        <td><a href="javascript:;" data-value="8">1</a></td>
                                        <td><a href="javascript:;" data-value="9">1</a></td>
                                        <td><a href="javascript:;" data-value="10">1</a></td>
                                    </tr>  
                                </tfoot>
                            </table>
                        </div>



                    </div>
                </div>
                <!-- 当前赛季队友 -->
                <div class="players-score f-r">
                    <div class="players-score-header clearfix">
                        <p>当前赛季队友</p> 
                    </div>
                    <div class="players-list">
                        <ul>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                            <li><a href="personal_data.html">武磊<span>9.6</span></a></li>
                        </ul>
                        <ul>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                            <li><a href="personal_data.html">武磊<span>9.6</span></a></li>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                            <li><a href="personal_data.html">武磊<span>9.6</span></a></li>
                        </ul>
                        <ul>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                            <li><a href="personal_data.html">武磊<span>9.6</span></a></li>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                        </ul>
                        <ul>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                            <li><a href="personal_data.html">武磊<span>9.6</span></a></li>
                            <li><a href="personal_data.html">马丁内斯<span>12.5</span></a></li>
                            <li><a href="personal_data.html">埃尔克森<span>12</span></a></li>
                        </ul>
                    </div>
                </div>
                <!-- 联赛赛季评分 -->
                <div class="season-scoring f-l">
                    <div class="filter-condition">
                        <div id="match-filter" class="filter-c-row clearfix">
                            <span class="f-l">赛事：</span>
                            <a class="f-l active all" href="javascript:;">所有</a>
                            <ul class="f-l clearfix">
                                <li class="f-l"><a href="javascript:;">中超</a></li>
                                <li class="f-l"><a href="javascript:;">足协杯</a></li>
                                <li class="f-l"><a href="javascript:;">亚冠</a></li>
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
                        <div class="round-filter">
                            <span class="">轮次：</span>
                            <div class="filter-slider-box">
                                <span class="handle-left handle"></span>
                                <div class="slider-bg">
                                    <ul class="slider-bar">
                                        <i class="slider-handler-left slider-handler"></i>
                                        <i class="slider-handler-right slider-handler"></i>
                                        <span class="slider-range">
                                            
                                        </span>

                                        <li class="lose">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="lose">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="lose">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="lose">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="lose">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="win">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="win">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="win">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="lose undeed">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="win undeed">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="draw">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="draw undeed">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="draw">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="draw">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                        <li class="draw">
                                            <a></a>
                                            <i>
                                                <b class="box-top clearfix">
                                                    <b class="t-l win f-l">胜</b>  
                                                    <b class="t-r f-r">
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大淘宝</span>    
                                                            <span class="score f-r">2</span>    
                                                        </p>    
                                                        <p class="clearfix">
                                                            <span class="team f-l">广州恒大</span>    
                                                            <span class="score f-r">20</span>    
                                                        </p>    
                                                    </b>  
                                                </b>    
                                                <b class="box-bottom clearfix">
                                                    <span class="scoring f-l">评分：98.5</span>
                                                    <input type="button" class="check f-r" value="查看比赛">
                                                </b>
                                                <em></em>    
                                            </i> 
                                        </li>
                                    </ul>
                                </div>
                                <span class="handle-right handle"></span>
                            </div>
                        </div>
                    </div>
                    <div class="filter-result clearfix">
                        <ul class="res-l clearfix f-l" id="filter-selecter">
                            <li class="select" data-name="champdas-socring">
                                <p class="item-name">创冰评分</p>
                                <p class="item-data">93.34</p>
                            </li>
                            <li data-name="goals">
                                <p class="item-name">进球</p>
                                <p class="item-data">59</p>
                            </li>
                            <li data-name="goals-accuracy">
                                <p class="item-name">射门准确率</p>
                                <p class="item-data">100</p>
                            </li>
                            <!--  -->
                            <li data-name="create-opportunities">
                                <p class="item-name">创造机会</p>
                                <p class="item-data">20</p>
                            </li>
                            <li data-name="passing-front-accuracy">
                                <p class="item-name">向前传球占比</p>
                                <p class="item-data">20%</p>
                            </li>   
                            <li data-name="passing-success-rate">
                                <p class="item-name">传球成功率</p>
                                <p class="item-data">93</p>
                            </li>                   
                                                
                            <li data-name="win-balls">
                                <p class="item-name">赢得球权</p>
                                <p class="item-data">29</p>
                            </li>                      
                            <li data-name="win-compete">
                                <p class="item-name">赢得对抗</p>
                                <p class="item-data">28</p>
                            </li>      
                            <li data-name="single-game-fouls">
                                <p class="item-name">单场犯规次数</p>
                                <p class="item-data">92</p>
                            </li>                 
                        </ul>
                        <div class="res-r f-r">
                            <div id="champdas-socring-chart"  data-name="champdas-socring" class="chart champdas-socring"></div>

                        </div>
                    </div>
                </div>
                <!-- 当前赛季已参与的比赛 -->
                <div class="match-in-season f-l">
                    <h3>当前赛季已参与的比赛</h3>
                    <div class="details-list">
                        <div class="detail-header">
                            <span class="score f-r">评分</span>
                            <span class="in-time f-r">上场时间</span>
                        </div>

                        <ul class="detail-main">
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝</li>
                                    <li class="match-result f-l"><a class="win" href="match.html">11:10</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l">
                                                <ul class="deed-time-list">
                                                    <li>进球-20'20''</li>
                                                    <li>进球-34'11''</li>
                                                    <li>进球-54'26''</li>
                                                </ul>
                                                <em></em>
                                            </li>
                                            <li class="assist f-l">
                                                <ul class="deed-time-list">
                                                    <li>助攻-20'20''</li>
                                                    <li>助攻-34'11''</li>
                                                    <li>助攻-54'26''</li>
                                                </ul>
                                                <em></em>
                                            </li>
                                            <li class="yellow-card f-l">
                                                <ul class="deed-time-list">
                                                    <li>黄牌-20'20''</li>
                                                    <li>黄牌-34'11''</li>
                                                    <li>黄牌-54'26''</li>
                                                </ul>
                                                <em></em>
                                            </li>
                                            <li class="red-card f-l">
                                                <ul class="deed-time-list">
                                                    <li>红牌-20'20''</li>
                                                    
                                                </ul>
                                                <em></em>
                                            </li>
                                            <li class="yellow-to-red f-l">
                                                <ul class="deed-time-list">
                                                    <li>红牌-20'20''</li>
                                                    
                                                </ul>
                                                <em></em>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝</li>
                                    <li class="match-result f-l"><a class="draw" href="match.html">1:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="f-l"></li>
                                            <li class="assist f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="yellow-to-red f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-result f-l"><a class="lose" href="match.html">0:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="yellow-card f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-result f-l"><a class="lose" href="match.html">0:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="yellow-card f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-result f-l"><a class="lose" href="match.html">0:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="yellow-card f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-result f-l"><a class="lose" href="match.html">0:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="yellow-card f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-result f-l"><a class="lose" href="match.html">0:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="yellow-card f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="detail-row clearfix">
                                    <li class="league-name f-l">中超联赛联赛</li>
                                    <li class="match-time f-l">2017-07-30</li>
                                    <li class="home-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-result f-l"><a class="lose" href="match.html">0:1</a></li>
                                    <li class="away-team-name f-l">广州恒大淘宝淘宝</li>
                                    <li class="match-deed f-l">
                                        <ul class="deed-list clearfix">
                                            <li class="goal f-l"></li>
                                            <li class="f-l"></li>
                                            <li class="yellow-card f-l"></li>
                                            <li class="red-card f-l"></li>
                                            <li class="f-l"></li>
                                        </ul>
                                    </li>
                                    <li class="in-match-time f-l">90</li>
                                    <li class="match-score f-l">92.22</li>
                                    <li class="more-details f-l"></li>
                                </ul>
                            </li>
                        </ul>

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
        </div>
    </div>
</template>

<script>
import '../assets/css/base.css'

export default {
  name: 'player',
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
// 个人简介
.personal-resume-bar {
    padding: 27px 0 20px 0;
    .bx {
        .pesonal-resume-wrapper {
            height: 140px;
            background-color: #fff;
            position: relative;
            .personal-avatar {
                width: 98px;
                height: 98px;
                background: url("../assets/images/avatar2.png");
                margin: 21px;
                border-radius: 8px;
                position: absolute;
                left: 0;
                top: 0;
            }
            .resume-info {
                margin: 0 140px;
                height: 140px;
                
                .personal-name {
                    padding: 20px 14px 12px;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28px;
                    border-bottom: 1px solid #dcdcdc;
                }
                .info-list {
                    padding-left: 2px;
                    padding-top: 14px;
                    height: 59px;
                    line-height: 45px;
                    overflow: visible;
                    li {
                        text-align: center;
                        float: left;
                        border-left: 1px solid #dcdcdc;
                        border-right: 1px solid #dcdcdc;
                        width: 135px;
                        height: 45px;
                        margin-left: -1px;
                        .li-t {
                            line-height: 22px;
                            font-size: 16px;
                            color: #4b5266;
                            margin-bottom: 7px;
                        }
                        .li-b {
                            line-height: 25px;
                            font-size: 18px;
                            color: #35aae6;
                        }
                    }
                }
            }
            .team-avatar {
                width: 98px;
                height: 98px;
                margin: 21px;
                padding-top: 6px;
                text-align: center;
                position: absolute;
                right: 0;
                top: 0;
                .team-logo {
                    width: 60px;
                    height: 60px;
                    background: url("../assets/images/gzhd.png");
                    background-size: cover;
                    margin: 0 auto;
                }
                .team-name {
                    font-size: 14px;
                    line-height: 20px;
                    color: #4b5266;
                    margin-top: 7px;
                }
            }
        }
    }
}

// 个人数据板主体
.personal-data-main {
    .bx {
        .personal-data-wrapper { /*个人数据列表*/
            width: 930px;
            margin-right: 17px;
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
            .personal-data-body {
                width: 100%;
                .table-box {
                    background-color: #fff;
                    padding-top: 16px;
                    margin-bottom: 26px;
                    width: 930px;
                    margin-right: 17px;
                    >table {
                        width: 100%;
                        >thead {
                            display: block;
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            background-color: #4a5266;
                            font-size: 0;
                            tr {
                                width: 100%;
                                height: 40px;
                                display: inline-block;
                                th {
                                    width: 10%;
                                    height: 40px!important;
                                    display: inline-block;
                                    text-align: center;
                                    padding: 0 8.5px;
                                    >a {
                                        width: 100%;
                                        display: inline-block;
                                        height: 40px;
                                        line-height: 40px;
                                        color: #fff;
                                        font-size: 14px;
                                        border-left: 1px solid #4a5266;
                                        border-right: 1px solid #4a5266;
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
                            }
                        }
                        >tbody,tfoot {
                            display: block;
                            width: 100%;
                            line-height: 40px;
                            font-size: 0;
                            tr {
                                width: 100%;
                                height: 40px;
                                display: inline-block;
                                td {
                                    width: 10%;
                                    height: 40px!important;
                                    display: inline-block;
                                    text-align: center;
                                    padding: 0 8.5px;
                                    >a {
                                        width: 100%;
                                        display: inline-block;
                                        height: 50px;
                                        line-height: 50px;
                                        color: #4b5266;
                                        font-size: 12px;
                                        cursor: default;
                                    }
                                }
                            }
                        }
                        tfoot {
                            font-weight: 600!important;
                            a {
                                font-size: 14px!important;
                            }
                          
                        }
                    }
                }          
            }
        }

        .players-score {/*当前赛季队友*/
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
        
        .season-scoring { /*联赛赛季评分*/
            width: 930px;
            background-color: #fff;
            margin-bottom: 20px;
            .filter-condition {
                padding: 5px 17px 0 21px;
                >.filter-c-row {
                    
                    line-height: 44px;
                    border-bottom:2px dashed #d7d7d7;
                    padding: 0 2px 0;
                    span {
                        font-size:14px;
                        font-weight: 600;
                        display: inline-block;
                        width: 102px;
                    }
                    a {
                        margin-right:80px;
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
                .round-filter {
                    
                    height: 70px;
                    line-height: 70px;
                    >span {
                        font-size:14px;
                        font-weight: 600;
                        display: inline-block;
                        width: 42px;
                        margin-right: 20px;
                    }
                    .filter-slider-box {
                        display: inline-block;
                        width: 822px;
                        height: 36px;
                        line-height: 36px;
                        vertical-align: middle;
                        font-size: 0;
                        .handle {
                            display: inline-block;
                            width: 12px;
                            height: 36px;
                            background-image: linear-gradient(180deg, #ededed 0%, #d7d7d7 100%);
                            border-radius: 4px;
                            border: solid 1px #c1c1c1;
                            vertical-align: middle;
                        }
                        .slider-bg {
                            display: inline-block;
                            width: 798px;
                            height: 30px;
                            line-height: 30px;
                            background-color: #f0f0f0;
                            vertical-align: middle;
                            text-align: center;
                            .slider-bar {
                                width: 778px;
                                height: 22px;
                                vertical-align: middle;
                                display: inline-block;
                                position: relative;
                                z-index: 0;
                                cursor: pointer;
                                >li {
                                    width: 50.015px; 
                                    height: 22px;
                                    float: left;
                                    margin-right: 2px;
                                    position: relative;
                                    >i {
                                        display: none;
                                        position: absolute;
                                        left: 0;
                                        top: -140px;
                                        width: 200px;
                                        height: 126px;
                                        background-color: #fff;
                                        box-shadow: 1px -1px 9px 0px rgba(0, 0, 0, 0.36);
                                        border-radius: 6px;
                                      
                                        >.box-top {
                                            cursor: default;
                                            display: inline-block;
                                            height: 80px;
                                            width: 100%;
                                            border-bottom: 1px solid #dfdfdf;
                                            .t-l {
                                                display: inline-block;
                                                width: 54px;
                                                height: 54px;
                                                border-radius: 27px;
                                                font-size: 20px;
                                                color: #fff;
                                                text-align: center;
                                                line-height: 54px;
                                                font-style: normal;
                                                margin:12px 0 0 13px;
                                            }
                                            .t-r {
                                                height: 41px;
                                                width: 110px;
                                                margin: 19px 13px 0 0;
                                                font-style: normal;
                                                >p {
                                                    height: 17px;
                                                    font-size: 12px;
                                                    line-height: 17px;
                                                    color: #4a4a4a;
                                                    
                                                    .team {
                                                        width: 90px;
                                                        text-align: left;
                                                    }
                                                    .score {
                                                        width: 20px;
                                                        text-align: left;
                                                    }
                                                }
                                                >p:nth-child(2){
                                                    margin-top: 7px;
                                                    color: #909094;
                                                }
                                            }
                                        }
                                        >.box-bottom {
                                            height: 46px;
                                            cursor: default;
                                            .scoring {
                                                font-size: 12px;
                                                line-height: 17px;
                                                font-style: normal;
                                                margin: 13px 0 0 14px;
                                            }
                                            .check {
                                                width: 76px;
                                                height: 23px;
                                                background-color: #35aae5;
                                                border-radius: 4px;
                                                border: 1px solid #498fe1;
                                                margin:11px 10px 0 0;
                                                font-size: 12px;
                                                color: #ecf0f1;
                                                cursor: pointer;
                                            }
                                        }
                                        >em {
                                            display: none;
                                            width: 0;
                                            height: 0;
                                            border-width: 17px 10px;
                                            border-style: solid;
                                            border-bottom-color: transparent;
                                            border-top-color: #fff;
                                            border-left-color: transparent;
                                            border-right-color: transparent;
                                            position: absolute;
                                            left: 16px;
                                            top: 123px;
                                        }
                                    }
                                }
                                >li:hover {
                                    >i {
                                        display: block;
                                        >em {
                                            display: block;
                                        }
                                    }
                                }
                                .undeed {
                                    line-height: 22px;
                                    >a {
                                        display: inline-block;
                                        vertical-align: middle;
                                        height: 75%;
                                        width: 40%;
                                        background: url(../assets/images/undeed1.png) no-repeat center center;
                                        background-size: contain;                                       
                                    }
                                    
                                }
                                >li:last-child {
                                    margin-right: 0;
                                }
                                .slider-range {
                                    background-color: rgba(0, 0, 0, 0.2);
                                    height: 30px;
                                    position: absolute;
                                    left:0;
                                    top:-4px;
                                    right:0;
                                    z-index: -1;
                                }
                                .slider-handler {
                                    width: 14px;
                                    height: 36px;
                                    background: url("../assets/images/slider-handler.png") no-repeat;
                                    position: absolute;
                                    bottom:-4px;
                                    cursor: pointer;
                                    border: 1px solid transparent;
                                    z-index: 1;
                                }
                                .slider-handler-left {
                                    left:-7px;
                                }
                                .slider-handler-right {
                                    right:-8px;
                                }
                                .focus {
                                    border: 1px solid #35aae5;
                                    border-radius: 4px;
                                }
                            }
                        }
                    }
                }
            }
            .filter-result {
                height: 361px;
                border-top: 1px solid #dcdcdc;
                .res-l {
                    width: 361px;
                    display: inline-block;
                    >li {
                        width: 121px;
                        height: 121px;
                        float: left;
                        border: 1px solid #dcdcdc;
                        margin-top: -1px;
                        margin-left: -1px;
                        cursor: pointer;
                        >p {
                            text-align: center;
                        }
                        .item-name {
                            font-size: 12px;
                            line-height: 17px;
                            margin-top: 31px;
                        }
                        .item-data {
                            font-size: 22px;
                            line-height: 30px;
                            margin-top: 9px;  
                        }
                    }
                    >li:hover {
                        background-color: #ecf0f1;
                    }
                }
                .res-r {
                    height: 360px;
                    width: 569px;
                    position: relative;
                    .chart {
                        height: 360px;
                        width: 569px;
                    }
                    .goals {/*球员进球*/
                        .chart-left {
                            width: 389px;
                            height: 360px;
                            background-color: aqua;
                        }
                        .chart-right {
                            width: 160px;
                            height: 100%;
                            .chart-r-t {
                                height: 170px;
                                padding: 15px 0;
                                .data-list {
                                    height: 140px;
                                    background-color: #ecf0f1;
                                    >li {
                                        height: 35px;
                                        line-height: 35px;
                                        font-size: 16px;
                                        .item {
                                            width: 110px;
                                            line-height: 35px;
                                            text-indent: 10px;
                                        }
                                        .value {
                                            width: 40px;
                                            line-height: 35px;
                                            text-align: right;
                                            margin-right: 10px;
                                            color: #35aae6;
                                        }
                                    }
                                } 
                            }
                            .chart-r-b {
                                height: 170px;
                                background:url("../assets/images/area-tips.png");
                            }
                        }
                    }
                    .goals-accuracy { /*球员射门准确率*/
                        padding-top: 8px;
                        .data-list {
                            width: 520px;
                            height: 53px;
                            margin: 0 19px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 25%;
                                height: 53px;
                                float: left;
                                p {
                                    height: 27px;
                                    line-height: 27px;
                                    font-size: 14px;
                                    text-align: center;
                                }
                            }
                        }
                        .goals-area {
                            width: 501px;
                            height: 288px;
                            background: url(../assets/images/goals.png) no-repeat;
                            margin: 7px auto 0;
                            position: relative;
                            text-align: center;
                            >div {
                                float: left;
                            }
                            .out-left-top {
                                width: 68px;
                                height: 62px;
                                line-height: 62px;
                                position: absolute;
                                left:0;
                                top:0;
                            }
                            .out-center-top {
                                width: 356px;
                                height: 62px;
                                line-height: 62px;
                                position: absolute;
                                left:70px;
                                top:0;
                            }
                            .out-right-top {
                                width: 73px;
                                height: 62px;
                                line-height: 62px;
                                position: absolute;
                                right:0;
                                top:0;
                            }
                            .out-left-bottom {
                                width: 66px;
                                height: 180px;
                                line-height: 180px;
                                position: absolute;
                                left:0;
                                top:63px;
                            }
                            .out-right-bottom {
                                width: 73px;
                                height: 180px;
                                line-height: 180px;
                                position: absolute;
                                right:0;
                                top:63px;
                            }
                            .goal-inner {
                                position: absolute;
                                left: 74px;
                                top:67px;
                                width: 351px;
                                height: 176px;
                                >div {
                                    line-height: 88px;
                                    float:left;
                                    width: 33.33%;
                                    height: 88px;
                                }
                            }
                        }
                    }
                    .win-compete {/*球员赢得对抗*/
                        padding:47px 92px 0 93px;
                        >.item-wrapper {
                            width: 384px;
                            height: 60px;
                            .item-title {
                                height: 40px;
                                padding: 10px 43px 0;
                                text-align: center;
                                >p {
                                    display: inline-block;
                                    font-size: 14px;
                                    line-height: 30px;
                                }
                            }
                            .item-bar {
                                height: 20px;
                                >p {
                                    height: 20px;
                                    width: 43px;
                                    font-size: 14px;
                                    line-height: 20px;
                                }
                                .failure-rate {
                                    text-align: right;
                                }
                                >.bar {
                                    width: 298px;
                                    height: 20px;
                                    display: inline-block;
                                    background-color: #3d4254;
                                    .success-bar {
                                        width:39%;
                                        height: 20px;
                                        background-color: #35aae6;
                                    }
                                }
                            }
                        }
                    }
                    .win-balls { /*球员赢得球权*/
                        .data-list {
                            width: 534px;
                            height: 53px;
                            margin:10px 18px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 33.33%;
                                height: 53px;
                                padding-top: 7px;
                                float:left;
                                >p {
                                    height: 20px;
                                    line-height: 20px;
                                    font-size: 14px;
                                    margin-bottom: 3px;
                                    text-align: center;
                                }
                            }
                            >li:nth-child(1){
                                >.item-value {
                                    color: #2d98e0;
                                }
                            }
                            >li:nth-child(2){
                                >.item-value {
                                    color: #c6000e;
                                }
                            }
                        }
                        .data-areas {
                            width: 426px;
                            height: 287px;
                            background: url("../assets/images/field_area4x6.png");
                            margin: 6px auto 0;
                            position: relative;
                            text-align: center;
                            position: relative;
                            .areas {
                                width: 366px;
                                height: 244px;
                                position: absolute;
                                left:29px;
                                top:21px;
                                >li {
                                    float: left;
                                    width: 61px;
                                    height: 61px;
                                    line-height: 61px;
                                    text-align: center;
                                    color: #ecf0f1;
                                }
                            }
                        }
                    }
                    .create-opportunities {/*球员创造机会*/
                        padding-top: 8px;
                        position: relative;
                        .data-list {
                            width: 520px;
                            height: 53px;
                            margin: 0 19px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 25%;
                                height: 53px;
                                float: left;
                                p {
                                    height: 27px;
                                    line-height: 27px;
                                    font-size: 14px;
                                    text-align: center;
                                }
                            }
                            >li:nth-child(1){
                                >.item-value {
                                    color:#2d98e0;
                                }
                            }
                            >li:nth-child(2){
                                >.item-value {
                                    color:#c6000e;
                                }
                            }
                        }
                        .football-court {
                            >.bg {
                                width: 427px;
                                height: 289px;
                                background: url(../assets/images/football_court.png);
                                margin: 5px auto 0;
                                // position: relative;
                                text-align: center;
                                padding: 21px 0 0 30px;
                                .svg-wrapper {
                                    width: 366px;
                                    height: 244px;                              
                                    svg:not(:root) {
                                        overflow: visible!important;
                                    }
                                }
                            }
                        }
                       
                    }
                    .single-game-fouls {/*球员单场犯规次数*/
                        padding-top: 8px;
                        position: relative;
                        .data-list {
                            width: 520px;
                            height: 53px;
                            margin: 0 19px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 25%;
                                height: 53px;
                                float: left;
                                p {
                                    height: 27px;
                                    line-height: 27px;
                                    font-size: 14px;
                                    text-align: center;
                                }
                            }
                            >li:nth-child(1){
                                >.item-value {
                                    color:#2d98e0;
                                }
                            }
                            >li:nth-child(2){
                                >.item-value {
                                    color:#f39700;
                                }
                            }
                            >li:nth-child(3){
                                >.item-value {
                                    color:#c6000e;
                                }
                            }
                            >li:nth-child(4){
                                >.item-value {
                                    color:#dd626b;
                                }
                            }
                        }
                        .football-court {
                            >.bg {
                                width: 427px;
                                height: 289px;
                                background: url(../assets/images/football_court.png);
                                margin: 5px auto 0;
                                overflow: hidden;
                                text-align: center;
                                padding: 21px 0 0 30px;
                                .wrapper {
                                    width: 366px;
                                    height: 244px; 
                                    position: relative;
                                    >div {
                                        position: absolute;
                                    }
                                    .foul {
                                        width: 10px;
                                        height: 10px;
                                        background-color: #2d98e0;
                                        border-radius: 5px;
                                        box-shadow: 0px 0px 6px #fff;
                                        left:157px;
                                        top:20px;
                                        margin-left: -5px;
                                        margin-top: -5px;
                                    }
                                    .yellow-card {
                                        width: 12px;
                                        height: 17px;
                                        left:218px;
                                        top:66px;
                                        margin-left: -6px;
                                        margin-top: -8.5px;
                                        background: url("../assets/images/yellow_card.png");
                                        border-radius: 3px;
                                    }
                                    .red-card {
                                        width: 12px;
                                        height: 17px;
                                        left:77px;
                                        top:34px;
                                        margin-left: -6px;
                                        margin-top: -8.5px;
                                        background: url("../assets/images/red_card.png");
                                        border-radius: 3px;
                                    }
                                    .yellow-to-red {
                                        width: 10px;
                                        height: 15px;
                                        left: 137px;
                                        top: 134px;
                                        margin-left: -5px;
                                        margin-top: -7.5px;
                                        background: url(../assets/images/2yellow1red.png);
                                        border-radius: 3px;
                                    }
                                }   
                            }
                        }
                    }

                    .goal-kick-droppoint {/*守门员球门球距离落点*/
                        padding-top: 8px;
                        position: relative;
                        .data-list {
                            width: 520px;
                            height: 53px;
                            margin: 0 19px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 25%;
                                height: 53px;
                                float: left;
                                p {
                                    height: 27px;
                                    line-height: 27px;
                                    font-size: 14px;
                                    text-align: center;
                                }
                            }
                            >li:nth-child(1){
                                >.item-value {
                                    color:#2d98e0;
                                }
                            }
                        }
                        .football-court {
                            >.bg {
                                width: 427px;
                                height: 289px;
                                background: url(../assets/images/football_court.png);
                                margin: 5px auto 0;
                                overflow: hidden;
                                text-align: center;
                                padding: 21px 0 0 30px;
                                .wrapper {
                                    width: 366px;
                                    height: 244px; 
                                    position: relative;
                                    >div {
                                        position: absolute;
                                        width: 10px;
                                        height: 10px;
                                        background-color: #2d98e0;
                                        border-radius: 5px;
                                        box-shadow: 0px 0px 6px #fff;
                                        margin-left: -5px;
                                        margin-top: -5px;
                                    }
                                    .droppoint {
                                        left:157px;
                                        top:20px;                                     
                                    }
                                    .droppoint1 {                                  
                                        left:216px;
                                        top:65px;
                                    }
                                }   
                            }
                        }
                       
                    }

                    .tackl-cross { /*守门员拦截传中*/
                        padding-top: 8px;
                        // position: relative;
                        .data-list {
                            width: 520px;
                            height: 53px;
                            margin: 0 19px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 33%;
                                height: 53px;
                                float: left;
                                p {
                                    height: 27px;
                                    line-height: 27px;
                                    font-size: 14px;
                                    text-align: center;
                                }
                                >.item-value {
                                    color:#2d98e0;
                                }
                            }
                        }
                        .wrapper {
                            width: 498px;
                            height: 247px;
                            background: url("../assets/images/penalty_box.png");
                            margin: 26px auto;
                            position: relative;
                            overflow: hidden;
                            .hide-football-court {
                                width: 763px;
                                height: 1090px;
                                // background-color: rgba(0, 0, 0, 0.2);
                                position: absolute;
                                left:50%;
                                margin-left: -381.5px;
                                top:21px;
                                // background: url("../assets/images/football_court_03.png");
                                // background-size: 763px;
                                // opacity: 0.3;
                                >div {
                                    position: absolute;
                                    width: 10px;
                                    height: 10px;
                                    background-color: #2d98e0;
                                    border-radius: 5px;
                                    // box-shadow: 0px 0px 3px #000;
                                    border: 1px solid rgba(0, 0, 0, 0.459);
                                    margin-left: -5px;
                                    margin-top: -5px;
                                } 
                                .tackl-point {
                                    left:300px;
                                    top:50px;
                                }
                                .tackl-point1 {
                                    left:310px;
                                    top:70px;
                                }
                                .tackl-point2 {
                                    left:350px;
                                    top:90px;
                                }
                                .tackl-point3 {
                                    left:120px;
                                    top:68px;
                                }
                            }
                        }
                    }

                    .save-penalty {/*守门员扑出点球*/
                        padding-top: 8px;
                        // position: relative;
                        .data-list {
                            width: 520px;
                            height: 53px;
                            margin: 0 19px 0;
                            background-color: #f1f1f1;
                            >li {
                                width: 33%;
                                height: 53px;
                                float: left;
                                p {
                                    height: 27px;
                                    line-height: 27px;
                                    font-size: 14px;
                                    text-align: center;
                                }
                                >.item-value {
                                    color:#2d98e0;
                                }
                            }
                        }
                        .wrapper {
                            width: 501px;
                            height: 288px;
                            background: url(../assets/images/goals.png) no-repeat;
                            margin: 7px auto 0;
                            position: relative;
                            text-align: center;
                            overflow: hidden;
                            .hide-goal-mouth {
                                width: 358px;
                                height: 180px;
                                // background-color: rgba(0, 0, 0, 0.2);
                                position: absolute;
                                left:70px;
                                top:63px;
                                >div {
                                    position: absolute;
                                    width: 10px;
                                    height: 10px;
                                    background-color: #2d98e0;
                                    border-radius: 5px;
                                    // box-shadow: 0px 0px 3px #000;
                                    border: 1px solid rgba(0, 0, 0, 0.459);
                                    margin-left: -5px;
                                    margin-top: -5px;
                                }
                                .save-goal-point {
                                    left:300px;
                                    top:50px;
                                }
                                .save-goal-point1 {
                                    left:275px;
                                    top:80px;
                                }
                                .save-goal-point2 {
                                    left:-50px;
                                    top:50px;
                                }
                                .save-goal-point3 {
                                    left:-25px;
                                    top:-16px;
                                }
                            }
                        }
                    }


                    >p {
                        position: absolute;
                        font-size: 12px;
                    }
                    .pass_f {
                        top: 11px;
                        left: 240px;
                    }
                    .pass_l {   
                        top: 185px;
                        left: 102px;
                    }
                    .pass_r {
                        top: 185px;
                        left:438px;
                    }
                    .pass_b {
                        bottom: 19px;
                        left: 240px;
                    }
             
                }
            }
        }

        .match-in-season { /*当前赛季已参与的比赛*/
            width: 930px;
            padding-bottom: 35px;
            >h3 {
                padding-left: 16px;
                height: 44px;
                text-align: left;
                font-size: 16px;
                color: #909094;
                line-height: 44px;
            }
            .detail-header {
                height: 40px;
                background-color: #4a5266;
                span {
                    line-height: 40px;
                    height: 40px;
                    font-size: 14px;
                    color: #fff;
                }
                .score {
                    margin-right: 117px;
                }
                .in-time {
                    margin-right: 23px;
                }
            }
            .detail-main {
                height: 400px;
                background-color: #fff;
                margin-bottom:29px;
                >li {
                    height: 50px;
                    >.detail-row {
                        line-height: 50px;
                        height: 50px;
                        font-size: 14px;
                        >.league-name {
                            padding: 0 15px;
                            width: 114px;     
                            margin-right: 15px;                     
                        }
                        >.match-time {
                            width: 90px;
                        }
                        >.home-team-name {
                            width: 112px;
                            text-align: right;
                            margin-left: 10px;
                        }
                        >.match-result {
                            width: 80px;
                            text-align: center;
                            >a {
                                display: inline-block;
                                width: 50px;
                                height: 22px;
                                line-height: 22px;
                                vertical-align: middle;
                                border-radius: 4px;
                                color: #fff;
                            }                      
                        }
                        >.away-team-name {
                            width: 112px;
                            text-align: left;
                            margin-right: 10px;
                        }
                        >.match-deed {
                            >.deed-list {
                                margin: 0 13px;
                                >li {
                                    width: 17px;
                                    height: 17px;
                                    margin-left: 13px;
                                    margin-top: 17px;
                                    cursor: pointer;
                                }
                                >li:first-child {
                                    margin-left: 0;
                                }
                                .goal {                                 
                                    background: url("../assets/images/goal.png");    
                                    position: relative; 
                                    .deed-time-list {
                                        position: absolute;
                                        left: -23px;
                                        bottom: 30px;
                                        background-color: #fff;
                                        box-shadow: 1px -1px 9px 0px rgba(0, 0, 0, 0.36);
                                        border-radius: 6px;
                                        display: none; 
                                        width: 132px;
                                        padding: 6px 13px;
                                        >li {
                                            height: 17px;
                                            width: 100%;
                                            font-size: 12px;
                                            line-height: 17px;
                                            color: #909094;
                                        }
                                    }
                                    >em {
                                        display: none; 
                                        width: 0;
                                        height: 0;
                                        border-width: 17px 10px;
                                        border-style: solid;
                                        border-bottom-color: transparent;
                                        border-top-color: #fff;
                                        border-left-color: transparent;
                                        border-right-color: transparent;
                                        position: absolute;
                                        left: -1px;
                                        top: -19px;
                                    }                         
                                }
                                .goal:hover {
                                    .deed-time-list {
                                        display: block;
                                    }                      
                                    >em {
                                        display: block;
                                    }
                                }
                                .assist {
                                    background: url("../assets/images/assist.png");
                                    position: relative; 
                                    .deed-time-list {
                                        position: absolute;
                                        left: -23px;
                                        bottom: 30px;
                                        background-color: #fff;
                                        box-shadow: 1px -1px 9px 0px rgba(0, 0, 0, 0.36);
                                        border-radius: 6px;
                                        display: none; 
                                        width: 132px;
                                        padding: 6px 13px;
                                        >li {
                                            height: 17px;
                                            width: 100%;
                                            font-size: 12px;
                                            line-height: 17px;
                                            color: #909094;
                                        }
                                    }
                                    >em {
                                        display: none; 
                                        width: 0;
                                        height: 0;
                                        border-width: 17px 10px;
                                        border-style: solid;
                                        border-bottom-color: transparent;
                                        border-top-color: #fff;
                                        border-left-color: transparent;
                                        border-right-color: transparent;
                                        position: absolute;
                                        left: -1px;
                                        top: -19px;
                                    }                         
                                }
                                .assist:hover {
                                    .deed-time-list {
                                        display: block;
                                    }                      
                                    >em {
                                        display: block;
                                    }
                                }
                                .yellow-card {
                                    padding: 0 2.5px;
                                    background: url("../assets/images/yellow_card.png") center center no-repeat;
                                    position: relative; 
                                    .deed-time-list {
                                        position: absolute;
                                        left: -23px;
                                        bottom: 30px;
                                        background-color: #fff;
                                        box-shadow: 1px -1px 9px 0px rgba(0, 0, 0, 0.36);
                                        border-radius: 6px;
                                        display: none; 
                                        width: 132px;
                                        padding: 6px 13px;
                                        >li {
                                            height: 17px;
                                            width: 100%;
                                            font-size: 12px;
                                            line-height: 17px;
                                            color: #909094;
                                        }
                                    }
                                    >em {
                                        display: none; 
                                        width: 0;
                                        height: 0;
                                        border-width: 17px 10px;
                                        border-style: solid;
                                        border-bottom-color: transparent;
                                        border-top-color: #fff;
                                        border-left-color: transparent;
                                        border-right-color: transparent;
                                        position: absolute;
                                        left: -1px;
                                        top: -19px;
                                    }                         
                                }
                                .yellow-card:hover {
                                    .deed-time-list {
                                        display: block;
                                    }                      
                                    >em {
                                        display: block;
                                    }
                                }
                                .red-card {
                                    padding: 0 2.5px;
                                    background: url("../assets/images/red_card.png") center center no-repeat;
                                    position: relative; 
                                    .deed-time-list {
                                        position: absolute;
                                        left: -23px;
                                        bottom: 30px;
                                        background-color: #fff;
                                        box-shadow: 1px -1px 9px 0px rgba(0, 0, 0, 0.36);
                                        border-radius: 6px;
                                        display: none; 
                                        width: 132px;
                                        padding: 6px 13px;
                                        >li {
                                            height: 17px;
                                            width: 100%;
                                            font-size: 12px;
                                            line-height: 17px;
                                            color: #909094;
                                        }
                                    }
                                    >em {
                                        display: none; 
                                        width: 0;
                                        height: 0;
                                        border-width: 17px 10px;
                                        border-style: solid;
                                        border-bottom-color: transparent;
                                        border-top-color: #fff;
                                        border-left-color: transparent;
                                        border-right-color: transparent;
                                        position: absolute;
                                        left: -1px;
                                        top: -19px;
                                    }                         
                                }
                                .red-card:hover {
                                    .deed-time-list {
                                        display: block;
                                    }                      
                                    >em {
                                        display: block;
                                    }
                                }
                                .yellow-to-red {
                                    padding: 0 2.5px;
                                    background: url("../assets/images/2yellow1red.png") center center no-repeat;
                                    position: relative; 
                                    .deed-time-list {
                                        position: absolute;
                                        left: -23px;
                                        bottom: 30px;
                                        background-color: #fff;
                                        box-shadow: 1px -1px 9px 0px rgba(0, 0, 0, 0.36);
                                        border-radius: 6px;
                                        display: none; 
                                        width: 132px;
                                        padding: 6px 13px;
                                        >li {
                                            height: 17px;
                                            width: 100%;
                                            font-size: 12px;
                                            line-height: 17px;
                                            color: #909094;
                                        }
                                    }
                                    >em {
                                        display: none; 
                                        width: 0;
                                        height: 0;
                                        border-width: 17px 10px;
                                        border-style: solid;
                                        border-bottom-color: transparent;
                                        border-top-color: #fff;
                                        border-left-color: transparent;
                                        border-right-color: transparent;
                                        position: absolute;
                                        left: -1px;
                                        top: -19px;
                                    }                         
                                }
                                .yellow-to-red:hover {
                                    .deed-time-list {
                                        display: block;
                                    }                      
                                    >em {
                                        display: block;
                                    }
                                }
                            }
                        }
                        >.in-match-time {
                            width: 56px;
                            text-align: center;
                        }
                        >.match-score {
                            width: 50px;
                            text-align: center;
                            margin-left: 11px;
                            color: #35aae6;
                        }
                        >.more-details {
                            width: 16px;
                            height: 16px;
                            background:url("../assets/images/more_data.png");
                            margin-left: 50px;
                            margin-top: 18px;
                            cursor: pointer;
                        }
                        >.more-details:hover {
                            background:url("../assets/images/more_data_hover.png");
                        }
                    }
                }
                >li:nth-child(2n) {
                    background-color: #f4f4f4;
                }
                >li:hover {
                    background-color: #ecf0f1;
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