<template>
    <div id="rate">
        <header>
            <span><van-icon name="arrow-left" /></span>
            <span>我的费率</span>
            <span><van-icon name="ellipsis" /></span>
        </header>
        <div class="container">
            <div class="partner">
                <div class="detail">
                    <p><span><van-icon name="manager"/></span></p>
                    <div class="internship">
                        <p>可乐-5-3 <img src="" alt=""></p>
                        <p>推荐码：10472992</p>
                    </div>
                </div>
            </div>
            <div class="rate-explain"> 
                <p> <span ><van-icon name="label" /></span> &nbsp;&nbsp;<span>费率说明</span></p>
                <div class="reduce">
                    <p>自己刷卡可省：</p>
                    <p>升到钻石LV3最高可省：<span>0.14%+0.4/每笔</span></p>
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
  #rate {
      >header {
          height: 46px;
          line-height: 46px;
          padding-top:10px;
          background-color:#2F2B28;
          color:#fff;
          display: flex;
          justify-content: space-between;
          padding-left:10px;
          padding-right: 10px;
      }
      >.container {
          >.partner {
              width:100%;
              height: 300px;
              background-color: orange;
              position: relative;
              >.detail {
                  width:94%;
                  position: absolute;
                  background-color: #fff;
                  top:180px;
                  left:0px;
                  border-radius: 10px;
                  margin-left:20px;
                  margin-right:50px;
                  box-shadow: 0px 2px 8px 3px #ccc;
                  display: flex;
                  padding:30px;
                  > p {
                      font-size: 100px;
                      margin-top:20px;
                  }
                  >.internship {
                      margin-left:30px;
                      >p {
                          margin-top:50px;
                          &:nth-of-type(2) {
                              color:#ccc;
                              padding-bottom: 30px;
                          }
                      }
                  }
              }
          }
          >.rate-explain {
              padding-left:50px;
              >p {
                  padding-top:200px;
                  border-bottom: 4px solid #ccc;
                  padding-bottom: 20px;
                  >span {
                      &:nth-of-type(1) {
                          color:#F37344;
                      }
                      &:nth-of-type(2) {
                          font-weight: bolder;
                          font-size:38px;
                      }
                  }
              }
              >.reduce {
                  margin-top:30px;
                  border:3px solid #ccc;
                  margin-right: 30px;
                  padding:30px 20px;
                  color:#C8C8C8;
                  border-radius:12px;
                  >p {
                      &:nth-of-type(2) {
                          padding-top: 20px;
                          >span {
                              color:#000;
                          }
                      }
                  }
              }
            }

      }
  }
</style>
