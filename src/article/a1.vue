<template>
    <div>
            <p>尝试用jQuery做前台,PHP做后台仿了一个电商商品页的功能作为最基础的练习。</p>
            <dl class="">
                <dt><h3><a  name="target-p9Demo">一、目标</a></h3></dt>
                <dd>
                    <ol>
                        <li>有登录功能，输入匹配的用户名、密码和验证码后登录，如错误则返回响应提示</li>
                        <li>登录验证码由后台生成、返回，用户看不清可刷新</li>
                        <li>标题logo和退出图标自绘制</li>
                        <li>有轮播图，鼠标经过下面的小图可切换大图；</li>
                        <li>由商品的规格决定选中的商品，显示相应的商品信息：价格、月销量、累计评价、库存；</li>
                        <li>商品规格的选择变化后在规格按键上显示；</li>
                        <li>有购物车功能，在登录后，把选择的商品加入购物车，并计入后台数据库；</li>
                        <li>在购物车中显示商品，前提是已经登录，未登录会提示；</li>
                        <li>购物车每一项商品显示单价、预购的数量、累计金额和删除此项的按键，能累加所有商品花费的金额；</li>
                    </ol>
                </dd>
                <dt><h3>二、技术栈:</h3></dt>
                <dd>
                    <p>html、css、JavaScript、canvas、jQuery、PHP、MySQL</p>
                </dd>
                <dt><h3>三、项目结构</h3></dt>
                <dd>
                    <p>入口index.html，js、css、img单独文件，</p>
                    <p>js：index的js=>mainJs.js；共用js（登录相关及登录框关闭canvas）=>remake.js；购物车js=>shop.Cart.js</p>
                    <p>css：index的js=>maincss.css；共用css（登录相关及登录框关闭canvas）=>remake.css；购物车css=>shop.Cart.css</p>
                    <p>img：小图为goodsX_60*60.jpg，大图为goods_430*430_X.jpg；</p>
                    <p>PHP：登录login.php，验证码validate.php，商品信息查询goodsShow.php，购物车shopCart.php，数据库配置mysqlconn.php；</p>
                    <p>由于历史遗留问题，PHP没有单独文件夹，没有md。</p>
                </dd>
                <dt><h3>四、github地址：</h3></dt>
                <dd>
                    <p><a href="https://github.com/spacewei/p9Demo.git" target="_blank">GitHub</a></p>
                </dd>
                <dt><h3>五、代码解析：</h3></dt>
                <dd>
                            <p>index的header</p>
                            <pre>
&lt;header class=&quot;header-shop center-all&quot;&gt;
    &lt;span class=&quot;sign&quot;&gt;&lt;img src=&quot;ICON&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;shop-cart&quot;&gt;&lt;i&gt;&lt;/i&gt;&lt;a&gt;购物车&lt;/a&gt;&lt;/span&gt;&lt;/span&gt;
    &lt;div class=&#x27;login-div&#x27;&gt;
        &lt;div class=&quot;login-tr title-close&quot;&gt;&lt;canvas class=&quot;closeSymbol&quot;&gt;&lt;/canvas&gt;&lt;/div&gt;
        &lt;h2 class=&quot;login-tr&quot;&gt;请登录&lt;/h2&gt;
        &lt;label class=&quot;login-tr&quot; for=&#x27;user-name&#x27;&gt;&lt;span&gt;用户名&lt;/span&gt;&lt;input class=&quot;login-td&quot; id=&#x27;user-name&#x27; type=&#x27;text&#x27;&gt;&lt;/label&gt;
        &lt;label class=&quot;login-tr&quot; for=&#x27;user-password&#x27;&gt;&lt;span&gt;密码&lt;/span&gt;&lt;input class=&quot;login-td&quot; id=&#x27;user-password&#x27; type=&#x27;password&#x27;&gt;&lt;/label&gt;
        &lt;label class=&quot;login-tr&quot; for=&quot;validate-number&quot;&gt;&lt;span&gt;验证码&lt;/span&gt;&lt;img class=&quot;validate-show&quot; src=&quot;&quot;&gt;&lt;input id=&quot;validate-refresh&quot; type=&quot;button&quot; value=&quot;刷新&quot;&gt;&lt;input id=&quot;validate-number&quot; type=&quot;text&quot;&gt;&lt;/label&gt;
        &lt;span class=&quot;login-tr&quot;&gt;&lt;input id=&#x27;login-btn&#x27; type=&#x27;button&#x27; value=&#x27;登录&#x27;&gt;&lt;label for=&quot;save-login&quot; class=&quot;save-login-label&quot;&gt;&lt;input id=&quot;save-login&quot; type=&quot;checkbox&quot;&gt;1小时内登录有效&lt;/label&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;span class=&quot;login&quot;&gt;
        &lt;input class=&quot;login-please&quot; type=&quot;button&quot; value=&quot;请登录&quot;&gt;
        &lt;input class=&quot;login-off&quot; type=&quot;button&quot; value=&quot;退出登录&quot;&gt;
        &lt;span class=&quot;login-show&quot;&gt;&lt;/span&gt;
    &lt;/span&gt;
&lt;/header&gt;
                            </pre>
                            <p>css</p>
                            <pre>
.login-div{
    display: none;
    z-index: 990;
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color: aqua;
    border: 1px solid red;
    width: 20rem;
    height: 10rem;
}
                            </pre>
                            <p>
                                <strong>经验1：用transform实现不定宽高的垂直水平居中，用点击事件和登录AJAX实现现隐切换。</strong>
                            </p>
                            <p>关键JavaScript（登录控制）</p>
                            <pre>
    /*公共控制函数*/
    var controllerCommon = function(){
        //加载页面后,提交检查是否维持了登录
        loginUserReady();
        /*绑定弹出登录框(表格)事件,后"请登录"消失*/
        $('.login-please').on('click',function(){
            $('.login-div').show().css({'display':'table'});
            $('.login-please').hide();
            var urlValidate = 'validate.php';
            $('.validate-show').attr({'src':urlValidate+"?"+Math.random()});
        });
        /*绑定取消登录事件,清空登录情况界面,"退出登录"消失,"请登录"再现*/
        $('.login-off').on('click',function(){
            $.post('login.php',{loginFlag:'loginOff'},function(data){
                $('.login-show').text('');
                $('.login-off').hide();
                $('.login-please').show();
                $('.shop-cart').hide();
            },'json');
        });
        /*绑定验证码刷新按钮事件*/
        $('#validate-refresh').on('click',function(){
            var urlValidate = 'validate.php';
            $('.validate-show').attr({'src':urlValidate+"?"+Math.random()});
        });
        /*绑定登录框的关闭事件*/
        $('.closeSymbol').on('click',function(){
            $('.login-div').hide();
            $('.login-please').show();
        });
        /*绑定提交登录信息事件*/
        $('#login-btn').on('click',function(){
            loginSubmit();
        });
    };
    /*加载页面后,检查是否维持登录函数*/
    var loginUserReady = function(){
        //加载页面后,提交检查是否维持登录函数
        $.post('login.php',{loginFlag:'ready'},function(data){
            if(data.flag == 'keepUser'){
                $('.login-show').text('继续欢迎' + data.user_name);
                $('.login-off').show();
                $('.login-please').hide();
                $('.shop-cart').show();
                alert(data.user_name);
            }
            if(data.flag == 'keepNone'){
                alert(data.flag);
            }
        },'json');
    };
                            </pre>
                            <p>验证码PHP</p>
                            <pre>
session_start();
ob_clean();
header("content-type:image/png;charset=utf-8");
$code = "";
for($i=0;$i<4;$i++){
    $code .=rand(0,9);
}
$img = imagecreatetruecolor(64,20);
$red = imagecolorallocate($img,0xFF,0x00,0x00);
$white = imagecolorallocate($img,0xFF,0xFF,0xFF);
imagefill($img,0,0,$white);
$_SESSION['validate'] = $code;
imagestring($img,5,10,0,$code,$red);
for($i=0;$i<10;$i++){
    imagesetpixel($img,rand(0,64),rand(0,20),$red);
}
for($i=0;$i<5;$i++){
    imageline($img,rand(0,64),rand(0,20),rand(0,64),rand(0,20),$red);
}
imagepng($img);
imagedestroy($img);
                            </pre>
                            <p><strong>经验2：PHP的图像接口。</strong></p>
                            <p><strong>经验3：对img的src加+"?"+Math.random()可避免缓存。</strong></p>
                            <p><strong>经验4：用状态字符串控制前后端通讯，配合switch。</strong></p>
                            <p><strong>经验5：ob_clean()待补充。</strong></p>
                            <p>json在PHP交互时的接收的形式：</p>
                            <pre>
$userName = $_POST['userName'];
                            </pre>
                            <p>$_POST['XXX']中XXX是json的key。$_POST是一个关联数组</p>
                            <p>经验6：PHP定义数组方法,
                                <a href="http://www.php.net/manual/zh/language.types.array.php" target="_blank">PHP数组相关阅读</a>。
                            </p>
                            <p>查找用户数据库方法：</p>
                            <pre>
/*查找用户的数据库操作函数*/
function userMysql($userName){
    $mysqli = initMysql();
    /*用预处理改造*/
    //改变sql语句,用?代替变量
    $sqlStr = "SELECT userID,user_name,password,user_name_chinese FROM user_record WHERE user_name =?;";
    //建立sql语句的预处理对象
    $stmt = $mysqli->prepare($sqlStr);
    //绑定参数到预处理语句
    $stmt->bind_param('s',$userName);
    $result = null;
    //执行预处理语句
    if($stmt->execute()){
        //绑定结果到变量
        $stmt->bind_result($userID,$userName,$password,$userNameChinese);
        while($stmt->fetch()){
            $result = array("userID"=>$userID,"userName"=>$userName,"password"=>$password,"userNameChinese"=>$userNameChinese);
        }
    }
    //关闭数据库连接
    $mysqli->close();
    //返回结果
    return $result;
}
                            </pre>
                            <p>
                                <strong>经验7：mysqli预处理及数据库SELECT 列,列,列 FRPM 表 WHERE 列=X语法。</strong>
                            </p>
                            <p>后台判断的逻辑</p>
                            <img :src="loginJudgmentLogic">
                            <p><strong>经验8：$_SESSION和setcookie的设置，session和cookie的区别。</strong></p>
                            <pre>
//转换成json格式输出
$xJson = json_encode($x);
echo $xJson;
                            </pre>
                            <p><strong>经验9：json_encode把PHP数组转换成json。</strong></p>
                            <p><strong>经验10：isset()判断变量是否设置。</strong></p>
                            <p><strong>经验11：setcooie的取消。</strong></p>
                            <pre>
setcookie("loginUserID","",time()-3600);
                            </pre>
                            <p>图片切换，加入定时可成轮播</p>
                            <pre>
    var switchImg = function () {
        var bigGoodsImg = $('.big-img img');
        var x;
        for (var i = 0; i < 5; i++) {
            (function (i) {
                $('.small-img' + i).on('mouseover', function () {
                    bigGoodsImg.attr({src: 'IMG/goods_430x430_' + i + '.jpg'})
                })
            })(i);
        }
    };
                            </pre>
                            <p><strong>经验12：闭包！！！见上var i在for前已有定义，(function(i){})(i)是表达式，
                                Javascript引擎在解析javascript代码时会‘函数声明提升’（Function declaration Hoisting）当前执行环境
                                （作用域）上的函数声明，而函数表达式必须等到Javascirtp引擎执行到它所在行时，才会从上而下一行一行地解析函数表达式。
                                </strong>
                            </p>
                            <p>
                                <strong>经验13：jQuery和css语法见下，已选radio、父DOM、增加类和：</strong>
                            </p>
                            <pre>
$('.spec-radio:checked').parent().addClass('selected');
                            </pre>
                            <p><strong>经验14：jQuery.extend(object)，为jQuery类添加类方法，可以理解为添加静态方法。
                                用一个或多个其他对象来扩展一个对象，返回被扩展的对象。
                            </strong></p>
                            <p><strong>经验15：静态方法是使用公共内存空间的，就是说所有对象都可以直接引用，
                                不需要创建对象再使用该方法。
                            </strong></p>
                            <p>扩展：jQuery.fn.extend(object)
                                <a href="http://caibaojian.com/jquery-extend-and-jquery-fn-extend.html" target="_blank">
                                    对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。
                                </a>
                            </p>
                            <p><strong>经验16：立体的动态按键写法：</strong></p>
                            <pre>
#buy-btn,#shop-cart-btn{
    display: inline-block;
    height: 3rem;
    width: 12rem;
    background-color: red;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 3rem;
    box-shadow: 3px 3px rgba(255,0,0,0.5);
}
#buy-btn:hover,#shop-cart-btn:hover{
    background-color: rgba(0,255,0,1);
    box-shadow: 3px 3px rgba(0,255,0,0.5);
    cursor: pointer;
}
.buy-btn:active, .shop-cart-btn:active {
    background-color: inherit;
    cursor: pointer;
}
                            </pre>
                </dd>
                <dt><h3>六、小结与待改善</h3></dt>
                <dd>
                    <p>本练习基本实现了传统的HTML+css+JavaScript前端和LAMP后台形式的网站类型。
                        应该说，以下几点还要继续提高：
                    </p>
                    <ol>
                        <li><a href="http://www.toutiao.com/a6316034621658972418/?tt_from=mobile_qq&utm_campaign=client_share&app=news_article&utm_source=mobile_qq&iid=8153299383&utm_medium=toutiao_android" target="_blank">语义化的标签和类名</a></li>
                        <li>sql注入等安全问题</li>
                        <li>传统方式没有组件化，js和css零零散散</li>
                        <li>未来还是要转向Model-View-ViewModel框架</li>
                        <li>无论如何编码前先想好逻辑流程</li>
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
//                articleTitle:"文章1标题",
//                articleTitle: this.$store.state.a[1].title,
                articleContent:"",
                loginJudgmentLogic: require('../assets/img/a1/loginJudgmentLogic.png')
            }
        },
        components:{
        }
    }
</script>
