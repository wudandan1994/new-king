<template>
    <div id="receivables">
        <header>
            <p><span><van-icon name="arrow-left" /></span></p>
            <p>商户收款</p>
            <p><span><van-icon name="ellipsis" /></span> </p>
        </header>
        <div class="container">
            <div class="portrait">
                <p><span><van-icon name="manager" /></span></p>
                <div class="recommend">
                    <p>
                        <span>可乐—5-2</span>
                        <span><van-icon name="info-o" />实习</span>
                    </p>
                    <p>推荐码：10472992</p>
                </div>
                <p>(&nbsp;推荐人&nbsp;)</p>
            </div>
            <div class="merchant">
                <div class="pay">
                    <p>
                        <span><van-icon name="photo" /></span>
                        <span>设置金额</span>
                    </p>
                    <p>
                        <span>￥</span>
                        <input type="number" placeholder="请输入金额最低500元">
                    </p>
                     <p>
                         <span>立即支付</span>
                     </p>
                </div>
                <p>
                    <span><van-icon name="label"/></span>&nbsp;&nbsp;<b class="bold">商户收款</b>，支付通道新开户需要实名注册，信用卡应与绑定的结算卡户名要一致，<span>如出现没到账请及时更换收款储蓄卡后</span>
                     ，及时联系客服登记核查，感谢您的理解 。
                </p>
            </div>
            <div class="transaction">
                <ul>
                    <router-link tag="li" to="/home/receivables/rate">
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>我的费率</p>
                            <p>通道费率详细说明</p>
                        </div>
                    </router-link>
                    <li>
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>交易查询</p>
                            <p>交易查询详细记录</p>
                        </div>
                    </li>
                    <li>
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>通道说明</p>
                            <p>单笔交易限额明细</p>
                        </div>
                    </li>
                    <li>
                        <p><span><van-icon name="gold-coin"/></span></p>
                        <div>
                            <p>储蓄卡管理</p>
                            <p>添加回款账户储蓄</p>
                        </div>
                    </li>
                </ul>
            </div>
             <div class="statistics">
                 <ul>
                     <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>操作流程说明</span>&nbsp;&nbsp;<span>(新手必看)</span><span><van-icon name="arrow" /></span> </p>    
                                     
                     </li>
                     <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>实名认证</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>我的分润</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>商户收款明细</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                      <li>
                         <span><van-icon name="underway" /></span>
                         <p><span>收款统计</span> <span><van-icon name="arrow" /></span> </p>                                       
                     </li>
                 </ul>
             </div>
            <footer>
                
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
   #receivables {
       >header {
           height: 46px;
           line-height: 46px;
           width:100%;
           padding-top:10px;
           background-color: #000;
           display: flex;
           justify-content: space-between;
           color:#fff;
       }
       >.container {
           background-color:#ECF0F3; 
           >.portrait {
               background-color:#343338; 
               color:#eee;
               display: flex;
               padding-left:40px;
                justify-content: space-between;
                padding-top:20px;
                height: 400px;
                >p {
                    &:nth-of-type(1){
                        font-size:100px;
                        color:pink;
                    }
                }
                >.recommend {
                    margin-left:-150px;
                    >p {
                        &:nth-of-type(1) {
                            font-size: 36px;
                        }
                        &:nth-of-type(2) {
                            color:#ddd;
                            margin-top:30px;
                            margin-bottom:20px;
                            font-size: 20px;
                        }
                    }
                }
                >p {
                    &:nth-of-type(2) {
                        margin-top:50px;
                    }
                }
           }
           >.merchant {
               background-color: #ECF0F3;
               padding-top:160px;
               position: relative;
               >.pay {
                   width:92%;
                   background-color:#fff;
                   position: absolute;
                   top:-280px;
                   left:0px;
                   margin:20px;
                   border-radius: 10px;
                   padding-left:30px;
                   box-shadow: 0px 1px 2px 3px  #ccc;
                   >P{
                       &:nth-of-type(1){
                           margin-top:40px;
                           font-size:30px;
                           color:#000;
                       }
                       &:nth-of-type(2){
                           margin-top:50px;
                           margin-bottom:50px;
                           font-size: 30px;
                           >span {
                               font-weight: bold;
                           }
                           >input {
                               border:0px;
                                color:#000;
                           }
                       }
                       &:nth-of-type(3){
                           background-color:#9E6A14; 
                           color:#fff;
                           text-align: center;
                           padding-top:35px;
                           padding-bottom: 35px;
                           border-radius: 10px;
                           margin-bottom: 40px;
                           font-size: 38px;
                           margin-right:40px;
                       }
                   }
               }
               >p {
                   line-height:50px;
                   padding-bottom: 20px;
                   color:#C3C7CA;
                   padding-left: 20px;
                   padding-right: 20px;
                   >span{
                       &:nth-of-type(1){
                           color: #ED7930;
                       }
                       &:nth-of-type(2){
                           color:#9E6A14;
                       }
                   }
                   >.bold {
                       font-weight: bold;
                   }
               }
           }
           >.transaction {
               >ul{
                   display: flex;
                   flex-wrap: wrap;
                   border-bottom: 1px solid #ccc;
                   background-color: #fff;
                   >li {
                       box-sizing: border-box;
                       width:50%;
                       border-top:1px solid #ccc;
                       display: flex;
                       justify-content: center;
                       padding-top:30px;
                       padding-bottom:30px;
                       >p {
                           margin-right:10px;
                           margin-top:20px;
                       }
                       >div {
                           > p {
                               &:nth-of-type(1) {
                                   font-size:38px;
                                   color:#000;
                                   margin-bottom:30px;
                               }
                               &:nth-of-type(2) {
                                   color:#ccc;

                               }
                           }
                       }
                       &:nth-of-type(1),
                       &:nth-of-type(3) {
                           border-right: 1px solid #ccc;
                       }
                   }
               }
           }
           >.statistics {
               margin-top:20px;
               background-color: #fff;
               >ul{
                   >li {
                       display: flex;
                       justify-content: space-between;
                       padding:20px 10px;
                       border-bottom: 1px solid #ccc;
                       >p {
                           display: flex;
                           margin-left:10px;
                           flex: 1;
                           justify-content: space-between;
                       }
                   }
               }
           }
       }
   }
</style>
