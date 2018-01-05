(function($){
//  multimedia_03.js

var baseUrl = "../multi/audio/";
var musicList = [
                 {title:'veil'     },
                 {title:'cheerU'   }, 
                 {title:'DoItAgain'}, 
                 {title:'TouchDown'}, 
                ];
var musicListLength = musicList.length;


var audio = $('audio');
audio.append('<source>');



var audioSrc = audio.find('source');
var i = 0;
//baseUrl + musicList[i].title + '.mp3'
audioSrc.attr({'src': baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});



var play = $('.play');
play.on('click', function(e){
 e.preventDefault();
 audio[0].load();
 audio[0].play();
});

var next = $('.next');
next.on('click', function(e){
  e.preventDefault();
  i++;

  if(i<musicListLength){
  audioSrc.attr({'src': baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
    audio[0].load();
    audio[0].play();
    }else{
      i = 0;
      audioSrc.attr({'src': baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
    }
});

var pause = $('.pause');
pause.on('click',function(e){
e.preventDefault();
    audio[0].load();
    audio[0].pause();
});

var prev = $('.prev');
prev.on('click', function(e){
 e.preventDefault();
 i--; //0 -1...
 if(i < 0){
  i = musicListLength-1; //4 -1 = 3 (4번째 곡으로 재생)
   audioSrc.attr({'src': baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
 }
  audioSrc.attr({'src': baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
    audio[0].load();
    audio[0].play();

});

})(this.jQuery);