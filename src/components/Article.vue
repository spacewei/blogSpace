<template>
    <div>
        <!--<h1 class="article-title">{{articleTitle}}</h1>-->
        <!--<p class="article-content">{{articleContent}}</p>-->
        <!--{{this.$router.query.id}}-->
        <!--{{$route.query.aNum}}-->
        <!--<br>-->
        <!--{{articleTitle}}-->
        <!--<br>-->
        <!--{{$store.state.a[0]}}-->
        <router-view></router-view>
    </div>
</template>
<style>
    .article-title{
        text-align: center;
    }
    .article-content{
        text-indent: 2em;
    }
</style>
<script>
    export default{
        data(){
            return{
                articleTitle:"",
                articleContent:""
            }
        },
        created: function(){
//            this.articleTitle = this.$store.state.a[this.$route.query.aNum].title;
//            this.articleContent = this.$store.state.a[this.$route.query.aNum].content;
        },
        components:{
        }
    }
</script>
