<template>
<div class="container">
   <div class="div_title">
        <div class="blue inline"></div><h1 class="inline">优秀推广案例</h1>
   </div>
    <div class="img"><img src="http://183.237.68.98:9000/static/images/p8_1.jpg"></div>
    <div class="xu"></div>
    <div class="b50" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1 class="inline"><span>50%</span>总消耗提升</h1>
        <h1 class="inline"><span>50%</span>新增成本稳定保持</h1>
    </div>
    <div class="blue_CTR blue_CTR1 inline"><h1 class="left inline">CTR:3%-5%</h1><h1 class="inline">拉活成本达标</h1></div>
    <div class="txt inline"><b>移动直播：</b>游戏直播巨头，考核当月新增和沉默用户唤起。商店拉新为主，信息流DMP拉活为辅搭配投放，合理分配投放时段和资源位预算，
    以精彩游戏、人气主播等大图素材投放为主，整体后端成本达标</div>
    <div class="dash"></div>

    <div class="img img2"><img src="http://183.237.68.98:9000/static/images/p8_2.jpg"></div>
    <div class="xu xu2"></div>
    <div class="b50 b52" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1 class="inline"><span>100%</span>消耗提升</h1>
        <h1 class="inline"><span>62%</span>拉活量增长</h1>
    </div>
    <div class="blue_CTR blue_CTR2 inline"><h1 class="left inline">出价:0.15-0.3</h1><h1 class="inline">CTR:7%-10%</h1></div>
    <div class="txt2 txt inline"><b>新闻资讯：</b>考核后端用户活跃指标（新增用户活跃度/使用时长）拉新拉活同步投放，侧重拉活调起已安装用户”追踪时事热点制作素材并每周固定更新，
    拉活成本保持0.25以内</div>
    <div class="dash dash2"></div>

    <div class="img img3"><img src="http://183.237.68.98:9000/static/images/p8_3.png"></div>
    <div class="xu xu3"></div>
    <div class="b50 b53" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1 class="inline"><span>150%</span>激活量提升</h1>
        <h1 class="inline"><span>150%</span>后端ROI达标</h1>
    </div>
    <div class="blue_CTR blue_CTR3 inline"><h1 class="left inline">出价:0.35-0.45</h1><h1 class="inline">CTR:2%-3%</h1></div>
    <div class="txt txt3 inline"><b>小说阅读：</b>以真人美女、漫画对话等大图投放为主，在阅读用户活跃高峰时段定向小说类人群精准投放，并实时监测后端回收效果，针对性进行放量，
    后端激活和付费提升明显，整体的ROI符合预期</div>

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
             let cht = document.body.clientHeight
        if(cwth<=320){
              let arr = document.getElementsByClassName('blue_CTR')
              for(let i=0;i<3;i++) {
                  arr[i].style.marginTop= "-.04rem"
                  arr[i].style.width = "6.1333rem"
              }
              
            
                       
        }
        if(cht<800 && cht>600) {
            
            let arr = document.getElementsByClassName('blue_CTR3')[0]            
            arr.style.top= "1.76rem"
            arr = document.getElementsByClassName('b53')[0]            
            arr.style.top= "1.76rem"
            arr = document.getElementsByClassName('blue_CTR2')[0]            
            arr.style.top= "1.06rem"
            arr = document.getElementsByClassName('b52')[0]            
            arr.style.top= "1.14rem"
            arr = document.getElementsByClassName('blue_CTR1')[0]            
            arr.style.top= "0rem"
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: #ECF1F7;
        overflow: hidden;
        background-size:cover;
        text-align: center;
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
        .img {
            margin-left: 0.5333rem;
            width: 4.3733rem;
            height: 2.2rem;
            position:absolute;
            top: 2.5467rem;
                img{
                    width: 100%;
                }
            }
        .img2 {
            top: 7.4667rem;
        }
        .img3 {
            top: 11.9333rem;
        }
        .xu {
            position:absolute;
            left: 4.9067rem;
            top: 2.7067rem;
            width: 2.4rem;
            height: 0.2rem;
            border-top: rgba(0,120,255,1) dashed .02rem;
            border-right: rgba(0,120,255,1) dashed .02rem;
        }
        .xu2 {
            top: 7.6267rem;
        }
        .xu3 {
            top: 12.0933rem;
        }
        .b50 {    
            position: relative;
            background-color: #0078FF;    
            margin-left: 5.32rem;
            margin-top: 1.0933rem;
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
        .b52,.blue_CTR2 {
            top: 1.2667rem;
        }
         .b53,.blue_CTR3 {
            top: 1.98rem;
        }
        .blue_CTR1 {
            top: .12rem;
        }
        //蓝色长条
        .blue_CTR {
                position: relative;
                height: 0.5173rem;
                width: 5.7333rem;
                margin-left: 3.3067rem;
                background-color: #0078FF;
                font-size:0.3467rem;
                font-family:FZLanTingHeiS-R-GB;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.5307rem;
                h1 {
                    text-align: center;
                    margin-left: 0.2133rem;
                }
               .left {
                   margin-left: 0.1333rem;
                   width: 2.8267rem;                 
                   border-right: white dashed 0.0267rem;

               }
            }
        .txt {
            position: relative;
            margin: 0.2667rem 0 0 0.5333rem;
            width: 8.5333rem;
            height: 1.68rem;
            text-align: left;
            font-size:0.32rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(0,0,0,1);
            line-height:0.4533rem;
            b {
                font-weight:600;
            }
        }
        .txt2  {
            top: 1.0933rem;
        }
        .txt3  {
            top: 1.7333rem;
        }
        .dash {
            position:absolute;
            top: 7.0133rem;
            width: 8.8533rem;
            margin-left: 0.3733rem;
            border-top: black dashed 0.0533rem;
            opacity:0.1;
        }
        .dash2 {
            top: 11.4933rem;
        }
</style>
