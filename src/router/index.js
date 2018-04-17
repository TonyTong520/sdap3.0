import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommonHeader from '@/components/CommonHeader'
import NavBar from '@/components/NavBar'
import TeamNav from '@/components/TeamNav'
import CommonFooter from '@/components/CommonFooter'
import Login from '@/components/Login'
import Index from '@/components/Index'
import VideoAnalysis from '@/components/VideoAnalysis'

import MatchAnalysis from '@/components/MatchAnalysis'
import EventAnalysis from '@/components/EventAnalysis'
import PlayerAnalysis from '@/components/PlayerAnalysis'

import Match from '@/components/Match'
import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/vuetest',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/video-analysis',
    //   name: 'VideoAnalysis',
    //   component: VideoAnalysis,
    //   children: [
    //     {
    //       path: '',
    //       redirect: 'match-analysis'
    //     },
    //     {
    //       path: 'match-analysis',
    //       name: 'MatchAnalysis',
    //       component: MatchAnalysis
    //     },
    //     {
    //       path: 'event-analysis',
    //       name: 'EventAnalysis',
    //       component: EventAnalysis
    //     },
    //     {
    //       path: 'player-analysis',
    //       name: 'PlayerAnalysis',
    //       component: PlayerAnalysis
    //     }
    //   ] 
    // },
    // {
    //   path: '/match',
    //   name: 'Match',
    //   component: Match
    // },
    // {
    //   path: '/player',
    //   name: 'player',
    //   component: Player
    // }

    // {
    //   path: '/',
    //   name: 'Data',
    //   component: { Data }
    // }
  ]
})
