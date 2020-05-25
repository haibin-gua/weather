<template>
    <div class="homecontent">
        <div class="content-left">
            <div class="content-left-top"><van-icon class="content-left-icon" name="like-o" size="200px"/></div>
            <div class="content-left-bottom"><van-icon name="replay" />刷新一下</div>
        </div>
        <div class="content-right">
            <span>20</span><span>℃</span>
            <p style="font-size:50px;text-align:center">多云</p>
            <div class="wrapper">
                <p>风力：西北风</p>
                <p>空气质量：良好</p>
                <p>5月25日 星期一</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .homecontent{
        width:100%;
        height:350px;
        display: flex;
        justify-content: flex-start;
    }
    .content-left{
        width:49%;
        height:350px;
    }
    .content-left-top{
        width:100%;
        height:70%;
    }
    .content-left-icon{
        margin-top:20px;
        margin-left:80px;
    }
    .content-left-bottom{
        height:100px;
        font-size: 35px;
        text-align: center;
        line-height: 100px;
    }
    span:first-child{
        font-size: 120px;
        margin-left:80px;
    }
    span:nth-child(2){
        font-size:70px;
    }
    .wrapper{
        font-size: 35px;
        margin-top:18px;
        margin-left:45px;
    }
    .wrapper p{
        padding-top:16px;
    }
</style>