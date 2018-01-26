//gulpfile.js

var gulp        = require('gulp');

// 폴더 및 파일 생성 및 삭제 -------------------------
var mkdir       = require('mk-dirs');
// var fs          = require('fs'); //에러로 인하여 사용하지 않음
var writeFile      = require('write');
var del         = require('del');

// 기능부여 ---------------------------------------
var jquery      = require('jquery');
// var jquery      = require('jquery-ui');
// var jquery      = require('font-awesome');
var fontAwesome = require('node-font-awesome');
var cached      = require('gulp-cached'); 
var watch       = require('gulp-watch');
// 장식기능 ---------------------------------------
var chalk       = require('chalk');

// 서버구동 ---------------------------------------
var browserSync = require('browser-sync');



//-----------------------------------------------
// 기본 경로 설정
var url         = { module:'./node_modules/',
                    before:'./public/src/',
                    after:'./public/dist/'    };
//-----------------------------------------------

// mkdir 모듈을 이용하여 기본 폴더 생성
gulp.task('makedir',function(){
  //Promise 불러와라
  return Promise.all([
    // mkdir('pubilc'),
    //before
    mkdir(url.before),
    mkdir(url.before + 'html'),
    mkdir(url.before + 'html/src'),
    mkdir(url.before + 'css'),
    mkdir(url.before + 'css/base'),
    mkdir(url.before + 'css/src'),
    mkdir(url.before + 'js'),
    mkdir(url.before + 'js/base'),
    mkdir(url.before + 'js/src'),
    mkdir(url.before + 'img'),
    mkdir(url.before + 'media'),
    mkdir(url.before + 'media/audio'),
    mkdir(url.before + 'media/video'),
    mkdir(url.before + 'font'),
    //after
    mkdir(url.after),
    mkdir(url.after + 'img'),
    mkdir(url.after + 'media'),
    mkdir(url.after + 'font')
    ]);
}); 

gulp.task('makefile',function(){
  // ================ index.html 인덱스 파일 생성 ================ 
  writeFile.sync(url.before +'index.html','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <script>\n    window.location = "./html/main.html";\n  </script>\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>');

  // ================ main.html 임시 파일 생성 ================ 
  writeFile.sync(url.before + 'html/main.html','<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=0.5">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    \n    <!--[if IE9]>\n   <script src="../ie/lt-ie-9.min.js"></script>\n        <![endif]-->\n    \n   <!-- fontAwesome and NanumGothicFont -->\n    <link rel="stylesheet" href="../fontAwesome/css/font-awesome.css">\n    <link rel="stylesheet" href="../font/transfonterNanum/stylesheet.css">\n    <!-- css Reset and globalClass -->\n    <link rel="stylesheet" href="../css/base/reset.css">\n    <link rel="stylesheet" href="../css/base/common.css">\n   <!-- use css -->\n    <link rel="stylesheet" href="../css/index.css">\n    <!-- faviconFile -->\n    <link rel="apple-touch-icon" href="../favicon.png">\n    <link rel="shortcut icon" href="../favicon.png" type="image/x-icon">\n    <title>siteName</title>\n</head>\n<body>\n  #wrap>header#headBox+section#bannerBox+article#contentBox+footer#footBox \n<!--script jquery and bootstrap -->\n<script src="../js/base/jquery-3.2.1.js"></script>\n<script src="../js/base/jquery-ui.js"></script>\n<script src="../bootstrap/js/bootstrap.js"></script>\n<!-- use script -->\n<script src="../js/src/base.js"></script>\n</body>\n</html>');

  // ================ reset.css 파일 생성 ================ 
  writeFile.sync(url.before + 'css/base/reset.css','/*  reset.css */\n/*  variable:color, size, font */\n/* \n* color: *명도대비 기준으로 제작 유념\n        - primary : #faa \n        - main : #ddd \n        - point : \n        - font1 : #333\n        - font2 : #777\n        - font3 : #fff\n        - link : #faa (프라이머리 컬러랑 보통 같이 감)\n        - sub1 : \n        - sub2 : \n        - white : #fdfdfd\n        - gray1 : #333\n        - gray2 : #777\n        - black : #171717\n* size: \n*접근성 크기의 내용을 기준\n* 인쇄의 경우는 기준 폰트 크기는 9pt, 웹의 경우는 12pt를 권장 => 영문,그래픽이미지일 경우 *\n        - primary : 16px; ==  1rem;\n        - h1(bold) : 32pt ==> 2rem\n        - h2(bold) : 29pt ==> 1.8125rem\n        - h3(bold) : 27pt ==> 1.6875rem\n        - h4(bold) : 24pt ==> 1.5rem\n        - h5(bold) : 22pt ==> 1.375rem\n        - h6(bold) : 20pt ==> 1.25rem\n        - big1 : 30pt ==> 2.5rem\n        - big2 : 27pt ==> 2.25rem\n        - normal : 12pt\n* font:\n        - english : "apple gothic", "myriad pro", arial\n        - korean : nanumGothic,gothic, dotum\n        - basic : san-serif\n * boder: \n        - thin : border:1px solid color:#333\n        - normal : border: 2px solid #777\n        - bold : border 5px solid #faa\n* responsive : \n        - mobileV :\n        - mobileH :\n        - tableV :\n        - tableH :\n        - pc :\n        - pcfull :        \n*/\n/* base */\nhtml,body{margin: 0; padding: 0; color: #333; font-size: 1rem; font-size: 16px;}\nh1,h2,h3,h4,h5,h6,p,pre,ul,ol,li,dl,dt,dd,div,\ntable,thead,tbody,tfoot,tr,th,td,\nform,fieldset,legend,input,textarea,select,button,\na,img {\n    margin: 0; padding: 0; border: 0; outline: 0; color: inherit; /* inherit: 부모의 속성을 똑같이 쓰겠다. */ font-size: inherit; font-family: "apple gothic", \n    "myriad pro", arial, nanumGothic, gothic, dotum, san-serif;}\ntable,tr,td,th,thead,tbody,tfoot{border-collapse: collapse; border-spacing: 0; }\nthead{background-color: #faa; color: #fafafa; text-indent: 0;}\ntbody>tr:nth-of-type(2n+1){background-color: #faa; text-indent: 0.5rem; }\ntbody>tr:nth-of-type(2n){background-color: #fafafa; text-indent: 0.5rem; }\ntfoot{background-color: #ff0; color: #333; font-weight: bold;}\ntd,th{border:1px solid #777; border-left: 0; border-right: 0;}\n/*th:first-of-type,td:first-of-type{border-left: 0;} */\n/*th:last-of-type, td:last-of-type{border-right: 0;} */\n/* nth-child(1) 앞에서 부터 첫번째, \n   nth-last-child(1) 뒤에서 부터 첫번째 */\n.tableLine{border: 1px solid #777;}\n/* 12/27.수 테이블 리셋 추가 */\naddress,em,wbr,strong,ins, del, abbr {font-style:normal; font-weight: normal;}\nh1 {font-size: 32px; font-size: 2rem;}\nh2 {font-size: 29px; font-size: 1.8125rem;}\nh3 {font-size: 27px; font-size: 1.6875rem;}\nh4 {font-size: 24px; font-size: 1.5rem;}\nh5 {font-size: 22px; font-size: 1.375rem;}\nh6 {font-size: 20px; font-size: 1.25rem;}\nul,ol,li {list-style: none;}\na {text-decoration: none; color: #777;}\na:hover, a:active {text-decoration: underline; color: #faa;}\nbutton{cursor: pointer;}\n/* ==================================================== */\nheader,nav,article,section,footer,aside,main,figure,figcaption {\n    display: block; color: inherit;}');

  // ================ common.css 파일 생성 ================ 
  writeFile.sync(url.before + 'css/base/common.css','/*  common.css */\n.clearfix:after{content:" "; display: block; width: 100%; height: 0; clear:both;}\n.clearfix::after{content:" "; display: block; width: 100%; height: 0; clear:both;}\n.hidden_wrap a>span, \n.hidden{display:block; width:0; height: 0; position: absolute; z-index: -100; overflow: hidden;}\n.hidden_wrap a{display: block; width: 100%; height: 100%} \n#wrap ul>.first,\n#wrap ol>.first{margin-left: 0; border-left: 0;}\n#wrap ul>.last,\n#wrap ol>.last{margin-right: 0; border-right: 0;}\n#wrap ul>.top,\n#wrap ol>.top{margin-top:0; border-top:0;}\n#wrap ul>.bottom,\n#wrap ol>.bottom{margin-bottom: 0; border-bottom: 0;}\n.wrap{width: 100%; height: auto;}\n.wrap_full {width: 100%; min-width: 960px; height: auto; margin: 0 auto;}\n.wrap:after,\n.wrap_full:after,{content:" "; display: block; clear: both;}\n@media screen and (min-width: 1024px){\n  .wrap{width: 960px; margin: 0 auto;}\n  .wrap_full {width: 100%; min-width: 960px; }\n}\n/* accessibility.css */\na:focus, button:focus, \ninput[type="submit"]:focus,\ninput[type="reset"]:focus,\ninput[type="image"]:focus,\ninput[type="file"]:focus,\ninput[type="button"]:focus{outline: 2px solid #d07; background-color: #f04; color: #fff; outline-offset: 3px;}\ninput[type="text"]:focus,\ninput[type="password"]:focus,\ninput[type="search"]:focus,\ninput[type="email"]:focus,\ninput[type="tel"]:focus,\ninput[type="number"]:focus,\ninput[  type="date"]:focus,\ninput[type="month"]:focus,\ninput[type="year"]:focus,\ninput[type="week"]:focus,\ninput[type="url"]:focus,\ntextarea:focus{outline: 2px solid #d07; outline-offset: 3px; background-color: #faa;}\n/* grid_responsive.css */\n.row{width: auto; height: auto;}\n.row:after{content: " "; display: block; clear: both;}\n.mob_01,.mob_02,.mob_03,.mob_04,.mob_05,.mob_06,\n.tab_v_01,.tab_v_02,.tab_v_03,.tab_v_04,.tab_v_05,.tab_v_06,.tab_v_07,\n.tab_v_08,.tab_v_09,\n.tab_pc_01,.tab_pc_02,.tab_pc_03,.tab_pc_04,.tab_pc_05,.tab_pc_06,\n.tab_pc_07,.tab_pc_08,.tab_pc_09,.tab_pc_10,.tab_pc_11,.tab_pc_12,\n.pc_full_01,.pc_full_02,.pc_full_03,.pc_full_04,.pc_full_05,.pc_full_06,\n.pc_full_07,.pc_full_08,.pc_full_09,.pc_full_10,.pc_full_11,\n.pc_full_12{}\n@media screen and (max-width: 480px){\n  .mob_01{float: left;width: 16.666667%;}\n  .mob_02{float: left;width: 33.333333%;}\n  .mob_03{float: left;width: 50%;}\n  .mob_04{float: left;width: 66.666667%;}\n  .mob_05{float: left;width: 83.333333%;}\n  .mob_06{float: left;width: 100%;}\n}\n@media screen and (min-width: 481px){\n  .tab_v_01{float: left; width: 11.111111%;}\n  .tab_v_02{float: left; width: 22.222222%;}\n  .tab_v_03{float: left; width: 33.333333%;}\n  .tab_v_04{float: left; width: 44.444444%;}\n  .tab_v_05{float: left; width: 55.555556%;}\n  .tab_v_06{float: left; width: 66.666667%;}\n  .tab_v_07{float: left; width: 77.777778%;}\n  .tab_v_08{float: left; width: 88.888889%;}\n  .tab_v_09{float: left; width: 100%;}\n}\n@media screen and (min-width: 768px) {\n  .tab_pc_01{float: left; width: 8.333333%;}\n  .tab_pc_02{float: left; width: 16.666666%;}\n  .tab_pc_03{float: left; width: 25%;}\n  .tab_pc_04{float: left; width: 33.333332%;}\n  .tab_pc_05{float: left; width: 41.666665%;}\n  .tab_pc_06{float: left; width:50%;}\n  .tab_pc_07{float: left; width: 58.333331%;}\n  .tab_pc_08{float: left; width: 66.666664%;}\n  .tab_pc_09{float: left; width: 75%;}\n  .tab_pc_10{float: left; width: 83.333333%;}\n  .tab_pc_11{float: left; width: 91.666663%;}\n  .tab_pc_12{float: left; width: 100%;}\n}\n@media screen and (min-width: 1367px){\n  .pc_full_01{float: left; width: 8.333333%;}\n  .pc_full_02{float: left; width: 16.666666%;}\n  .pc_full_03{float: left; width: 25%;}\n  .pc_full_04{float: left; width: 33.333332%;}\n  .pc_full_05{float: left; width: 41.666665%;}\n  .pc_full_06{float: left; width:50%;}\n  .pc_full_07{float: left; width: 58.333331%;}\n  .pc_full_08{float: left; width: 66.666664%;}\n  .pc_full_09{float: left; width: 75%;}\n  .pc_full_10{float: left; width: 83.333333%;}\n  .pc_full_11{float: left; width: 91.666663%;}\n  .pc_full_12{float: left; width: 100%;}}');

});

//-----------------------------------------------
// 기능추가
// jquery
gulp.task('jquery',function() {
  gulp.src([url.module + 'jquery/dist/jquery.min.js',url.module + 'jqueryui/jquery-ui.min.js',]) //원본의 소스를 가져온다.
      .pipe(gulp.dest(url.before + 'js/base/')); //pipe:연결한다 dest:보낸다
});
//-----------------------------------------------
// fontAwesome
gulp.task('fontAwesomeFonts',function(){
  gulp.src(fontAwesome.fonts)
      .pipe( gulp.dest(url.before + 'fontAwesome/fonts/') );
});
gulp.task('fontAwesomeCss',function(){
  gulp.src(fontAwesome.css)
      .pipe( gulp.dest(url.before + 'fontAwesome/css') );
});
//-----------------------------------------------
// ie9 기능 (모듈 설치 후 불러오지 않음)
gulp.task('ie9',function(){
  gulp.src(url.module + 'lt-ie-9/lt-ie-9.min.js')
      .pipe( gulp.dest(url.before + 'ie') );
});
//-----------------------------------------------
// html,css,js 설정
gulp.task('html',function(){
  return gulp.src(url.before + 'html')
            .pipe(cached('htmlFiles')) /*cached: 변화를 감지해서 찾아내는 모듈 */
            .pipe(browserSync.stream()); /* stream : 스트리밍하라, 브라우저 싱크의 흐름을 따라가라 */
}); //html
gulp.task('css',function(){
  return gulp.src(url.before + 'css')
            .pipe(cached('cssFiles')) 
            .pipe(browserSync.stream()); 
});//css
gulp.task('js',function(){
  return gulp.src(url.before + 'js')
            .pipe(cached('jsFiles'))
            .pipe(browserSync.stream()); 
}); //js

// browser-sync 기능처리(서버구동)
gulp.task('browser-sync',['html','css','js'] ,function() {
    browserSync.init({
        server: {baseDir: url.before}
    });
});

// watch(실시간 감지기능 처리)
gulp.task('watch',function(){
  watch(url.before + 'html', function(){
    gulp.start('html');
  });
  watch(url.before + 'css', function(){
    gulp.start('css');
  });
  watch(url.before + 'js', function(){
    gulp.start('js');
  });
});


//-----------------------------------------------
// del모듈 이용하여 필요시 폴더를 삭제처리
// public 폴더 삭제 
gulp.task('cleanAll',function(){ /* cleanAll : 퍼블릭 폴더를 삭제하라 */
  return del('./public/' , {forct:true}); /* {forct:true} 는 del라는 모듈을 만든 사람이 강제적으로 지우기 위해서 만들었는데 del모듈을 쓰면 반드시 써야함 */
  /* 전자레인지 function... 라면 return... 라면 결과물에다가 밥 말아먹고,,, 다른 작용 추가 가능... */
  /* return 결과값을 반환하여 결과를 도출하게 하는 것으로 최종적으로 반환할 때 써야함 */
});

// public/dist 폴더 삭제
gulp.task('cleanDist',function(){ 
  del([url.after+'*'], {forct:true});
});
// public/dist/css 폴더 삭제
gulp.task('cleanCss',function(){ 
  return del([url.after+'css'], {forct:true});
});


//-----------------------------------------------
// 2가지 이상 모듈 사용시 통합 기능 사용
// makedir, makefile 기능 처리하기
gulp.task('fontAwesome',['fontAwesomeFonts','fontAwesomeCss']);
gulp.task('make',['makedir','makefile','jquery','fontAwesome','ie9']); 


gulp.task('default',['browser-sync','watch']); //구동용으로 사용예정 작업하기 편하기 쉽게...


/*
gulp 주요 기능 이해하기
1. task()
    의미상 일을 하다. 하는 의미를 가지고 있듯이 원하는 기능을 수행하기 위한 메소드. 
    ->콘솔로그를 test로 지정하여(걸프 수행 이름을 작성) 그 기능을 수행하도록 처리하는 메소드.

*/



/*
<npm 설치한 패키지>
gulp
browser-sync
chalk


*/