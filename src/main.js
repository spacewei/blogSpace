// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import Index from 'components/Index'
import Article from 'components/ArticleLayout'
import ArticleList from 'components/ArticleList'
/**************************************************************/
//在此添加文章vue
import a0 from './article/a0'
import a1 from './article/a1'
import a2 from './article/a2'
import a3 from './article/a3'
//在此添加文章的路由路径和标题
let aList = [
  {
    aNum: 0,
    title: '简历',
    path2: '/article/a0',
    path1: 'a0',
    component: a0
  },
  {
    aNum: 1,
    title: '用jQuery和PHP仿电商部分页面所踏过的坑',
    path2: '/article/a1',
    path1: 'a1',
    component: a1
  },
  {
    aNum: 2,
    title: '用vue和PHP仿电商部分页面所踏过的坑',
    path2: '/article/a2',
    path1: 'a2',
    component: a2
  },
  {
    aNum: 3,
    title: '日历组件小结',
    path2: '/article/a3',
    path1: 'a3',
    component: a3
  }
];
/**************************************************************/
//全局注册
Vue.use(Vuex);
Vue.use(VueRouter);
//
var aChildren = [];
for(let i=0;i<aList.length;i++){
  aChildren.push(
      {path: aList[i].path2, component: aList[i].component}
  )
}

const store = new Vuex.Store({
//    储存状态值
  state: {
    a: aList,
    test: "ok"
  }
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/articleList',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
      children: aChildren
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
