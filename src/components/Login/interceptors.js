import Vue from 'vue';
import CONFIG from '@/config';

function getToken() {
  let token = localStorage['token'];
  if (!token) {
    token = '{}';
  }
  return JSON.parse(token);
}

function login(router) {
  router.push('./login');
}

function refreshToken(request, token, router) {
  const data = {
    grant_type: 'refresh_token',
    client_id: CONFIG.client_id,
    client_secret: CONFIG.client_secret,
    refresh_token: token.refresh_token,
    scope: ''
  };

  Vue.http.post('oauth/token', data).then((res) => {
    localStorage['token'] = JSON.stringify(res.body);
    request.headers.set('Authorization', `Bearer ${res.body.access_token}`);
    console.log('TOKEN EXPIRADO');
  }).catch((err) => {
    if (err.status === 400) {
      login(router);
    }
  });
}

export default {
  check_empty_token(router) {
    const token = getToken();
    if (!token.access_token) {
      login(router);
    }
  },

  check_auth(router) {
    Vue.http.interceptors.push((request, next) => {
      const token = getToken();
      request.headers.set('Authorization', `Bearer ${token.access_token}`);
      next((res) => {
        if (res.status === 0 || res.status === 401) {
          refreshToken(request, token, router);
        }
      });
    });
  }
};
