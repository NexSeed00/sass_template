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
})