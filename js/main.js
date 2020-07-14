var l_content=`<button id="back" class="ghost">Back</button>`;
var r_content=`                <div class="tech ">
                    <h1 class="text-center">Skills</h1>
                    <i class="devicon-c-plain-wordmark techic"></i>
                    <i class="devicon-python-plain techic"></i>
                    <i class="devicon-java-plain techic"></i><br><br>
                    <i class="devicon-javascript-plain techic"></i>
                    <i class="devicon-html5-plain techic"></i>
                    <i class="devicon-css3-plain techic"></i><br><br>
                    <i class="devicon-mongodb-plain techic"></i>
                    <i class="devicon-nodejs-plain techic"></i>
                    <i class="devicon-express-original techic"></i>
                </div>
                <button id="about" class="ghost">More about me?</button>`;


var right=function(){
    $(".blue-box").html(r_content);
    $("#about").click(function(){

    $(".blue-box").animate({right: '+=50%',
        opacity: "0.9"
    });
    left();
    $(".blue-box").animate({opacity:"1"});

}); 
};

var left=function(){
    $(".blue-box").html(l_content);

    $("#back").click(function(){

        $(".blue-box").animate({right: '-=50%',
            opacity: "0.9"
        });
        right();
        $(".blue-box").animate({opacity:"1"});

    });
};


 
right();



