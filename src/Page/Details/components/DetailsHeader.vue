<template>
    <div class="header">
        <div class="header-left" @click="back"><van-icon name="arrow-left" size="80px"/></div>
        <div class="header-center">{{city}}</div>
    </div>
</template>

<script>
export default {
    name:'DetailsHeader',
    props:{
        city:String
    },
    methods:{
        back(){
            this.$router.push('Home')
        }
    }
}
</script>

<style scoped>
    .header{
        width:100%;
        height:130px;
        display: flex;
        justify-content: flex-start;
    }
    .header-left{
        width:80px;
        height:80px;
        margin-left:20px;
        margin-top:20px;
    }
    .header-center{
        width:100px;
        height:130px;
        font-size: 50px;
        line-height: 50px;
        margin-left:250px;
        line-height: 130px;
    }
    .icon{
        line-height: 130px;
    }
</style>