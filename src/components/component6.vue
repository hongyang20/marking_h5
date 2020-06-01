<template>
<div class="container">
   <div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">效果提升计划</h1>
   </div>
   <h1 class="h2">CPC/CPD提升转化，使得投放更灵活、更有效</h1>
    <div class="cpc"><h1>CPC信息流</h1></div>
    <div class="xuline delay-1"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <div class="point delay-1"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"><img src="../../static/images/p6_1.jpg"></div>
    <div class="line2 delay-2"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <div class="point2 delay-2"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"><img src="../../static/images/p6_1.jpg"></div>
    <div class="line3 delay-3"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <div class="point3 delay-3"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"><img src="../../static/images/p6_1.jpg"></div>
    <div class="line4 delay-4"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <!-- 手机图片div -->
    <div class="bottom" :class="{animated:addAnimation, bounceInRight:addAnimation, slower :addAnimation}"><img src="../../static/images/p6.jpg"></div>
    <ul class="dmp">
        <li class="delay-1" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">星轨DMP<h1>丰富人群画像，支持更多方式拓展人群，实现人群有效触达</h1></li>
        <li class="delay-2" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">动态词包<h1>基于用户特性展示标题，匹配创意，提升体验与后向转化</h1></li>
        <li class="delay-4" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">Deeplink<h1>一键唤端跳转指定页面，有效提升活动参与度及下载转化率</h1></li>
    </ul>
    
</div>
</template>
<script>
export default {
    name:'componentSix',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch5' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch5'
                })
               return true  
            }else{
                return false
            }
        }
    },
    methods:{
             weixin() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return true
            } 
            else {
                return false;
            }
        }
    },
    mounted() {
            
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: white;
        overflow: hidden;
        background-size:cover;
        text-align: center;
        width: 100%;
          .div_title{
            margin-left: 0.5333rem;
            margin-top: 1.0667rem;         
            height: 0.6933rem;
        }   
    }
      //蓝色方块
        .blue {
            width: 0.2rem;
            height: 100%;
            background-color: #0078FF
        }
        .inline {
            float: left;
        }
        .div_title h1{
            font-size:0.7467rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: 0.2133rem;           
        }
         .h2 {
            clear: both;
            width: 6.64rem;
            line-height: 0.7333rem;
            margin-left: 0.5333rem;
            margin-top: 0.7733rem;
            font-size:0.5333rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            text-align: left;
            color:rgba(30,30,30,1);
        }
        .cpc {
            width: 3.0667rem;
            height: 0.8rem;
            margin-top: 0.3867rem;
            margin-left: 0.5333rem;
            border: rgba(0,120,255,1) dashed 0.0267rem;
            h1{
                margin: 0.1867rem 0.3467rem;
                font-size:0.4267rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:bold;
                color:rgba(0,120,255,1);
            }
        }
        .xuline,.line2,.line3,.line4 {             
            position: absolute;
            margin-top: 0rem;
            height: 0.72rem;
            margin-left:  0.8933rem;
            border-left: #0078FF dashed 0.0267rem;          
        }
        .line2 {
            margin-top: 1.0133rem;
            height: 2.2667rem;
        }
         .line3 {
            margin-top: 3.4933rem;
            height: 2.2133rem;
        }
        .line4 {
            margin-top: 6.0533rem;
            height: 2.2667rem;
        }
        .point,.point2,.point3 {
             position: absolute;
            margin-top: 0.72rem;
            width: 0.2933rem;
            height: 0.2933rem;
            margin-left:  0.76rem;
            img{
                width: 100%;
            }
        }
        .point2 {
             margin-top: 3.2267rem;
        }
        .point3 {
             margin-top: 5.7067rem;
        }
        .dmp {
            float: left;
            margin-top: 0.5333rem;
            margin-left: 1.3867rem;
            li{
                text-align: left;
                font-size:0.4267rem;
                font-family:FZLanTingHeiS-B-GB;
                font-weight:400;
                color:rgba(0,120,255,1);
                line-height:0.72rem;
                margin-bottom: 0.56rem;
            }
            h1{
                font-size:0.4267rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:400;
                color:rgba(30,30,30,1);
                width: 7.7333rem;
                line-height:0.6133rem;
            }
        }
        .bottom {
            position: absolute;
            margin-left: 0.5333rem;
            margin-top: 8.3467rem;
            width: 8.5333rem;
            height: 3.4667rem;
            border: rgba(0,120,255,1) dashed 0.0267rem;
            img {
                width: 8.3733rem;
                margin: 0.08rem;
            }
        }
        .delay-1 {animation-delay: 0.5s;}
        .delay-2 {animation-delay: 0.9s;}
        .delay-3 {animation-delay: 1.3s;}
        .delay-4 {animation-delay: 1.7s;}
        .delay-5 {animation-delay: 2.1s;}
</style>
