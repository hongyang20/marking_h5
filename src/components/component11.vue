<template>
    <div class="container">
        <div class="div_title">
        <div class="blue inline"></div> <h1 class="inline">合作咨询</h1>   
        </div>
        <h2>姓名</h2>
        <input  class="inp" id="test" v-model="name" @blur="fsize()">

        <h2>电话</h2>
        <input class="inp" v-model="phone" @blur="fsize()">

        <h2>公司</h2>
        <input class="inp" v-model="company" @blur="fsize()">

        <div class="button" @click="visitInfo()">立即提交</div>

        <h3>我们商务会联系您进行一对一服务</h3>
        	<div id="allmap">	
            </div>
            <div id="result">
            </div>

    
    </div>
</template>
<script>
import {visitInfo} from '../util/order'
export default {
    name:'component11',
    data(){
        return {
            name: '',
            phone: '',
            company: '',
            hrt: ''
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch10' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch0'
                })
               return true  
            }else{
                return false
            }
        }
    },
    methods: {
        visitInfo() {
                if(!this.name || !this.phone) {
                alert("请填写您的姓名和联系方式")
                return
            } 
            visitInfo({name: this.name,phone: this.phone,company: this.company}).then(response => {
                if(response.data.data) {
                    alert(response.data.data)
                }
                if(response.data.msg) {
                    alert(response.data.msg)
                }
            })
        },
        fsize() {         
            let a = document.getElementById('app').style.height
            console.log(a)
          
        },
        initMap() {
                // 百度地图API功能             
                var sContent =
                "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>前海聚力合创科技有限公司</h4>" + 
                "<img style='float:right;margin:4px' id='imgDemo' src='https://ht.qhjlhc.com/static/images/p10_3.png' width='139' height='104' title='前海聚力合创科技有限公司'/>" + 
                "<p style='margin:0;line-height:1.5;font-size:13px;'>地址：深圳市南山区侨香路4080号侨城坊7栋22楼</p>" + 
                "</div>";
                var map = new BMap.Map('allmap',{enableMapClick:true});
                var point = new BMap.Point(113.98699000,22.55860355);
                var marker = new BMap.Marker(point);
                var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
                map.centerAndZoom(point, 16);
                map.addOverlay(marker);
                marker.addEventListener("click", function(){          
                this.openInfoWindow(infoWindow);
                //图片加载完毕重绘infowindow
                document.getElementById('imgDemo').onload = function (){
                    infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                }
                })

        },
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
        let height = document.documentElement.clientHeight; //获取当前可视区域的高度存到hrt变量
        document.getElementsByTagName('body')[0].style.height=height+'px'
        
        // setTimeout(() => {
        // this.initMap() // 创建和初始化地图
        // }, 1000)
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: #E3E8EE;
        overflow: hidden;
        background-size:cover;
          //关与我们
        .div_title{
            margin: 1.0667rem 0 0.28rem 0.52rem;           
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
        .inp {
            margin-top: 0.2667rem;
            margin-left: 0.5333rem;
            width: 7.2133rem;
            height: 0.9467rem;

        }
        h2 {
            margin-left: 0.5333rem;
            margin-top: 0.56rem;
            font-size:0.56rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:bold;
            color:rgba(30,30,30,1);
        }

        .button {
            background-color: #0078FF;
            color: white;
            font-size:0.6667rem;
            width: 4.08rem;
            height: 0.9467rem;
            font-family: FZLanTingHeiS-R-GB;
            font-weight:bold;
            text-align: center;
            line-height: 0.9467rem;
            margin: 0.5067rem 0 0 0.5333rem;
        }
        h3 {
            font-size:0.48rem;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:600;
            color:rgba(0,0,0,1);
            margin: 0.3467rem 0 0 0.5333rem;
        }
        #allmap {
            height: 5.48rem;
            width:89%;
            margin: 0.6667rem 0 0 0.5333rem;
            overflow: hidden;
        }

      
    }
</style>
