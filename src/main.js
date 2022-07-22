import '@/font/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BigNumber from 'bignumber.js'

import lottie from 'vue-lottie';
//console.log('localStorage',localStorage)
localStorage.clear()
Vue.component('lottie', lottie)


// 点击复制
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 多语言
import i18n from './i18n'

import '@/css/rotation.css'

// spacepiwep按钮展开动画特效样式
import '@/css/spacepiwepButtonExpandAnimation.css'
// concept动画特效样式
import '@/css/conceptAnimation.css'
// 文字动画特效样式
import '@/css/fontAnimation.css'


import vuetify from './plugins/vuetify'

import audio from 'audio'

Vue.prototype.$BigNumber = BigNumber
Vue.config.productionTip = false

if (window.plus) {
  plus.navigator.setStatusBarBackground('#0344fb');
}

new Vue({
  audio,
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
