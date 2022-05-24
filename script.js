$("#eat").hide();

$(document).ready(function(){

$(".eat").on('click', function(){

    $("#eat").show();
    $("#drink").hide();
    $(".eat").addClass("eat1");
    $(".drink").removeClass("drink1");
})


$(".drink").on('click', function(){

    $("#drink").show();
    $("#eat").hide();
    $(".drink").addClass("drink1");
    $(".eat").removeClass("eat1");

});




$(".bar").on('click', function(){
$(this).hide();
$(".nav").addClass("open-nav");

});

$(".close").on('click', function(){
    $(".bar").show();
    $(".nav").removeClass("open-nav");
    
    });



});