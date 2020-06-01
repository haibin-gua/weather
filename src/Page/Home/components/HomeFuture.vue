<template>
    <div class="future">
        <div class="future-top">未来7天天气情况</div>
        <div id="main" style="width: 800px;height:420px;"></div>
    </div>    
</template>

<script>
export default {
   name:"HomeFuture",
   methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));
		  // 指定图表的配置项和数据
		  var option = {
    xAxis: {
        type: 'category',
        axisLabel:{
            textStyle:{
                fontSize:20
            }
        },
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            textStyle:{
                fontSize:20
            }
        },
    },
    series: [{
        data: [],
        type: 'line'
    }]
};
//异步加载数据
 this.$http.get('weather/forecast?key=77a4db6891a64ef293bf9c03c57aebf5&location='+this.$store.state.city)
                .then(res=>{
                var xdata = [],ydata = [];
                for(let i = 0;i<res.data.HeWeather6[0].daily_forecast.length;i++){
                    xdata.push(this.$moment(res.data.HeWeather6[0].daily_forecast[i].date).format('MM-DD')); //使用moment将请求的时间格式化
                    ydata.push(res.data.HeWeather6[0].daily_forecast[i].tmp_max);
                }
                //填入数据
                myChart.setOption({
                    xAxis: {
                        data: xdata
                    },
                    series: [{
                        itemStyle : { normal: {label : {show: true,fontSize:25}}},
                        data: ydata
                    }]
                });
                })  

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },
  mounted() {
      this.myEcharts();
  },
}
</script>

<style scoped>
    .future{
        width:100%;
        height:450px;
        margin-top:40px;
    }
    .future-top{
        width:100%;
        height:30px;
        text-align: center;
        font-size: 30px;
        border-bottom:1px solid black;
    }
</style>