import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import notFoundPage from "@/pages/NotFoundPage.vue";
import productPage from "@/pages/ProductPage.vue";
import CartPage from "@/pages/CartPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import OrderInfoPage from "@/pages/OrderInfoPage.vue";

Vue.use(VueRouter);

const routes = [
  {name: 'main', component: MainPage, path: '/'},
  {name: 'product', component: productPage, path: '/product/:id'},
  {name: 'notFound', component: notFoundPage, path: '*'},
  {name: 'cartPage', component: CartPage, path: '/cart'},
  {name: 'order', component: OrderPage, path: '/order'},
  {name: 'orderInfo', component: OrderInfoPage, path: '/order/:id'}
];

const router = new VueRouter({
  routes
});

export default router;
