<template>
    <div id="root">
        <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src="../assets/jiaolong/02.webp" alt="">
            </div>
            <div class="content">
                <h2>蛟龙号简介</h2>
                <p>“蛟龙号”是一艘由中国自行设计、自主集成研制的载人潜水器，长8.2米、宽3米、高3.4米、载员3人、最大下潜深度7062米，是世界上同类型载人潜水器的最大下潜深度，可以在占世界海洋面积99.8%的海域自由行动。
                </p>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src="../assets/jiaolong/03.webp" alt="">
            </div>
            <div class="content">
                <h2>下潜作业</h2>
                <p>
                    从2009年海上试验以来，蛟龙号已经在中国南海、西太平洋马里亚纳海沟区等7大海区，开展了百余次成功下潜，深海科技成果丰硕，获取了海量珍贵视像数据资料和高精度定位的地质与生物样品。
                </p>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src="../assets/jiaolong/04.webp" alt="">
            </div>
            <div class="content">
                <h2>海龙二号</h2>
                <p>
                    继“蛟龙号”载人潜水器之后，“海龙二号”无人有缆潜水器和“潜龙一号”无人无缆潜水器也同时入驻青岛深海基地，它们组成“深海梦之队”，继续探索更神秘的深海世界。
                </p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'bottom_jiaolong',
}
</script>
<style lang="css" scoped>
.container{
    position: relative;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 90px 30px;
}


.container .card{

    position: relative;
    max-width: 300px;
    height: 130px;
    background: #fff;
    margin: 0 40px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 102px rgba(0,0,0,0.5);
    transition: .3s ease-in-out;
}

.container .card:hover{
    height: 420px;
}

.container .card .imgBx{
    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
    left: 6px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.container .card .imgBx img{
    height: 100%;
    width: 100%;
    border-radius: 4px;
}

.container .card .content{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: .3s ease-in-out;
}

.container .card:hover .content{
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: .3s;
}

</style>