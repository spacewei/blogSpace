<template>
        <div>
            <section class="page-header">
                <h1 class="project-name">https://Spacewei.GitHub.io</h1>
                <h2 class="project-tagline">首页</h2>
            </section>
            <section class="main-content">
                <dl>
                    <dt><h3>基本信息</h3></dt>
                    <dd>
                        <div class="person-information">
                            <div class="">性别:男</div>
                            <!--<span class="information-item information-item-flag"></span>-->
                            <div class="">学历:本科</div>
                            <!--<span class="information-item information-item-flag"></span>-->
                            <div class="">手机:18577781830</div>
                            <!--<span class="information-item information-item-flag"></span>-->
                            <div class="">邮箱:693906369@qq.com</div>
                        </div>
                    </dd>
                    <dt><h3>教育经历</h3></dt>
                    <dd>
                        <table>
                            <tr>
                                <td rowspan="2" class="img-organization">
                                    <img :src="guiImg">
                                </td>
                                <td>桂林电子科技大学</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>本科 通信工程</td>
                                <td>2013毕业</td>
                            </tr>
                        </table>
                    </dd>
                    <dt><h3>工作经历</h3></dt>
                    <dd>
                        <table>
                            <tr>
                                <td rowspan="2" class="img-organization">
                                    <img :src="foxconnImg">
                                </td>
                                <td>富士康</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>嵌入式开发工程师</td>
                                <td>2013.7-至今</td>
                            </tr>
                        </table>
                    </dd>
                    <dt><h3>作品展示</h3></dt>
                    <dd>
                        <ul class="demo-ul">
                            <li>
                                <a href="../../static/demo/ife/html/baiduE07.html">百度前端练习题Demo</a>
                                <p><a href="http://ife.baidu.com/2016/task/detail?taskId=7" target="_blank">题目</a>，除基本的html、css使用外，涉及flex布局、雪碧图、响应式布局以及firework的切图使用。</p>
                                <a class="code-link" href="http://t.cn/RJA05uz">code</a>
                            </li>
                            <li>
                                <a href="../../static/demo/calendar/pluginDemo.html">原生js、jQuery做的日历组件Demo</a>
                                <p>成品是calendarSpacePlug.js，pluginDemo.html和pluginDemo.js展示使用时情况。</p>
                                <a class="code-link" href="http://t.cn/RJACKKS">code</a>
                            </li>
                            <li>
                                <a href="../../static/demo/p9vue/index.html">vue.js仿电商页面Demo（由于无无数据库，可能显示不全）</a>
                                <p>vue.js仿电商页面,涉及vue(包括vue router和vuex)、jQuery（AJAX），node.js,以及PHP和MySQL,还有部分ES6语法。
                                    基本可以实现登录、session和cookie记住登录、轮播图、canvas放大镜、购物车、MySQL增删改查。
                                </p>
                                <a href="http://t.cn/RJACKKS">vue.js仿电商页面</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </section>
        </div>
</template>
<style>
    .demo-ul li{
        border: 1px blue solid;
        margin-bottom: 1rem;
    }
</style>
<script>
    import githubLightCss from '../assets/css/github-light.css'
    import indexCss from '../assets/css/index.css'
    import style from '../assets/css/stylesheet.css'
    export default{
        data(){
            return{
                foxconnImg: require('../assets/img/a0/Foxconn.jpg'),
                guiImg: require('../assets/img/a0/guiDianLogo.jpg')
            }
        }
    }
</script>
