// js_accordion_test.js
(function($){

var btnTabs = $('.btn_tabs');
var tabsDt = btnTabs.children('dt');
var tabsDd = btnTabs.children('dd');
var time = 300;
var easing = 'easeInSine';

tabsDt.eq(0).on('click',function(e){
  e.preventDefault();
  tabsDd.eq(0).show(time,easing);
});

tabsDt.eq(1).on('click',function(e){
  e.preventDefault();
  tabsDd.eq(0).hide(time,easing);
  tabsDd.eq(1).show(time,easing);
});

tabsDt.eq(2).on('click',function(e){
  e.preventDefault();
  tabsDd.eq(1).hide(time,easing);
  tabsDd.eq(2).show(time,easing);
});

tabsDt.eq(3).on('click',function(e){
  e.preventDefault();
  tabsDd.eq(2).hide(time,easing);
  tabsDd.eq(3).show(time,easing);
});
tabsDt.eq(4).on('click',function(e){
  e.preventDefault();
  tabsDd.eq(3).hide(time,easing);
  tabsDd.eq(4).show(time,easing);
});



})(this.jQuery);