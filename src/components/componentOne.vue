<template>
    <div class="container">
          <img src="../../static/images/上滑.png" class="run_up">
    
    </div>
</template>
<script>
export default {
    name:'componentOne',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch0' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats) ) {
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
    mounted() {
        let ch = document.body.clientHeight
        let el = document.getElementsByClassName('run_up')[0]
        if(ch>800) {           
            el.style.marginTop = "14.5rem"
        }else {
            el.style.marginTop = "12rem"
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-image: url('http://183.237.68.98:9000/static/images/P1.jpg');
           background-repeat:no-repeat;
                background-size:100% 100%;
                -moz-background-size:100% 100%;
        p{
            font-size:.32rem;
            color:#666;
            text-align: center;
            line-height: .48rem;
        }
        .run_up {
            position: relative;
            width: .6rem;
            margin: 14rem 0 0 3.3rem;
            animation:heart 1s ease infinite;
        }

            @keyframes heart {
                    0% {opacity:0.1;}
                    50% {opacity:0.3;}
                    100%{opacity:1;}
            }
         
    }
</style>
