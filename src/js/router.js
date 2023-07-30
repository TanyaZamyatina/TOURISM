import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './MainPage.vue'
import AboutUsPage from './AboutUsPage.vue'
import TrainingPage from './TrainingPage.vue'
import ToursPage from './ToursPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            }
        }
    },
    routes: [
        { path: '/home', component: MainPage, alias: '/' },
        { path: '/about', component: AboutUsPage },
        { path: '/training', component: TrainingPage },
        { path: '/tours', component: ToursPage },
    ]
});