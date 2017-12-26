//index.js
(function($){
//jQuery start -----------------

var banner = $('.banner');
var bannerUl = banner.children('ul');
var bannerLast = bannerUl.children('li');

bannerLast.eq(-1).prependTo(bannerUl);

 bannerUl.css({marginLeft:'-100%'});
 banner.css({overflow:'hidden'});
//----------- #introPage_Slide_banner 

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
//----------- #introPage_button


var evtBanner = $('.event_banner');
var evtBannerUl = evtBanner.children('ul');
var evtBannerLast = evtBannerUl.children('li');

evtBannerLast.eq(-1).prependTo(evtBannerUl);

  evtBannerUl.css({marginLeft: '-100%'});
  evtBanner.css({overflow:'hidden'});
//----------- #eventPage_event_banner 

var evtLeftBtn = $('.event_btn').children('button').first();
var evtRightBtn = $('.event_btn').children('button').last();

evtLeftBtn.on('click',function(event){
event.preventDefault(); 

evtBannerUl.stop(false,true).animate({marginLeft:0}, function(){
  evtBannerLast = evtBannerUl.children('li').last();
  evtBannerLast.prependTo(evtBannerUl);
  evtBannerUl.css({marginLeft:0});
    });
  }); //LeftBtn 클릭

evtRightBtn.on('click',function(event){
event.preventDefault(); 

evtBannerUl.stop(true,true).animate({marginLeft:'-200%'}, function(){
evtBannerLast = evtBannerUl.children('li').first();
evtBannerLast.appendTo(evtBannerUl);
evtBannerUl.css({marginLeft:'-100%'});
  });//rightBtn 클릭
//----------- #introPage_button
  
  });

//jQuery end ---------------------
})(this.jQuery);



