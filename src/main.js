import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) =>{
  if(to.path === '/'){
    next()
  }else {
    const name = localStorage.getItem("name")
    const password = localStorage.getItem("password")
    if((name === undefined || name === null) && (password === undefined || password === null)){
      next({path:'/'})
    }else{
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
