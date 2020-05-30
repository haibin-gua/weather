<template>
    <div class="data">
        <div><p>日出：{{data2.sr}}</p><p>日落：{{data2.ss}}</p></div>
        <div><p>湿度：{{data.hum}}</p><p>降雨概率：{{data2.pop}}%</p></div>
        <div><p>降雨量：{{data.pcpn}}毫米</p><p>气压：{{data.pres}}百帕</p></div>
        <div><p>能见度：{{data.vis}}km</p><p>紫外线：{{data2.uv_index}}</p></div>
        <div><p>风速：{{data.wind_spd}}km/h</p><p>体感温度：{{data.fl}}℃</p></div>
    </div>
</template>

<script>
export default {
    name:"DatailsData",
    props:{
        data:Object,
        data2:Object
    }
}
</script>

<style scoped>
    .data{
        width:100%;
        height:360px;
        margin-top:30px;
    }
    div{
        width:100%;
        height:70px;
        font-size: 30px;
        text-align: center;
        padding-top:5px;
    }
</style>