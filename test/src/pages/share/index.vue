<template>
    <div id="share-component">
        <header>
            <span class="left-arrow">
                <van-icon name="arrow-left" />
            </span>
            <span>分享</span>
            <span class="right-arrow">
                <van-icon name="ellipsis" />
            </span>
        </header>
        <div class="contain">
            <div class="poster">
                <ul class="top">
                    <li>
                        <span class="logo">
                            <van-icon name="friends" />
                        </span>
                        <p>特色海报</p>
                    </li>
                    <li>
                        <span class="logo">
                            <van-icon name="friends" />
                        </span>
                        <p>推广原则</p>
                    </li>
                    <li>
                        <span class="logo">
                            <van-icon name="friends" />
                        </span>
                        <p>团队数据</p>
                    </li>
                </ul>
                <ul class="bottom">
                    <li>
                        <span>0</span>
                        <p>推广锁粉</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>推广锁粉</p>
                    </li>
                    <li class="fans">
                        <span>0</span>
                        <p>推广锁粉</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" >
  #share-component {
      >header {
          height: 46px;
          line-height: 46px;
          background-color: #000;
          color:white;
          width:100%;
           position: fixed;
           display: flex;
           box-sizing: border-box;
           justify-content: space-between;
           >.left-arrow {
               margin-left:20px;
           }
           >.right-arrow {
               margin-right:20px;
           }
      }
      >.contain {
          padding-top:46px;
          >.poster {
              background-color: #24292F;
              >.top {
                  display: flex;
                  justify-content: space-between;
                  padding-top:30px;
                  padding-bottom: 10px;
                  >li {
                      text-align: center;
                      width:33.33%;
                     >.logo {
                         font-size:60px;
                         margin-bottom:30px;
                         color:white;
                     } 
                     > p {
                         margin-bottom: 10px;
                         color:#ddd;
                     }
                  }
              }
              >.bottom {
                  color:#eee;
                  display: flex;
                  justify-content: space-between;
                  >li {
                      width:33.33%;
                      text-align: center;
                      border-right: 1px solid #fff;
                      margin-top:20px;
                      margin-bottom: 30px;
                      &.fans {
                          border:none;
                      }
                      >span {
                          margin-bottom: 20px;
                      }
                  }
              }
          }
      }
  }
</style>
