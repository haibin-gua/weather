<template>
    <div class="homeheader">
        <v-touch v-on:swipeleft="swiperleft" class="wrapper"> 
            <home-header></home-header>
            <home-content :content="content" :qlty="qlty"></home-content>
            <home-today :hourly="hourly"></home-today>
            <home-future></home-future>
        </v-touch>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeContent from './components/HomeContent'
import HomeToday from './components/HomeToday'
import HomeFuture from './components/HomeFuture'
export default {
    name:'Home',
    data(){
        return{
            content:{},
            qlty:'',
            hourly:[]
        }
    },
    components:{
        HomeHeader,
        HomeContent,
        HomeToday,
        HomeFuture
    },
    methods:{
    swiperleft: function () { //左滑切换到details页
      this.$router.push('Details');
    }
    },
    created(){
            this.$http.get('weather/now?location=beijing&key=77a4db6891a64ef293bf9c03c57aebf5')
                .then(res=>{
                    this.content = res.data.HeWeather6[0].now
                }),
            this.$http.get('air/now?location=beijing&key=77a4db6891a64ef293bf9c03c57aebf5')
                .then(res=>{
                    this.qlty = res.data.HeWeather6[0].air_now_city.qlty
                }),
            this.$http.get('weather/hourly?location=beijing&key=77a4db6891a64ef293bf9c03c57aebf5')
                .then(res=>{
                    this.hourly = res.data.HeWeather6[0].hourly
            })
    }
}
</script>

<style scoped>

</style>