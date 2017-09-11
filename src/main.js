// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './App';
import routes from './router';
import VuexStore from './vuex/store';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = process.env.SERVER;
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNiYTY3ZDBjNTY1MDkwNTUyNDhhNjQzMjJlN2UyNTkzODEzMWRlMzI4YTI4ZWFiZmI1MmY3MTMzYmQyNzJlZWUzM2E1ZDljOGE2YTI0MzgyIn0.eyJhdWQiOiIyIiwianRpIjoiY2JhNjdkMGM1NjUwOTA1NTI0OGE2NDMyMmU3ZTI1OTM4MTMxZGUzMjhhMjhlYWJmYjUyZjcxMzNiZDI3MmVlZTMzYTVkOWM4YTZhMjQzODIiLCJpYXQiOjE1MDUxNTQ3MTksIm5iZiI6MTUwNTE1NDcxOSwiZXhwIjoxNTA1MTU4MzE5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gI1md572q_DZR4rhCiseONbrpzUzDMuz7Gw2rtd66nMCrX1H8NfyZiQuSNNkg4QvZXdC30eMhiVnTU-jO1HEfwMQ55bXk9OqWnGjY3T29JZfzDwuhcA-4GOnmzjfU65mvI7yNJKNIUU3CXq6Jq3ru1sPvWtl7yv9NXHzkMtAiThJ-9y64FTrmWkeuFby0Za-DA9ngTgb2BdOZuLKknJfqrSuF3B-7U0q3culIiE00tRkicGcKHB1shznLC3hXtEKGSdZUV2HArFfrV6knfCY2Na_LRwE9AQiGwNPZhgYMCXLVCK851a1qkXTVKN4iDXaFZZZVk69wldKe3GOwvKH5-W_1-oB1VrDmsHvX148czEhP4WNGVdsXlQli0bwiNzqz9a1DYA_hyECO8FtLcaJqDqEk_ro8bNbfWOTspRhrjEAZIEJJQtVBc6NmRKIoBAi4wdN1g6xQl74uaRc6Tump0qoPnhVoVcPYNO3MQpjHQkazDLT-x9iosrJh7Kh8L0ZP0OJZQQg0Z6IRGBO-jwkPxD_HvarKbZbw9cWuVOm9iOPqEla8GX6biWOYzyV3UvLNP2v2LksPPwbceGtqX9xHKbHWVv2LuUyxFweg2SU0RS47iclDZBQhE55AN2xtxWa4f6dk8RGhjk2zkd4o29ztTFTfyyeBafyZ3OcOU4KG5c');
  next();
});

Vue.config.productionTip = false;

const store = new Vuex.Store(VuexStore);
const router = new VueRouter({
  routes
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
