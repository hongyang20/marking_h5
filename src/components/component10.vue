<template>
    <div class="container">
        <div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">关与我们</h1>      
        </div>

        <div class="item1">
            <img class="item_img2" :class="{animated:addAnimation, bounceInRight:addAnimation}" src="../../static/images/p10_1.png">
            <h1>网服核代</h1>
            <span>连续两年荣膺vivo网服核心代理商，荣获2019年度最佳服务奖。</span>
            <img class="item_img1" :class="{animated:addAnimation, bounceInLeft:addAnimation}" src="../../static/images/p10_2.png">
            
        </div>
      
        <div class="item2">
            <div class= "div1"><img :class="{animated:addAnimation, pulse:addAnimation}" src="http://183.237.68.98:9000/static/images/p10_3.png"></div>
            <div class= "div2"> <h1>地缘优势</h1>
            <span>深圳总部，与vivo媒体联系更方便高效，北京分部，南北联动服务</span>
            </div>

            <div class= "div3"><h1>丰富经验</h1>
            <span>公司规模超百人，十年移动营销经验专业过硬，投放效果行业领先</span>
            </div>
            <div class= "div4"><img :class="{animated:addAnimation, pulse:addAnimation}" src="../../static/images/p10_4.png"></div>

        </div>
      
      

    
    </div>
</template>
<script>
export default {
    name:'component10',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch9' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch9'
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
          //关与我们
        .div_title{
            margin: 1.0667rem 0 0.7733rem 0.52rem;           
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
         .div_title h1{
            font-size:0.7467rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: 0.2133rem;
           
        }
      
        .item1 {
            width: 8.6667rem;
            height: 5.04rem;
            margin-left: 0.5333rem;
                    
            }
        .item1  h1,.item2  h1 {

                font-size: 0.5333rem;
                font-family:FZLanTingHeiS-B-GB;
                font-weight:600;
                margin-bottom: 0.3467rem;
            }
        .item1  span,.item2  span {
                width: 4.64rem;
                font-size: 0.4267rem;
                line-height: 0.6133rem;
            }
        .item_img2 {
            float: right;
            width: 3.6933rem;
            height: 5.04rem;
            }
        .item_img1 {
            
            width: 4.6667rem;
            height: 2.2933rem;
            margin-top: 0.0533rem;
            }
        // 下半部分
        .item2 {
            width: 8.6133rem;
            height: 7.8933rem;
            margin: 0.5333rem;
            border : #D7DBE1 dashed 0.0267rem
        }
        .div1 {
            margin-left: -0.0267rem;
            margin-top: -0.0267rem;
            height: 3.9467rem;
        }
        .div2 {
            margin-left: 4.3333rem;
            width: 3.7333rem;
            height: 3.6rem;
            padding: 0.3067rem 0 0 0.5333rem;
        }
        
        .div3 {
            padding: 0.3067rem 0.2667rem 0 0.3867rem;
            width: 3.7333rem;
            height: 3.8933rem;
        }
        .div1,.div4 {
            float: left;
            width: 4.3333rem;
            img {
                width: 100%;
            }
        }
        .div4 {
            position: absolute;
            margin-top: -4.2rem;
            margin-left: 4.3067rem;
        }
        .item2 h1{
            width: 8.2667rem;
            line-height: 0.5333rem;
            margin-bottom: 0.36rem;
        }
        

    }
</style>
