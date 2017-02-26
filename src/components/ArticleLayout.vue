<template>
    <div class="article-layout">
        <h1 class="article-title">{{articleTitle}}</h1>
        <router-view  class="article-content"></router-view>
    </div>
</template>
<style>
    .article-title{
        text-align: center;
    }
    .article-content{
        width: 90%;
        margin: 0 auto;
    }
    p{
        text-indent: 2em;
    }
    img{
        display:block;
        margin: 0 auto;
        /*text-align: center;*/
    }
    pre{
        /*font-size: 50%;*/
        background-color: #f7f7f7;
        border-radius: 3px;
        margin: 0;
        padding: 16px;
    }
    /* 大屏幕 */
    @media (min-width: 1200px) {
        pre{
            font-size: 150%;
        }
    }
    /* 平板电脑和小屏电脑之间的分辨率 */
    @media (min-width: 768px) and (max-width: 979px) {
        .article-title{
        }
        .article-content{
            width: 100%;
        }
        p{
        }
        img{
        }
        pre{
        }
    }
    /* 横向放置的手机和竖向放置的平板之间的分辨率 */
    @media (max-width: 767px) {
        .article-title{
        }
        .article-content{
            width: 100%;
        }
        p{
        }
        img{
        }
        pre{
            font-size: 75%;
        }
    }
    /* 横向放置的手机及分辨率更小的设备 */
    @media (max-width: 480px) {
        .article-title{
        }
        .article-content{
            width: 100%;
        }
        p{
        }
        img{
        }
        pre{
            font-size: 50%;
        }
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
            this.articleTitle = this.$store.state.a[this.$route.query.aNum].title;
            this.articleContent = this.$store.state.a[this.$route.query.aNum].content;
        },
        components:{
        }
    }
</script>
