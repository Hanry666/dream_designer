<template>
    <div id="Head">
        <el-menu :default-active="activeIndex" 
        background-color="#D00505"
        text-color="#fff"
        
        class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">制作团队</template>
    <el-menu-item index="2-1"><a href="https://github.com/Hanry666" target="_blank"> 20103303韩锐</a></el-menu-item>
    <el-menu-item index="2-2">2</el-menu-item>
    <el-menu-item index="2-3">3</el-menu-item>
  </el-submenu>
  <el-menu-item index="4"><a href="https://github.com/Hanry666/dream_designer" target="_blank">github仓库</a></el-menu-item>
<img src="../assets/R-C.png" alt="" id="tust">
</el-menu>
  </div>  
</template>
<script>
  export default {
    name:'Head',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="css" scoped>
#tust {
    float:right;
    height: 40px;
    margin-top:10px;
    margin-right: 20px;
}
a {
  color:aliceblue;
  text-decoration: none;
}
a:hover {
  color:antiquewhite;
}
el-menu {
  background-color:#D00505;
}
</style>