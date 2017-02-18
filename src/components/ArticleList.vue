<template>
    <div class="article-list block-center">
        <h2>{{articleTitle}}</h2>
        <ul class="article-ul">
            <!--<li><router-link to="/article:this.$store.state.a0"><h3>第一文章</h3></router-link></li>-->
            <!--<li><router-link to="/article:this.$store.state.a1"><h3>第二文章</h3></router-link></li>-->
            <!--<li><router-link to="/article" v-link="{params:{aNum:a0}}"><h3>第一文章</h3></router-link></li>-->
            <!--<li><router-link to="/article" v-link="{params:{aNum:a1}}"><h3>第二文章</h3></router-link></li>-->

            <!--<li><router-link :to="{path:'/article',query:{aNum:0}}"><h3>{{this.$store.state.a}}</h3></router-link></li>-->
            <!--<li><router-link :to="{path:'/article',query:{aNum:1}}"><h3>第二文章</h3></router-link></li>-->
            <!--<li><router-link :to="{path:'/article',query:{aNum:2}}"><h3>第二文章</h3></router-link></li>-->
            <li v-for="item in this.$store.state.a">
                <!--<router-link :to="{path:'/article',query:{aNum:item.aNum}}">-->
                <!--<h3>{{item.title}}</h3>-->
                <!--</router-link>-->
                <router-link :to="{path: item.path,query:{aNum:item.aNum}}">
                    <h3>{{item.title}}</h3>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style>
    .article-list{
    }
</style>
<script>
    export default{
        data(){
            return{
                articleTitle:'文章列表'
            }
        },
        components:{
        }
    }
</script>
