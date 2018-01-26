// js_05_accordionH3.js
(function($) {
  var li = $('li').find('a');

  li.on('focus',function(){
    $(this).addClass('focus');
    $(this).parent().css({zIndex:300});
  });
  li.on('blur',function(){
    // blur : css의 기능을 날려줌, 앞에서 focus를 잡았을 때 addClass한걸 날려줌
    $(this).removeClass('focus');
    $(this).parent().removeAttr('style');
  });


})(this.jQuery);