import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import home from './home';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [ ...home,]
});

router.beforeEach((to, from, next) => {
    // const { Authorization } = getLocalStorage(
    //   'Authorization'
    // );
    // if (!Authorization) {
    //     console.log("login1");
    //   if (to.meta.login) {
    //     console.log("login2");
    //     next({ name: 'login', query: { redirect: to.name } });
    //     return;
    //   }
    // }else {
    //     console.log("login3");
    // }
    // console.log(to.meta,"meta");
    //页面顶部菜单拦截
    // let emptyObj=JSON.stringify(to.meta) == "{}";
    // let undefinedObj=typeof(to.meta.showHeader)=="undefined";
    // if(!emptyObj&&!undefinedObj){
    //   store.commit("CHANGE_HEADER",to.meta);
    // }else{
    //   store.commit("CHANGE_HEADER",{showHeader:true,title:""});
    // }
    next();
});

export default router;

