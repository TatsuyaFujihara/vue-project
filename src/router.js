import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/Step1.vue'
import Step2 from './views/Step2.vue'
import Step3 from './views/Step3.vue'
import review from './views/review.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {path: '/step1', component: Step1},
        {path: '/step2', component: Step2},
        {path: '/step3', component: Step3},
        {path: '/review', component: review}
    ]
})