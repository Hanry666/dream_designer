<template>
    <div class="wrapper" >
  <div :class="classname" @click="changeclass" ref="scollRef">
  <div class="book__cover">
    <div class="header-image" :style="{ backgroundImage:'url('+ url +')' }"><div class="overlay"></div></div>
    <div class="title-wrap">
      <h1 class="article-title">
        <slot name="title"></slot>
        
      </h1>
    </div>
    <p class="book__cover-exerpt">
       <slot name="main"></slot>
      <br><br>

      <span class="social">
       <i class="fa fa-facebook"></i>
       <i class="fa fa-twitter"></i>
       <i class="fa fa-linkedin"></i>
       <i class="fa fa-instagram"></i>
      </span>
  
    </p>
  
  </div>
    <div class="book__content">
      <span class="drop-cap"></span>
    
      <slot name="all"></slot>
    
      


    </div>
  </div>
 
</div>
</template>
<script>
export default {
    name:'Page',
    data(){
        return {
            classname:'book',
        }
    },
    props:['url'],
    methods:{
        changeclass(e){
          window.scroll(0,0);
            if(this.classname==='book'){
              document.body.style.overflow="hidden";
              window.scroll(0,0);
              this.classname='book book--expanded'
              
            }
          
            else{
              this.classname='book';
              this.$refs.scollRef.scroll(0,0);
              document.body.style.overflowY="scroll";
            }
           
        }
    }
}
</script>
<style lang="css" scoped>
    *{
  margin: 0;
  padding: 0;
 
}
.mr2 {
  margin-right: 1rem;
}
.ml2 {
  margin-left: 1rem;
}
.article-title {
  font-size: 2.5rem;
  line-height: 1;
 font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  letter-spacing: 0.025em;
  transition: font-size 0.45s ease-in-out, color 0.3s ease-out;
}
.header-image {
  height: 220px;
  /* background-image: url(../assets/20da/bg_20da.png); */
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
  position: relative;
  transition: all 0.45s ease-in-out;
}
.overlay {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.title-wrap {
  transform: translateY(0);
  transition: transform 0.45s ease-in;
}
.drop-cap {
  font-size: 55px;
  line-height: 28px;
}
.wrapper {
  height: 300px;
  align-items: center;
  justify-content: center;
}
.book__cover-exerpt {
  color: #6a6a6a;
  padding: 1rem 1.5rem;
  line-height: 1.6;
  text-align: center;
  opacity: 1;
  max-width: 370px;
  margin: 0 auto;
  display: block;
  transition: all 0.25s ease-in-out;
}
 
.book__cover {
  height: 100%;
  width: 100%;
}
.book__content {
  text-align: justify;
  word-wrap: break-word;
  font-size: 1.1rem;
  opacity: 0;
  transition: all 1.5s ease-in-out;
  max-width: 750px;
  margin: 0 auto 6rem;
  padding: 0 2rem;
}
.book__content p {
  line-height: 1.8;
  color: #3a3a3a;
  margin-bottom: 2.5rem;
}
.book {
  overflow: hidden;
  background: white;
  height: 550px;
  width: 400px;
  box-shadow: 0 20px 30px -10px #ccc;
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
}
.book:hover {
  box-shadow: 0 6px 50px 20px #cfcfcf;
}
.book--expanded {
  position: absolute;
  top: 0;
  left:0;
  transition: all .5s;
  height: 120vh;
  width: 100vw;
  z-index: 3;
  overflow-y: scroll;
}
.book--expanded .overlay {
  opacity: 0.95;
}
.book--expanded .article-title {
  color: white;
  font-size: 64px;
  letter-spacing: 0.05em;
}
.book--expanded .title-wrap {
  transform: translateY(-400px);
  color: white;
}
.book--expanded .book__cover-exerpt {
  opacity: 0;
}
.book--expanded .book__cover {
  height: 460px;
  margin-bottom: 6rem;
}
.book--expanded .book__content {
  opacity: 1;
}
.book--expanded .header-image {
  height: 100%;
}
span{
   margin-left: -35px;
}
span .fa {
   font-size: 17px;
   margin-left: 20px;
}

</style>