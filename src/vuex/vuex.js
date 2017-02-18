/**
 * Created by SPACEY on 2017/2/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
//引入article
//import a1 from '../article/a1.html'

Vue.use(Vuex);

//创建store实例
//const store = new Vuex.Store({
export default new Vuex.Store({
//    储存状态值
    state: {
        a:[
            {
                aNum: 0,
                title: '序言',
                //content: '序言内容',
                path: '/article/a0'
            },
            {
                aNum: 1,
                title: '文章一标题',
                //content: '文章一内容',
                path: '/article/a1'
            },
            {
                aNum: 2,
                title: '文章二标题',
                //content: '文章二内容',
                path: '/article/a2'
            }
        ],
        test: "ok"
    }
});
