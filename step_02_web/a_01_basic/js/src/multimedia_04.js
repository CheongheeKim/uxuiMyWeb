(function($){
//multimedia_04.js

//위치값, 목록
var baseUrl = "../multi/video/";
var videoList = [
                  {title:'EXO_Monster', singTit: '몬스터' , singer:'EXO' },
                  {title:'Naul_Gloria', singTit: '글로리아', singer:'Naul' },
                  {title:'Park_Hyo_Shin-Sound_of_Winter', singTit: '겨울소리', singer:'Park_Hyo_Shin'},
                  {title:'Red_Velvet_Peek-A-Boo', singTit: '피카부' , singer:'Red_Velvet' },
                  {title:'TWICE_Heart_Shaker' , singTit: 'Heart_Shaker', singer:'TWICE' },
                  ];
                  //배열 안 객체{}뒤엔 , 콤마!!!!!!!!!!!!1

var videoListLength = videoList.length;

//-----------------------------------------------------------
//video태그에 첫번째 곡 담기
var video = $('.video_player').find('video');
var i = 0;
video.append('<source src= "'+ baseUrl + videoList[i].title + '.mp4' + '" type="video/mp4">');
//mutimedia_03.js에서는 attr태그로 속성 불러왔었음
// ex)audioSrc.attr({'src': baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
//이 버전은 풀어서 쓰는 경우고 위에 append뒤는 한꺼번에 쓰는 경우임, 두가지 경우 모두 익혀놔야 함
var videoSrc = video.find('source');
//-----------------------------------------------------------
var play,pause,prev,next;
play = $('.play'); //재생버튼
pause = $('.pause'); //일시정지
prev = $('.prev'); //이전재생
next = $('.next'); //다음재생

videoSrc.attr({'src':baseUrl + videoList[i].title + '.mp4','type':'video/mp4'});



prev.on('click',function(e){
 e.preventDefault();
 i--; 

 if(i < 0){ i = videoListLength-1;}
videoSrc.attr({'src':baseUrl + videoList[i].title + '.mp4'});
  video[0].load();
  video[0].play();
}); //prev
//프리브를 클릭할 떄 i를 하나씩 빼라.
//그러다 만약 i가 0보다 작아질 때(-1이 오면), i에 비디오렝쓰(5)에서 -1 을 대입 하라. 
//4,3,2,1,0,-1..이 오면 (5)-1 = 4; 하여 5번째 곡(마지막곡)으로 돌아가라!


play.on('click',function(e){
 e.preventDefault();
  // video[0].load(); 일시정지 눌렀을 때 맨 처음으로 돌아가기 때문에 일시정지 상태에서 다시 재생하려면 로드 빼야함 
  video[0].play();
});//play


pause.on('click',function(e){
 e.preventDefault();
  video[0].pause();
});//pause


next.on('click',function(e){
 e.preventDefault();
 i++;
 if(!(i < videoListLength)){i = 0;}
//! 를 씀으로써 i >= videoListLength 와 같은 의미. 
// i가 비디오리시트렝쓰(5)보다 크거나 같을 때 i에 0을 넣어서 첫번째 노래로 돌아가게 하라.
//! 를 쓰는게 속도면에서 더 빠름



  videoSrc.attr({'src': baseUrl + videoList[i].title + '.mp4'});
    video[0].load();
    video[0].play();
});

//-------------------------------------
//목록 만들기
var content = $('.contentList');
content.append('<ul></ul>');
var contentBox = content.find('ul');
for(var j = 0; j < videoListLength; j++){
  contentBox.append('<li><button type="button"><strong>제목 :</strong>'+ videoList[j].singTit + ' ' + '<strong>가수명 :</strong>' + videoList[j].singer + '</button></li>');
}

content.css({width:'30%', float:'left' });
contentBox.css({color:'#09a'});
contentBox.find('button').css({backgroundColor:'transparent',color:'inherit',padding:'0.1rem'});
contentBox.find('strong').css({fontWeight:'bold'});


//li 클릭하여 순서 체크하기
contentBox.children('li').on('click',function(e){
  e.preventDefault();
  i = $(this).index();
  console.log(i);
  videoSrc.attr({ 'src': baseUrl + videoList[i].title + '.mp4' });
    video[0].load();
    video[0].play();
  
});

$(document).on('keydown',function(e){
  //keydown : 키보드를 눌렀을 때
  //keycode : 
  if(e.keyCode == 27){
    video[0].pause();
    }else if(e.keyCode == 13){
      video[0].play();
    }
});

//http://keycode.info/





})(this.jQuery);