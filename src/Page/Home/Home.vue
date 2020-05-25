<template>
    <div class="homeheader">
        <home-header></home-header>
        <home-content></home-content>
        <home-today></home-today>
        <home-future></home-future>
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
    }
}
</script>

<style scoped>

</style>