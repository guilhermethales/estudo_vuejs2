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
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVhNGEyOWYxNTg4MTFmMGE5NWFmNjQzZmE0OTZlZGI0YjQ1N2Y0MWE3ODE3MjY3NmIxODVmOTgwOWVmNTIzNGFkNjA4YTMzZjJkM2U2YjMzIn0.eyJhdWQiOiIyIiwianRpIjoiZWE0YTI5ZjE1ODgxMWYwYTk1YWY2NDNmYTQ5NmVkYjRiNDU3ZjQxYTc4MTcyNjc2YjE4NWY5ODA5ZWY1MjM0YWQ2MDhhMzNmMmQzZTZiMzMiLCJpYXQiOjE1MDUzOTgyODcsIm5iZiI6MTUwNTM5ODI4NywiZXhwIjoxNTA1NDAxODg3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HCOTIGaqx0s7tci7f50ReGnAzsyx8Gc9HcWki_Jk7BokH1P4Rez73_aUQMlhDieN88fOtIakOVS33oKpEcdWTe2ucHhNqFLD9EniQmmspC5g1-dmQOBpr1bSAOsAo79A5WGTm_GhtDlgUB9Kj5HC3dJLmazCRLVYWZ0C0evT-oocuaDqg3svjzQFsZk8E2395xLr51aNxzw64ZJSIWdmxZI3_vv-dL-_PtQJ8mGsMVA80N8tx5iRIssQURPmu2iHCLqQwp1rjhzzNGgHg29HhE5dr8wrz2gJ93gshKiDWCMohl0jx3rYJUkmR_O936TnmuSE7oIutJ6Uwwd7AC5BtgAaYF3eyrlSlUKMKcq2ATqzaQ9MCC8mHP4L-hehQrE8rWxQlUQoFvMAykgXlTRTs05L9xp6mjS4ihnZa06SavJrR4Fo8j4KoBpuEm5AFLdy8MIg_lq35jr1rNuoYXD0SU1bmZ21bgWH-08orontoL6YZHkYWY8cXhCjlbh1G2JI0PcxO9zk6YreTe0TX_PDYJ06OC6k5hJrtNp_RpyKOb7e7FJrLRV0f-pYK3CJpiKFrZVCFoX7CLw64b5S_lgdHojVbYrT6ST-0Bo_uZ1Gd98P-FSXtEagsNGqh0LH8O_MKWrFEb_4GE1kdemmfYHBO-Hgaf87oQli5atSil_bMCw');
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
