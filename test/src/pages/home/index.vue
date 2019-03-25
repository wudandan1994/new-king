<template>
    <div id="home-component">
        <header>
            <span class="menu">
                <van-icon name="wap-nav" />
            </span>  
            <span>首页</span>
            <span >
                <span class="location">
                    <van-icon name="location-o" />
                </span>
                <span>上海</span>
            </span>
        </header>
        <!-- 轮播图模块 -->
        <div class="swipe">
            <!-- <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe> -->
        </div>
        <!-- 查询模块 -->
        <div class="search">
            <ul>
                <li>
                    <van-icon name="more" class="zx-search" />
                    <span>征信查询</span>
                </li>
                <li>
                    <van-icon name="more" class="zx-search" />
                    <span>升级代理</span>
                </li>
                <li>
                    <van-icon name="more" class="zx-search" />
                    <span>违规查询</span>
                </li>
                <li>
                    <van-icon name="more" class="zx-search" />
                    <span>签到打卡</span>
                </li>
            </ul>
        </div>
        <!-- 名片咨询模块 -->
        <div class="business-card">
            <span class="information">名片资讯</span>
            <span class="Investment">《投资者说》“老中青”三位嘉宾为小散解套出...</span>
        </div>
        <!-- 信用卡模块 -->
        <div class="credit">
            <ul>
                <router-link  tag="li" to="/home/cardCenter">
                    <span class="handle"><van-icon name="description" /></span>
                    <div class="channel">
                        <h3>信用卡办理</h3>
                        <p>佣金当天结算</p>
                        <span>官方渠道</span>
                    </div>
                </router-link>
                <router-link tag="li" to="/home/receivables">
                    <span class="handle"><van-icon name="description" /></span>
                    <div class="channel">
                        <h3>商户收款</h3>
                        <p>快捷支付</p>
                        <span>落地商户</span>
                    </div>
                </router-link>
                <li>
                    <span class="handle"><van-icon name="description" /></span>
                    <div class="channel">
                        <h3>我要贷款</h3>
                        <p>实时审批&nbsp;授信额度</p>
                        <span>GU>></span>
                    </div>
                </li>
                <li>
                    <span class="handle"><van-icon name="description" /></span>
                    <div class="channel">
                        <h3>信用卡管家</h3>
                        <p>落地商户空卡周转</p>
                        <span>智能还款</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 详情模块 -->
        <div class="details">
            <ul>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
                <li>
                    <span>
                        <van-icon name="friends" />
                    </span>
                    <div class="detail-item">
                        <h3>授权分润</h3>
                        <p>给实习会员设置分润</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     data() {
    return {
        // 轮播图图片
      images: []  
    }
  }
    
}
</script>

<style lang="less" >
   #home-component {
       background-color: #eee;
       >header {
        height:46px;
        background-color: #000; 
        color:white;
        display:flex;
        line-height: 46px;
        justify-content: space-around;
        align-items: center;
        >.menu {
            margin-top:10px;
        }
        .location {
            margin-top:10px;
        }
       }
       >.swipe {
           height: 300px;
           background-color: orange;
       }
       >.search {
           margin-top:15px;
           background-color: #fff;
           height: 110px;
           >ul{
               list-style: none;
               display: flex;
               align-items: center;
               height: 100%;
               border-bottom: 1px solid #ccc;
               >li {
                   width:25%;
                   text-align: center;
                   >.zx-search {
                       display:block;
                       font-size:60px;
                   }
               }
           }
       }
       >.business-card {
           display: flex;
           flex-wrap: nowrap;
           height: 100px;
           background-color: white;
           >.information {
               font-weight: bolder;
               margin-left:10px;
               float:left;
               line-height: 100px;
           }
           >.Investment {
               float:right;
               margin-top:25px;
               margin-left:20px;
           }
       }
       >.credit {
           margin-top:20px;
           background-color: #fff;
           >ul {
               display: flex;
               flex-wrap: wrap;
               justify-content: space-around;
               padding:10px;
               list-style: none;
               >li {
                   display: flex;
                   justify-content: space-around;
                   width:47%;
                   border:3px solid #ccc;
                   border-radius:10px;
                   padding-bottom:30px;
                   padding-top:15px;
                   margin-top:10px;
                   background-color:#FAFAFA;
                   >.handle {
                       color:#CF9C5D;
                       font-size: 40px;
                       margin-left: 10px;
                       margin-top:30px;
                   }
                   >.channel {
                       text-align: left;
                       flex:1;
                       margin-left:30px;
                       >h3 {
                           font-size:30px;
                           font-weight: bolder;
                       }
                       >p {
                           font-size:12px;
                           margin-top:10px;
                           margin-bottom:10px;
                           color:#bbb;
                       }
                       >span {
                           border:2px solid #000;
                           color:white;
                           background-color:#CF9C5D;
                           border-radius:15px;
                           padding:1px 20px 5px 20px;
                           font-size: 14px;
                           margin-bottom: 10px;
                       }
                   }

               }
           }
       }
       >.details {
           margin-top:10px;
           border-top:1px solid #ccc;
           background-color: #fff;
           >ul{
               display: flex;
               flex-wrap: wrap;
               >li {
                   width:50%;
                   display: flex;
                   justify-content: space-around;
                   align-items: center;
                   border-bottom: 1px solid #ccc;
                   border-right: 1px solid #ccc;
                   box-sizing: border-box;
                   >span {
                       margin-left: 50px;
                       font-size: 40px;
                       color:#CF9C5D;
                   }
                   >.detail-item {
                       margin-left:20px;
                       >h3 {
                           font-weight: bolder;
                           font-size: 30px;
                           margin-top:30px;
                           margin-bottom: 20px;
                       }
                       >p {
                           font-size:14px;
                           margin-bottom: 20px;
                           color:#bbb;
                       }
                   }
               }
           }
       }

   }

</style>
