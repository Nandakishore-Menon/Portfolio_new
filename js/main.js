var left=function(){
    $(".blue-box").html(`<button id="back" class="ghost">Back</button>`);
};


$("#about").click(function(){
    // $(".blue-box").html(`<button id="Back" class="ghost">Back</button>`);
    // $(".blue-box").animate({right:'20%',opacity:'0.6'});
    $(".blue-box").animate({right: '50%',
        opacity: "0.5"
    },left);
    $(".blue-box").animate({opacity:"1"});

}); 
$("#back").click(function(){
    // $(".blue-box").html(`<button id="Back" class="ghost">Back</button>`);
    // $(".blue-box").animate({right:'20%',opacity:'0.6'});
    $(".blue-box").animate({right: '50%',
        opacity: "0.5"
    },left);
    $(".blue-box").animate({opacity:"1"});

}); 

