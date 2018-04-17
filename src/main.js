// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
import axios from 'axios'
// import Svg from './assets/js/snap.svg-min'
import store from './store/store'
import Highcharts from 'Highcharts'
import VueHighcharts from 'vue-highcharts'
import loadHighchartsMore from 'highcharts/highcharts-more';
import loadSolidGauge from 'highcharts/modules/solid-gauge';
// import HighchartMore from '../highchart/highcharts-more.js'
// import HighchartZhCN from '../highchart/highcharts-zh_CN.js'
// import SolidGauge from '../highchart/modules/solid-gauge.js'
// import Highcharts from '../highchart/highcharts.js'

// Vue.use(VueHighcharts)
// // Vue.use(Svg)
// Vue.use(Highcharts)
// Vue.use(HighchartMore)
// Vue.use(HighchartZhCN)
// Vue.use(SolidGauge)
// HighchartMore(Highcharts)
// HighchartZhCN(Highcharts)
// SolidGauge(Highcharts)
loadHighchartsMore(Highcharts);
loadSolidGauge(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

// Vue.use(VueResource)
Vue.prototype.$http = axios

// Vue.prototype.rootUrl = '/api/'
Vue.config.productionTip = false
// Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  Highcharts,
  template: '<App/>',
  components: { App }
})
