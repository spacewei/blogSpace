<template>
    <div>
        <div class="blog-index block-center">
            <h1>space blog</h1>
            <div>
                <ul class="nav-index clearFloat">
                    <li><h3><router-link to="/articleList">文章列表</router-link></h3></li>
                    <!--<li><h3><router-link to="/editor">写文章</router-link></h3></li>-->
                </ul>
            </div>
            <!--<div id="test"></div>-->
        </div>
    </div>
</template>
<style>
    .blog-index{
        text-align: center;
    }
    .blog-index h1{
        color: blue;
    }
    .nav-index li{
        float: left;
        margin: 1rem;
    }
</style>
<script>
    import jq from 'jquery'
    export default{
        data(){
            return{
            }
        },
        mounted: function(){
//            jq('#test').html('ok')
        },
        components:{
        }
    }
</script>
