<template>
    <div class="exponent">
        <div class="exponent-top">今日生活指数</div>
        <div class="exponent-bottom">
            <div><van-icon name="fire-o" />紫外线很强</div>
            <div><van-icon name="fire-o" />紫外线很强</div>
            <div><van-icon name="fire-o" />紫外线很强</div>
            <div><van-icon name="fire-o" />紫外线很强</div>
            <div><van-icon name="fire-o" />紫外线很强</div>
            <div><van-icon name="fire-o" />紫外线很强</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailsExponent"
}
</script>

<style scoped>
    .exponent{
        width:100%;
        height:550px;
    }
    .exponent-top{
        width:40%;
        font-size: 50px;
        margin-left:20px;
        margin-top:10px;
    }
    .exponent-bottom{
        width:100%;
        height:480px;
        display: flex;
        flex-wrap: wrap;
    }
    .exponent-bottom div{
        width:49%;
        height:155px;
        border:1px solid black;
        margin:0 auto;
    }
    .exponent-bottom div:nth-child(even){
        border-right:none;
        padding-left:12px;
        padding-top:5px;
    }
    .exponent-bottom div:nth-child(odd){
        border-left:none;
        padding-top:5px;
    }
</style>