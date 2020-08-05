import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect:'/index'
	},
	{
		path: '/index',
		component: Index,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//挂载路由守卫
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title + ' | Naccl\'s Blog'
	}
	next()
})

export default router