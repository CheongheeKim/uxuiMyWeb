// position_02.js 

 (function($){ 
  var popupBox = $('#popupBox');
 //버튼 클릭 시 사라지게 만들기
  popupBox.children('button').on('click',function(){
    popupBox.hide(100);
 }); // hide와 유사한 메소드 : fadeOut(); slideUp();

  //h1클릭 시 팝업 나타나게 만들기
    $('h1').on('click', function(){
        $('#popupBox').show(100);
    }); // show와 유사한 메소드 : fadeIn(); slideDown();
 
  //일정스크롤 이상 위치에서 부분 나타나게 만들기
  var sideBox = $('.side_box');
  var topBtn = $('top_btn');

  sideBox.delay(500).fadeOut();
  var content = $('#contentBox').offset().top; //offset : 상단을 기준으로 얼마나 떨어졌느냐 판단하는 메소드
  //console.log(content);
  $(window) .on('scroll',function(){ //$(window) : 브라우저 전체 통째로 , 참고 document : 내용을 쓸 수 있는 범위
  popupBox.fadeOut();

    var scroll_top = $(this).scrollTop(); 
    // scrollTop: 상단을 기준으로 스크롤 위치를 판단하는 메소드
    // this 는 window 를 가르키는 것, 이것/그것
    console.log(scroll_top);
      if(scroll_top >= content){
        sideBox.fadeIn();
        topBtn.fadeIn();

      }else{
        sideBox.fadeOut();
        topBtn.fadeOut();
      }
  });

})(this.jQuery);    