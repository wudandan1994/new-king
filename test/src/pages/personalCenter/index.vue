<template>
    <div id="personal-center-component">
        <header>个人中心</header>
        <div class="container">
            <div class="top">
                <div class="background"></div>
                <div class="yellow"></div>
                <div class="person">
                   <div class="detail">
                       <p class="arrow">详情<van-icon name="arrow" /></p>
                       <div class="user">
                           <div class="watch">
                             <h3>
                                 <span>王多鱼</span>
                                 <span>
                                     <van-icon name="gem" />
                                 </span>
                             </h3>
                             <p>您是链名片的第100位用户</p>
                             <p>
                                 <span>升VIP</span>
                                 <span>去实名</span>
                             </p>
                           </div>
                           <div class="forward">
                                <van-icon name="manager" />
                           </div>
                       </div>
                   </div>
                   <div class="more"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
  #personal-center-component {
      >header {
          height: 46px;
          width:100%;
          background-color: #0A0E15;
          color: #fff;
          line-height: 46px;
          text-align: center;
          position: fixed;
      }
      >.container {
          width:100%;
          padding-top:45px;
          padding-bottom: 50px;
          box-sizing: border-box;
          >.top{
              position: relative;
              >.background {
                  width:100%;
                  height: 400px;
                  background-color:#222222; 
              }
              >.yellow {
                  width:100%;
                  height:150px;
                  background-color:#F8BA6D; 
              }
              >.person {
                  position: absolute;
                  height: 500px;
                  width:96%;
                  margin:20px 20px;
                  box-sizing: border-box;
                  position: absolute;
                  top:0px;
                  left:0px;
                  border:1px solid #fff;
                  border-radius: 6px;
                  >.detail {
                      background-color:#343434; 
                      color:#ddd;
                      padding-top:20px;
                      padding-bottom: 20px;
                      padding-left:30px;
                      padding-right: 20px;
                      >.arrow {
                          text-align: right;
                      }
                      >.user {
                          >.watch {

                          }
                          >.forward {

                          }

                          
                      }
                  }
              }
          }
      }
  }
</style>
