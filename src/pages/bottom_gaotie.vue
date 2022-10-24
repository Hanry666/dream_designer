<template>
    <div id="tem">
        <h3 v-show="isshow">{{text}}</h3>
        <div class="root">
        <div class="box" 
        @mouseover="text='徐新高铁，线路东起江苏徐州（连云港）、西至新疆乌鲁木齐，全长3176公里。徐新高铁是世界上规划里程最长的高铁线路，设计时速为200-350公里/小时，由徐兰高铁和兰新高铁组成。2017年7月9号，宝兰段正式通车，标志徐新高铁正式贯通.'
        ,isshow=true" @mouseleave="isshow=false">
          <img src="../assets/gaotie/xuxin.webp" alt="">
          <span>徐新高铁</span>
        </div>
        <div class="box" @mouseover="text='京广高铁，全长2298公里。始于北京西站，止于广州南站，途径北京，河北，河南，湖南，广东，设计时速350公里/小时，目前时速为310公里/小时左右。目前乘坐北京西到广州南的高速列车仅需要8个小时。'
        ,isshow=true" @mouseleave="isshow=false">
            <img src="../assets/gaotie/jingguang.webp" alt="">
          <span>京广高铁</span>
        </div>
        <div class="box" @mouseover="text='沪昆高铁，由沪杭客运专线、杭长客运专线以及长昆客运专线组成，途经上海、杭州、南昌、长沙、贵阳、昆明6座省会城市及直辖市，线路全长2252公里，设计速度350km/h，是中国东西向线路里程最长、经过省份最多的高速铁路。'
        ,isshow=true" @mouseleave="isshow=false">
            <img src="../assets/gaotie/hukun.webp" alt="">
          <span>沪昆高铁</span>
        </div>
        <div class="box" @mouseover="text='京沪高铁，线路由北京南站至上海虹桥站，全长1318公里，纵贯北京、天津、上海三大直辖市和冀鲁皖苏四省，连接京津冀城市群和长江三角洲城市群两大城市群，也是中国唯一实现盈利的高铁线路。'
        ,isshow=true" @mouseleave="isshow=false">
            <img src="../assets/gaotie/jinghu.webp" alt="">
          <span>京沪高铁</span>
        </div>
        <div class="box" @mouseover="text='哈大高铁，全长921公里，是中国目前在最北端的严寒地区设计建设标准最高的一条高速铁路，哈大高铁于2012年12月1日正式开通运营。它北起黑龙江省哈尔滨市，南抵辽宁省大连市，线路纵贯东北三省，途径哈尔滨、长春、沈阳、大连四个副省级城市和六个地级市及其所辖区县。'
        ,isshow=true" @mouseleave="isshow=false">
            <img src="../assets/gaotie/hada.webp" alt="">
          <span>哈大高铁</span>
        </div>
    </div>
    </div>
   
</template>
<script>
export default {
    name:'bottom_gaotie',
    data(){
        return{
            text:'',
            isshow:false,
        }
    }
}
</script>
<style lang="css" scoped>
    #tem {
        position: relative;
    }
    h3 {
        position: absolute;
        text-align: center;
        top:20px;
        width: 100%;
        padding:0 100px;
        height: 0px;
        transition: all .5s;
    }
    .root {
        position: absolute;
        left:50%;
        top:130px;
        transform: translate(-50%,0);
        width: 90%;
        display: flex;
       
    }
    .box {
        height: 500px;
        flex:1;
        margin: 0 15px;
        background: #fff;
        box-shadow: 10px 10px 20px rgba(0,0,0,.5);
        border:10px solid #fff;
        border-radius: 20px;
        transition: all .5s;
        overflow: hidden;
    }
    .box>img {
        width: 200%;
        height: 85%;
        object-fit: cover;
        transition: all .5s;
    }
    .box>span {
        display: flex;
        font:800 25px '优设标题黑';
        text-align: center;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    .box:hover {
        flex-basis: 40%;
    }
    .box:hover>img {
        height: 100%;
        width: 100%;
    }
</style>