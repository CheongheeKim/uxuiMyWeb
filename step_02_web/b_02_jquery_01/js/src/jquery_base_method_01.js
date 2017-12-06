// jquery_base_method_01.js

//메소드 이해하기_01

// 스크롤 내릴 때 하단에 있던 gnb를 top으로 고정하는 법!!!
// scrollTop(), offset().top, offset().lest, $(window), 
(function($){ 
  var headBox = $('#headBox')
  var headOffset = headBox.offset().top 
  //offset().top : 선택자가 상단을 기준으로 얼마나 떨어졌느냐 판단하는 메소드
  console.log(headOffset);

$(window).on('scroll',function(){
  //$윈도우에 스크롤 이벤트가 발생했을 때! function을 실행하라! 
  //윈도우가 스크롤 했을 때 내가 수시로 확인할 거야
  var winScroll =  $(this).scrollTop();
  // scrollTop: 상단을 기준으로 스크롤의 변동 위치를 판단하는 메소드
    // this 는 window 를 가르키는 것, 이것/그것
  //console.log(winScroll);

  if(headOffset <= winScroll) {
    headBox.addClass('fixed'); //addClass:클라스 이름 추가
    }else{
       headBox.removeClass('fixed'); //removeClass:클라스 이름 삭제
    }
 });





 })(this.jQuery);
