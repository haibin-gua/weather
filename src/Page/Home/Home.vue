<template>
    <div class="homeheader">
        <img src="../../assets/bj.jpg">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <v-touch v-on:swipeleft="swiperleft" class="wrapper"> 
                <home-header :header="header"></home-header>
                <home-content :content="content" :qlty="qlty" :time="time"></home-content>
                <home-today :hourly="hourly"></home-today>
                <home-future></home-future>
                <home-footer></home-footer>
            </v-touch>
        </van-pull-refresh>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeContent from './components/HomeContent'
import HomeToday from './components/HomeToday'
import HomeFuture from './components/HomeFuture'
import HomeFooter from './components/HomeFooter'
export default {
    name:'Home',
    data(){
        return{
            content:{},
            qlty:'',
            hourly:[],
            header:'',
            time:'',
            isLoading: false
        }
    },
    components:{
        HomeHeader,
        HomeContent,
        HomeToday,
        HomeFuture,
        HomeFooter
    },
    methods:{
    swiperleft: function () { //左滑切换到details页
      this.$router.push('Details');
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.$router.go(0)  //下拉刷新重新加载页面发送请求
      }, 1000);
    },
    },
    mounted(){
            this.$http.get('weather/now?key=77a4db6891a64ef293bf9c03c57aebf5&location='+this.$store.state.city)
                .then(res=>{
                    this.content = res.data.HeWeather6[0].now
                    this.time = res.data.HeWeather6[0].update.loc
                }),
            this.$http.get('air/now?key=77a4db6891a64ef293bf9c03c57aebf5&location='+this.$store.state.city)
                .then(res=>{
                    this.qlty = res.data.HeWeather6[0].air_now_city.qlty
                }),
            this.$http.get('weather/hourly?key=77a4db6891a64ef293bf9c03c57aebf5&location='+this.$store.state.city)
                .then(res=>{
                    this.hourly = res.data.HeWeather6[0].hourly
            }),
            this.$http.get('weather/now?key=77a4db6891a64ef293bf9c03c57aebf5&location='+this.$store.state.city)
                .then(res=>{
                    this.header = res.data.HeWeather6[0].basic.location
                })
    }
}
</script>

<style scoped>
    img{
        width:100%;
        height:100%;
        position: fixed;
        z-index: -1000;
    }
</style>