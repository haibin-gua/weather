<template>
    <div class="today">
        <div class="today-top">今日24小时天气情况</div>
        <div class="today-bottom">
            <div class="today-bottom-item" v-for="(item,index) in hourly" :key="index">
                <p></p>
                <p>{{item.tmp}}</p>
                <p>{{item.tmp}}℃</p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:"HomeToday",
    props:{
        hourly:Array
    }
}
</script>

<style scoped>
    .today{
        width:100%;
        height:230px;
        margin-top:20px;
        border-bottom:1px solid red;
    }
    .today-top{
        width:100%;
        height:30px;
        font-size:30px;
        text-align: center;
        border-bottom: 1px solid red;
    }
    .today-bottom{
        width:100%;
        height:195px;
        display: flex;
        justify-content:start;
    }
    .today-bottom-item{
        width:10%;
        height:100%;
        text-align: center;
        margin-left: 10px;
    }
    .today-bottom-item p{
        font-size:30px;
        padding-top:30px;
    }
</style>