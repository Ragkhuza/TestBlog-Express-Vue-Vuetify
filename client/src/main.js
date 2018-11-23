import './plugins/vuetify'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppHome from './components/AppHome'
import AppLogin from './components/AppLogin'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {
        path: '/', name: 'AppHome', component: AppHome
    },
    {
        path: '/login', name: 'AppLogin',component: AppLogin
    }
];

const router = new VueRouter({
    routes
});
new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
