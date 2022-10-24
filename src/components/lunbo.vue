<template>
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
    <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg" class="d-block" style="width:100%">
    <div class="carousel-caption">
      <h3>第一张图片描述标题</h3>
      <p>第一张图片描述内容显示在这里！！！</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" class="d-block" style="width:100%">
    <div class="carousel-caption">
      <h3>第二张图片描述标题</h3>
      <p>第二张图片描述内容显示在这里！！！</p>
    </div> 
  </div>
  <div class="carousel-item">
    <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" class="d-block" style="width:100%">
    <div class="carousel-caption">
      <h3>第三张图片描述标题</h3>
      <p>第三张图片描述内容显示在这里！！！</p>
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

</template>
<script>
export default {
    
}
</script>
<style lang="css">
    
</style>