import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
//import lianxi from '@/components/lianxi'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: home
		}
	]
})