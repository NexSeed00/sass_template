// import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

let position1 = 0;

$(function() {
    $('.fa-baseball-ball').on('click', function() {
        console.log("AAA");
        $('.fa-baseball-ball').animate({ opacity: 1}, {
            duration: 1000,
            step: function (now) {
                // console.log('7');
                $(this).css({ 
                    transform: 'rotate(' + now * 90 + 'deg)'
                })

            }
            
        });
        $('.introduce').fadeIn();
        
    })
$('.fa-times-circle').on('click',function() {
    $('.introduce').fadeOut(function() {
        $('.introduce').remove();
    });

    $('a'),on('click', function() {
        $('#audio').get(0).play();
    })
});



    $('.img1').on('click',function() {

        $('body').append($('<div id="over">'));

        $('#over').append($('<div class="img-box">'));

        $('.img-box').append($('<div class="box">'));

        $('.box').append($('<img class="lightbox">'));

        $('.lightbox').attr("src", "./img/img01.jpg");
      
        $('.box').append($('<div><h1>Q.野球の魅力はどんなところか?</h1><p>団体競技なんだけど、個人競技でもあるところ。<br>チームが勝てばそれでいいかというと、<br>そういうわけではない。<br>個人として結果を残さないと生き残ることはできない。<br>チームとして勝っていればいいわけではない。<br>その厳しさが魅力であることは間違いない。<br>あとは、同じ瞬間がないということ。<br>メジャーに来てから今に至るまで、全く違うものになった。</p></div>'));


        let imageSrc = $('.lightbox').attr('src');

        $('.box').attr('src',imageSrc);

        $('#over').on('click', function() {
            $('#over').fadeOut(function() {
                $('#over').remove();
            });
        });

    })

    $('.img2').on('click', function() {
        $('body').append($('<div id="over2">'));

        $('#over2').append($('<div class="img-box2">'));

        $('.img-box2').append($('<div class="box2">'));

        $('.box2').append($('<img class="lightbox">'));

        $('.lightbox').attr("src", "./img/img02.jpg");
      
        $('.box2').append($('<div><h2>Q.キャリアの中で一番印象的だった場面はありますか？</h2><p>時間が経ったら今日が一番真っ先に浮かぶことは間違いないと思います。 <br>今日を除けば、MVPやオールスター出場、 <br>10年200安打は小さなことに過ぎない。 <br>今日のあの舞台に立てたことは・・・<br>去年の5月以降のゲームに出られない状況にあって、<br>チームと一緒に練習を続けてきた。<br>それを最後まで成し遂げられなければ、今日という日はなかった。<br>残してきた記録はいずれ誰かが抜いていく。<br>でも去年の5月から今日までの日々はひょっとしたら誰にもできないかもしれないと、<br>ささやかな誇りを生んだ日々だった。<br>それがどの記録よりも、<br>自分の中ではほんの少しだけ、誇りを持てた事かと思っている。</p></div>'));


        let imageSrc = $('.lightbox').attr('src');

        $('.box').attr('src',imageSrc);

        $('#over2').on('click', function() {
            $('#over2').fadeOut(function() {
                $('#over2').remove();
            })
        })
    })

    $('.img3').on('click', function() {
        $('body').append($('<div id="over3">'));

        $('#over3').append($('<div class="img-box3">'));

        $('.img-box3').append($('<div class="box3">'));

        $('.box3').append($('<img class="lightbox">'));

        $('.lightbox').attr("src", "./img/img03.jpg");
      
        $('.box3').append($('<div><h3>Q.ファンの存在はイチロー選手にとっていかがでしたか?</h3><p>"あるときまでは自分のためにプレーすることがチームの為になるし、<br>見てくれる人も喜んでくれるかなと思っていたけれど、<br>ニューヨークに行った後からは、<br>人に喜んでもらえることが一番の喜びに変わってきた。 <br> ファンの存在無くしては自分のエネルギーは全く生まれないと言ってもいいと思う。"</p></div>'));


        let imageSrc = $('.lightbox').attr('src');

        $('.box').attr('src',imageSrc);

        $('#over3').on('click', function() {
            $('#over3').fadeOut(function() {
                $('#over3').remove();
            })
        })
    })

    

    $('.akirasan').on('mouseover', function() {

        if (position1 == 0){
            $('.akirasan').animate({
                'top': '-100px',
                'left': '270px',
                
            },5000)

            position1 = 1;
        }

        console.log('AAA');
        
        
    })
    $('.akirasan').on('click',function() {
        $('.akirasan').animate({
            'top': '-190px',
            'left': '-5px',  
        },5000)

    
    })

    $('.akirasan').on('click',function() {
        $('.akirasan').animate({
            'top': '-100px',
            'left': '-260px',
            
        },5000)

    
    })

    $('.akirasan').on('click',function() {
        $('.akirasan').animate({
            'top': '0px',
            'left': '0px',
            
        },5000)

    
    })


})