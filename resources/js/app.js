/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import Vue from 'vue'

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
Vue.use(VueRouter,VueAxios,Axios);

import VueSweetalert2 from 'vue-sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.component('pagination', require('laravel-vue-pagination'));  

import App from './components/App.vue'
import router from './router'

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})