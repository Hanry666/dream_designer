<template>
    <div class="root">
        <div class="left">
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

<!-- Indicators/dots -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<!-- The slideshow/carousel -->
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="../assets/tianyan/paishe.jpg" class="d-block">
    <div class="carousel-caption">
      <h3>“中国天眼”探测到的“斯蒂芬五重星系”周围天区的原子气体分布。</h3>
    </div>
  </div>
  <div class="carousel-item">
    <img src="../assets/tianyan/xingkong.jpg" class="d-block">
    <div class="carousel-caption">
      <h3>星空下的“中国天眼”</h3>
    </div> 
  </div>
  <div class="carousel-item">
    <img src="../assets/tianyan/3.jpeg" class="d-block">
    <div class="carousel-caption">
      <h3>据官方介绍，自2021年，中国天眼已经发现了300多颗脉冲星，如今探索依然在继续着。</h3>
    </div>  
  </div>
</div>
<!-- Left and right controls/icons -->
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
        </div>
        <ul class="right">
          <a href=""> <li>重磅！中国天眼新发现</li></a>
          <a href=""> <li>“中国天眼”：观天巨目 国之重器</li></a>
          <a href=""> <li>助力中國天眼發展  擔當天文教育使命</li></a>
          <a href=""> <li>中国天眼FAST发现目前宇宙最大原子气体结构</li></a>
          <a href=""> <li>“中国天眼”—500米口径球面射电望远镜</li></a>
    </ul>
    </div>
</template>
<script>
export default {
    name:'',
}
</script>
<style lang="css" scoped>

    a {
      text-decoration: none;
      color:#666;
    }
    .root {
      display: flex;
      justify-content: center;
    }
    .left {
       
        margin-left:100px ;
        width: 50%;
    }
    .right {
        margin-left: 20px;
        margin-right:100px ;
        width: 35%;
        height: 350px;
        box-shadow: 0px 1px 0px 0px 2px rgba(0,0,0,.3);
    }
    img {
      height: 350px;
      width: 100%;
    }
    .right li {
        display: block;
        height: 20%;
        width: 100%;
        line-height: 70px;
        font-size: 20px;
        background-color: #f0e9e3;
        transition: all .5s;
        padding-left: 13px;
    }
    .right li:hover {
        background-color: #CC9966;
        transition: all .5s;
    }
</style>