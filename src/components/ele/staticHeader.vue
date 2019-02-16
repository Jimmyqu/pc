<template>
    <header>
      <div class="lmy_topnav_zw">
        <div class="lmy_top_mini_nav">
          <div id="lmy_top_box">
            <ul class="list_across">
              <li><a href="//www.cnhubei.com/">荆楚网首页</a></li>
              <li><a href="//news.cnhubei.com/">新闻</a></li>
              <li><a href="//news.cnhubei.com/hbzw/">政务</a></li>
              <li><a href="http://focus.cnhubei.com/">评论</a></li>
              <li><a href="http://bbs.cnhubei.com/special.php?mod=msrx">问政</a></li>
              <li><a href="http://yq.cnhubei.com/">舆情</a></li>
              <li><a href="http://bbs.cnhubei.com/portal.php">社区</a></li>
              <li><a href="//www.cnhubei.com/xwzt/index.shtml">财经</a></li>
              <li><a href="http://v.cnhubei.com/">国内</a></li>
              <li><a href="http://sy.cnhubei.com/">国际</a></li>
              <li><a href="http://health.cnhubei.com/">娱乐</a></li>
              <li><a href="http://edu.cnhubei.com/">视频</a></li>
              <li><a href="http://auto.cnhubei.com/">图片</a></li>
              <li class="more"  @mouseenter="enter" @mouseleave="leave">更多
                <div class="sub01" style="display: block" v-show="meanShow">
                  <a href="">党建</a>
                  <a href="">文化</a>
                  <a href="">体育</a>
                  <a href="">微善</a>
                  <a href="">教育</a>
                  <a href="">健康</a>
                  <a href="">滚动</a>
                  <a href="">专题</a>
                  <a href="">房产</a>
                  <a href="">汽车</a>
                  <a href="">科普</a>
                  <a href="">质量</a>
                  <a href="">旅游</a>
                  <a href="">商业</a>
                  <a href="">讲习所</a>
                  <a href="">文明网</a>
                  <a href="">荆楚号</a>
                  <a href="">青春志</a>
                </div>
              </li>
              <li class="right"><a href="">手机报</a><span>丨</span><a href="">手机荆楚网</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 顶部导航 end -->
      <div class="blank0"></div>
      <!-- 头部部分 -->
      <div class="w1200 jcwz_top_box" >
        <a href=""><img class="logo" src="../../../static/img/jcwz_logo.png" /></a>
        <div class="banner"><a href=""><img src="../../../static/img/banner.jpg" /></a></div>
      </div>
      <!-- 头部部分 end -->
      <div class="blank0"></div>
      <!-- 荆楚问政导航 -->
      <div class="jcwz_nav" id="">
        <div class="w1200">
          <ul class="list_across line">
            <li class="first"><a href="./jcwz修改版本.html">首页</a></li>
            <li><a href="./省直厅局修改1.0.html">省直厅局</a></li>
            <li><a href="./市州区县.html">市州区县</a></li>
            <li><a href="#">每日回复</a></li>
            <li><a href="#">问政报告</a></li>
            <li><a href="./回复量排行榜.html">回复率排行榜</a></li>
            <li class="last"><a href="./满意度排行榜.html">满意度排行榜</a></li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "staticHeader",
      data(){
          return {
            meanShow:false
          }
      },
      methods:{
        enter(){
          this.meanShow=true
        },
        leave(){
          this.meanShow=false
        }
      }
    }
</script>

<style scoped>
  a{
    text-decoration:none;
  }
  .w1200{ margin:0 auto; width:1200px;}

  .lmy_top_mini_nav{ height:36px; background-color:#f0f0f0; line-height:36px;}
  #lmy_top_box{ width:1216px; height:36px; margin:0 auto}
  .lmy_top_mini_nav ul{}
  .lmy_top_mini_nav ul li{ padding:0 8px; position:relative; height:36px;}
  .lmy_top_mini_nav ul li a{ float:left; color:#4c4c4c; font-size:14px;}
  .lmy_top_mini_nav ul li.more{ color:#4c4c4c; font-size:14px; cursor:pointer}
  .lmy_top_mini_nav ul li.more:hover{ background-color:#FFF; color:#4c4c4c}
  .lmy_top_mini_nav ul li.on{}
  .lmy_top_mini_nav ul li.more .sub01{ display:none; position:absolute; width:490px; padding:6px 10px; height:48px; left:-184px;top:36px; background-color:#FFF; line-height:24px; text-align:center; border:1px solid #f0f0f0; border-top:none; z-index:99}
  .lmy_top_mini_nav ul li.more .sub01 a{ margin:0 3px 0 8px; font-size:12px; color:#4c4c4c}
  .lmy_top_mini_nav ul li.right{ float:right;padding-left: 0;}
  .lmy_top_mini_nav ul li.right a{ float:left}
  .lmy_top_mini_nav ul li.right span{ float:left; margin:0 5px;}

  .jcwz_top_box{ height:90px; overflow:hidden; position:relative}
  .jcwz_top_box .logo{ float:left;}
  .jcwz_top_box .banner{ float:right; margin-top:10px;}


  /*横向列表*/
  .list_across{ margin:0; padding:0;}
  .list_across li{
    white-space: nowrap;
    float:left;
    list-style-type:none;
    display:block;}
  /*竖向列表*/
  .list_erect{margin:0; padding:0;}
  .list_erect li{white-space: nowrap;clear:left; list-style-type:none;display:block;}
  .line li{ background: url(../../../static/img/2017jcwsy_navbg_ulli.png) right 10px no-repeat;}

  .list_across:after{
    display: block;
    clear:both;
    height:0;
    content: "";
    visibility: hidden;
    overflow:hidden;
  }

  /* 清除浮动 */
  .clearfix { display: block; #zoom:1;/*ie6-ie7*/; overflow:hidden}
  .clearfix:after { content: ''; overflow: hidden; width: 100%; height: 0px; font-size: 0px; margin: 0px; padding: 0px; display: block; clear: both; }


  .jcwz_nav{background-color: #1d6da7}
  .jcwz_nav .w1200 ul{}
  .jcwz_nav .w1200 ul li{ padding-left:10px; line-height:60px;letter-spacing:0; padding:0 47px 0 47px; text-align:center; }
  .jcwz_nav .w1200 ul li a{ font-size:20px; color:#FFF;}
  .jcwz_nav .w1200 ul li.first,.jcwz_nav .w1200 ul li.last{ }
  .jcwz_nav .w1200 ul li.first{ text-align:left; padding:0 47px 0 10px}
  .jcwz_nav .w1200 ul li.first a{ margin-left:10px;}
  .jcwz_nav .w1200 ul li.last{ background:none; text-align:right; padding:0 10px 0 47px}
</style>
