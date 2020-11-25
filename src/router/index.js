import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import lianxi from '@/components/lianxi.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: home
	}, {
		path: '/lianxi',
		name: 'lianxi',
		component: lianxi
	}]
})
