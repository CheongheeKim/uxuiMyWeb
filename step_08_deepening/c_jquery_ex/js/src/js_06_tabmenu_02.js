//  js_06_tabmenu_02.js

(function($){
  console.log('test')
   var tabMenu = $('#tabMenu');
   var tabUl = tabMenu.children('ul');
   var tabLi = tabUl.children('li');
   var content = $('.menu_content');

   tabLi.on('click',['button'],function(e){
    e.preventDefault();
    var index = $(this).index();
    console.log(index);
    var myIndex = content.children('div').eq(index);
    myIndex.stop().slideDown();
    myIndex.siblings('div').stop().slideUp();
   });


})(this.jQuery);