<template>
  <div id="app">
    <common-header></common-header>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <common-footer></common-footer>

  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader'
import NavBar from './components/NavBar'
import TeamNav from './components/TeamNav'
import CommonFooter from '@/components/CommonFooter'

import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      // JSESSIONID:'C4E38181266E7742E0DE318608770494',
      // UM_distinctid:'162a89a8069686-0986efa12ba4bd-3f3c5501-1fa400-162a89a806a341',
      // CNZZDATA1255211782:'50861224-1523245995-http%253A%252F%252F127.0.0.1%253A8080%252F%7C1523327303'
    }
  },
  components: {
    CommonHeader,
    NavBar,
    TeamNav,
    CommonFooter
  },
  watch:{
    // "$route":'checkLogin'
  },
  created(){
    // this.checkLogin()
    // this.setCookie(this.JSESSIONID,this.UM_distinctid,this.CNZZDATA1255211782,7);
  },
  computed:mapGetters([
    'count'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
  // methods: {
    
    // checkLogin() {
    //   if(!this.getCookie('session')){
    //     // this.$router.push('/login')
    //   }else{
    //     // this.$router.push('/index')
    //   }
    // },
    // setCookie(a,b,c,exdays) {
    //   var exdate=new Date();//获取时间
    //   exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
    //   //字符串拼接cookie
    //   window.document.cookie="JSESSIONID"+ "=" +a+";path=/;expires="+exdate.toGMTString();
    //   window.document.cookie="UM_distinctid"+"="+b+";path=/;expires="+exdate.toGMTString();
    //   window.document.cookie="CNZZDATA1255211782"+"="+c+";path=/;expires="+exdate.toGMTString();
    // },
  // }
  
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
