<template>
    <div class="container">
        <div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">推广痛点</h1>
        <h1 class="h2" :class="{animated:addAnimation, fadeInLeft:addAnimation}">移动端流量遭遇天花板，有预算却花不出去</h1>
        </div>
        <h1 class="h3">国产手机强势崛起，vivo数亿级年轻人群，轻松触达<span>“千禧一代”“Z世代”</span>等年轻群体</h1>
        <div class="xu"></div>
        <h1 class="h4" :class="{animated:addAnimation, fadeInLeft:addAnimation}">投放遭遇瓶颈，获客成本过高 广告效果差</h1>
        <h1 class="h5">应用商店成本可控，效果可见，让广告主不花一分冤枉钱。信息流广告原生展现，定向精准帮您挖掘优质潜在用户</h1>
        <div class="xudiv"><img src="https://ht.qhjlhc.com/static/images/p2.jpg"/></div>
    </div>
</template>
<script>
export default {
    name:'componentTwo',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch1'&&(this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats)) {
                 this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch1'
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
        overflow: hidden;
        background-color: #ECF1F7;
        background-size:100%;

          //推广痛点
        .div_title{
            margin: 1.0667rem 0.5333rem;           
            height: 0.6933rem;
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
            padding: 0.7733rem 0rem;
            font-size:0.5333rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            color:rgba(30,30,30,1);
        }
        .h3,.h5{
            margin-top: 2.2667rem;
            margin-left:  0.52rem;
            width: 90%;
            font-size:0.4267rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(30,30,30,1);
            line-height:0.6133rem;
            span {
                color:rgba(0,120,255,1);
            }
        }
        .h4 {
            margin: 0.52rem 0.52rem;
            padding: 0.7733rem ,5.3333rem;
             font-size:0.5333rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            color:rgba(30,30,30,1);
        }
        .h5 {
            margin-top: 0.52rem;
        }
        .xu {
            margin-top: 0.52rem;
            margin-left: auto;
            margin-right: auto;
            width: 90%;

            border-top:0.0533rem dashed rgba(30,30,30,1);
            opacity:0.1;
        }
        .xudiv {
            width: 8.5333rem;
            height: 6.0667rem;
            margin: 0.5067rem auto;
            border: rgba(0,120,255,1) dashed 0.0267rem;
            img{
                width: 8.3467rem;
                margin: 0.1067rem 0.0933rem;
            }
        }
    }
       
</style>
