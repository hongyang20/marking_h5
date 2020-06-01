<template>
    <div class="container">
       <div class="div_img">
         <img src="../../static/images/P4-1.jpg" class="img1" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
         <img src="../../static/images/P4-2.jpg" class="delay-1 img" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
         <img src="../../static/images/P4-3.jpg" class="delay-2 img" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
         <img src="../../static/images/P4-4.jpg" class="delay-3 img" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
         <img src="../../static/images/P4-5.jpg" class="delay-4 img" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
         <img src="../../static/images/P4-6.jpg" class="delay-5 img" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
        <img src="http://183.237.68.98:9000/static/images/P4.jpg" class="img" :class="{animated:addAnimation, bounceInRight:addAnimation,slower :addAnimation}">
        </div>

    
    </div>
</template>
<script>
export default {
    name:'componentThree',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch3' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
                this.$store.commit('showAnimation',{
                    hasAnimats:true,
                    name:'touch3'
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
      } else {
        return false;
      }
            }
    },
    mounted(){
        let wx = this.weixin()
        if(wx) {
            let img = document.getElementsByClassName("img1")[1]
            img.style.marginTop= "9.2%"
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: white;
        overflow: hidden;
        background-size:cover;
        text-align: center;
          .div_img{
            width:100%;
            
        }
         .img1{
            width:100%;
            
             margin-top:5%;
        }
        .img{
            width:100%;
        }
      
        .delay-1 {animation-delay: 0.5s;}
        .delay-2 {animation-delay: 0.9s;}
        .delay-3 {animation-delay: 1.3s;}
        .delay-4 {animation-delay: 1.7s;}
        .delay-5 {animation-delay: 2.1s;}
     
    }
</style>
