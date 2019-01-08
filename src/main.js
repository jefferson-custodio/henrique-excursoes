import Vue from 'vue'
import App from './App'
import Router from 'vue-router' // routes
import VueHead from 'vue-head' // manipulating head meta tags
import VueResource from 'vue-resource' // http client
import VuePaginate from 'vue-paginate' // paginação

// config
Vue.config.productionTip = false

// use
Vue.use(Router)
Vue.use(VueResource)
Vue.use(VuePaginate)

// pages
import Home from '@/pages/Home'
import Servicos from '@/pages/Servicos'
import Contato from '@/pages/Contato'
import TabelasTecnicas from '@/pages/TabelasTecnicas'
import QuemSomos from '@/pages/QuemSomos'
import Produtos from '@/pages/Produtos'

//filter 
// Vue.filter('truncate', function (text, stop, clamp) {
//   return text
//     .replace(/&nbsp;/gi,'') // remove &nbsp
//     .replace(/<(?:.|\n)*?>/gm, '') // remove tags
//     .replace('/\r?\n|\r/g', ' ') // remove breaklines
//     .slice(0, stop) + (stop < text.length ? clamp || '...' : '')
// })

// router
const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/servicos', component: Servicos },
    { path: '/contato', component: Contato },
    { path: '/tabelas-tecnicas', component: TabelasTecnicas },
    { path: '/quem-somos', component: QuemSomos },
    { path: '/produtos', component: Produtos },
  ], 
  mode: 'history',
  
})

// vue instance
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})


