<template>
    <div class="container2">
       <div class="line delay-2" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
         <div class="line2 delay-3" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
         <div class="line3 delay-4" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
         <div class="line4 delay-5" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>

        <div class="div_img delay-1" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left first_left">&nbsp;22:00</h2><img src="http://183.237.68.98:9000/static/images/p4_1.png" class="inline">
        <div class="inline"><h3><span class="span1">日活：</span><span>3965W</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="span1">月活：</span><span>1.26亿</span><br>日历  睡觉看日历，备忘事项</h3></div>
        </div>

        <div class="div_img2 delay-2" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left">全天候</h2><img src="http://183.237.68.98:9000/static/images/p4_2.png" class="inline">
        <div class="inline"><h3><span class="span1">日活：</span><span>4000W</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="span1">日分发：</span><span>6.4亿</span><br>应用商店  原生应用分发场景</h3></div>
        </div>

        <div class="div_img3 delay-3" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left">全天候</h2><img src="http://183.237.68.98:9000/static/images/p4_3.png" class="inline">
        <div class="inline"><h3><span class="span1">日活：</span><span>4800W</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="span1">媒体量：</span><span>7100</span><br>广告联盟  接入多元化合作媒体</h3></div>
        </div>

        <div class="div_img4 delay-4" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left">全天候</h2><img src="http://183.237.68.98:9000/static/images/p4_4.png" class="inline">
        <div class="inline"><h3><span class="span1">日活：</span><span>4296W</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="span1">月活：</span><span>1.1亿</span><br>Jovi智慧场景  战略级资源，新营销生态</h3></div>
        </div>

        <div class="div_img5 delay-5" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left">全天候</h2><img src="http://183.237.68.98:9000/static/images/p4_5.png" class="inline">
        <div class="inline"><h3><span class="span1">开屏广告</span><span>8大应用</span><br>开屏联投  抢占核心视觉，生态全面触达</h3></div>
        </div>

         <div class="div_img6 delay-6" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left">全天候</h2><img src="http://183.237.68.98:9000/static/images/p4_6.png" class="inline">
        <div class="inline"><h3><span class="span1">在网用户</span><span>2.6亿+</span><br>Vpush  到达率高达99%</h3></div>
        </div>

        <div class="phone_border" :class="{animated:addAnimation, bounceInRight:addAnimation, slower :addAnimation}"><img src="http://183.237.68.98:9000/static/images/p4_7.png" alt=""></div>
    </div>
</template>
<script>
export default {
    name:'componentThree',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){ 
            if (this.$store.state.hasAnimated.name=='touch3' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch3'
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
      } else {
        return false;
      }
            }
    },
    mounted(){
       
    }
}
</script>
<style lang="scss" scoped>
    .container2{
        position: relative;
        background-color: white;
        background-size:cover;
        .line,.line2,.line3,.line4 {
            position: absolute;
            top: 1.067rem;
            height: 2.45rem;
            left: 2.37rem;
            border-right: #0078FF dashed 0.0267rem;
        }
        .line2{
            top: 3.51rem;
        }
        .line3{
            top: 5.96rem;
        }
        .line4{
            top: 8.41rem;
        }
        img {
            width: .88rem;
            margin-top: 0.1rem;

        }
         .inline {
            float: left;
            margin-left: 0.23rem;
        }
         h3 {
            font-size:0.3333rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            margin-left: 0.3rem;
        }
       
        h3 span{
            font-size:0.44rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:bold;
            color:rgba(0,120,255,1);
            line-height:0.7467rem;
        }
        .span1{
            font-weight:bold;
            color:#000000;
            font-size:0.36rem;
            font-family:FZLTCHJW--GB1-0;
            font-weight:400;
            
        }
        .div_img{
            position: absolute;
            width:100%;
            top: 1.4533rem;         
        }
        .div_img2{
            position: absolute;
            width:100%;
            top: 3rem;
                 
        }
        .div_img3{
            position: absolute;
            width:100%;
            top: 4.5rem;
                
        }
        .div_img4{
            position: absolute;
            width:100%;
            top: 6rem;
                  
        }
        .div_img5{
            position: absolute;
            width:100%;
            top: 7.5rem;
                    
        }
        .div_img6{
            position: absolute;
            width:100%;
            top: 9rem;
                     
        }
        .left {           
                margin-top: 0.2933rem;
                margin-left: 0.53rem;
                font-size:0.4067rem;
                font-family:Microsoft YaHei;
                font-weight:400;
        }
        .first_left {
            margin-left: 0.58rem;
        }
        .phone_border {
            position: absolute;
            margin-left: 0.5333rem;
            margin-top: 10.88rem;
            width: 8.5333rem;
            height: 5.3333rem;
            border: rgba(0,120,255,1) dashed 0.0267rem;
            img {
                width: 8.36rem;
                margin: 0.08rem;
            }
        }
        .delay-1 {animation-delay: 0.5s;}
        .delay-2 {animation-delay: 0.9s;}
        .delay-3 {animation-delay: 1.3s;}
        .delay-4 {animation-delay: 1.7s;}
        .delay-5 {animation-delay: 2.1s;}
        .delay-6 {animation-delay: 2.5s;}
     
    }
</style>
