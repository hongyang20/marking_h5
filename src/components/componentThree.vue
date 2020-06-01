<template>
    <div class="container">
        <div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">流量红利释放</h1>
        <h1 class="h2">2.6亿年轻高消费vivo用户</h1>
        <h1 class="h2 h2_2">18-34岁超70%，爱时尚爱娱乐</h1>
        </div>
        <div class="title"><h1>全平台全场景流量覆盖</h1></div>
        <div class="line delay-2" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
         <div class="line2 delay-3" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
         <div class="line3 delay-4" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>
         <div class="line4 delay-5" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"></div>

        <div class="div_img delay-1" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left">全天候</h2><img src="../../static/images/p2全天候.jpg" class="inline">
        <div class="inline"><h3>日活：<span>1.2亿</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>1.5亿</span><br>阅图锁屏  隐身陪伴，触网第一入口</h3></div>
        </div>
        <div class="div_img delay-2" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left time2">7:00</h2><img src="../../static/images/p2_7.jpg" class="inline">
        <div class="inline"><h3>日活：<span>6550W</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>1.5亿</span><br>天气  起床看天气，穿衣带伞</h3></div>
        </div><div class="div_img  delay-3" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
        <h2 class="inline left time3">8:00</h2><img src="../../static/images/p2_8.jpg" class="inline">
        <div class="inline"><h3>日活：<span>1600W</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>1.13亿</span><br>i音乐  晨跑，听音乐</h3></div>
        </div>

        <div class="div_img delay-4" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left time4">9:00</h2><img src="../../static/images/p2_9.jpg" class="inline">
        <div class="inline"><h3>日活：<span>8638W</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>2.3亿</span><br>浏览器  上班路上看新闻</h3></div>
        </div>

        <div class="div_img delay-5" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left time5">12:00</h2><img src="../../static/images/p2_12.jpg" class="inline">
        <div class="inline"><h3>日活：<span>1988W</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>1.2亿</span><br>视频  午休轻松一刻</h3></div>
        </div>

        <div class="div_img delay-6" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left time6">15:00</h2><img src="../../static/images/p2_15.jpg" class="inline">
        <div class="inline"><h3>日活：<span>1165W</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>1.16亿</span><br>i主题  下午茶换个心情</h3></div>
        </div>

        <div class="div_img delay-7" :class="{animated:addAnimation, fadeIn:addAnimation}">
        <h2 class="inline left time7">19:00</h2><img src="../../static/images/p2_19.jpg" class="inline">
        <div class="inline"><h3>日活：<span>1129W</span>&nbsp;&nbsp;&nbsp;&nbsp;月活：<span>6656W</span><br>电子书  下班路上学习充电</h3></div>
        </div>
            <!-- <img src="../../static/images/P3-7.jpg" class="delay-6 img" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}"> -->
         
      

    
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
            if (this.$store.state.hasAnimated.name=='touch2' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch2'
                })
               return true  
            }else{
                return false
            }
        }
    },
    methods: {
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
        let cwth = document.body.clientWidth
        if(cwth<=320){
     
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: white;
        overflow: hidden;
        background-size:cover;
          //流量红利释放
        .div_title{
            margin: 1.0667rem 0.52rem;           
            height: 0.6933rem;
            
        }
        //蓝色方块
        .blue {
            width: 0.2rem;
            height: 100%;
            background-color: #0078FF
        }
        //蓝色字
        .inline {
            float: left;
        }
         h1{
            font-size:0.7467rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: 0.2133rem;
           
        }
        .h2 {
            clear: both;
            margin-left: 0rem;
            padding-top: 0.7733rem;
            font-size:0.5333rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            color:rgba(30,30,30,1);
        }
        .h2_2 {
            padding-top: 0.1467rem;
        }
        h3 {
            font-size:0.3333rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            margin-left: 0.4rem;
        }
        h3 span {
            font-size:0.44rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:bold;
            color:rgba(0,120,255,1);
            line-height:0.7467rem;
        }
        .title {
            width: 5.3733rem;
            height: 0.8307rem;
            margin-top: 2.5333rem;
            margin-left:  0.52rem;
            border: #0078FF dashed 0.0267rem;
            h1 {
                margin: 0.2rem 0.4rem;
                font-size:0.44rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:bold;
                color:rgba(0,120,255,1);
            }
        }
        .line,.line2,.line3,.line4 {
            position: absolute;
            margin-top: 0rem;
            height: 2.6667rem;
            margin-left:  2.4667rem;
            border-left: #0078FF dashed 0.0267rem;
        }
        .line2{
            margin-top: 2.6667rem;
        }
        .line3{
            margin-top: 5.3333rem;
        }
        .line4{
            margin-top: 8rem;
        }
          .div_img{
            float: left;
            width:98%;
            margin-top: 0.2667rem;           
        }
        .div_img .left {           
                margin-top: 0.52rem;
                margin-left: 0.5467rem;
                font-size:0.36rem;
                font-family:Microsoft YaHei;
                font-weight:400;
        }
         img{
                position: relative;
                width: 1.0667rem;
                margin-left:  0.2933rem;
                margin-top: 0.1333rem;
         }
         .div_img .time2{margin-left:  0.9067rem;}
         .div_img .time3{margin-left:  0.9067rem;}
         .div_img .time4{margin-left:  0.9067rem;}
         .div_img .time5{margin-left:  0.7067rem;}
         .div_img .time6{margin-left:  0.7067rem;}
         .div_img .time7{margin-left:  0.7067rem;}
 
        .delay-1 {animation-delay: 0.5s;}
        .delay-2 {animation-delay: 0.9s;}
        .delay-3 {animation-delay: 1.3s;}
        .delay-4 {animation-delay: 1.7s;}
        .delay-5 {animation-delay: 2.1s;}
        .delay-6 {animation-delay: 2.5s;}
        .delay-7 {animation-delay: 2.9s;}
     
    }
</style>
