<template>
<div class="container">
   <div class="div_title">
        <div class="blue inline"></div><h1 class="inline">优秀推广案例</h1>
   </div>

   <div class="blue_long"><h1 class="left inline">出价：0.1-0.12</h1><h1 class="inline">CTR:7%-10%</h1></div>
    <div class="content"><img :class="{animated:addAnimation, bounceInLeft:addAnimation}" src="http://183.237.68.98:9000/static/images/p9_1.png">
    <span><b>在线长视频：</b>根据端内自制剧、热门综艺播放时间制定周期性投放策略，实现品效合一；以端内自制内容和当前投放ctr较高的素材做重点投
        放ctr较高的素材做重点投放，侧重于猎奇和自制剧，实时热点方向素材补充投放；利用deeplink链接缩短点击路径，广告联盟低成本获量，
        联盟ctr远高于行业平均水平</span>
    </div>
    <!-- 分割线 -->
    <div class="dash"></div>

     <div class="blue_long blue_long2"><h1 class="left inline">出价：0.3</h1><h1 class="inline">CTR:2%-3%</h1></div>
    <div class="content content2"><img :class="{animated:addAnimation, bounceInLeft:addAnimation}" src="http://183.237.68.98:9000/static/images/p9_2.png">
    <span><b>求职招聘：</b>根素材以卡通人物、真人视频等并在文案上突出招聘需求痛点，整合多种投放形式如投放大图、组图和视频，使得用户
    来源分布均衡，符合产品属性。激活和完善量都有明显的提升，成本达标，符合客户预期并加大投放</span>
    </div>

    <!-- 分割线 -->
    <div class="dash"></div>

     <div class="blue_long blue_long2"><h1 class="left inline">出价：0.3-0.4</h1><h1 class="inline">CTR:3.5%-5.5%</h1></div>
    <div class="content content3"><img :class="{animated:addAnimation, bounceInLeft:addAnimation}" src="http://183.237.68.98:9000/static/images/p9_3.png">
    <span><b>婚恋交友类：</b>使用贴近生活场景的女性交友素材，大图制作虚拟点击视频、幻灯片视频展示个人信息以及地图附近等多形式场
    景，突出真实交友，有效提高点击量，使用婚恋社交定向人群包以及ocpc模型工具，有效优化提升转化率注册成本快速下降且ROI稳定</span>
    </div>

</div>
</template>
<script>
export default {
    name:'component8',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch8' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch8'
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
             let cwth = document.body.clientWidth
        if(cwth<=320){
            
            }
              
            
            
            
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: #ECF1F7;
        overflow: hidden;
        background-size:cover;
        
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
        .div_title h1{
            font-size:0.7467rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: 0.2133rem;           
        }
        .inline {
            float: left;
        }
        .blue_long {
           
            height: 0.7333rem;
            width: 8.5333rem;
            margin-left: 0.5333rem;
            margin-top: 0.7867rem;
            background-color: #0078FF;
            font-size:0.48rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(255,255,255,1);
            h1 {
                text-align: center;
                margin-left: 0.2667rem;
                margin-top: 0.1467rem;
            }
            .left {
                margin-left: 0rem;               
                width: 4.16rem;                 
                border-right: white dashed 0.0267rem;

            }
        }
        .blue_long2 {
            margin-top: 0.4rem;
        }

        .content{
            width: 8.5333rem;
            height: 3.7333rem;
            margin: 0.2667rem 0 0 0.5333rem;
            img {
                float: left;
                width: 3.32rem;
                margin: 0 0.1733rem 0.08rem 0;
            }
            b {
                font-weight:600;
            }
            span {
                font-size:0.32rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:400;
                color:rgba(0,0,0,1);
                line-height:0.4533rem;
                
            }
        }
        .content2 {
            height: 2.92rem;
        }
         .dash {           
            margin-top: 0.3733rem;
            width: 8.8533rem;
            margin-left: 0.3733rem;
            border-top: black dashed 0.0533rem;
            opacity:0.1;
        }
        
      
</style>
