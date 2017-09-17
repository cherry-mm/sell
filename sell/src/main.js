// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'

Vue.config.productionTip = false

Vue.use(VueRouter);
//let app=Vue.extend(app);
//let router=new VueRouter();
new Vue({
	//router,
	el:"#app",
	render: h => h(App)
})