<template>
    <div class="future">
        <div class="future-top">未来7天天气情况</div>
        <div id="myCharts" ref="myCharts"></div>
    </div>    
</template>

<script>
export default {
   name:"HomeFuture",
   data(){
       return{

       }
   }
}
</script>

<style scoped>
    .future{
        width:100%;
        height:350px;
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