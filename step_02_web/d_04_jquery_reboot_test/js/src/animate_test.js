// animate_test.js

(function($){
var btn = $('.btn').children('button');
//console.log(btn);

var color1 = ['#fff','#f06', '#f80', '#ff0', '#5f3', '#0ac', '#74a', '#a7a'];
var color2 = ['#a7a','#fad','#f06','#f80','#ff0','#5f3','#0ac','#74a','#fff'];

var parFirst = $('.par').children('p').eq(0);
var parLast = $('.par').children('p').eq(-1);

var timed = 800;
var turn = 0;
// console.log(parFirst);
// console.log(parLast);

// 1.배경색:파랑, 2.글씨색:흰색
btn.on('click',function(e){
  e.preventDefault();

  var _thisI = $(this).index();
  console.log(_thisI);
  
  // first p --------------------------------------
  
    parFirst.animate({backgroundColor:color1[_thisI]},timed/2,function(){
    parFirst.animate({color:color2[_thisI]},timed);

  // last p --------------------------------------

    parLast.stop().animate({backgroundColor:color2[_thisI]},function(){
      parLast.stop().animate({color:color1[_thisI]}, function(){
        var size = (_thisI+1) * 16; //borderRadius rem이 얼마나 먹는지 확인
        console.log('size ' + size);
        parLast.stop().animate({borderRadius:_thisI+1 + 'rem'},function(){
          turn += 180;
          parLast.css({transform:'rotateY(' + turn + 'deg)',transition:'all ' + timed + 'ms ease'});
          // transform 은 animate기능에 없고, css에 포함되어있음.
        });
      });
    });
  });//btn.on('click')

//새로고침버튼( reload() )
var reload = $('.reset').find('button');
reload.on('click',function(e) {
  e.preventDefault();
  //window.reload()
  window.location.reload();

});

});





})(this.jQuery);