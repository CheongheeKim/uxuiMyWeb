// slideBanner_01.js 
// 즉시 실행 함수 (IIFE)
(function($){
//jQuery
var banner = $('.banner');
var bannerUl = banner.children('ul');
var bannerLast = bannerUl.children('li');
//처음과 다른게 없음. 메모리를 최소화 하기 위해 변수화처리 한 것임
bannerLast.eq(-1).prependTo(bannerUl);
//.last() == eq(-1) 마지막거
  bannerUl.css({marginLeft:'-100%'});
 banner.css({overflow:'hidden'});

var leftBtn = $('.btn').children('button').first();
var rightBtn = $('.btn').children('button').last();

leftBtn.on('click',function(event){
event.preventDefault(); // ?? 캐시를 저장해서 보내지 못하게 방어함

bannerUl.stop(false,true).animate({marinLeft:0}, function(){
  bannerLast = bannerUl.children('li').last();
  bannerLast.prependTo(bannerUl);
  bannerUl.css({marginLeft:0});
    });
  }); //LeftBtn 클릭

  rightBtn.on('click',function(event){
    event.preventDefault(); // ??

    bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
      bannerLast = bannerUl.children('li').first();
      bannerLast.appendTo(bannerUl);
      bannerUl.css({marginLeft:'-100%'});
        });
      }); //rightBtn 클릭

 })(this.jQuery);



// 함수의 종류
/* 
1. 함수 선언식 : 
  - 먼저 호출하고 나중에 함수 기능을 작성해도 문제없이 동작
  - 초기 작업 시, 가장 큰 범위의 작업
  Fn(); <--호출 
  function Fn(){} 

2. 함수 표현식 :
  - 먼저 작업 후에 호출해야만 동작
  - 큰 범위의 함수 내부에서 동작처리할 때 사용
  var Fun = function (){};
  Fun();

3. 즉시 실행 함수(익명 함수_이름이 없는 함수라서)
  - 별도의 호출이 필요 없을 때
  - 외부의 접근을 강제로 막을 때
  ( function(){} )();
  ( function(){}() );


*/