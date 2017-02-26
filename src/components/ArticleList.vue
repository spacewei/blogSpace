<template>
    <div class="article-list block-center">
        <h2>{{articleTitle}}</h2>
        <ul class="article-ul">
            <li v-for="(item,key) in this.$store.state.a">
                <!--<router-link :to="{path:'/article',query:{aNum:item.aNum}}">-->
                <!--<h3>{{item.title}}</h3>-->
                <!--</router-link>-->
                <router-link :to="{path: item.path2,query:{aNum:item.aNum}}">
                    <h3>{{key}}、{{item.title}}</h3>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style>
    .article-list{
        width: 60%;
    }
    .article-list h2{
        text-align: center;
    }
</style>
<script>
//    alert(this.$store);
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
