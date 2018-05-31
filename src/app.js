window._ = require('lodash');

window.Popper = require('popper.js').default;

window.$ = window.jQuery = require('jquery');

require('bootstrap');

window.axios = require('axios');

window.Vue = require('vue');

import App from "./../components/app";

Vue.component('app', App);

import VueRouter from "vue-router";

import router from "./routes";

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router
});