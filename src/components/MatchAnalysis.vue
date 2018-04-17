<template>
    <!-- 比赛分析模块 -->
    <div id="match-analysis" class="match-analyze video-info-body clearfix">
        
        <div class="video-info-left f-l">
            <div class="game-module">
                <div class="module-title clearfix">比赛
                    <div class="filter-btn">筛选
                        <ul class="filter-btn-selectbox hide">
                            <li class="f-l select">所有比赛</li>
                            <li class="f-l">有视频</li>
                            <li class="f-l">无视频</li>
                        </ul>
                    </div>
                    <div class="filter-search f-r clearfix">
                        <img src="../assets/images/search2.png" alt="" width="14">
                        <div class="search-box f-r">
                            <input type="text">
                            <img class="cancel-search" src="../assets/images/cancel1.png" width="12" alt="">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <ul class="match-video-list clearfix">
                        <li class="item f-l" v-for="item in matchVideoList">
                            <i class="camera f-l"><img src="../assets/images/all-goals.png" alt="" width="24"></i>
                            <div>
                                <p class="match-name">{{item.name}}</p>
                                <p class="match-round">{{item.round}}</p>
                            </div>
                            <i class="detail f-r"></i>
                            <i class="download-pdf f-r"></i>
                        </li>
                                        
                    </ul>
                    <div class="pagination">
                        <button class="prev-btn"><img src="../assets/images/prev-page.png"  width="14" alt=""></button>
                        <p><span>0</span>/<span>0</span></p>
                        <button class="next-btn"><img src="../assets/images/next-page.png"  width="14" alt=""></button>
                    </div>
                </div>
                <hr />
            </div>    
            <div class="events-module">
                <p class="module-title">事件</p>
                <ul class="event-list clearfix">
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    <li class="event-item f-l">
                        <i class="f-l"><img src="../assets/images/all-goals.png" height="25" alt=""></i>
                        <p class="f-l">对手危险传球</p>
                    </li>
                    
                </ul>
            </div>                    
        </div>
        <div class="video-info-center f-l">
            <div class="playback-module">
                <p class="module-title clearfix">广州恒大淘宝
                    <span class="screenshot f-r">截图</span>
                </p>
                <div class="container">
                    <div class="video-box">
                        <!-- <video src="">比赛视频</video> -->
                        <img src="../assets/images/video.png" alt="">
                    </div>
                    <div class="time-quantum">
                        <ul class="clearfix">
                            <li class="time-list f-l">
                                <b>1</b>
                                <p>比洛-进球-27：58</p>
                                <input type="checkbox" class="checkbox f-r">
                                <i class="f-r"><img src="../assets/images/video-download.png" width="7" alt=""></i>
                            </li>
                            <li class="time-list f-l">
                                <b>1</b>
                                <p>比洛-进球-27：58</p>
                                <input type="checkbox" class="checkbox f-r">
                                <i class="f-r"><img src="../assets/images/video-download.png" width="7" alt=""></i>
                            </li>
                            <li class="time-list f-l">
                                <b>1</b>
                                <p>比洛-进球-27：58</p>
                                <input type="checkbox" class="checkbox f-r">
                                <i class="f-r"><img src="../assets/images/video-download.png" width="7" alt=""></i>
                            </li>
                            <li class="time-list f-l">
                                <b>1</b>
                                <p>比洛-进球-27：58</p>
                                <input type="checkbox" class="checkbox f-r">
                                <i class="f-r"><img src="../assets/images/video-download.png" width="7" alt=""></i>
                            </li>
                            <li class="time-list f-l">
                                <b>1</b>
                                <p>比洛-进球-27：58</p>
                                <input type="checkbox" class="checkbox f-r">
                                <i class="f-r"><img src="../assets/images/video-download.png" width="7" alt=""></i>
                            </li>
                            
                        </ul>
                        <div class="pagination clearfix">
                            <button class="prev-btn"><img src="../assets/images/prev-page.png"  width="14" alt=""></button>
                            <p><span>0</span>/<span>0</span></p>
                            <button class="next-btn"><img src="../assets/images/next-page.png"  width="14" alt=""></button>
                            <span class="download-selected f-r">下载</span>
                            <span class="select-all f-r">全选</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="video-info-right f-l">
            <div class="match-result">
                <p class="module-title clearfix">
                    <a href="match.html" class="linkto-details f-r">查看详情</a>
                </p>
                <div class="container">
                    <div class="information-details">
                        <div class="against-teams clearfix">
                            <div class="team-profile f-l">
                                <div class="team-logo">
                                    <img src="../assets/images/gzhd.png" alt="">
                                </div>
                                <h5 class="team-name">广州恒大淘宝</h5>
                            </div>
                            <div class="against-time f-l">
                                <div>
                                    <p>2017-09-02</p>
                                    <p>19:30</p>
                                    <p>2017赛季中超联赛</p>
                                    <p>第20轮</p>
                                </div>
                            </div>
                            <div class="team-profile f-r">
                                <div class="team-logo">
                                    <img src="../assets/images/gzhd.png" alt="">
                                </div>
                                <h5 class="team-name">广州恒大淘宝</h5>
                            </div>
                        </div>
                        <p class="against-score">
                            <b class="home-score f-l">4<span>(6)</span></b>
                            <span class="finish-or-not f-l">已完赛</span>
                            <b class="away-score f-r"><span>(7)</span>3</b>
                        </p>

                        <div class="data-type-tab">
                            <ul class="clearfix">
                                <li class="f-l type-selected">
                                    <a href="javascript:;">基本</a>
                                    <b class="triangle"></b>
                                </li>
                                <li class="f-l">
                                    <a href="javascript:;">进攻</a>
                                    <b class="triangle"></b>
                                </li>
                                <li class="f-l">
                                    <a href="javascript:;">防守</a>
                                    <b class="triangle"></b>
                                </li>
                            </ul>
                        </div>

                        <div class="data-details">
                            <p class="data-title">控球率</p>
                            <div class="data-bar clearfix">
                                <span class="data-text f-l">51%</span>
                                <div class="bar">
                                    <div class="bar-per" style="width:51%;"></div>
                                </div>
                                <span class="data-text f-r">49%</span>
                            </div>
                            <p class="data-title">射门</p>
                            <div class="data-bar clearfix">
                                <span class="data-text f-l">60</span>
                                <div class="bar">
                                    <div class="bar-per" style="width:60%;"></div>
                                </div>
                                <span class="data-text f-r">40</span>
                            </div>
                            <p class="data-title">射正</p>
                            <div class="data-bar clearfix">
                                <span class="data-text f-l">35</span>
                                <div class="bar">
                                    <div class="bar-per" style="width:70%;"></div>
                                </div>
                                <span class="data-text f-r">15</span>
                            </div>
                            <p class="data-title">红黄牌</p>
                            <div class="data-bar clearfix">
                                <span class="data-text f-l">10</span>
                                <div class="bar">
                                    <div class="bar-per" style="width:40%;"></div>
                                </div>
                                <span class="data-text f-r">15</span>
                            </div>
                            <p class="data-title">犯规</p>
                            <div class="data-bar clearfix">
                                <span class="data-text f-l">7</span>
                                <div class="bar">
                                    <div class="bar-per" style="width:70%;"></div>
                                </div>
                                <span class="data-text f-r">3</span>
                            </div>
                            <p class="data-title">射门成功率</p>
                            <div class="data-bar clearfix">
                                <span class="data-text f-l">60%</span>
                                <div class="bar">
                                    <div class="bar-per" style="width:60%;"></div>
                                </div>
                                <span class="data-text f-r">40%</span>
                            </div>
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
    name: 'match-analysis',
    data () {
        return {
            matchVideoList: [
                { name: "切尔西 6-1 曼彻斯特联队", round: "2017-06-12 英超联赛第32轮"},
                { name: "切尔西 6-2 曼彻斯特联队", round: "2017-06-13 英超联赛第32轮"},
                { name: "切尔西 6-13 曼彻斯特联队", round: "2017-06-14 英超联赛第32轮"},
                { name: "切尔西 6-4 曼彻斯特联队", round: "2017-06-15 英超联赛第32轮"},
                { name: "切尔西 6-5 曼彻斯特联队", round: "2017-06-16 英超联赛第32轮"},
                { name: "切尔西 6-5 曼彻斯特联队", round: "2017-06-16 英超联赛第32轮"},
            ],
            eventList: [
                { eventName: "进球" },
                { eventName: "失球" },
                { eventName: "射正" },
                { eventName: "对手射正" },
                { eventName: "射偏" },
                { eventName: "对手射偏" },
                { eventName: "封堵射门" },
                { eventName: "射门被封堵" },
                { eventName: "助攻" },
                { eventName: "对手助攻" },
                { eventName: "关键传球" },
                { eventName: "对手关键传球" },
                { eventName: "绝对机会" },
                { eventName: "对手绝对机会" },
                { eventName: "过人" },
                { eventName: "被过人" },
                { eventName: "门球" },
                { eventName: "对手门球" },
                { eventName: "角球" },
                { eventName: "对手角球" },
                { eventName: "任意球" },
                { eventName: "对手任意球" },
                { eventName: "界外球" },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.video-main {
    padding-bottom:30px;
    .bx {
        .video-analyze {
            height: 642px;

        }
        .video-tab {
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
        .video-info-body {
            background-color: #fff;
            .module-title {
                height: 55px;
                line-height: 55px;
                font-size:14px;
                font-weight: 600;
            }
            .pagination {
                height: 24px;
                margin-left: 9px;
                line-height: 24px;
                position: relative;
                .prev-btn,.next-btn {
                    font-size: 0;
                    cursor:pointer;
                    position: absolute;
                    top:50%;
                    margin-top:-7px;
                    img {
                        vertical-align: middle;
                    }
                }
                .prev-btn {
                    left:0;                   
                }
                .next-btn {
                    left:58px;
                }
                p {
                    position: absolute;
                    left:0;
                    top:0;
                    font-size: 12px;
                    width: 44px;
                    text-align: center;
                    margin-left: 14px;
                }
                >span {
                    font-size: 12px;
                    width: 40px;
                    height: 14px;
                    line-height: 14px;
                    color:#Fff;
                    text-align: center;
                    display: inline-block;
                    border-radius: 2px;
                    background-color: #c9c9c9;
                    margin:5px 12px;
                    cursor:pointer;
                }
            }
            .video-info-left {
                width: 429px;
                height: 596px;
                // background-color: #ccc;
                padding-left:23px;
                .game-module {
                    >.module-title {
                        .filter-btn {
                            display:inline-block;
                            width: 64px;
                            height: 21px;
                            line-height: 21px;
                            text-align: center;
                            border-radius: 2px;
                            background-color: #c9c9c9;
                            margin-left:22px;
                            color:#fff;
                            font-weight: 400;
                            font-size:12px;
                            cursor: pointer;
                            position: relative;
                            .filter-btn-selectbox {
                                background-color: #fff;
                                position: absolute;
                                left: 0px;
                                top: 21px;
                                height: 85px;
                                padding: 5px;
                                border: 1px solid #ccc;
                                border-radius: 2px;
                                >li {
                                    height: 25px;
                                    line-height: 25px;
                                    width: 130px;
                                    font-size: 12px;
                                    color:#5a5a5a;
                                }
                                li:hover {
                                    background-color: #ecf0f1;
                                }
                            }
                        }
                        .filter-btn:hover {
                            background-color: #35aae6;
                        }
                        .filter-search {
                            line-height: 20px;
                            height: 20px;
                            margin-right: 12px;
                            margin-top:17px;
                            border-radius: 2px;
                            background-color: #f2f2f2;
                            cursor: pointer;
                            >img {
                                float:left;
                                margin:4px 3px;
                            }
                            .search-box {
                                position: relative;
                                overflow: hidden;
                                >input {
                                    height: 18px;
                                    border:1px solid #ccc;
                                    border-radius: 3px;
                                    transition:all 1s ease;
                                    width: 0;
                                    font-size: 12px;
                                    color:#5a5a5a;
                                    text-indent:5px;
                                }
                                >img {
                                    position: absolute;
                                    right: 3px;
                                    top: 5px;
                                }
                            }
                        }
                    }
                    .container {
                        width: 390px;
                        .match-video-list {
                            height: 288px;
                            .item {
                                width: 100%;
                                height: 48px;
                                padding:0 13px 0 7px;
                                line-height: 48px;
                                cursor: pointer;
                                >div {
                                    margin-left:12px;
                                    margin-top:6px;
                                    width:260px;
                                    float:left;
                                    p {
                                        height: 18px;
                                        line-height: 18px;
                                        font-size: 12px;
                                    }
                                    .match-round {
                                        color:#3daee7;
                                    }
                                }
                                .download-pdf {
                                    width: 17px;
                                    height: 15px;
                                    margin-right:25px;
                                    background: url("../assets/images/video-pdf.png");
                                    background-size: cover;
                                    margin-top: 16.5px;
                                }
                                .download-pdf:hover {
                                    background: url("../assets/images/video-pdf1.png");
                                    background-size: cover;
                                }
                                .detail {
                                    width: 15px;
                                    height: 15px;
                                    background: url("../assets/images/video-detail.png");
                                    background-size: cover;
                                    margin-top: 16.5px;
                                }
                                .detail:hover {
                                    background: url("../assets/images/video-detail1.png");
                                    background-size: cover;
                                }
                                .camera {
                                    margin-top:11px;
                                    line-height: 1;
                                }
                            }
                            .item:hover {
                                background-color: #ecf0f1;
                                border-radius: 3px;
                            }
                        }
                        .pagination {
                            height: 34px;
                            padding-left: 13px;
                            line-height: 34px;
                            i {
                                cursor:pointer;
                                font-size: 0;
                                vertical-align: middle;
                                img {
                                    vertical-align: middle;
                                }
                            }
                            p {
                                display: inline-block;
                                font-size: 12px;
                                width: 44px;
                                text-align: center;
                            }
                            >span {
                                font-size: 12px;
                                width: 40px;
                                height: 14px;
                                line-height: 14px;
                                color:#Fff;
                                text-align: center;
                                display: inline-block;
                                border-radius: 2px;
                                background-color: #c9c9c9;
                                margin:10px 12px;
                                cursor:pointer;
                            }
                        }
                        .player-list {
                            margin-left: 15px;
                            >li {
                                float:left;
                                font-size: 0;
                                margin: 17px 48px 23px 0;
                                >img {
                                    border-radius: 6px;
                                }
                                >p {
                                    height: 25px;
                                    line-height: 25px;
                                    text-align: center;
                                    font-size: 12px;
                                }
                            }
                            li:nth-child(3n) {
                                margin-right: 0;
                            }
                        }
                    }
                }
                hr {
                    width: 390px;
                    border:1px solid #ededed;
                }
                .events-module {
                    .event-list {
                        margin:2px 0 0 7px;
                        .event-item {
                            width:33%;
                            height: 25px;
                            line-height: 25px;
                            margin-bottom: 22px;
                            p {
                                margin-left:12px;
                                font-size: 12px;
                            }
                        }
                    }
                    
                }
            }
            .video-info-center {
                width: 502px;
                .playback-module {
                    margin-bottom:120px;
                    >p {
                        margin-left:17px;
                        span {
                            width: 64px;
                            height: 21px;
                            line-height: 21px;
                            margin-top:17px;
                            margin-right:16px;
                            text-align: center;
                            border-radius: 2px;
                            background-color: #c9c9c9;
                            color: #fff;
                            font-weight: 400; 
                            cursor: pointer;
                        }
                    }
                    .container {
                        border-left:2px solid #ededed;
                        border-right:2px solid #ededed;
                        height: 522px;
                        padding:0 16px;
                        .video-box {
                            height: 311px;
                            border-bottom:2px solid #ededed;
                            >video {
                                width: 466px;
                                height: 292px;
                                background-color: pink;
                                
                                
                            }
                        }
                        .time-quantum {
                            >ul {
                                padding-top:11px;
                                .time-list {
                                    height: 41px;
                                    width: 458px;
                                    line-height: 41px;
                                    padding-left: 9px;
                                    padding-right: 12px;
                                    font-size:12px;
                                    font-weight: 400;
                                    >b {
                                        display: inline-block;                             
                                        width: 17px;
                                        height: 17px;
                                        line-height: 17px;
                                        border: 1px solid #2c9ad2;
                                        text-align: center;
                                        color:#fff;
                                        border-radius: 1px;
                                        background-color: #35aae6;
                                    }
                                    >p {
                                        line-height: 12px;
                                        display: inline-block;
                                        margin-left:7px;
                                    }
                                    .checkbox {
                                        width: 14px;
                                        height: 14px;
                                        margin-top:13px;
                                    }
                                    >i {
                                        margin-top:15px;
                                        margin-right: 14px;
                                        height: 11px;
                                        line-height: 11px;
                                    }
                                }
                            }

                        }
                    }
                }
            }
            .video-info-right {
                width: 269px;
                height: 596px;
                .match-result {
                    >p {
                        .linkto-details {
                            width: 64px;
                            height: 21px;
                            line-height: 21px;
                            margin-top: 17px;
                            margin-right: 12px;
                            text-align: center;
                            border-radius: 2px;
                            background-color: #c9c9c9;
                            color: #fff;
                            font-weight: 400;
                            cursor: pointer;
                        }
                    }
                    .container {
                        padding:0 12px;
                        width: 269px;
                        .information-details {
                            .against-teams {
                                height: 112px;
                                border-bottom:1px solid #ebebeb;  
                                .team-profile {  
                                    width: 70px;
                                    text-align: center;
                                                                   
                                    .team-logo {
                                        width: 70px;
                                        height: 58px;
                                        text-align: center;
                                        line-height: 58px;
                                        img {
                                            vertical-align: middle;
                                        }
                                    }
                                    .team-name {
                                        display: inline-block;
                                        text-align: center;
                                        font-size:14px;
                                        line-height: 20px;
                                        font-weight: 550;
                                        width: 60px;
                                    }
                                }
                                .against-time {
                                    width: 105px;
                                    height: 112px;
                                    >div {
                                        margin-top:24px;
                                        p {
                                            height: 18px;
                                            font-size: 12px;
                                            line-height: 18px;
                                            text-align: center;
                                        }
                                    }
                                }
                            }
                            .against-score {
                                height: 69px;
                                line-height: 69px;
                                font-size:30px;
                                font-weight: 700;
                                border-bottom:1px solid #ebebeb;
                                b {
                                    text-align: center;
                                    width: 86px;
                                    height: 69px;
                                    line-height: 69px;
                                    >span {
                                        font-size: 18px;
                                        
                                    }
                                }
                                >span {
                                    width: 70px;
                                    text-align: center;
                                    font-size: 12px;
                                    line-height: 12px;
                                    margin-top: 34px;
                                }
                            }
                            .data-type-tab {
                                ul {
                                    padding-top: 6px;
                                    border-bottom: 2px solid #e3e3e3;
                                    li {
                                        height: 34px;
                                        width:33.3%;
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
                                            left:32px;
                                            bottom:0;
                                           
                                        }
                                    }
                                }
                            }                            .data-type-tab {
                                ul {
                                    padding-top: 6px;
                                    border-bottom: 2px solid #e3e3e3;
                                    li {
                                        height: 34px;
                                        width:33.3%;
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
                                            left:32px;
                                            bottom:0;
                                           
                                        }
                                    }
                                }
                            }
                            .data-details {
                                padding-top:5px;
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
                                        width: 100px;
                                        height: 12px;
                                        display: inline-block;
                                        background-color: #3d4254;
                                        vertical-align: top;
                                        .bar-per {
                                            background-color: #35aae6;
                                            height: 12px;
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
                            .player-info {
                                margin-bottom: 13px;
                                .player-avatar {
                                    >img {
                                        float: left;
                                    }
                                    >p {
                                        width: 140px;
                                        float: left;
                                        font-size: 15px;
                                        line-height: 21px;
                                        margin-left: 9px;
                                        margin-top: 13px;
                                        width: 135px;
                                    }
                                }
                                .player-stats {
                                    margin-left: 17px;
                                    margin-top: 17px;
                                    >li {
                                        font-size: 12px;
                                        line-height: 32px;
                                        width: 100px;
                                        margin-right: 23px;
                                        float: left;
                                    }
                                    li:nth-child(2n){
                                        margin-right: 0;
                                    }
                                }
                            }
                            .player-details {
                                >li {
                                    width: 239px;
                                    height: 51px;
                                    line-height: 50px;
                                    border-bottom: 1px solid #d9d8d8;
                                    margin: 0 auto;
                                    span {
                                        width: 50%;
                                        font-size: 12px;
                                        text-align: center;
                                    }
                                }
                                li:last-child {
                                    border-bottom: none;
                                }
                            }
                        }
                        .coaching-board {
                            text-align: center;
                            position: relative;
                            font-size: 0;
                            // .select-area-box {
                            //     // display: none;
                            //     position: absolute;
                            //     left: 20px;
                            //     top: 23px;
                            //     width: 204px;
                            //     height: 306px;
                                
                            //     // ul {
                            //     //     li {
                            //     //         width: 51px;
                            //     //         height: 51px;
                            //     //         cursor: pointer;
                            //     //         background-color: rgba(0, 0, 0, 0.3);
                            //     //     }
                                    
                                   
                            //     //     .selected-area {
                            //     //         background-color: rgba(9, 3, 85, 0.5)!important;
                            //     //     }
                            //     // }
                            //     // ul:nth-child(2n+1){
                            //     //     li:nth-child(2n+1) {
                            //     //         background-color: rgba(255, 255, 255, 0.3);
                            //     //     }  
                            //     // }
                            //     // ul:nth-child(2n){
                            //     //     li:nth-child(2n) {
                            //     //         background-color: rgba(255, 255, 255, 0.3);
                            //     //     }
                            //     // }
                            // }

                        }
                        .area-filter {
                            width: 245px;
                            margin: 0 4px;
                            .area-filter-box {
                                width: 245px;
                                >p {
                                    height: 32px;
                                    line-height: 32px;
                                    font-size: 12px;
                                }  
                                >ul {
                                    >li {
                                        float: left;
                                        width: 50px;
                                        height: 30px;
                                        margin-right: 12px;
                                        cursor: pointer;
                                    }
                                    >li:nth-child(4n) {
                                        margin-right: 0;
                                    }
                                    li:nth-child(-n+4) {
                                        margin-bottom: 12px;   
                                    }
                                    li:nth-child(5) {
                                        cursor: default; 
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
    }
} 
</style>
