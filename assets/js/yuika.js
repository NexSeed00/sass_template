// import { on } from "cluster";

$(function(){
$('.bomb').click (function(){
    // $('.bomb').fadeout('1000',function(){
        setTimeout(function(){
            $('.bomb').remove()
            $('.main').stop().animate({opacity:'1'},3000);
        },3000);
        });
    //    $('.bomb').remove()
    //    $('main').fadein('5000');
    });
//  });
// });