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
            margin: .8rem 0 .58rem .39rem;           
            height: .52rem;
            
        }
        //蓝色方块
        .blue {
            width: 0.15rem;
            height: 100%;
            background-color: #0078FF
        }
        //蓝色字
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
      
        .item1 {
            width: 6.5rem;
            height: 3.78rem;
            margin-left: .4rem;
                    
            }
        .item1  h1,.item2  h1 {

                font-size: .4rem;
                font-family:FZLanTingHeiS-B-GB;
                font-weight:600;
                margin-bottom: .26rem;
            }
        .item1  span,.item2  span {
                width: 3.48rem;
                font-size: .32rem;
                line-height: .46rem;
            }
        .item_img2 {
            float: right;
            width: 2.77rem;
            height: 3.78rem;
            }
        .item_img1 {
            
            width: 3.5rem;
            height: 1.72rem;
            margin-top: .04rem;
            }
        // 下半部分
        .item2 {
            width: 6.46rem;
            height: 5.92rem;
            margin: .4rem;
            border : #D7DBE1 dashed .02rem
        }
        .div1 {
            margin-left: -.02rem;
            margin-top: -.02rem;
            height: 2.96rem;
        }
        .div2 {
            margin-left: 3.25rem;
            width: 2.8rem;
            height: 2.7rem;
            padding: .23rem 0 0 .4rem;
        }
        
        .div3 {
            padding: .23rem .2rem 0 .29rem;
            width: 2.8rem;
            height: 2.92rem;
        }
        .div1,.div4 {
            float: left;
            width: 3.25rem;
            img {
                width: 100%;
            }
        }
        .div4 {
            position: absolute;
            margin-top: -3.15rem;
            margin-left: 3.23rem;
        }
        .item2 h1{
            width: 6.2rem;
            line-height: .4rem;
            margin-bottom: .27rem;
        }
        

    }
</style>
