<template>
    <!-- 公共球队导航样式 -->
    <div id="team-nav" class="team-nav">
        <div class="bx clearfix">
            <div class="team-row clearfix">
                <div class="ourteam team-info f-l">
                    <div class="team-wrapper">
                        <p>本队</p>
                        <div class="team-logo select">
                            <img :src="currentRound[0].t1.logoS" alt=""   >
                            <p>{{currentRound[0].t1.team}}</p>
                        </div>
                    </div>   
                </div>
                <div class="opponent team-info f-l">
                    <div class="team-wrapper">
                        <p>下轮对手</p>
                        <div class="team-logo">
                            <img :src="currentRound[0].t2.logoS" alt=""   >
                            <p>{{currentRound[0].t2.team}}</p>
                        </div>
                    </div>   
                </div>
                <div class="other-team f-l">
                    <div class="other-teams-wrapper">
                        <p>联赛其他球队</p>
                        <div class="select-bar clearfix">
                            <div class="prev select-box f-l">
                                <img class="prev-team" src="../assets/images/prevbtn.png" alt="" width="22" @click="goToPrevPage()">
                            </div>
                            <div class="scroll-box f-l clearfix" id="scrollbox">
                                <div class="f-l clearfix" id="scroller" v-bind:style="{ left: leftNum +'px' }">
                                    <ul class="f-l clearfix">
                                        <li class="f-l team-logo" v-for="item in teamLists" @click="selecteTeam(item.id)" :class="{active: activeTeamId == item.id}">
                                            <img :src="item.logoS" alt="">
                                            <p>{{ item.team }}</p>
                                        </li>
                                    </ul>
                                </div>  
                            </div>

                            <div class="next select-box f-r">
                                <img class="next-team" src="../assets/images/nextbtn.png" alt="" width="22"  @click="goToNextPage()">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分割线 以上为公共部分 -->
        </div>         
    </div>   
</template>

<script>
import '../assets/css/base.css'
export default {
    name: 'team-nav',
    data () {
        return {
            currentRound:[{"t2":{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1030,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2017_1_1030.png?Expires=4642910123&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=ILOdB8oBDSS%2FrfAI1kT6a6Ez%2B9c%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2017_1_1030.png?Expires=4642910148&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=tN7CX0pKB5hz99Grhs3mjQLWY1I%3D","province":"","season":"","seq":0,"status":"1","team":"天津权健","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},"t1":{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1012,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2017_1_1012.png?Expires=4642910300&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=kkPHKvWKARE%2B5K%2F5Pzljzi%2FKmxs%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2017_1_1012.png?Expires=4642910322&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=%2FkTkNUQgj8mf88fuJnGOtkCoaJw%3D","province":"","season":"","seq":0,"status":"1","team":"江苏苏宁易购","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"}}],
            teamLists: [{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1030,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2017_1_1030.png?Expires=4642910123&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=ILOdB8oBDSS%2FrfAI1kT6a6Ez%2B9c%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2017_1_1030.png?Expires=4642910148&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=tN7CX0pKB5hz99Grhs3mjQLWY1I%3D","province":"","season":"","seq":0,"status":"1","team":"天津权健","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1041,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2018_1_1041.png?Expires=4675389368&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=9LPlVmnaWuL8MqjBHsqPobYMbW8%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2018_1_1041.png?Expires=4675389373&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=IpGcG%2Fc2a0lRF8MIBY%2B%2BP66qNHM%3D","province":"","season":"","seq":0,"status":"1","team":"贵州恒丰智诚","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"广州","coach":"","country":"中国","createTime":"2018-04-13 16:08:23","createUser":"1","id":1000,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/hengda.png?Expires=4600489800&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=Vj0K11t4pv5XHnuHDoSHolXy3Yw%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/hengda_s.png?Expires=4600489802&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=i%2BDTRxN52TXNdswfXDZsmNudsAU%3D","province":"广东","season":"","seq":0,"status":"1","team":"广州恒大淘宝","teamEn":"Guangzhou Evergrande","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1005,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/fuli.png?Expires=4600490290&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=wk5ATqoKrZ3qZrk2dZDipOH3NH8%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/fuli_s.png?Expires=4600490290&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=HAXKoVApmS3fz4ZrPmtND1Lhh5g%3D","province":"","season":"","seq":0,"status":"1","team":"广州富力","teamEn":"","teamType":"1","updateTime":"","updateUser":""},{"city":"上海","coach":"","country":"中国","createTime":"","createUser":"","id":1007,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/shenhua.png?Expires=4600490291&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=BZ%2BrUd%2FaghHBxZigc%2FZI%2FTgQtDw%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/shenhua_s.png?Expires=4600490291&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=GPjhHzIAEgTPQJqcA3%2BJX7i3OdY%3D","province":"上海","season":"","seq":0,"status":"1","team":"上海绿地申花","teamEn":"","teamType":"1","updateTime":"","updateUser":""},{"city":"上海","coach":"","country":"中国","createTime":"","createUser":"","id":1008,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/dongya.png?Expires=4600490291&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=KTKzXMoBmZvwlJL%2BlDKLEQtzAY0%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/dongya_s.png?Expires=4600490291&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=lRspDf1kmJJzAq2BQyy0mbiL0Rg%3D","province":"上海","season":"","seq":0,"status":"1","team":"上海上港","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1018,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2017_1_1018.png?Expires=4642910355&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=aLNcoLpLRI%2BbI8duphaLTZUHMzw%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2017_1_1018.png?Expires=4642910335&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=P%2F5RonNnorJZmSXVFcVR6s0yl0Y%3D","province":"重庆","season":"","seq":0,"status":"1","team":"重庆当代力帆","teamEn":"","teamType":"1","updateTime":"","updateUser":""},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1012,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2017_1_1012.png?Expires=4642910300&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=kkPHKvWKARE%2B5K%2F5Pzljzi%2FKmxs%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2017_1_1012.png?Expires=4642910322&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=%2FkTkNUQgj8mf88fuJnGOtkCoaJw%3D","province":"","season":"","seq":0,"status":"1","team":"江苏苏宁易购","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1013,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/yatai.png?Expires=4600490292&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=4pC0O1SuYRIN44kuNg0IMFktxcw%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/yatai_s.png?Expires=4600490292&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=FqK17LVI0F3CXbbHAmjcNJ7PRKA%3D","province":"","season":"","seq":0,"status":"1","team":"长春亚泰","teamEn":"","teamType":"1","updateTime":"","updateUser":""},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1010,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/taida.png?Expires=4600490291&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=dEOcArHScnB99Nbs%2Fg4bBUJ0PVU%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/taida_s.png?Expires=4600490291&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=QW6f3wZatDBCPMSRI%2FCTsWV%2F%2B%2BU%3D","province":"","season":"","seq":0,"status":"1","team":"天津亿利","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"2018-04-13 16:08:23","createUser":"1","id":1002,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/guoan.png?Expires=4600490289&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=FY%2BHr6dYdcThdeeoP5vwWvy2d4k%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/guoan_s.png?Expires=4600490289&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=eL5N4uTUQOyuGh6YAbViWPrmHjA%3D","province":"北京","season":"","seq":0,"status":"1","team":"北京中赫国安","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1031,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2017_1_1031.png?Expires=4669257385&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=MYItkqnE%2BqfmgN%2B79oJtRzhyKak%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/2017_1_1031.png?Expires=4669257376&OSSAccessKeyId=xQ9FkjDA2vJOhB9D&Signature=8BYMPNiLMz3heOt%2B%2FQ9RX2NYesk%3D","province":"","season":"","seq":0,"status":"1","team":"河北华夏幸福","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"1","id":1001,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/luneng.png?Expires=4600490289&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=zjnKLnsMg6y10EmUUCKfXx7Rlsc%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/luneng_s.png?Expires=4600490289&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=M8HG%2Feq7hYgDaOortkhw95KSnMo%3D","province":"山东","season":"","seq":0,"status":"1","team":"山东鲁能泰山","teamEn":"Shan Dong","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":""},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1014,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/jianye.png?Expires=4600490292&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=oTFmq7WfMegHOjFK%2FT2I5j92I38%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/jianye_s.png?Expires=4600490292&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=1v%2BjOKMaeEr8PseCKKhr7%2FBFYi8%3D","province":"","season":"","seq":0,"status":"1","team":"河南建业","teamEn":"","teamType":"1","updateTime":"","updateUser":""},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1003,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/110/1003.png?Expires=4619141434&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=vfNCqKMTymeP0Pqdh9RkHznIsf4%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/1003.png?Expires=4619141434&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=F%2FeiY%2FmqKQIN7QrnaQLyFYxXdG4%3D","province":"","season":"","seq":0,"status":"1","team":"北京人和","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"},{"city":"","coach":"","country":"中国","createTime":"","createUser":"","id":1004,"intro":"","leagueId":"1","leagueName":"","logoB":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/110/1004.png?Expires=4619141434&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=91ute5iFz%2FcjAl5wnY5AmfLpLx4%3D","logoS":"http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/50/1004.png?Expires=4619141434&OSSAccessKeyId=ZMQayXeY7ZLaB0BH&Signature=mlJKspVl%2FYRP5L7BSnGpNBcxNxE%3D","province":"","season":"","seq":0,"status":"1","team":"大连一方","teamEn":"","teamType":"1","updateTime":"2018-04-13 16:08:23","updateUser":"1"}],    
            activeTeamId: '',
            num: 0,
            step: 111,
            leftNum : 0,
            hasPlayedLeague:[]
        }
    },
    props: {
        selected: '',
    },
    methods: {
        selecteTeam: function(id){
            this.activeTeamId = id
        },
        goToPrevPage: function(){
            if(this.leftNum < 0){
                this.num+=8;         
            }else{
                this.leftNum = 0;
            }
            this.leftNum = this.step*this.num;
            if(this.leftNum > 0){
                this.leftNum = 0;
            }
        },
        goToNextPage: function(){
            if(this.leftNum > -(this.teamLists.length-8)*this.step ){       
                this.num-=8;
            }else{
                this.leftNum = -(this.teamLists.length-8)*this.step;
            }
            this.leftNum = this.step*this.num;  
            if(this.leftNum <= (8-this.teamLists.length)*this.step){
                this.leftNum = (8-this.teamLists.length)*this.step;
            }
        }
    }
}


</script>

<style lang="less" scoped>
.team-nav {
    // background-color: #edeae7;
    padding: 27px 0 30px 0;
    .bx {
        .team-row {
            // margin-bottom:31px;
            .team-info {
                height:130px;     
                .team-wrapper {
                    display: inline-block;
                    width: 98px;
                    height: 130px;
                    background-color: #fff;
                    margin-right: 10px;
                    >p {
                        font-size:12px;
                        text-align: center;
                        height:41px;
                        line-height: 41px;
                    }
                    
                }
            }
            .team-logo {
                width: 87px;
                height: 81px;
                margin: 0 auto;
                text-align: center;
                border-radius: 4px;
                img {
                    width: 47px;
                    // height: 47px;
                    margin:5px 0 0;
                } 
                >p {
                    text-align: center;
                    font-size:12px;
                    font-weight: 600;
                    line-height: 1.2;
                    // color:#4b5266;
                    font-family: PingFangSC-Semibold;
                }
            }
            .other-team {
                .other-teams-wrapper {
                    width: 984px;
                    height: 130px;
                    background-color: #fff; 
                    >p {
                        font-size:12px;
                        text-align: center;
                        height:41px;
                        line-height: 41px;
                    }
                    .select-bar {
                        .select-box {
                            width: 48px;
                            height: 81px;
                            position: relative;
                        }
                        .prev {
                            img {
                                position: absolute;
                                top: 20px;
                                left: 19px;
                                cursor: pointer;
                            }
                        }
                        .next {
                            img {
                                position: absolute;
                                top: 20px;
                                right: 19px;
                                cursor: pointer;
                            }
                        }
                        .scroll-box {
                            width: 888px;
                            height: 81px;
                            overflow:hidden; 
                            position: relative;
                            -ms-touch-action: none;
                            z-index: 1;
                            #scroller {
                                position: absolute;
                                left: 0;
                                top:0;
                                transition:all 0.5s ease;
                                height: 81px;
                                
                                ul {
                                    height: 81px;
                                    
                                     li {
                                         margin:0 12px;
                                         cursor: pointer;
                                     }
                                     li:hover {
                                         background-color: #ecf0f1;
                                     }
                                }
                            }
                           
                        }                      
                    }
                }
            }
            .active {
                background-color: #35aae6!important;
                color: #fff!important;
            }
        }
    }
}
</style>
