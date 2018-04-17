<template>
  <div class="">
      <div :id="id" :option="option"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHighcharts from 'vue-highcharts'
import HighCharts from '../../highchart/highcharts'
import HighchartMore from '../highchart/highcharts-more.js'
import HighchartZhCN from '../highchart/highcharts-zh_CN.js'
import SolidGauge from '../highchart/modules/solid-gauge.js'
HighchartMore(Highcharts)
HighchartZhCN(Highcharts)
SolidGauge(Highcharts)
Vue.use(VueHighcharts, { Highcharts });
// HighchartMore(Highcharts)
// HighhcartZhCN(Highcharts)
// SolidGauge(Highcharts)
export default {
    props: {
        id: {
            type:String
        },
        option:{
            type:Object
        }
    },
    mounted(){
        console.log(this.option)
        Highcharts.chart(this.id,this.option)
    }
}
</script>

