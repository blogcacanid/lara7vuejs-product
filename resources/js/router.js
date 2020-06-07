import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueRouter,VueAxios,Axios);

import App from './components/App.vue';
import ProductList from './components/ProductList.vue';
import ProductAdd from './components/ProductAdd.vue';
import ProductView from './components/ProductView.vue';
import ProductEdit from './components/ProductEdit.vue';
import ProductDelete from './components/ProductDelete.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'product-list',
            path: '/',
            component: ProductList
        },
        {
            name: 'product-add',
            path: '/product-add',
            component: ProductAdd
        },
        {
            name: 'product-view',
            path: '/product-view/:id',
            component: ProductView
        },
        {
            name: 'product-edit',
            path: '/product-edit/:id',
            component: ProductEdit
        },
        {
            name: 'product-delete',
            path: '/product-delete/:id',
            component: ProductDelete
        }
    ]
})

export default router