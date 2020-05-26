<template>
    <div class="homeheader">
        <v-touch v-on:swipeleft="swiperleft" class="wrapper"> 
            <home-header></home-header>
            <home-content></home-content>
            <home-today></home-today>
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
    }
}
</script>

<style scoped>

</style>