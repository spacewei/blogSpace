<template>
    <div>
            <p>以<<{{this.$store.state.a[1].title}}>>中用传统的HTML+css+JavaScript前端和LAMP后台形式的网站类型为基础，用vue改造成时髦的MVVM框架。jQuery只用于canvas DOM操作和AJAX。</p>
            <dl>
                <dt><h3>一、目标</h3></dt>
                <dd>见&lt&lt<a href="#/article/a1?aNum=1#target-p9Demo" target="_blank">{{this.$store.state.a[1].title}}</a>&gt&gt之目标</dd>
                <dt><h3>二、技术栈</h3></dt>
                <dd>
                    <p><b>vue</b>、html、css、JavaScript、canvas、jQuery、PHP、MySQL</p>
                </dd>
                <dt><h3>三、项目结构</h3></dt>
                <dd class="layout-FlyWing-wrap">
                    <div class="layout-FlyWing-middle">
                        <div class="layout-FlyWing-inner">
                            <p>解释：右是整体目录结构，用vue脚手架工具搭建，其中src是代码存放地。</p>
                            <p>build用于node.js将源码装换成浏览器可直接运行的js、css文件，可近似理解成“编译”，config放置node.js一些配置文件。</p>
                            <p>dist是“编译”成浏览器静态文件后的存放地，放在服务器上使用的是这里的文件。static放置不会“编译”的一些引用资源，在dev模式下，只有这里的文件可直接引用到</p>
                            <p>index.html是整个项目真实的入口HTML文件，浏览器实际上运行这个文件，package.json是项目的配置信息，定义了这个项目所需要的各种模块，稍后详解。</p>
                            <p>左是src结构，编译引用资源assets，组件components，自用js库lib，根组件App.vue,入口js：main.js，根组件在这里实例化。</p>
                            <p>组件功能：商品页GoodsPage，商品规格选择与显示GoodsSpec，页面头部HeaderP9，登录功能LoginDiv，图片切换及放大镜Pic，购物车ShopCart。</p>
                        </div>
                    </div>
                    <img :src="p9VueSrc" class="layout-FlyWing-left">
                    <img :src="p9VueAll" class="layout-FlyWing-right">
                </dd>
                <dt><h3>四、package.json及项目依赖</h3></dt>
                <dd class="clearFloat">
                    <pre class="pre-package float-left">
{
  "name": "p9vue",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "Space Wei",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "lint": "eslint --ext .js,.vue src"
  },
  "dependencies": {
    "babel-runtime": "^6.20.0",
    "css-loader": "^0.25.0",
    "file-loader": "^0.9.0",
    "jquery": "^3.1.1",
    "style-loader": "^0.13.1",
    "vue": "^2.1.0",
    "vue-router": "^2.1.1",
    "vuex": "^2.1.1"
  },
  "devDependencies": {
    "autoprefixer": "^6.4.0",
    "babel-core": "^6.0.0",
    "babel-eslint": "^7.0.0",
    "babel-loader": "^6.0.0",
    "babel-plugin-transform-runtime": "^6.0.0",
    "babel-preset-es2015": "^6.0.0",
    "babel-preset-stage-2": "^6.0.0",
    "babel-register": "^6.0.0",
    "chalk": "^1.1.3",
    "connect-history-api-fallback": "^1.1.0",
    "css-loader": "^0.25.0",
    "eslint": "^3.7.1",
    "eslint-friendly-formatter": "^2.0.5",
    "eslint-loader": "^1.5.0",
    "eslint-plugin-html": "^1.3.0",
    "eslint-config-standard": "^6.1.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^2.0.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.13.3",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "function-bind": "^1.0.2",
    "html-webpack-plugin": "^2.8.1",
    "http-proxy-middleware": "^0.17.2",
    "json-loader": "^0.5.4",
    "semver": "^5.3.0",
    "opn": "^4.0.2",
    "ora": "^0.3.0",
    "shelljs": "^0.7.4",
    "url-loader": "^0.5.7",
    "vue-loader": "^10.0.0",
    "vue-style-loader": "^1.0.0",
    "vue-template-compiler": "^2.1.0",
    "webpack": "^1.13.2",
    "webpack-dev-middleware": "^1.8.3",
    "webpack-hot-middleware": "^2.12.2",
    "webpack-merge": "^0.14.1"
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  }
}
                    </pre>
                    <div class="package-column-wrap float-left">
                        <div class="package-column">
                            <p>package.json文件可以手工编写，也可以使用npm init命令自动生成。</p>
                            <p>npm init后，以问答写完项目信息。package开头是项目的基本信息。</p>
                            <p>有了package.json文件，直接使用npm install命令，就会在当前目录中安装所需要的模块。</p>
                            <p>如果一个模块不在package.json文件之中，可以单独安装这个模块，并使用相应的参数，将其写入package.json文件之中。(npm install vue --save,--save-dev是开发模式）</p>
                            <p>scripts指定了运行脚本命令的npm命令行缩写，比如dev指定了运行npm run dev时，要执行node build/dev-server.js。</p>
                            <p>dependencies字段指定了项目运行所依赖的模块，devDependencies指定项目开发所需要的模块。</p>
                            <p>依赖例子："vue": "^2.1.0"，由模块名和对应的版本要求组成，“大版本.次要版本.小版本”</p>
                            <p>engines指明了该项目所需要的node.js版本.</p>
                            <p>其他：main字段指定了加载的入口文件（未使用），require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。</p>
                            <p>css-loader、file-loader、jquery、style-loader、vue-router、vuex不是vue脚手架自带。</p>
                            <p><a href="http://javascript.ruanyifeng.com/nodejs/packagejson.html" target="_blank">详见大神</a></p>
                        </div>
                    </div>
                </dd>
                <dt><h3>五、index.html、main.js和App.vue</h3></dt>
                <dd>
                    <p>index.html只有一个id是app的DOM，唯一的作用是被替换成内容。</p>
                    <p>main.js有三个功能：
                        <ol>
                            <li>import vue组件，注意必须在开头引入！
                                <pre>
//引入vue
import Vue from 'vue'
//0,引入路由
import VueRouter from 'vue-router'
//引入vuex
import Vuex from 'vuex'
//引入组件
import App from './App'
import GoodsPage from './components/GoodsPage.vue'
import HeaderP9 from './components/HeaderP9.vue'
import ShopCart from './components/ShopCart.vue'
                                </pre>
                            </li>
                            <li>实例化根组件：
                                <pre>
const app =new Vue({
  el: '#app',
  //在根实例注入所有子组件
  router,
  //通过this.$store访问store
  store,
  render: h => h(App)
});
                                </pre>
                            </li>
                            <li>注意上面的router和store，使用vue router和vuex则在根实例中加入。二者可以不必在main.js进行。
                                <p>注意下面路由map。每个页面由头部（共用HeaderP9）和body组成（可分换成商品页和购物车）。根路径是'/'。</p>
                                <pre>
//在二者已import的前提下
//1,注册VueRouter和Vuex
Vue.use(VueRouter);
Vue.use(Vuex);
//2, 路由map
const routes = [
  {path: '/',
    components: {
      header: HeaderP9,
      body:GoodsPage
    }
  },
  {path: '/shop-cart',
    components: {
      header: HeaderP9,
      body: ShopCart
    }
  }
];
//3, 创建路由实例
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
//创建store实例(store是module名字)
const store = new Vuex.Store({
  //储存状态值
  state: {
    goodsID: 0,
    userID: 0
  },
  //状态值改变方法(同步)
  mutations :{
    changeGoodsID(state,newGoodsID){
      state.goodsID = newGoodsID
    },
    changeUserID(state,newUserID){
      state.userID = newUserID
    }
  },
  //store的计算属性
  getters: {},
  //action,异步改变state,包含mutation
  actions: {}
});
                                </pre>
                            </li>
                        </ol>
                    </p>
                    <p>App.vue则是根实例。.vue文件是vue的HTML、css、js组件后在一个文件的产物，必须在import vue相关依赖后才可使用！</p>
                    <pre>
&lt;template&gt;
  &lt;body id=&quot;app&quot;&gt;
    &lt;router-view name=&quot;header&quot;&gt;&lt;/router-view&gt;
    &lt;router-view name=&quot;body&quot;&gt;&lt;/router-view&gt;
  &lt;/body&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  name: &#x27;app&#x27;,
  components: {
  }
}
&lt;/script&gt;
&lt;style&gt;
  .center-all{
    width: 70rem;
    margin: 0 auto;
  }
&lt;/style&gt;
                    </pre>
                    <p>以上的根实例也是最简单的vue组件例子。其中，&lt;router-view name=&quot;&quot;&gt;&lt;/router-view&gt是路由的跳转点。</p>
                </dd>
                <dt><h3>六、组件间关系</h3></dt>
                <dd>
                    <p>组件组合如图所示：</p>
                    <img :src="componentStructure">
                    <p>组件间有哪些通信？
                        <ol>
                            <li>session期间，用户登录要全局保持；</li>
                            <li>商品规格内选中的规格要传递给商品展示页。</li>
                        </ol>
                    </p>
                    <p>组件间通信有两种设计：</p>
                    <ol>
                        <li>用父子组件间通信方式，即登录的值传递给商品页和购物车页，代码：
                            <pre>
sendSigned: function(){
    this.$emit('sendSigned',this.signed);
}
                            </pre>
                            <p>当登录成功，则登录组件给父组件sign为true值，父组件端监听sendSigned事件：</p>
                            <pre>
&lt;login-div v-on:sendSigned=&quot;getSigned&quot;&gt;&lt;/login-div&gt;
                            </pre>
                            <p>规格组件和商品组件间通信如法炮制：</p>
                            <pre>
sendGoodsID: function(goodsID){
    this.$emit('sendGoodsID',goodsID);
}
//商品页监听事件sendGoodsID
&lt;good-spec v-on:sendGoodsID=&quot;getGoodsID&quot;&gt;&lt;/good-spec&gt;
                            </pre>
                        </li>
                        <li>使用vuex，用统一的状态管理。在main.js的store中有状态值：
                            <pre>
  state: {
    goodsID: 0,
    userID: 0
  }
                            </pre>
                            <p>再定义改变状态值的mutation：</p>
                            <pre>
mutations :{
    changeGoodsID(state,newGoodsID){
      state.goodsID = newGoodsID
    },
    changeUserID(state,newUserID){
      state.userID = newUserID
    }
  },
                            </pre>
                            <p>这样的话，当登录成功及商品规格变化，调用一下方法：</p>
                            <pre>
storeUserID: function(userID){
    this.$store.commit('changeUserID',userID)
},
storeGoodsID: function(goodsID){
    this.$store.commit('changeGoodsID',goodsID)
},
                            </pre>
                            <p>在引用上述两状态值时只需引用：this.$store.state.xx即可</p>
                        </li>
                    </ol>
                </dd>
                <dt><h3>七、组件内MVVM逻辑的改进</h3></dt>
                <dd>
                    <ol>
                        <li>
                            <p>对图片轮播区的实现逻辑进行了改进，更符合“由数据变化改变表现呈现”的思想：</p>
                            <ol>
                                <li>图片不再引用静态资源，而是用require得到。特别注意这点，将来“编译”成服务器发布文件时，代码内的src属性如果是静态写法，可能出错！</li>
                                <li>图片的切换不再用字符串拼接，而是构建imgArray数组，每个成员由小图和大图的键值对组成。</li>
                                <li>有一个data:imgNumber，该数字指代“特殊呈现的对应大图、小图”，他们有特殊的样式。</li>
                            </ol>
                            <pre>
//部分imgArray
imgArray:[{
            bImg: require('../assets/img/p9Picture/bigPicture/goods_430x430_0.jpg'),
            sImg: require('../assets/img/p9Picture/smallPicture/goods_60x60_0.jpg')
           },
          {
            bImg: require('../assets/img/p9Picture/bigPicture/goods_430x430_1.jpg'),
            sImg: require('../assets/img/p9Picture/smallPicture/goods_60x60_1.jpg')
          }]
                            </pre>
                            <p>小图采用循环输出方法，注意不是src=""，而是用vue的写法:src=""，若imgNumber===key，则添加redBorder这个class，此时小图有特殊样式：</p>
                            <pre>
&lt;li v-for=&quot;(value,key) in imgArray&quot; class=&quot;small-img&quot; @mouseover=&quot;carouselStop(key)&quot; :class=&quot;{redBorder: (imgNumber===key)}&quot;&gt;
   &lt;img :src=&quot;value.sImg&quot;&gt;
&lt;/li&gt;
                            </pre>
                            <p>如此一来，通过数组索引表征大图和小图的关联，以数组索引的变化表示“大图因对应小图而变化”。</p>
                            <pre>
this.img = new Image();
this.img.src = this.imgArray[this.imgNumber].bImg;
                            </pre>
                            <p>imgNumber初始化为0，时隔1s或鼠标划过时会改变，且划过鼠标时清除定时。mod和carouselStart方法共用一个对象引用。</p>
                            <pre>
        /*求余方法*/
        mod: function(self,i){
          let remainder = i.i % 5;
          self.imgNumber = remainder;
          i.i = i.i + 1;
          if(i.i == 10){
            i.i = 5
          }
        },
        /*轮播定时结束*/
        carouselStop: function(i){
          window.clearInterval(this.carousel);
          this.imgNumber = i;
        },
        /*轮播定时开始*/
        carouselStart: function(i,self){
          let ii = {i:(i + 1)};
          self.carousel = setInterval(function(){
            self.mod(self,ii);
          },1000);
        },
        /*watch imgNumber变化,改变img的src*/
        changeImgSrc: function(img){
          img.src = this.imgArray[this.imgNumber].bImg;
        },
                            </pre>
                        </li>
                        <li>
                            <p>新增放大镜功能，要注意的经验有：</p>
                            <ol>
                                <li>mounted时，img是未必加载完成的，所以要用onload！</li>
                                <li>drawImage语法：
                                    context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
                                    <table>
                                        <tr><td>参数</td><td>描述</td></tr>
                                        <tr><td>img</td><td>规定要使用的图像、画布或视频。</td></tr>
                                        <tr><td>sx</td><td>可选。开始剪切的 x 坐标位置。</td></tr>
                                        <tr><td>sy</td><td>可选。开始剪切的 y 坐标位置。</td></tr>
                                        <tr><td>swidth</td><td>可选。被剪切图像的宽度</td></tr>
                                        <tr><td>sheight</td><td>可选。被剪切图像的高度。</td></tr>
                                        <tr><td>x</td><td>在画布上放置图像的 x 坐标位置。</td></tr>
                                        <tr><td>y</td><td>在画布上放置图像的 y 坐标位置。</td></tr>
                                        <tr><td>width</td><td>可选。要使用的图像的宽度。（伸展或缩小图像）</td></tr>
                                        <tr><td>height</td><td>可选。要使用的图像的高度。（伸展或缩小图像）</td></tr>
                                    </table>
                                </li>
                                <li>坐标系变换的通用方法：
                                    <pre>
coordinateChange: function(canvasDom,x,y){
  let bbox = canvasDom.getBoundingClientRect();
  let X = Math.round(x - bbox.left);
  let Y = Math.round(y - bbox.top);
  return {x:X,y:Y};
},
                                    </pre>
                                </li>
                                <li>在移动鼠标时，先清除canvas！
                                    <pre>
canvasEnlargeContext.clearRect(0,0,canvasEnlargeContext.width,canvasEnlargeContext.height);
bigCanvasContext.drawImage(this.img,0,0,this.img.width,this.img.height);
                                    </pre>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>jQuery.ajax方法封装成公共库中：</p>
                            <pre>
import jQuery from 'jquery'
let ajax = function(url,sendData,success){
    jQuery.ajax({
        url: url,
        type: 'POST',
        data: sendData,
        dataType: 'json',
        xhrFields: {withCredentials: true},
        success: function(data){
            success(data);
        }
    });
};
//export {ajax}
export {ajax}
//注意引用：
import {ajax} from '../lib/libSpace'
                            </pre>
                        </li>
                        <li>
                            <p>商品规格选取、呈现与数据库数据的双向绑定处理</p>
                            <p>用specData.proper对象作用数据库和页面表现的桥梁,check是选中的规格，有初始值：</p>
                            <pre>
"proper": {
   "spec0":{"displayName":"","parameter":"","check":"全网通"},
   "spec1":{"displayName":"","parameter":"","check":"128GB"},
   "spec2":{"displayName":"","parameter":"","check":"琥珀灰"},
   "spec3":{"displayName":"","parameter":"","check":"官方标配"}
}
                            </pre>
                            <p>ajax成功后的回调逻辑，对proper特别处理：</p>
                            <pre>
if(keyName.indexOf('spec') != 0){
  if(keyName == 'proper'){
    for(let key0 in getData.proper){
      self.specData.proper[key0].displayName = getData.proper[key0].displayName;
      self.specData.proper[key0].parameter = getData.proper[key0].parameter;
    }
  }else {
        self.specData[keyName] = getData[keyName];
   }
}
                            </pre>
                            <p>数据在HTML的呈现用双重循环实现：</p>
                            <pre>{{dataCode0}}</pre>
                        </li>
                        <li>
                            <p>购物车的双向数据绑定改造</p>
                            <p>思路：用shopCartItems[]承载返回的商品条目，初始化时计算商品总金额total和商品总数numberAll</p>
                            <pre>
for (let key in data) {
  //转换数组中每个json字符串为js object
  let dataObj = JSON.parse(data[key]);
  self.shopCartItems.push(dataObj);
  //累加商品金额
  self.total = (parseFloat(self.total) + parseFloat(dataObj.rowTotal));
  //限制购物车总金额为两位小数
  self.total = parseFloat(self.total).toFixed(2);
  //累加商品数量
  self.numberAll = parseInt(self.numberAll) + parseInt(dataObj.goodsNumber);
}
                            </pre>
                            <p>循环输出HTML，同时@click="deleteThisGoods(shopCartItem,key)"在每一商品条目建立一个删除事件：</p>
                            <pre>{{dataCode1}}</pre>
                            <p>deleteThisGoods的删除逻辑是当AJAX在数据库删除成功后，回调函数在shopCartItem中去除该成员，表现层则自动更改：</p>
                            <pre>
self.shopCartItems.splice(key,1);
                            </pre>
                            <p>同时watch数组，重新计算total和numberAll。</p>
                            <pre>
watch: {
  shopCartItems: {
    handler: function(){
      let total = 0;
      let numberAll = 0;
      for (let item in this.shopCartItems){
        total = parseFloat(this.shopCartItems[item].rowTotal) + parseFloat(total);
        numberAll = parseInt(this.shopCartItems[item].goodsNumber) + parseInt(numberAll);
      }
      this.total = parseFloat(total).toFixed(2);
      this.numberAll = parseInt(numberAll);
    },
    deep: true
  }
}
                            </pre>
                        </li>
                    </ol>
                </dd>
                <dt><h3>八、小结与待改善</h3></dt>
                <dd>
                    <p>vue式的MVVM框架不再操作DOM，用数据的变化来改变表现，应该说更有逻辑性。vue的组件文件.vue让js和css集中,以前内容、样式和脚步分离的思路又绕回去了……</p>
                </dd>
            </dl>
        </div>
</template>
<style>
    .layout-FlyWing-inner{
        margin-left: 235px;
        margin-right: 145px;
    }
    .layout-FlyWing-right{
        margin-left: -145px;
    }
    .pre-package{
        /*display: inline-block;*/
        width: 45%;
    }
    .package-column-wrap{
        /*display: inline-block;*/
        width: 45%;
        /*float: left;*/
    }
</style>
<script>
    export default{
        data(){
            return{
//                articleTitle:"文章2标题",
//                articleTitle: this.$store.state.a[2].title,
                articleContent:"",
                p9VueAll: require('../assets/img/a2/p9VueAll.png'),
                p9VueSrc: require('../assets/img/a2/p9VueSrc.png'),
                componentStructure: require('../assets/img/a2/ComponentStructure.png'),
                dataCode0:`
<template v-for="(value,key) in specData.proper">
   <div class="goods-spec-choice-div">
       <span class="goods-spec-choice">{{value.displayName}}</span>
       <template v-for="(value0,key0) in value.parameter">
          <label :for="key+'-'+key0" :class="{selected: (value.check == value0),'cursor-hand': true}">{{value0}}
            <input :id="key+'-'+key0" class="spec-radio" type="radio" :value="value0" :name="key" v-model="value.check" @change="getSpec">
          </label>
       </template>
   </div>
</template>`,
                dataCode1:`
<template v-for="(shopCartItem,key) in shopCartItems">
   <div class="cart-tr" :id="'goodsID-'+shopCartItem.goodsID">
      <span class="cart-td is-check table-cell-title">
         <input class="check-this" type="checkbox">
      </span>
      <span class="cart-td goods-img table-cell-title">图片</span>
      <span class="cart-td goods-name table-cell-title">{{shopCartItem.goodsName}}</span>
      <span class="cart-td price table-cell-title">{{shopCartItem.price}}</span>
      <span class="cart-td number table-cell-title">{{shopCartItem.goodsNumber}}</span>
      <span class="cart-td total-class table-cell-title">{{shopCartItem.rowTotal}}</span>
      <span class="cart-td handle table-cell-title">
         <button class='delete-this-goods' @click="deleteThisGoods(shopCartItem,key)">删除商品</button>
      </span>
   </div>
</template>`
            }
        }
    }
</script>
