<template>
    <div class="container">
<div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">效果提升计划</h1>
        <h1 class="h2">智能价格管理，支持更多后向目标深度转化</h1>
        <div class="ipad"><img src="http://183.237.68.98:9000/static/images/P5.jpg"></div>
        <div class="ocpc" :class="{animated:addAnimation,bounceInRight:addAnimation}">
        <div><img src="../../static/images/OCPC.png"></div>
        <ul>
        <li>人群更匹配</li>
        <li>出价更便捷</li>
        <li>成本更稳定</li>
        </ul>
        </div>
</div>
<!-- 虚线隔开上下文 -->
<div class="xu"></div>
    <!-- 一行 -->
    <div class="txt">
        <div class="black_txt"><span>oCPC游戏注册：</span>vivo注册成本下降45%，联盟下降94%</div>
        <div class="blue_txt">
            <vns class="span" :start="0" :end= end_1 :speed="30" :times="1000" :format="num => num+'%'"/>
            <h1>成本下降</h1>
        </div>
    </div>
    <!-- 二行 -->
    <div class="txt">
        <div class="black_txt"><span>oCPC新增激活：</span>二阶段激活成本相比一阶段下降50%</div>
        <div class="blue_txt">
            <vns class="span" :start="0" :end= end_2 :speed="30" :times="1000" :format="num => num+'%'"/>
            <h1>成本下降</h1>
        </div>
    </div>
    <!-- 三行 -->
    <div class="txt">
        <div class="black_txt"><span>oCPC表单工具：</span>表单成本下降36%，线索量大幅提升</div>
        <div class="blue_txt">
            <vns class="span" :start="0" :end= end_3 :speed="30" :times="1000" :format="num => num+'%'"/>
            <h1>成本下降</h1>
        </div>
    </div>
    <!-- 四行 -->
    <div class="txt">
        <div class="black_txt"><span>自定义激活与转化追踪：</span>广告主定义优化目标，投放更精准</div>
        <div class="blue_txt">

            <h2>自定义</h2>
            <h2>目标</h2>
        </div>
    </div>

</div>
     
</template>
<script>
import vns from 'vue-number-scroll'
export default {
    name:'componentOne',
    data(){
        return {
            end_1 :0,
            end_2 :0,
            end_3 :0
        }
    },
    components: {
        vns
    },
 
    computed:{
        
        addAnimation(){
            
            if (this.$store.state.hasAnimated.name=='touch4' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.end_1 = 45;
                this.end_2 = 50;
                this.end_3 = 36;
                 this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch4'
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
            let wx= this.weixin()
       
    }
}
</script>
<style lang="scss" scoped>
    
    .container{
        background-color: #ECF1F7;
        overflow: hidden;
        background-size:cover;
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
            width: 80%;
            line-height: .55rem;
            margin-left: 0rem;
            padding-top: .58rem;
            font-size:.40rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:700;
            color:rgba(30,30,30,1);
        }
        .ipad {
            margin-top: .2rem;
            float: left;
            width: 4rem;
            img{
                width: 100%;
            }
        }
        .ocpc{
            margin-top: .2rem;
            img{
                margin-left: .05rem;
                width: 1.55rem;
            }
            ul li{    
                font-size: .32rem;
                line-height: .6rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:400;
                color:rgba(86,86,86,1);
                margin-top: .08rem;
                
            }
            ul li::before{
            content: "○ "; 
            color: rgba(0,120,255,1);
            font-size: .1rem;
            vertical-align:middle; 
            }
            
            margin-left: 4.3rem;
        }
         .xu {
                clear: both;
                margin-top: 4.5rem;
                margin-left: auto;
                margin-right: auto;
                width: 90%;
                border-top:.04rem dashed rgba(30,30,30,1);
                opacity:0.1;
            }
        .txt {
            clear: both;
            margin:.49rem auto;
            height: 1.22rem;
            margin-left: .40rem;
            
        }
        .black_txt {
            float: left;
            width: 3.86rem;
            height: 1.21rem;
            font-size: .32rem;
            font-weight: 400;
            line-height:.46rem;
            span{
                font-weight: 600;
            }
        }
        .blue_txt {
            float: left;
            width: 2.29rem;
            height: 1.18rem;
            margin-left: .27rem;
            border: rgba(0,120,255,1) dashed .01rem;      
        }
        .blue_txt h1{
            font-size:.32rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:bold;
            color:rgba(0,120,255,1);
            line-height:.57rem;
            margin-top: .59rem;
            margin-left: .49rem;
        }
        
    }
    .blue_txt .span{
            float: left;
            font-size:.46rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:400;
            color:rgba(0,120,255,1);
            line-height:.35rem;
            margin-top: .19rem;
            margin-left: .62rem;
        }
     .blue_txt h2{
        font-size:.46rem;
        font-family:FZLanTingHeiS-B-GB;
        font-weight:400;
        color:rgba(0,120,255,1);
        line-height:.49rem;
        padding-left: .49rem;
        padding-top: .11rem;   

     }
     .blue_txt h2:last-child {
         padding-left: .72rem;
     }
    
 
</style>
