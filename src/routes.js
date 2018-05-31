import VueRouter from "vue-router";

let routes = [
    {
        path:'/',
        component: require('./../components/authorization/Login')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router