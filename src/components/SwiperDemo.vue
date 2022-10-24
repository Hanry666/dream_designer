<template>
<!-- Swiper -->
<div class="swiper-container root">
    <div class="swiper-wrapper">
        <img class="swiper-slide" src="../assets/20da/bg_20da.png">
      <img class="swiper-slide" src="../assets/tianyan/01.webp">
      <img class="swiper-slide" src="../assets/gaotie/01.webp">
      <img class="swiper-slide" src="../assets/jiaolong/01.webp">
      <img class="swiper-slide" src="../assets/5g/01.webp">
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    name:'SwiperDemo',
    data(){
       return {
         index:0,
       }
    },
    methods:{
      changerouter(Index){
        if(Index===1){
      this.$router.push('tianyan')
     }else if(Index===2){
      this.$router.push('gaotie')
     }else if(Index===3){
      this.$router.push('jiaolong')
     }else if(Index===4){
      this.$router.push('5g')
     }else if(Index===0){
      this.$router.push('20da')
     }
      }
    },
    watch:{
       index(){
        this.changerouter(this.index);
       }
    },
    mounted(){
        this.myswiper = new Swiper('.swiper-container', {
            loop:true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
    slideChangeTransitionEnd: ()=>{  //0 20da 1 tianyan 2gaotie 3jiaolong 4 5g
     if(this.myswiper!==undefined){
      this.index=this.myswiper.realIndex;
     }
    },
  },
    });
    }
}
</script>
<style lang="css" scoped>

    .swiper-container {
      background-color: rgb(249,247,241);
      width: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 800px;
      height: 400px;
  
    }
</style>