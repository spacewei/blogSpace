/**
 * Created by SPACEY on 2017/2/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
//引入article
import a0 from 'article/a0'
import a1 from 'article/a1'
import a2 from 'article/a2'

Vue.use(Vuex);

let aList = [
    {
        aNum: 0,
        title: '序言',
        //content: '序言内容',
        path2: '/article/a0',
        path1: 'a0',
        component: a0
    },
    {
        aNum: 1,
        title: '文章一标题',
        //content: '文章一内容',
        path2: '/article/a1',
        path1: 'a1',
        component: a1
    },
    {
        aNum: 2,
        title: '文章二标题',
        //content: '文章二内容',
        path2: '/article/a2',
        path1: 'a2',
        component: a2
    }
];
//alert(this.$router);

//for(let i=0;i<aList.length;i++){
//  //aChildren.path = a.path;
//  //aChildren.component = a.component;
//  alert(aList[i].path1);
//}

//创建store实例
//const store = new Vuex.Store({
export default new Vuex.Store({
//    储存状态值
    state: {
        //a:[
        //    {
        //        aNum: 0,
        //        title: '序言',
        //        //content: '序言内容',
        //        path: '/article/a0'
        //    },
        //    {
        //        aNum: 1,
        //        title: '文章一标题',
        //        //content: '文章一内容',
        //        path: '/article/a1'
        //    },
        //    {
        //        aNum: 2,
        //        title: '文章二标题',
        //        //content: '文章二内容',
        //        path: '/article/a2'
        //    }
        //],
        a: aList,
        test: "ok"
    }
});
