// js_02_arcodionV.js

(function($){

 // $('dd').hide();

 //$(this)
 //slideDown();, slideUp();
 //next(), siblings()
 /*선택자.on('click',function(){
  $(this.next); 

  선택한 것.바로 뒤.보이기 ;
  선택한 것의 형제 중 동일 요소.사라지기

 });

 */

var accDt = $('.accordion').find('dt');
var accDd = $('.accordion').find('dd');

  accDt.on('click',['button'],function(e){
    e.preventDefault();

    var _this = $(this);  

    // console.log($(this).index() );
    _this.next('dd').siblings('dd').stop().slideUp();
    // _this.next('dd').stop().slideToggle();

    //_this.next('dd')의 display상태 확인(보이느냐 안보이느냐?)
    var ddView = _this.next('dd');
    var ddBlock = ddView.css('display') == 'block';

    if(!ddBlock){
      //보이지 않으면 -> 나타나기!
     ddView.slideDown();
     }else{
      //보이면 -> 숨기기
      ddView.slideUp();
     }
 
    


  });




})(this.jQuery);