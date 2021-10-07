import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import About from "./views/About";
import Preview from "./views/Preview";

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Preview',
        component: Preview,
        meta: { title: 'Олег Ардимасов' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: 'Олег Ардимасов' }
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
        meta: { title: 'Галерея' }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'О себе' }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    document.title= to.meta.title
    next();
});


new Vue({
    router,
    render: function(createElement){
        return createElement(App)
    }
}).$mount('#app')
