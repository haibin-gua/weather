<template>
    <div class="details">
        <img src="../../assets/bj.jpg">
        <v-touch v-on:swiperight="swiperight" class="wrapper">
            <details-header :city="city"></details-header>
            <details-exponent :exponent="exponent"></details-exponent>
            <details-data :data="data" :data2="data2"></details-data>
        </v-touch>
    </div>
</template>

<script>
import DetailsHeader from './components/DetailsHeader'
import DetailsExponent from './components/DetailsExponent'
import DetailsData from './components/DetailsData'
export default {
    name:"Details",
    data(){
        return{
            exponent:[],
            data:{},
            data2:{},
            city:''
        }
    },
    components:{
        DetailsHeader,
        DetailsExponent,
        DetailsData
    },
        methods:{
        swiperight: function () { //右滑切换到Home页
        this.$router.push('/Home');
        }
    },
    created(){
        this.$http.get('weather/lifestyle?location=auto_ip&key=77a4db6891a64ef293bf9c03c57aebf5')
            .then(res=>{
                this.exponent = res.data.HeWeather6[0].lifestyle
                this.city = res.data.HeWeather6[0].basic.location
            }),
        this.$http.get('weather/now?location=auto_ip&key=77a4db6891a64ef293bf9c03c57aebf5')
            .then(res=>{
                this.data = res.data.HeWeather6[0].now
            }),
        this.$http.get('weather/forecast?location=auto_ip&key=77a4db6891a64ef293bf9c03c57aebf5')
            .then(res=>{
                console.log(res.data)
                this.data2 = res.data.HeWeather6[0].daily_forecast[0]
            })
    }
}
</script>

<style scoped>
    .details img{
        width:100%;
        height:100%;
        z-index:-1000;
        position: fixed;
    }
</style>