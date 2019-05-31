$(function () {

    //再生ボタンでBGM再生
    $("#play").on("click", function() {
        $("#audio").get(0).play();
    })

    //ランプをmouseoverした時の処理
    $("#lump").on("mouseover", function() {
        $(this).fadeOut(1500);
        $(".link1").delay(1000).fadeIn(2000);
        $(".link2").delay(1500).fadeIn(2000);
        $(".link3").delay(2000).fadeIn(2000);
    })
})