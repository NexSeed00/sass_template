$(function () {

    $(window).scroll(function() {

        let scrollTopValue = $(document).scrollTop();

        // let bgoneTop = $('.bg-one').offset().top;

        // if(scrollTopValue > bgoneTop 100) {

        //     $('.bg-one').animate({left: 0}, 1000);
        // }

        // let bgtwoTop = $('.bg-two').offset().top;

        // if(scrollTopValue > bgtwoTop -50) {

        //     $('.bg-two').animate({right: 0}, 1000);
        // }
        
        
        let bgthreeTop = $('.bg-three').offset().top;

        if(scrollTopValue > bgthreeTop -50) {

            $('.bg-three').animate({left: 0}, 1000);
        }

        let bgfourTop = $('.bg-four').offset().top;

        if(scrollTopValue > bgfourTop -50) {

            $('.bg-four').animate({right: 0}, 1000);
        }
        
        let bgfiveTop = $('.bg-five').offset().top;

        if(scrollTopValue > bgfiveTop -50) {

            $('.bg-five').animate({left: 0}, 1000);
        }

        let bgsixTop = $('.bg-six').offset().top;

        if(scrollTopValue > bgsixTop -50) {

            $('.bg-six').animate({right: 0}, 1000);
        }
        
        let bgsevenTop = $('.bg-seven').offset().top;

        if(scrollTopValue > bgsevenTop -50) {

            $('.bg-seven').animate({left: 0}, 1000);
        }

        let bgeightTop = $('.bg-eight').offset().top;

        if(scrollTopValue > bgeightTop -50) {

            $('.bg-eight').animate({right: 0}, 1000);
        }

        let bgnineTop = $('.bg-nine').offset().top;

        if(scrollTopValue > bgnineTop -50) {

            $('.bg-nine').animate({left: 0}, 1000);
        }

        let bgtenTop = $('.bg-ten').offset().top;

        if(scrollTopValue > bgtenTop -50) {

            $('.bg-ten').animate({right: 0}, 1000);
        }

        // let bgmoTop = $('.bg-mo').offset().top;

        // if(scrollTopValue > bgmoTop -50) {

        //     $('.bg-mo').animate({left: 0}, 1000);
        // }

        // let bghiTop = $('.bg-hi').offset().top;

        // if(scrollTopValue > bghiTop -50) {

        //     $('.bg-hi').animate({right: 0}, 1000);
        // }

        // let bgbaTop = $('.bg-ba').offset().top;

        // if(scrollTopValue > bgbaTop -50) {

        //     $('.bg-ba').animate({left: 0}, 1000);
        // }

        // let bgbonTop = $('.bg-bon').offset().top;

        // if(scrollTopValue > bgbonTop -50) {

        //     $('.bg-bon').animate({right: 0}, 1000);
        // }
    })
})