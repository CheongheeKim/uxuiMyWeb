//rwd_02.js

(function($){
//-----------------------------------------
// 각 영역에 따른 함수이름 지정
// var Basic = function(){}; //IE 기준으로 동작되게 처리할꺼임, 지금은 필요 없음.

  var Mob    = function(){
    var menuBtn = $('.menu_btn');
    menuBtn.on('click',function(e){
      e.preventDefault();
      var gnb = $('#gnb');
      var gnbView = gnb.hasClass('view'); 
      //hasClass: 내가 원하는 값을 찾아낼 때 씀 
      //클라스 view(클릭 했을 때 CSS에서 메뉴창 나옴)가 있니 없니? 있으면(참) 빼고, 클라스 뷰가 없으면(거짓) 더해라.
      if(gnbView){
        gnb.removeClass('view');
      }else{
        gnb.addClass('view');  
      }
      // $('#gnb').toggleClass('active');
    });
  };
  var TabV   = function(){};
  var TabPc  = function(){};
  var PcFull = function(){};  







//-----------------------------------------
// 반응형 웹 사이즈 고려한 기준 작업 설정하기
var Rwd = function(){
 var winW = $(window).width();
 var rwdSize = [480, 768, 1366];
      if(winW <= rwdSize[0]){ Mob(); 
      //각 영역 기능 함수로 호출 Mob(); 
      }else if(rwdSize[0] < winW && winW < rwdSize[1]){ TabV(); 
      //각 영역 기능 함수로 호출 TabV(); 
      }else if(rwdSize[1] <= winW && winW <= rwdSize[2]){ TabPc(); 
      //각 영역 기능 함수로 호출 TabPc(); 
  
      }else{ PcFull(); //각 영역 기능 함수로 호출 PcFull(); 
      }

}; //rwd 
Rwd();

//-----------------------------------------
// 브라우저 가로사이즈 변경 시 정해진 함수 재실행
var $w = $(window).width();
$(window).on('resize',function(){
  var $nw = $(window).width();
  if($w !== $nw){
    location.reload();
    // Rwd();
  }
});

})(this.jQuery);