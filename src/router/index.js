import VueRouter from "vue-router";

import top_20da from '../pages/top_20da.vue'
import top_gaotie from '../pages/top_gaotie.vue'
import top_5g from '../pages/top_5g.vue'
import top_jiaolong from '../pages/top_jiaolong.vue'
import top_tianyan from '../pages/top_tianyan.vue'
import bottom_20da from '../pages/bottom_20da.vue'
import bottom_gaotie from '../pages/bottom_gaotie.vue'
import bottom_5g from '../pages/bottom_5g.vue'
import bottom_jiaolong from '../pages/bottom_jiaolong.vue'
import bottom_tianyan from '../pages/bottom_tianyan.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            components:{
                top:top_20da,
                bottom:bottom_20da
            }
        },
        {
            path:'/20da',
            components:{
                top:top_20da,
                bottom:bottom_20da
            }
        },
        {
            path:'/gaotie',
            components:{
                top:top_gaotie,
                bottom:bottom_gaotie
            }
        },
        {
            path:'/5g',
            components:{
                top:top_5g,
                bottom:bottom_5g
            }
        },
        {
            path:'/jiaolong',
            components:{
                top:top_jiaolong,
                bottom:bottom_jiaolong
            }
        },
        {
            path:'/tianyan',
            components:{
                top:top_tianyan,
                bottom:bottom_tianyan
            }
        },
    ]
})