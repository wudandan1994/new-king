<template>
<div id="financial-circle-component">
<header class="header">
<div class="more end-center">
<van-icon name="weapp-nav" size='20px' @click="handleMore" />
</div>
<div class="topTwo row center">
<div class="center" :class="{ checked: isActive == '1' }" @click="getIndex">金融人脉圈</div>
<div class="center" :class="{ checked: isActive == '2' }" @click="getIndex">红包任务</div>
</div>
</header>
<div class="container">
<van-tabs v-model="active" :swipe-threshold="threshold" background="black" color="rgb(244, 197, 128)" title-inactive-color="white" title-active-color="rgb(244, 197, 128)">
<van-tab title="综合">
<financ></financ>
</van-tab>
<van-tab title="信用卡">内容 2</van-tab>
<van-tab title="贷款">内容 3</van-tab>
<van-tab title="POS机">内容 4</van-tab>
<van-tab title="无卡支付">内容 5</van-tab>
<van-tab title="保险">内容 6</van-tab>
</van-tabs>
</div>
</div>
</template>

<script>
import financ from '@/components/financial/index'
export default {
data(){
return{
topTwo: 0,
active: 0,
threshold: 6,
isActive: '1'
}
},
components: {
financ
},
methods: {
getIndex(val){
val.target.innerText == '金融人脉圈' ? this.isActive = '1' : this.isActive = '2';
},
// 获取更多
handleMore(){
console.log(this);
this.$toast('尽请期待');
}
}
}
</script>

<style lang="less" scoped>
#financial-circle-component{
color: white;
.more{
width: 98vw;
height: 100px;
}
.topTwo{
width: 50%;
height: 100px;
margin: auto;
font-size: 14px;
font-weight: 400;
>div{
width: 50%;
height: 60px;
border: solid 1px white;
}
}
>.header{
width: 100vw;
height: auto;
background-color: black;
}
.checked{
background-color: white;
color: black;
}
.container{
height:auto;
}
}
</style>
