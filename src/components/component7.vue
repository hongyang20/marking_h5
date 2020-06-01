<template>
<div class="container">
   <div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">效果提升计划</h1>
   </div>
   <h1 class="h2">CPC/CPD提升转化，使得投放更灵活、更有效</h1>
    <div class="cpc"><h1>CPD应用商店</h1></div>
    <div class="xuline delay-1"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <div class="point delay-1"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"><img src="../../static/images/p6_1.jpg"></div>
    <div class="line2 delay-2"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <div class="point2 delay-2"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"><img src="../../static/images/p6_1.jpg"></div>
    <div class="line3 delay-3"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <div class="point3 delay-3"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"><img src="../../static/images/p6_1.jpg"></div>
    <div class="line4 delay-4"  :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
    <!-- 手机图片div -->
    <div class="bottom" :class="{animated:addAnimation, bounceInRight:addAnimation, slower :addAnimation}"><img src="../../static/images/P7.jpg"></div>
    <ul class="dmp">
        <li class="delay-1" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">分词出价<h1>对多个提词进行出价，提升效率，及时优化提词投放效果</h1></li>
        <li class="delay-2" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">动态icon<h1>增加“GIF”动图，吸引用户注意力，显著提升点击率</h1></li>
        <li class="delay-4" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">内容外显<h1>助力抢占竞品量级，提升用户点击率，提升品牌感知</h1></li>
    </ul>
    
</div>
</template>
<script>
export default {
    name:'component7',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch6' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch6'
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
            margin-left: .4rem;
            margin-top: .8rem;         
            height: .52rem;
        }   
    }
      //蓝色方块
        .blue {
            width: 0.15rem;
            height: 100%;
            background-color: #0078FF
        }
        .inline {
            float: left;
        }
        .div_title h1{
            font-size:.56rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: .16rem;           
        }
         .h2 {
            clear: both;
            width: 4.98rem;
            line-height: .55rem;
            margin-left: .4rem;
            margin-top: .58rem;
            font-size:.40rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            text-align: left;
            color:rgba(30,30,30,1);
        }
        .cpc {
            width: 2.63rem;
            height: .6rem;
            margin-top: .29rem;
            margin-left: .4rem;
            border: rgba(0,120,255,1) dashed .02rem;
            h1{
                margin: .14rem .26rem;
                font-size:.32rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:bold;
                color:rgba(0,120,255,1);
            }
        }
        .xuline,.line2,.line3,.line4 {             
            position: absolute;
            margin-top: 0rem;
            height: .54rem;
            margin-left:  .67rem;
            border-left: #0078FF dashed .02rem;          
        }
        .line2 {
            margin-top: .76rem;
            height: 1.7rem;
        }
         .line3 {
            margin-top: 2.62rem;
            height: 1.66rem;
        }
        .line4 {
            margin-top: 4.54rem;
            height: 1.7rem;
        }
        .point,.point2,.point3 {
             position: absolute;
            margin-top: .54rem;
            width: .22rem;
            height: .22rem;
            margin-left:  .57rem;
            img{
                width: 100%;
            }
        }
        .point2 {
             margin-top: 2.42rem;
        }
        .point3 {
             margin-top: 4.28rem;
        }
        .dmp {
            float: left;
            margin-top: .4rem;
            margin-left: 1.04rem;
            li{
                text-align: left;
                font-size:.32rem;
                font-family:FZLanTingHeiS-B-GB;
                font-weight:400;
                color:rgba(0,120,255,1);
                line-height:.54rem;
                margin-bottom: .42rem;
            }
            h1{
                font-size:.32rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:400;
                color:rgba(30,30,30,1);
                width: 5.8rem;
                line-height:.46rem;
            }
        }
        .bottom {
            position: absolute;
            margin-left: .4rem;
            margin-top: 6.26rem;
            width: 6.4rem;
            height: 2.6rem;
            border: rgba(0,120,255,1) dashed .02rem;
            img {
                width: 6.27rem;
                margin: .06rem;
            }
        }
        .delay-1 {animation-delay: 0.5s;}
        .delay-2 {animation-delay: 0.9s;}
        .delay-3 {animation-delay: 1.3s;}
        .delay-4 {animation-delay: 1.7s;}
        .delay-5 {animation-delay: 2.1s;}
</style>
