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
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM4ZjEyMjFhNmYzNTIwNWE2YzhmOGY4ZWIxNWUyNTZkNGQ0ZGVlZjQ5NGQ3ZDcwMTdjN2ViZmZkZDBlNzJiOWY4NGFmOTcwMDA1NjM3ZGE4In0.eyJhdWQiOiIyIiwianRpIjoiMzhmMTIyMWE2ZjM1MjA1YTZjOGY4ZjhlYjE1ZTI1NmQ0ZDRkZWVmNDk0ZDdkNzAxN2M3ZWJmZmRkMGU3MmI5Zjg0YWY5NzAwMDU2MzdkYTgiLCJpYXQiOjE1MDUzMjY2MTAsIm5iZiI6MTUwNTMyNjYxMCwiZXhwIjoxNTA1MzMwMjA5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.tLIIwykekUgh_rPMm4_iiww8P4loHrOOmIFoZkhRVTlee2xe2WMCKLoXEkfU3shUxp88istb_5GNgdxt6cy-JSYjH0GIKMl-BA9S5QWIKxDFKiVqi5aVsXLRrYxTS1U4jLiQX8FywHf_D38jw5_aF18qBZ9b4cDhZgHwLFut1bv-JaiznQOiVGurjpv77AMh4Kgs_xXIkBS59Y0qJRNXfUqU17UeTwv7DPykxR6Z21G-CdeIZeCV2RfevE5TuXZmADYzqEARwhBzVRxfuzsK_98pTgqu094Ten22T1hHoEExSZhC3wE4Hpjhv7h5lzOQLn5xQh6FymjlCHmbi3PF80iTfp-9PS_4X6KZ3fSJwiX0gDYGZzRG04I_6yXWNdVUhBrkdl2u70BRShd4PZXQdordSv1brs4BFFHjzC2ulJUNgZe1BuTdvQ3HXvDi51sYV7EW0CzcLio0IDf5S-uLEh2cCqzrO6cBWBcftbN6VM5IMPitVS67i2jCThewIC6cSzzSABz6UVCfeVM3Vga8d_Sordh5whAGmgH6cCaTLMIG1qESVp1Hyik5nVnKCZ7p9rDH5JBGxMuGafMLy3mkpf8Xh3FM_utI28KLslpwbwiWBbS9ATkBFEG-16BumYcHbe7hoy46zlht-b8iN246-mkhhf9_O4880e_Et8RNFus');
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
  watch: {
    $route(to, from) {
      this.$store.dispatch('clearRegistries');
    }
  },
  router,
  template: '<App/>',
  components: { App },
});
