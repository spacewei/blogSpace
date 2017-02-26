<template>
    <div>
        <p>用jQuery制作的日历组件思路</p>
        <dl>
            <dt><h3>一、目标</h3></dt>
            <dd>
                <ol>
                    <li>在目标DOM添加类名,js实例化构造函数可得到日历</li>
                    <li>日历分为初始化后显示和初始不显示、之后可点击切换显示</li>
                    <li>初始化显示今年，可选择前后十年</li>
                    <li>可通过左右箭头改变月份</li>
                    <li>点击其他月的日期可改变月份</li>
                    <li>初始化红框出今天，可点击选择月份的日期改变红框的日期</li>
                    <li>可获得红框的日期</li>
                </ol>
            </dd>
            <dt><h3>二、组件结构</h3></dt>
            <dd>js：calendarSpacePlug.js，css：calendarSpace.css</dd>
            <dt><h3>三、基本逻辑</h3></dt>
            <dd>
                <img :src="calendarType">
            </dd>
            <dt><h3>四、对基本功能的修饰性函数和关键函数</h3></dt>
            <dd>
                <ol>
                    <li>calendarToggle和calendarShow实现目标2，内部都运行calendarInit。</li>
                    <li>对本月和上月最后一周、下月第一周的显示逻辑：
                        <img :src="getBoundary">
                    </li>
                    <li>改变年、月select的重新渲染逻辑：
                        <img :src="change">
                    </li>
                    <li>点击前进或后退图标及点到下月或上月日期的渲染逻辑：
                        <img :src="icon">
                    </li>
                </ol>
            </dd>
            <dt><h3>五、使用示例</h3></dt>
            <dd>
                <ol>
                    <li>calendarSpacePlug.js和calendarSpace.css放在同个文件夹内，在HTML中引用calendarSpacePlug.js</li>
                    <li>new calendarSpacePlug()，传入两个参数：日历的插入DOM独一无二的类名，用Show或Toggle选择日历类型</li>
                    <li>得到每个日历实例选择日期的方法：实例.getCalendarSpaceDate()</li>
                    <li>getCalendarSpaceDate()的注意点：不要把引用对象直接传出去！
                        <pre>
        getCalendarSpaceDate:function(){
            var date = {};
            date.year = this.date.year;
            date.month = this.date.month + 1;
            date.date = this.date.date;
            return date;
        }
                        </pre>
                    </li>
                </ol>
                <p>Demo是pluginDemo.html和pluginDemo.js</p>
            </dd>
            <dt><h3>六、小结</h3></dt>
            <dd>
                <ol>
                    <li>对象=对象会引起两个对象的“串扰”</li>
                    <li>构造函数：讲共用的方法放到prototype上，私有的对象在构造函数中</li>
                </ol>
            </dd>
        </dl>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
                calendarType: require('../assets/img/a3/calendarType.png'),
                getBoundary: require('../assets/img/a3/getBoundary.png'),
                change: require('../assets/img/a3/change.png'),
                icon: require('../assets/img/a3/icon.png')
            }
        }
    }
</script>
