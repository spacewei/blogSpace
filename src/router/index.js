import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Article from 'components/Article'
import ArticleList from 'components/ArticleList'
//import WriteArticle from 'components/WriteArticle'
//import Editor from 'components/Editor'
//import a0 from 'article/a0'
//import a1 from 'article/a1'
//import a2 from 'article/a2'
//let aChildren = {};
//for(let i=0;i<this.$store.state.a.length;i++){
//  aChildren.path = this.$store.state.a.path;
//  aChildren.component = this.$store.state.a.component
//}
//let test = this.$store.state.test;

Vue.use(Router);

export default new Router({
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
      children: [
        {
          path: 'a0',
          component: a0
        },
        {
          path: 'a1',
          component: a1
        },
        {
          path: 'a2',
          component: a2
        }
      ]
    },
    //{
    //  path: '/writeArticle',
    //  name: 'WriteArticle',
    //  component: WriteArticle
    //},
    //{
    //  path: '/editor',
    //  name: 'Editor',
    //  component: Editor
    //}
  ]
})
