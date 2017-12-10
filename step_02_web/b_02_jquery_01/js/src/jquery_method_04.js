// jquery_method_04.js 

(function($){
//jQuery start -----------------
var ani = $('.ani');
//버튼 설정
var aniBtn = $('#aniBtn');
var btn_01 = aniBtn.children('button').eq(0);
var btn_02 = aniBtn.children('button').eq(1);
var btn_03 = aniBtn.children('button').eq(2);
var btn_04 = aniBtn.children('button').eq(3);

//btn_01 --------------
btn_01.on('click',function(e){
  e.preventDefault();
  //ani.css({backgroundColor:'#afa',color:'#555'});
  ani.animate({backgroundColor:'#afa',color: '#555'});
});

// btn_02 -------------
btn_02.on('click', function(e){
  e.preventDefault();
  // ani.css({marginLeft:'+=50px',transform:'rotate(180deg)'});
  ani.animate({marginLeft:'+=50px'},1000,'easeOutElastic');
});

btn_02.on('mouseleave',function(e){
// ani.css({marginLeft:'+=50px'});
 ani.animate({marginLeft:0});
});

// btn_03 -------------
btn_03.on('click',function(e){
  e.preventDefault();
  ani.animate({right:0},function(){
    //연속적으로 애니메이트를 처리하고 싶을 때,
    //변수 ani에 애니메이트 메소드로 오른쪽 0으로 위치하고 끝나면 다른 함수를 재호출하여 수행하라!
    ani.animate({top:'auto',bottom:0},function(){
      ani.animate({right:'auto',left:0},function(){
        ani.animate({bottom:'auto',top:0},function(){
          ani.removeAttr('style');
          // ani.removeAttr('style'); :element에 있는 attribute(속성)을 remove 한다!
          //한바퀴 다 돌았을 때 스타일 값을 초기화 시켜서 다시 눌렀을 때 위치값이 제로화 되어있기 떄문에 다시 돌아갈 수 있다.

        });
      });
    });
  });
});

 

// btn_04 -------------
btn_04.on('click',function(e){
  e.preventDefault();

  ani.animate({width:'+=100px',height:'+=100px'},300,'easeOutBounce',function(){ 
    var aniW = ani.width();
    console.log(aniW);
    if(aniW  >= 500){
      alert('stop!!!');
   
    } /* if문. 끝나는 곳에는 세미콜론 안찍어도 됨 */
});

 btn_04.on('mouseleave',function(e){

 ani.animate({width:0,height:0});
  });

});






//jQuery end ---------------------
})(this.jQuery);