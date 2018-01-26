(function($){
//jquery_test_01.js


  var tab = $('.tabs');
  
  var btn_01 = tab.children('li').eq(0);
  var btn_02 = tab.children('li').eq(1);
  var btn_03 = tab.children('li').eq(2);
  var btn_04 = tab.children('li').eq(3);
  var btn_05 = tab.children('li').eq(4);
  var btn_06 = tab.children('li').eq(5);
  var btn_07 = tab.children('li').eq(6);
  var btn_08 = tab.children('li').eq(7);
  var btn_09 = tab.children('li').eq(8);
  var btn_10 = tab.children('li').eq(9);
  var btn_11 = tab.children('li').eq(10);
  var btn_12 = tab.children('li').eq(11);

  var tabContent = $('.tabs_content');
  var tabContentLi_01 = tabContent.children('li').eq(0);


    btn_01.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.show();
    });

   btn_02.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.hide();
    });

   btn_03.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.toggle();
    });
   btn_04.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.slideDown();
    });
   btn_05.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.slideUp();
    });
  btn_06.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.toggle();
    });
   btn_07.on('click',function(e){
    e.preventDefault();
    tabContentLi_01.show().animate('transform:45deg');
    });



    
   

   



})(this.jQuery);