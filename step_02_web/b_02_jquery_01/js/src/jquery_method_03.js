// jquery_method_03.js 

  
(function($){
//jquery start----------------------------

var wrap = $('#wrap');
// #headBox 생성
wrap.html('<header id="headBox"></header>');
//'#wrap' 홑따옴표 안에 있는 것을 불러온다.
//'< >'홑따옴표 안에 꺽새괄호를 써야 생성된다.

//#headBox 생성 후 선택
var headBox = $('#headBox');
headBox.wrap('<div id="headBoxWrap"></div>');
//headBox에 wrap을 감싸서 부모를 생성하자


//css에서 #headBox가 가지고 있는 배경색을 가져와 보자!!
var headColor = headBox.css('backgroundColor');
console.log(headColor);
var headWrap = $('#headBoxWrap');
headWrap.css({backgroundColor:headColor});
//.css에서 지정한 속성을 가져올 수도 있고, css에서 지정할 수도 있다.


//이번엔 마지막에 들어갈 footer#footBox를 만들어 보자!
wrap.append('<footer id="footBox"></footer>');
//wrap뒤에(부모-append-자식) #footBox를 만든다.
var footBox = $('#footBox');

footBox.wrap('<div id="footBoxWrap"></div>');
var footColor = footBox.css('backgroundColor');
var footWrap = $('#footBoxWrap');
footWrap.css({'backgroundColor':footColor});

//#headBox(#headBoxWrap의) 동레벨의 뒤에 section#bannerBox를 생성
headWrap.after('<section id="bannerBox"></section>');



//#footBox(#footBoxWrap의) 동레벨의 앞에 article#contentBox를 생성
footWrap.before('<article id="contentBox"></article>');
var contentBox = $("#contentBox");
    contentBox.html('<p></p>');
var myp = contentBox.find('p');
myp.text('제가 한번 글자를 입력해 보겠습니다!');
myp.css({color:'#fff',fontSize:'2rem',fontWeight:'bold',textAlign:'center',paddingTop:20+'rem'}); //paddingTop:20+'rem' 이렇게 

//css에선 비포/에프터는 해당하는 요소의 자식으로 들어간다.



//jQuery에서는 비포/에프터를 

//jquery end----------------------------
})(this.jQuery);
