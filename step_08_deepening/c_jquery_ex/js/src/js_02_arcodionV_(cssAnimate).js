// js_02_arcodionV(css,animate).js

(function($){
var accDt = $('.accordion').find('dt');
var accDd = $('.accordion').find('dd');
var ddHeight = [];
var i = 0;
// console.log(accDd.length);
// ddHeight[0] = 100;
for(;i < accDd.length; i++){
  ddHeight[i] = accDd.eq(i).innerHeight(); //innerHeight: padding 을 포함한 높이값
  }
  // console.log(ddHeight);  
  // 1번 기능
  //$('dd').show();

  // 2번 기능 시 주석 풀기
    $('dd').hide();  
  
    // accDt.on('click',function(e){
    //   e.preventDefault();
    //    var _this = $(this);
    //    var _thisI = $(this).index() / 2 ;
    //      /* dt 밑에 바로 dd가 붙어있다보니 콘솔로 찍었을 때 인덱스 순서가 0,2,4..짝수로 되기 때문에 나누기 2를 한다. */
       
        // console.log(_thisI);

       //1.선택된 바로 뒤에 dd를 사라지게 만들기.
       // _this.next('dd').css({height:0, paddingTop:0, paddingBottom:0},function(){
       //  var _$this = $(this);
       //  _$this.css({display:'none'}); /*slideUp의 기능 추가*/
       // });
    
      //2.선택된 바로 뒤의 dd를 나타나게 만들기
      // console.log(_thisI);
      // _this.next('dd').css({display:'block',paddingTop:0,paddingBottom:0,height:0});// css기능은 callback함수 기능을 가질 수 없다.
      // _this.next('dd').animate({paddingTop:'2rem',paddingBottom:'2rem',
      //   height:ddHeight[_thisI]});

      //3.1,2번 기능을 함수처리하여 사용하기 
      //1번 기능 함수화 처리
      var myHide = function(select){
      var _this = select;
      console.log(_this);
      var _thisI = select.index() / 2 ;
      //1. 선택된 바로 뒤의 dd말고 다른 dd를 사라지게 만들기
      _this.next('dd').siblings('dd').animate({height:0, paddingTop:0, paddingBottom:0},function(){
        var _$this = $(this);
        _$this.css({display:'none'});
      });
    };
    // 2번 기능 함수화
    var myShow = function(select){
      var _this = select;
      var _thisI = select.index() / 2 ;
       _this.next('dd').css({display:'block',paddingTop:0,paddingBottom:0,height:0});
      _this.next('dd').animate({paddingTop:'2rem',paddingBottom:'2rem',height:ddHeight[_thisI]});
    };
    //선택된 다음 dd를 숨김처리하기 위한 함수
    var mySelHide = function(select){
      var _this = select;
      var _thisI = select.index() / 2 ;
      _this.next('dd').animate({height:0, paddingTop:0, paddingBottom:0},function(){
         _this.next('dd').css({display:'none'});
    });
    };

    accDt.on('click',['button'],function(e){
        e.preventDefault();
        var sel = $(this);
        var ddView = sel.next('dd').css('display') == 'block';
          
          if(ddView){
          mySelHide(sel);

          }else{
        myHide(sel);
        myShow(sel);
          };
 
    });



})(this.jQuery);