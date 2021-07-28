<template>
<div class="container">
   <div class="div_title8">
        <div class="blue inline"></div><h1 class="inline">优秀推广案例</h1>
   </div>
   <div class="topBox">
    <div class="img"><img src="https://ht.qhjlhc.com/static/images/p8_1.jpg"></div>
    <div class="xu"></div>
    <div class="b50" :class="{animated:addAnimation, bounceInRight:addAnimation}">
        <h1><span>50%</span>总消耗提升</h1>
        <h1><span>50%</span>新增成本稳定保持</h1>
    </div>
    <div class="blue_CTR inline"><h1 class="left inline">CTR:3%-5%</h1><h1 class="inline">拉活成本达标</h1></div>
    <div class="txt inline"><b>移动直播：</b>游戏直播巨头，考核当月新增和沉默用户唤起。商店拉新为主，信息流DMP拉活为辅搭配投放，合理分配投放时段和资源位预算，
    以精彩游戏、人气主播等大图素材投放为主，整体后端成本达标</div>    
   </div>
        <!-- 银色虚线 -->
        <div class="dash"></div>
    <div class="middleBox">
        <div class="img"><img src="https://ht.qhjlhc.com/static/images/p8_2.jpg"></div>
        <div class="xu"></div>
        <div class="b50" :class="{animated:addAnimation, bounceInRight:addAnimation}">
            <h1><span>100%</span>消耗提升</h1>
            <h1><span>62%</span>拉活量增长</h1>
        </div>
        <div class="blue_CTR inline"><h1 class="left inline">出价:0.15-0.3</h1><h1 class="inline">CTR:7%-10%</h1></div>
        <div class="txt inline"><b>新闻资讯：</b>考核后端用户活跃指标（新增用户活跃度/使用时长）拉新拉活同步投放，侧重拉活调起已安装用户”追踪时事热点制作素材并每周固定更新，
        拉活成本保持0.25以内</div>
    </div>
    <div class="dash dash2"></div>
    <div class="bottomBox">
        <div class="img"><img src="https://ht.qhjlhc.com/static/images/p8_3.png"></div>
        <div class="xu"></div>
        <div class="b50" :class="{animated:addAnimation, bounceInRight:addAnimation}">
            <h1><span>150%</span>激活量提升</h1>
            <h1><span>150%</span>后端ROI达标</h1>
        </div>
        <div class="blue_CTR inline"><h1 class="left inline">出价:0.35-0.45</h1><h1 class="inline">CTR:2%-3%</h1></div>
        <div class="txt inline"><b>小说阅读：</b>以真人美女、漫画对话等大图投放为主，在阅读用户活跃高峰时段定向小说类人群精准投放，并实时监测后端回收效果，针对性进行放量，
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
            arr.style.marginTop= "2.26rem"      
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

    .topBox{
        margin-left: 0.5333rem;
        position: absolute;
        margin-top: 0.7867rem;
       

    }
    .middleBox{
        margin-left: 0.5333rem;
        position: absolute;
        margin-top: 5.9444rem;
        

    }
    .bottomBox {
        margin-left: 0.5333rem;
        position: absolute;
        margin-top: 10.5972rem;
        
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
            margin-left: 0;
            width: 4.3738rem;
                img{
                    width: 100%;
                }
            }
      
        .xu {
            position:absolute;
            left: 4.3567rem;
            top: 0.16rem;
            width: 2.4rem;
            height: 0.2rem;
            border-top: rgba(0,120,255,1) dashed 0.026rem;
            border-right: rgba(0,120,255,1) dashed 0.026rem;
        }
       
        .b50 {    
            position:absolute;    
            left: 4.7867rem;
            top: 0.4rem;
            font-size:0.2951rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(0,120,255,1);
            line-height:0.6133rem;
             span {
                    font-size:0.5333rem;
                    font-family:FZLanTingHeiS-B-GB;
                    font-weight:400;
                    color:rgba(0,120,255,1);
                }          
           }
      
      
        //蓝色长条
        .blue_CTR {
                position:absolute; 
                height: 0.5173rem;
                width: 5.9067rem;
                margin-left: 2.76rem;
                 top: 1.69rem;
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
                .inline {
                    margin-left:10px;
                }
               .left {
                   margin-left: 0.233rem;
                   width: 2.8267rem;                 
                   border-right: white dashed 0.0267rem;

               }
            }
        .txt {
            
            margin-top: 0.2667rem;
            width: 8.6333rem;
            height: 1.68rem;
            font-size:0.32rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:400;
            color:rgba(0,0,0,1);
            line-height:0.4534rem;
            b {
                font-weight:600;
            }
        }
      
        .dash {
            position: absolute;
            margin-top: 5.4722rem;
            width: 9.1rem;
            margin-left: 0.3733rem;
            border-top: black dashed 0.0533rem;
            opacity:0.1;
        }
        .dash2 {
            margin-top: 10.1389rem;
        }
</style>
