document.getElementById('top-button').addEventListener('click', function(){
    window.scrollTo(0,0);
});

$(window).scroll(function(){
    var threshold = 208;
    var op = (($(document).height() - $(window).height()) - $(window).scrollTo()) / threshold;
    if( op <= 13){
        $("#top-button").show();
    }else{
        $("#top-button").hide();
    }
});