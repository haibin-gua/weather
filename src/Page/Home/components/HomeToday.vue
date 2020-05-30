<template>
    <div class="today">
        <div class="today-top">今日24小时天气情况</div>
        <div class="today-bottom">
            <div class="today-bottom-item" v-for="(item,index) in hourly" :key="index">
                <p>{{$moment(item.time).format('hh:mm')}}</p>
                <p><img :src="imgUrl"></p>
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
    },
    computed:{
        imgUrl:function(){
            return 'static/cond-icon-heweather/'+this.hourly[0].cond_code+'.png'
        }
    }
}
</script>

<style scoped>
    .today{
        width:100%;
        height:230px;
        margin-top:20px;
        border-bottom:1px solid black;
    }
    .today-top{
        width:100%;
        height:30px;
        font-size:30px;
        text-align: center;
        border-bottom: 1px solid black;
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
        margin-left: 16px;
    }
    .today-bottom-item img{
        width:50px;
        height:50px;
    }
    .today-bottom-item p{
        font-size:30px;
        padding-top:30px;
    }
</style>