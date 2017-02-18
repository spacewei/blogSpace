<template>
    <div>
        <h1 class="article-title">{{articleTitle}}</h1>
        <p class="article-content">文章2内容</p>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
//                articleTitle:"文章2标题",
                articleTitle: this.$store.state.a[2].title,
                articleContent:""
            }
        },
        components:{
        }
    }
</script>
