<template>
    <div class="future">
        <div class="future-top">未来7天天气情况</div>
        <div id="main" style="width: 800px;height:420px;"></div>
    </div>    
</template>

<script>
export default {
   name:"HomeFuture",
   data(){
       return{

       }
   },
   methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  // 指定图表的配置项和数据
		  var option = {
    xAxis: {
        type: 'category',
        data: ['5.26', '5.27', '5.28', '5.29', '5.30', '5.31', '6.1']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [21, 22, 23, 24, 25, 26, 27],
        type: 'line'
    }]
};

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },
  mounted() {
  	this.myEcharts();
  }
}
</script>

<style scoped>
    .future{
        width:100%;
        height:450px;
        border:1px solid pink;
        margin-top:40px;
    }
    .future-top{
        width:100%;
        height:30px;
        text-align: center;
        font-size: 30px;
        border-bottom:1px solid red;
    }
</style>