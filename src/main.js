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
    { path: '/', component: Preview },
    { path: '/home', component: Home },
    { path: '/gallery', component: Gallery },
    { path: '/about', component: About }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: function(createElement){
        return createElement(App)
    }
}).$mount('#app')
