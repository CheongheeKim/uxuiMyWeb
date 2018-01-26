// js_01_showHide.js
(function($){

//show(), hide(), toggle()
//fadeIn(), fadeOut(), fadeToggle()
//slideDown(), slideUp(), slideToggle()
//addClass(), removeClass(),toggleClass()

//--------------------------------------
//선택자.on('click',콜백함수(인수){인자.preventDefault(); });
//--------------------------------------

// 1. 선택자 가져오기
var btn = $('#navigation').find('li');
var par = $('p');
var timed = 500; 
var easing = 'easeInSine';
var myindex = function(i){

switch(i){
  //switch() 
    case 0:
    par.show(timed);
    break;

    case 1:
    par.hide(timed, easing);
    break;

    case 2:
    par.toggle(timed, easing);
    break;

    case 3:
    par.fadeIn(timed, easing);
    break;

    case 4:
    par.fadeOut(timed, easing);
    break;

    case 5:
    par.fadeToggle(timed, easing);
    break;

    case 6:
    par.slideDown(timed, easing);
    break;

    case 7:
    par.slideUp(timed, easing);
    break;

    case 8:
    par.slideToggle(timed, easing);
    break;

    case 9:
    par.removeAttr('style');
    par.addClass('show');
    break;

    case 10:
    par.removeAttr('style');
    par.removeClass('show');
    break;

    default:
    //if문에서 else와 같음
    par.removeAttr('style');
    par.toggleClass('show');

  }
};

// btn.on('click',['a'],/*클릭했을 때 정확하게 누굽니다.라고 한번 더 인지시켜서 오류 가능성을 낮춰줌. */
//   function(e){
//   e.preventDefault();
//     // console.log($(this).index() );
//   var i = $(this).index();
//   myindex(i);
// });

// $.each([배열],함수(순서,값){}); 각각의... 각각 이렇게 하겠다.
// $.each에는 순서값을 가지고 있는 index가 무조건 들어가 있다.
// $.each(btn,function(index,value){
//   console.log(index,value);
// });

btn.each(function(i){
  $(this).on('click',function(e){
    e.preventDefault();
    console.log(i);
    myindex(i);
  });
});



})(this.jQuery);








