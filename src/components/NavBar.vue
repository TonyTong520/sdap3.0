<template>
    <!-- 页面导航条 -->
    <div id="nav-bar" class="nav-bar">
        <div class="bx">
            <ul class="clearfix">
                <li class="f-l">
                    <!-- <a class="select" href="javascript:;" name="index">首页</a> -->
                    <router-link to="/index">首页</router-link>
                    
                    
                </li>
                <li class="f-l">
                    <!-- <a href="javascript:;" name="video">视频分析</a> -->
                    <router-link to="/video-analysis">视频分析</router-link>
                </li>
                <li class="f-l">
                    <!-- <a href="javascript:;" name="data">数据报告</a> -->
                    <router-link to="/data">数据报告</router-link>
                </li>
            </ul>
        </div>
       
    </div> 
</template>



<script>
import '../assets/css/base.css'
import router from '../router'
export default {
  name: 'nav-bar',
  data () {
      return {
          selected: 'index'
      }
  }
}
</script>

<style lang="less" scoped>
/*公共导航条样式*/
 .nav-bar {
    height: 50px;
    background-color: #3d4254;
    .bx ul {
        li {
            line-height: 50px;
            width: 190px;
            text-align: center;
            vertical-align: middle;
            a {
                display: inline-block;
                width: 100px;
                height: 25px;
                border-radius: 4px;
                margin-top:12px;
                font-size: 14px;
                color: #fff;
                line-height: 25px;
            }
            a.router-link-active {
                background-color: #35aae6!important;
                color: #fff!important;
            }
        }
    }
}

</style>

