<template>
    <div id="video-analysis" class="video-main main">
        <team-nav></team-nav>
        <div class="bx clearfix">
            <div class="video-analyze">
                <div class="video-tab">
                    <ul class="clearfix">
                        <!-- <li class="f-l tab-selected" name="match-analyze">比赛分析</li>
                        <li class="f-l" name="event-analyze">事件分析</li>
                        <li class="f-l" name="players-analyze">球员分析</li> -->
                        <router-link class="f-l" to="match-analysis">比赛分析</router-link>
                        <router-link class="f-l" to="event-analysis">事件分析</router-link>
                        <router-link class="f-l" to="player-analysis">球员分析</router-link>
                    </ul>
                </div>
        
                <router-view></router-view>
                        
            </div>

        </div>  
    </div>

</template>

<script>
import '../assets/css/base.css'
import TeamNav from './TeamNav'
export default {
    name: 'video-analysis',
    data () {
        return {
            
        }
    },
    components: {
        TeamNav
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
                >a {
                    width: 117px;
                    line-height: 32px;
                    border-top:4px solid transparent;
                    border-bottom:4px solid transparent;
                    font-size: 14px;
                    text-align: center;
                    cursor: pointer;
                    font-weight: 600;
                }
                a.router-link-active {
                    background-color: #fff;
                    border-top: 4px solid #4b5266!important;
                    border-bottom: 4px solid #fff!important;
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
                                    margin-right:25px;
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
