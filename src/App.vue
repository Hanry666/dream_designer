<template>
  <div id="app">
      <Head  class="transition-box head"></Head>
    <router-view name="top" class="top"></router-view>
    <demo></demo>
    <router-view name="bottom" class="bottom"></router-view>
  </div>
  
</template>

<script>
import demo from './components/SwiperDemo.vue'
import Head from './components/Head.vue'
export default {
  name: 'App',
  components: {
    demo,Head
  },
  data () {
    return {
	   
    }
  },
}
</script>

<style>
 * {
	margin: 0;
	padding: 0;
}

li {
	list-style: none;
}
html, body {
	position: relative;
	height: 100%;
  width: 100vw;
  background-color: rgb(249,247,241);
}
img {
	display: block;
}

body {
	background: #eee;
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #000;
	margin: 0;
	padding: 0;
  overflow-x: hidden;
}
.top {
  height: 100px;
  width: 100vw;
  background-color: rgb(249,247,241);
  color:red;
  font-weight: bold;
  text-shadow: 3px 3px 6px gold;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
.bottom {
  padding-top: 50px;
  min-height: 700px;
  width: 100vw;
  background-color: rgb(249,247,241);

}
.head {
  top:0;
  /* position: sticky; */
  z-index: 2;
}
</style>
