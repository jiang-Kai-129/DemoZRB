// 折线图echarts
var myChart = echarts.init(document.getElementsById('charts'));

myChart.setOption({
    title:{
        text:'example'
    },
    tooltip:{
        trigger:'axis'
    },
    legend:{
        data:['example']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["1","2","3","4","5"]
    },
    yAxis: {
        type: 'value'
    },
    series: [
       
        {
            name:'近七日收益',
            type:'line',
            stack: '总量',
            data:["1","2","3","4","5"]
        }
    ]
});