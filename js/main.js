

$(document).ready(init); 
function init(){ 
    $(window).scroll(attopHandler);
	$("#logo").mouseenter(logoEnterHandler);
	$("#logo").mouseleave(logoLeaveHandler);
}

// index at-top
function attopHandler(){
    if ($(window).scrollTop()<=0)
        $(".explore, .navbar").addClass("at-top");
    else
        $(".explore, .navbar").removeClass("at-top");
}

// index捲動
$(document).on('click', '.slide', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
});

// logo
function logoEnterHandler(){
	$("#myImg").attr("src","images/logo_yellow.svg");
	$("#logo").css("color"," #EFC066");    			
};

function logoLeaveHandler(){
	$("#myImg").attr("src","images/logo_white.svg");
	$("#logo").css("color"," white");    			
};

