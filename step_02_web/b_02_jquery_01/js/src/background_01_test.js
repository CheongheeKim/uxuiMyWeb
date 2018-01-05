// background_01_test.js
//jQuery start ======================================

(function($){
$('html,body').height('100%');  

// var attOffset = $('.attachment').offset().top;
// console.log('attOffset 값은? ' + attOffset);

$(window).on('scroll',function(){
 
var first = $(this).scrollTop();
// console.log( scrollOffset);


    var gap = scrollOffset - attOffset;
    $('.attachment').children('div').css({backgroundPosition:'center '+ -gap/3 +'px'})
  }
});


// $(window).on('scroll',function(){
 
// var scrollOffset = $(this).scrollTop();
// console.log( scrollOffset);


//   if(attOffset <= scrollOffset){
//     // console.log("둘의 위치가 일치하는 것 확인!!");
//     // console.log(scrollOffset - attOffset);
//     var gap = scrollOffset - attOffset;
//     $('.attachment').children('div').css({backgroundPosition:'center '+ -gap/3 +'px'})
//   }
// });


//jQuery end ======================================
})(this.jQuery);