// import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

$(function() {
    $('.fa-baseball-ball').on('click', function() {
        console.log("AAA");
        $('.fa-baseball-ball').animate({ opacity: 1}, {
            duration: 1000,
            step: function (now) {
                // console.log('7');
                $(this).css({ transform: 'rotate(' + now * 90 + 'deg)'})
            }
            
        });
        $('.introduce').fadeIn();
        
    })

    $('.img').on('click',function() {

        $('body').append($('<div id="over">'));

        $('#over').append($('<div class="lightbox">'));

        let icon = $(this).find('img').clone();

        $('.lightbox').append(icon);

        $('#over').on('click', function() {
            $('#over').fadeOut(function() {
                $('#over').remove();
            })
        })
    })

    $('.akirasan').on('click', function() {
        console.log('AAA');
        $('.akirasan').animate({
            'top': '-100px',
            'left': '270px',
            
        })
        
    })
    $('.akirasan').on('click',function() {
        $('.akirasan').animate({
            'top': '-190px',
            'left': '-5px',
            
        })

    
    })

    $('.akirasan').on('click',function() {
        $('.akirasan').animate({
            'top': '-100px',
            'left': '-260px',
            
        })

    
    })

    $('.akirasan').on('click',function() {
        $('.akirasan').animate({
            'top': '0px',
            'left': '0px',
            
        })

    
    })


})