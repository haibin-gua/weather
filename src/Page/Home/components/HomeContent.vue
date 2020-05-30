<template>
    <div class="homecontent">
        <div class="content-left">
            <div class="content-left-top"><img :src="imgUrl"></div>
            <div class="content-left-bottom" @click="refresh"><van-icon name="replay" />刷新一下</div>
        </div>
        <div class="content-right">
            <span>{{content.tmp}}</span><span>℃</span>
            <p style="font-size:50px;text-align:center">{{content.cond_txt}}</p>
            <div class="wrapper">
                <p>风力：{{content.wind_dir}} {{content.wind_sc}}级</p>
                <p>空气质量：{{qlty}}</p>
                <p>{{$moment(time).format('MMMMDo dddd')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeContent",
    props:{
        content:Object,
        qlty:String,
        time:String
    },
    computed:{
        imgUrl:function(){
            return 'static/cond-icon-heweather/'+this.content.cond_code+'.png'
        }
    },
    methods:{
        refresh:function(){
            this.$router.go(0)  //下拉刷新重新加载页面发送请求
        }
    }
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
    .content-left-top img{
        width:280px;
        height:280px;
        margin-left:30px;
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