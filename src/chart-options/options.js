

export default {
    chartOfPassball: {
        chart: {
            type: 'solidgauge',
            marginLeft: 80
        },
        title: {
            text: null
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ 
                outerRadius: '72',
                innerRadius: '70',
                backgroundColor: '#4b5266',
                borderWidth: 0
            }, { 
                outerRadius: '56',
                innerRadius: '54',
                backgroundColor: "#9a9a9e",
                borderWidth: 0
            }, { 
                outerRadius: '38',
                innerRadius: '36',
                backgroundColor: "#cdcdcd",
                borderWidth: 0
            }]
        },
        tooltip: {
            enabled: true,
            useHTML: true,
            followPointer: true,
            formatter: function(){
                var seriesAvgPasses = "";
                var seriesPassesRate = "";
                var seriesAvgPassesRate = "";
                var seriesSuccPassesRate = "";
                var seriesAvgSuccPassesRate = "";
                if(this.series.name == "短传"){
                    obj.avgShortPasses == "" ? seriesAvgPasses = 0 :seriesAvgPasses = obj.avgShortPasses;
                    seriesPassesRate = transFloatToPercent(obj.shortPassRate);  
                    seriesAvgPassesRate = transFloatToPercent(obj.avgShortPassRate)
                    obj.shortPasses == 0 ? seriesSuccPassesRate = "0%" :seriesSuccPassesRate = transFloatToPercent((obj.succShortPasses/obj.shortPasses).toFixed(4))
                    obj.avgShortPasses == 0 ? seriesAvgSuccPassesRate = "0%" :seriesAvgSuccPassesRate = transFloatToPercent((obj.avgSuccShortPass/obj.avgShortPasses).toFixed(4))
                }else if(this.series.name == "中传"){
                    obj.avgMiddlePasses == "" ? seriesAvgPasses = 0 :seriesAvgPasses = obj.avgMiddlePasses;
                    seriesPassesRate = transFloatToPercent(obj.middlePassRate); 
                    seriesAvgPassesRate = transFloatToPercent(obj.avgMiddlePassRate)
                    obj.middlePasses == 0 ? seriesSuccPassesRate = "0%" :seriesSuccPassesRate =  transFloatToPercent((obj.succMiddlePasses/obj.middlePasses).toFixed(4))
                    obj.avgMiddlePasses == 0 ? seriesAvgSuccPassesRate = "0%" :seriesAvgSuccPassesRate = transFloatToPercent((obj.avgSuccMiddlePass/obj.avgMiddlePasses).toFixed(4))
                }else if(this.series.name == "长传"){
                    obj.avgLongPasses == "" ? seriesAvgPasses = 0 :seriesAvgPasses = obj.avgLongPasses;
                    seriesPassesRate = transFloatToPercent(obj.longPassRate); 
                    seriesAvgPassesRate = transFloatToPercent(obj.avgLongPassRate)
                    obj.longPasses == 0 ? seriesSuccPassesRate = "0%" :seriesSuccPassesRate = transFloatToPercent((obj.succLongPasses/obj.longPasses).toFixed(4))
                    obj.avgLongPasses == 0 ? seriesAvgSuccPassesRate = "0%" :seriesAvgSuccPassesRate = transFloatToPercent((obj.avgSuccLongPass/obj.avgLongPasses).toFixed(4))
                }
                return '<table style="width:200px;font-size:12px;">'+
                    '<thead>'+
                    '<tr>'+
                    '<th style="text-align:center;color:#35aae6;font-weight:600;">'+this.series.name+'数据</th>'+
                    '<th style="text-align:center;font-weight:600;">本队</th>'+
                    '<th style="text-align:center;font-weight:600;">联赛平均</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '<tr>'+
                    '<td style="text-align:center;">数据</td>'+
                    '<td style="text-align:center;">'+this.y+'</td>'+
                    '<td style="text-align:center;">'+seriesAvgPasses+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td style="text-align:center;">占总数</td>'+
                    '<td style="text-align:center;">'+seriesPassesRate+'</td>'+
                    '<td style="text-align:center;">'+seriesAvgPassesRate+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td style="text-align:center;">准确率</td>'+
                    '<td style="text-align:center;">'+seriesSuccPassesRate+'</td>'+
                    '<td style="text-align:center;">'+seriesAvgSuccPassesRate+'</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table>'
            },
            backgroundColor: '#fff',
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 0,
            textStyle: {
                color: '#000',
                // fontStyle: 'normal',
                // fontFamily: 'sans-serif',
                fontSize: 10,
                lineHeight: 12,
            }
        },
        yAxis: {
            min: 0,
            max: obj.shortPasses+obj.middlePasses+obj.longPasses,
            lineWidth: 0,
            tickPositions: []
        },
        plotOptions: {
            solidgauge: {
                borderWidth: '4px',
                dataLabels: {
                    enabled: false
                },
                linecap: '',
                stickyTracking: false
            }
        },
        series: [{
            name: '短传',
            borderColor:'#008cd6',
            data: [{
                color: "#008cd6",
                radius: '108',
                innerRadius: '100',
                y: obj.shortPasses
            }]
        }, {
            name: '中传',
            borderColor: '#35aae6',
            data: [{
                color: '#35aae6',
                radius: '84',
                innerRadius: '76',
                y: obj.middlePasses
            }]
        }, {
            name: '长传',
            borderColor:'#80d4ff',
            data: [{
                color: '#80d4ff',
                radius: '58',
                innerRadius: '50',
                y: obj.longPasses
            }]
        }]
    }

}
