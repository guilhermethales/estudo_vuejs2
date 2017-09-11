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
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI1NjYxNjA2MDA4NGNjOGEyODczMmQzNGRkNTRkMzk0ZmJjZTQ0YWU0ODM5NTUwYjJkYmEyYWNiODMzZmJmYmY5MTE5ZTMzNDk2NWQ2NTkxIn0.eyJhdWQiOiIyIiwianRpIjoiMjU2NjE2MDYwMDg0Y2M4YTI4NzMyZDM0ZGQ1NGQzOTRmYmNlNDRhZTQ4Mzk1NTBiMmRiYTJhY2I4MzNmYmZiZjkxMTllMzM0OTY1ZDY1OTEiLCJpYXQiOjE1MDUxNTg3NDcsIm5iZiI6MTUwNTE1ODc0NywiZXhwIjoxNTA1MTYyMzQ2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.FQQyue_7ly1gh4l-cP7bdiu4zkPdylSWm63IYQuCBFmmCm-LHGxdzV9II6ZqfNnQ16oSCrqLamdJIugbtdE6kX-PcNgQjH2gZu3Bcxmr4gckN-tBM1OJTyTTjMMgfvZSArjJxlYBSH_EraAHB65FWX_GDkXX9U_Sdgacb9x74fNMNZs_9IYqhTnzYW1RVS36LVJzr1MGOC2IyzGY-TASnheF_c0Sb0Qb6lqjqHjSpilQjdfJUgpSdheovLaUwxfdEf_hhNN693pVVJr-YeiKmgOKDkM-NPcLS2IMSbXLjl2OBvg_rlGzUWjNeCZX5s1qhZchgw9WUtki7JUFeuHSV8H8brB-9x8mEkFUEIN5osfV27926j1_xuBZ-3k3MEZ1CWuEMin9e74aPBglC6v05o9eEW84H8WH5-CRCoUF8i2rdYw-ApmR_4-Y1YsDl3J8D-MUJ-YD3vFYMg628JFC9EDinaa_RT-hd9bPUSPb3iIGQUjVdEyZJmZGB_gWO5ay459fXnSmLypJrkK1oVxknhXpGQTYmaGqdW3dHNl9tl5fCk_nQpvgFTrUbYoSLFiZl2kSUn2z64ps6u4JcJwveeUZi6gotdH2UGD2ybQWtuN41kZyWddnw5_QFuF2W2YA_TndBNfMylWIkOYFa319oDyfm2xPjyGukNCypAvmGYk');
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
