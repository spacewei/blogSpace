<template>
    <div id="div1">
        <p>请输入内容...</p>
    </div>
</template>
<script>
    /*ueditor*/
//    require
//    import umeditorCss from '../assets/umeditor/themes/default/css/umeditor.css'
//    import jqueryMin from '../assets/umeditor/third-party/jquery.min'
//    import templateMin from '../assets/umeditor/third-party/template.min'
//    import umeditorConfig from '../assets/umeditor/umeditor.config'
//    import umeditorMin from '../assets/umeditor/umeditor'
//    import langZhCn from '../assets/umeditor/lang/zh-cn/zh-cn'
//    import editor from 'wangeditor'
    require('wangeditor')
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
//            Editor
        },
        mounted: function(){
            var editor = new wangEditor('div1');
            // 上传图片（举例）
            editor.config.uploadImgUrl = '/upload';

            // 配置自定义参数（举例）
            editor.config.uploadParams = {
                token: 'abcdefg',
                user: 'wangfupeng1988'
            };

            // 设置 headers（举例）
            editor.config.uploadHeaders = {
                'Accept' : 'text/x-json'
            };

            // 隐藏掉插入网络图片功能。该配置，只有在你正确配置了图片上传功能之后才可用。
            editor.config.hideLinkImg = true;
            editor.create();
        }
    }
</script>
<style>
</style>
