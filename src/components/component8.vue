<template>
<div class="container">
   <div class="div_title8">
        <div class="blue inline"></div><h1 class="inline">优秀推广案例</h1>
   </div>
   <div class="box">
    <div class="img"><img src="http://183.237.68.98:9000/static/images/p8_1.jpg"></div>
    <div class="xu"></div>
    <div class="b50" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1><span>50%</span>总消耗提升</h1>
        <h1><span>50%</span>新增成本稳定保持</h1>
    </div>
    <div class="blue_CTR blue_CTR1 inline"><h1 class="left inline">CTR:3%-5%</h1><h1 class="inline">拉活成本达标</h1></div>
    <div class="txt inline"><b>移动直播：</b>游戏直播巨头，考核当月新增和沉默用户唤起。商店拉新为主，信息流DMP拉活为辅搭配投放，合理分配投放时段和资源位预算，
    以精彩游戏、人气主播等大图素材投放为主，整体后端成本达标</div>
    <div class="dash"></div>

    <div class="img img2"><img src="http://183.237.68.98:9000/static/images/p8_2.jpg"></div>
    <div class="xu xu2"></div>
    <div class="b50 b52" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1><span>100%</span>消耗提升</h1>
        <h1><span>62%</span>拉活量增长</h1>
    </div>
    <div class="blue_CTR blue_CTR2 inline"><h1 class="left inline">出价:0.15-0.3</h1><h1 class="inline">CTR:7%-10%</h1></div>
    <div class="txt2 txt inline"><b>新闻资讯：</b>考核后端用户活跃指标（新增用户活跃度/使用时长）拉新拉活同步投放，侧重拉活调起已安装用户”追踪时事热点制作素材并每周固定更新，
    拉活成本保持0.25以内</div>
    <div class="dash dash2"></div>

    <div class="img img3"><img src="http://183.237.68.98:9000/static/images/p8_3.png"></div>
    <div class="xu xu3"></div>
    <div class="b50 b53" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1><span>150%</span>激活量提升</h1>
        <h1><span>150%</span>后端ROI达标</h1>
    </div>
    <div class="blue_CTR blue_CTR3 inline"><h1 class="left inline">出价:0.35-0.45</h1><h1 class="inline">CTR:2%-3%</h1></div>
    <div class="txt txt3 inline"><b>小说阅读：</b>以真人美女、漫画对话等大图投放为主，在阅读用户活跃高峰时段定向小说类人群精准投放，并实时监测后端回收效果，针对性进行放量，
    后端激活和付费提升明显，整体的ROI符合预期</div>
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
            if (this.$store.state.hasAnimated.name=='touch7' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch7'
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
             let cHeight = document.body.clientHeight
     
        if(cHeight>800 && cHeight<1000) {           
            let arr = document.getElementsByClassName('div_title8')[0]            
            arr.style.marginTop= "3.26rem"      
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
          .div_title8{
            margin-left: 0.5333rem;
            margin-top: 1.0667rem;         
            height: 0.6933rem;
        }   
    }

    .box {
        position: relative;
        height: 90%;
    }
      //蓝色方块
        .blue {
            width: 0.2rem;
            height: 100%;
            background-color: #0078FF
        }
        .div_title8 h1{
            font-size:0.7466rem;
            font-family:FZLanTingHeiS-B-GB;
            font-weight:800;
            color:rgba(0,120,255,1);
            margin-left: 0.2134rem;           
        }
        .inline {
            float: left;
        }
        .img {
            margin-left: 0.5333rem;
            width: 4.3733rem;
            height: 2.2rem;
            position:absolute;
            top: 0.7867rem;
                img{
                    width: 100%;
                }
            }
        .img2 {
            top: 5.7067rem;
        }
        .img3 {
            top: 10.1733rem;
        }
        .xu {
            position:absolute;
            left: 4.9067rem;
            top: 0.9467rem;
            width: 2.4rem;
            height: 0.2rem;
            border-top: rgba(0,120,255,1) dashed 0.026rem;
            border-right: rgba(0,120,255,1) dashed 0.026rem;
        }
        .xu2 {
            top: 5.8667rem;
        }
        .xu3 {
            top: 10.3333rem;
        }
        .b50 {    
            position: absolute;    
            margin-left: 5.32rem;
            top: 1.1867rem;
            font-size:0.2933rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(0,120,255,1);
            line-height:0.6133rem;
             span {
                    font-size:0.5467rem;
                    font-family:FZLanTingHeiS-B-GB;
                    font-weight:400;
                    color:rgba(0,120,255,1);
                }          
           }
        .b52 {
            top: 6.1067rem;
        }
        .b53 {
            top: 10.5867rem;
        }
        .blue_CTR2 {
            top: 7.3867rem;
        }
        .blue_CTR3 {
            top: 11.8533rem;
        }
        .blue_CTR1 {
            top: 2.4667rem;
        }
        //蓝色长条
        .blue_CTR {
                position: absolute;
                height: 0.5173rem;
                width: 5.7333rem;
                margin-left: 3.3067rem;
                background-color: #0078FF;
                font-size:0.3468rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.5307rem;
                h1 {
                    text-align: center;
                    margin-left: 0.2134rem;
                }
               .left {
                   margin-left: 0.1333rem;
                   width: 2.8267rem;                 
                   border-right: white dashed 0.0267rem;

               }
            }
        .txt {
            position: absolute;
            margin: 0 0 0 0.5333rem;
            top: 3.24rem;
            width: 8.5333rem;
            height: 1.68rem;
            text-align: left;
            font-size:0.36rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(0,0,0,1);
            line-height:0.4534rem;
            b {
                font-weight:600;
            }
        }
        .txt2  {
            top: 8.1467rem;
        }
        .txt3  {
            top: 12.6267rem;
        }
        .dash {
            position:absolute;
            top: 5.2533rem;
            width: 8.8533rem;
            margin-left: 0.3733rem;
            border-top: black dashed 0.0667rem;
            opacity:0.1;
        }
        .dash2 {
            top: 9.7333rem;

        }
</style>
