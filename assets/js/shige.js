$(function(){
 var topBtn = $('#page-top');
 topBtn.hide();
 $(window).scroll(function (){
    if ($(this).scrollTop()> 100) {
        topBtn.fadeIn();
    }else{

        topBtn.fadeOut();
    }

    $('.image').animate({left:0},1000);

 });
topBtn.click(function(){
    $('body,html').animate({
        scrollTop:0
    }, 500);
    return false;
});


})

