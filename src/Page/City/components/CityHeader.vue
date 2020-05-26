<template>
    <div class="header">
        <div class="header-left"><van-icon name="arrow-left" size="70px"/></div>
        <div class="header-right">城市列表</div>
    </div>
</template>

<script>
export default {
    name:"CityHeader"
}
</script>

<style scoped>
    .header{
        width:100%;
        height:120px;
        border:1px solid pink;
        display: flex;
        align-items: center;
    }
    .header-left{
        margin-left:30px;
    }
    .header-right{
        margin-left:210px;
        font-size: 40px;
    }
</style>