<template>
        <div>
            <h1 class="article-title">{{articleTitle}}</h1>
            <p class="article-content">序言内容</p>
        </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
//                articleTitle:"序言标题",
                articleTitle: this.$store.state.a[0].title,
                articleContent:""
            }
        },
        components:{
        }
    }
</script>
