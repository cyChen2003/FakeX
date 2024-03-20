import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from '@/uni_modules/uview-ui'
import setUserInfo from "./common/setUserInfo.js" //微信用户信息

Vue.use(uView)
Vue.prototype.$setUserInfo = setUserInfo
Vue.prototype.$appid = "wx67228a6e0242bd8d"
Vue.prototype.$secret_key = "bfb77f34225eec17352e8cb3b78ae563"

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif