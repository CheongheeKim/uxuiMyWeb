//  js_base_method_02.js

(function($){
//jQuery start
var gnbBtn = $('.gnb_btn');
var gnbUl = $('#gnb').children('ul');

gnbBtn.on('click',function(evt){
  evt.preventDefault(); 
  //preventDefault: 앞에 선행되는(클릭)기능을 막아라

  //toggle이란? 
  //on(=display:block)/off(=display:none)의 기능!!!  
  gnbUl.toggle();
  //gnbUl.slideToggle();
  //gnbUl.fadeToggle();
});
 
 //==================================
var view = $('.view');

//li에 클라스를 다 지정하지 않고 선택하는 방법
//var= v1 = view.children('li:nth-child(1)')
//var= v1 = view.children('li:nth(1)')
//var= v1 = view.children('li:eq(0)')
//eq(n): 몇번째인지 지정 할당하는 것!
//


// ======== 선생님 방법 ======== //
var v01 = view.children('li').eq(0);
var v02 = view.children('li').eq(1);
var v03 = view.children('li').eq(2);
var v04 = view.children('li').eq(3);
var v05 = view.children('li').eq(4);
var v06 = view.children('li').eq(5);
var v07 = view.children('li').eq(6);
var v08 = view.children('li').eq(7);

var btn = $('.btn');
var btnLi = btn.children('li');
var b01 = btnLi.eq(0).children('button');
var b02 = btnLi.eq(1).children('button');
var b03 = btnLi.eq(2).children('button');
var b04 = btnLi.eq(3).children('button');
var b05 = btnLi.eq(4).children('button');
var b06 = btnLi.eq(5).children('button');
var b07 = btnLi.eq(6).children('button');
var b08 = btnLi.eq(7).children('button');
var b09 = btnLi.eq(8).children('button');
var b10 = btnLi.eq(9).children('button');
var b11 = btnLi.eq(10).children('button');
var b12 = btnLi.eq(11).children('button');

// var b012 = btnLi.eq(11) 이렇게만 주로 씀.


// ------------------------------------- 
b01.on('click',['button'], function(evt){ 
  evt.preventDefault(); 
  v01.hide(); 
}); 
b02.on('click', function(evt){ 
  evt.preventDefault(); 
  v01.show(); 
}); 
// ------------------------------------- 
b03.on('click', function(evt){ 
  evt.preventDefault(); 
  v02.fadeOut(); 
}); 
b04.on('click', function(evt){ 
  evt.preventDefault(); 
  v02.fadeIn(); 
}); 
// ------------------------------------- 
b05.on('click', function(evt){ 
  evt.preventDefault(); 
  v03.slideUp(); 
}); 
b06.on('click', function(evt){ 
  evt.preventDefault(); 
  v03.slideDown(); 
}); 
// ------------------------------------- 
b07.on('click', function(evt){ 
  evt.preventDefault(); 
  v04.addClass('myView'); 
}); 
b08.on('click', function(evt){ 
  evt.preventDefault(); 
  v04.removeClass('myView'); 
}); 
// ------------------------------------- 
b09.on('click', function(evt){ 
  evt.preventDefault(); 
  v05.toggle(); 
}); 
b10.on('click', function(evt){ 
  evt.preventDefault(); 
  v06.fadeToggle(); 
}); 
b11.on('click', function(evt){ 
  evt.preventDefault(); 
  v07.slideToggle(); 
}); 
b12.on('click', function(evt){ 
  evt.preventDefault(); 
  v08.toggleClass('myView'); 
}); 




// // ======= 내가 푼 방법 ======== // 
// //view 1번 hide,show
// var bannerBtn01 = $('.btn').children('.button01');
// var bannerBtn02 = $('.btn').children('.button02');
// var viewul01 = $('.view').children('.view01');

// bannerBtn01.on('click',function(evt){
//   evt.preventDefault();

//   viewul01.hide(50);

// });

// bannerBtn02.on('click',function(evt){
//   evt.preventDefault();

//   viewul01.show(50);

// });

// //view 2번 fadeOut,fadeIn
// var bannerBtn03 = $('.btn').children('.button03');
// var bannerBtn04 = $('.btn').children('.button04');
// var viewul02 = $('.view').children('.view02');

// bannerBtn03.on('click',function(evt){
//   evt.preventDefault();

//   viewul02.fadeOut();


// });

// bannerBtn04.on('click',function(evt){
//   evt.preventDefault();

//   viewul02.fadeIn();

// });

// //view 3번 slideHide,slideShow
// var bannerBtn05 = $('.btn').children('.button05');
// var bannerBtn06 = $('.btn').children('.button06');
// var viewul03 = $('.view').children('.view03');

// bannerBtn05.on('click',function(evt){
//   evt.preventDefault();

//   viewul03.slideUp();

// });

// bannerBtn06.on('click',function(evt){
//   evt.preventDefault();

//   viewul03.slideDown();

// });

// //view 4번 addClass,removeClass
// var bannerBtn07 = $('.btn').children('.button07');
// var bannerBtn08 = $('.btn').children('.button08');
// var viewul04 = $('.view').children('.view04');

// bannerBtn05.on('click',function(evt){
//   evt.preventDefault();

//   viewul04.addClass('fixed');

// });

// bannerBtn06.on('click',function(evt){
//   evt.preventDefault();

//   viewul04.removeClass('fixed');

// });

//=========tab의 기능 ==============================
var tab = $('.tabs');
var tabLi = tab.children('li');
var tabContent = $('.tab_content');
var tabContentLi = tabContent.children('li');

//tab li를 클릭
tabLi.on('click', function(evt){
  evt.preventDefault();
  var myBtn = $(this).index();
  console.log(myBtn);

  //tab메뉴에서 지정한 class이름 'select를 삭제'
  tabLi.removeClass('select');
  //선택된(몇번째?) li에 클라스 이름 '셀렉트'를 지정
  tabLi.eq(myBtn).addClass('select');

//해당하는 탭 메뉴의 내용이 순서에 맞게 나오게 만들어라!!
tabContentLi.removeClass('select');
tabContentLi.eq(myBtn).addClass('select');
});






  //jQuery End
})(this.jQuery);