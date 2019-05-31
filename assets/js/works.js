$(function() {

    $('#o-no').on('click',function(){
        $('html').animate({ scrollTop: 0 },1000);
    })

    $(window).scroll(function(){

        let scrollTop =$(document).scrollTop();

        if (scrollTop > 500) {
            // 表示
            $('#o-no').fadeIn();
        } else {
            // 非表示
            $('#o-no').fadeOut();
        }
    })
});