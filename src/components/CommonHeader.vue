<template>
    <div id="header" class="header">
        <div class="bx">
            <div class="sdap-info clearfix">
                <img class="logo f-l" src="../assets/images/logo.png" alt="logo" width="50px">
                <p class="sdap-version f-l">
                    创冰足球大师数据分析系统 SDAP
                    <span class="version-num">&nbsp; v3.0.0.1</span>
                </p>
                <!-- 头部右侧 -->
                <div class="header-right f-r clearfix">
                    <ul class="clearfix">
                        <li class="use-quit f-r">
                            <a href="#">
                                <span>登出</span> 
                                <i></i>
                            </a>
                        </li>
                        <li class="use-set f-r">
                            <a href="#">
                                <span>设置</span> 
                                <i></i>
                            </a>
                        </li>
    
                        <li class="use-guide f-r">
                            <a href="#">
                                <span>说明</span> 
                                <i></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>           
        </div>
    </div>
</template>



<script>
import '../assets/css/base.css'
export default {
  name: 'common-header',
  data () {
    return {
        
    }
  }
}
</script>

<style lang="less" scoped>
    /*公共头部样式*/
#header {
    height: 50px;
    background-color: #4B5266;
    .bx {
        .sdap-info {
            line-height: 50px;
            color:#fff;
            .logo {
                margin-top: 9px;
            }
            .sdap-version {
                font-size: 14px;
                margin-left:10px;
                display: inline-block;
                > span {
                    font-size: 8px;
                }
            }
        }
        .header-right ul {
            height:50xp;
            line-height: 50px;
            li {
                margin-left: 50px;
                font-size: 12px;
                height: 50px;
                a {
                    color: #8c8c91;
                    i {
                        display: inline-block;
                    }
                }
                :hover {
                    color:#fff;
                }
            }
            .use-quit {
                i {
                    background-image: url("../assets/images/use-quit1.png");
                    width: 15px;
                    height: 12px;
                }
                :hover {
                    i {
                        background-image: url("../assets/images/use-quit2.png");
                    }
                }
            }
            .use-set {
                i {
                    background-image: url("../assets/images/use-set1.png");
                    width: 14px;
                    height: 13px;
                }
                :hover {
                    i {
                        background-image: url("../assets/images/use-set2.png");
                    }
                }
            }
            .use-guide {
                i {
                    background-image: url("../assets/images/use-guide1.png");
                    width: 13px;
                    height: 13px;
                }
                :hover {
                    i {
                        background-image: url("../assets/images/use-guide2.png");
                    }
                }
            }
        }
    }
}

</style>

