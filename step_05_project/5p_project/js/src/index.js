//index.js

(function($){ 

var banner = $('.banner');
var bannerUl = banner.children('ul');
var bannerLast = bannerUl.children('li');

bannerLast.eq(-1).prependTo(bannerUl);

 bannerUl.css({marginLeft:'-100%'});
 banner.css({overflow:'hidden'});

var leftBtn = $('.btn').children('button').first();
var rightBtn = $('.btn').children('button').last();

leftBtn.on('click',function(event){
event.preventDefault(); 

bannerUl.stop(false,true).animate({marginLeft:0}, function(){
  bannerLast = bannerUl.children('li').last();
  bannerLast.prependTo(bannerUl);
  bannerUl.css({marginLeft:0});
    });
  }); //LeftBtn 클릭

rightBtn.on('click',function(event){
event.preventDefault(); 

bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
bannerLast = bannerUl.children('li').first();
bannerLast.appendTo(bannerUl);
bannerUl.css({marginLeft:'-100%'});
  });//rightBtn 클릭

  });



})(this.jQuery);
