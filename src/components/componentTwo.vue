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
        <div class="xudiv"><img src="http://183.237.68.98:9000/static/images/p2.jpg"/></div>
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
            margin: .8rem .4rem;           
            height: .52rem;
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
        h1{
            font-size:.56rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: .16rem;
           
        }
        .h2 {
            clear: both;
            margin-left: 0rem;
            padding: .58rem 0rem;
            font-size:.40rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            color:rgba(30,30,30,1);
        }
        .h3,.h5{
            margin-top: 1.7rem;
            margin-left:  .39rem;
            width: 90%;
            font-size:.32rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(30,30,30,1);
            line-height:.46rem;
            span {
                color:rgba(0,120,255,1);
            }
        }
        .h4 {
            margin: .39rem .39rem;
            padding: .58rem ,4rem;
             font-size:.40rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            color:rgba(30,30,30,1);
        }
        .h5 {
            margin-top: .39rem;
        }
        .xu {
            margin-top: .39rem;
            margin-left: auto;
            margin-right: auto;
            width: 90%;

            border-top:.04rem dashed rgba(30,30,30,1);
            opacity:0.1;
        }
        .xudiv {
            width: 6.4rem;
            height: 4.55rem;
            margin: .38rem auto;
            border: rgba(0,120,255,1) dashed .02rem;
            img{
                width: 6.26rem;
                margin: .08rem .07rem;
            }
        }
    }
       
</style>
