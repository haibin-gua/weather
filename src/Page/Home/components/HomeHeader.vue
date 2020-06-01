<template>
    <div class="homeheader">
         <div class="homeheader-left" is-link @click="showPopup"><van-icon name="exchange" size="60px"/></div>
            <van-popup
            v-model="show"
            position="bottom">
            <van-area :area-list="areaList" :columns-num="2" ref="myArea" title="标题" @change="onChange" @confirm="onConfirm" @cancel="onCancel"/>
            </van-popup>
        <div class="homeheader-center">{{this.$store.state.city}}</div>
    </div>
</template>

<script>
import areaList from '../../../assets/area'
export default {
    name:"HomeHeader",
    props:{
        header:String
    },
    data() {
    return {
      areaList,
      show:false,
      carmodel:""
    }
  },
   methods:{
    // 弹出层显示
    showPopup() {
      this.show =true;
      
    },
    //value=0改变省，1改变市，2改变区
    onChange(picker, index, value){
      let val = picker.getValues();
      // console.log(val)//查看打印
      let areaName = ""
      for (var i = 0; i < val.length; i++) {
        areaName = areaName+(i==0?"":"/")+val[i].name
      }
      this.carmodel = areaName
    },
    //确定选择城市
    onConfirm(val){
      this.$store.commit('changeCity',val)
      //console.log(val[1].name)
      this.show = false//关闭弹框
      this.$router.go(0)
    },
    //取消选中城市
    onCancel(){
       this.show = false
       this.$refs.myArea.reset()// 重置城市列表
    }

  }
}
</script>

<style scoped>
    .homeheader{
        width:99%;
        height:130px;
        display: flex;
        justify-content: flex-start;
    }
    .homeheader-left{
        width:80px;
        height:130px;
        margin-left:20px;
        margin-top:30px;
    }
    .homeheader-center{
        width:300px;
        height:130px;
        text-align: center;
        font-size: 60px;
        line-height: 50px;
        line-height: 130px;
        margin-left:140px;
    }
    .icon{
        line-height: 130px;
    }
</style>