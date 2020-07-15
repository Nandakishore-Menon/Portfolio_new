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
                <div class="but">
                <button id="project" class="ghost">My Projects</button>
                <button id="about" class="ghost">More about me?</button>
                </div>`;

var projs=`<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      
      <div  class="car-img d-block w-100">
        <img src="img/me.jpeg" alt="First slide">
      </div>
      <div class="d-none carousel-caption">
        <h1>Sliding puzzle</h1>
        <p>Solves the sliding puzzle in minimum moves and also allows user to play.Implemented in python.</p>
      </div>
    </div>
    <div class="carousel-item  active">
        <div  class="car-img d-block active w-100">
            <img src="img/quiz.png" alt="First slide">
        </div>
        <div class="d-none carousel-caption">
            <h1>Socket Programming Quiz</h1>
            <p>A multiplayer trivia game.Answer within 10 seconds, or the question is skipped.Implemented in python.</p>
        </div>
    </div>
    <div class="carousel-item">
        <div  class="car-img d-block active w-100">
            <img src="img/slide.png" alt="First slide">
        </div>
        <div class="d-none carousel-caption">
            <h1>Sliding puzzle</h1>
            <p>Solves the sliding puzzle in minimum moves and also allows user to play.Implemented in python.</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`;


var caro_info=`<div class="projinfo text-center">            
                    <h1>Socket Programming Quiz</h1>
            <p>A multiplayer trivia game.Answer within 10 seconds, or the question is skipped.Implemented in python.</p>
                </div>`;




var right=function(){
    $(".blue-box").html(r_content);
    $("#about").click(function(){

        $(".blue-box").animate({right: '+=50%',
        opacity: "0.99"
        },800);
        left();
        $(".blue-box").animate({opacity:"1"});

    }); 
    $("#project").click(function(){
        $(".blue-box").animate({right: '+=50%',
        opacity: "0.99"
        },800);
        project();
        $(".blue-box").animate({opacity:"1"});
    });
};

var left=function(){
    $(".blue-box").html(l_content);

    $("#back").click(function(){

        $(".blue-box").animate({right: '-=50%',
            opacity: "0.99"
        },800);
        right();
        $(".blue-box").animate({opacity:"1"});

    });
};

var project=function(){
    $(".right").html(projs);
    $(".blue-box").html(caro_info);
    $(".blue-box").append(l_content);
    $('.carousel').carousel({
        interval: 6000
    });
    $('.carousel').on('slid.bs.carousel', function () {
        $('.projinfo').html($('.active > .carousel-caption').html());
    });
    $("#back").click(function(){

        $(".blue-box").animate({right: '-=50%',
            opacity: "0.99"
        },800);
        right();
        $(".blue-box").animate({opacity:"1"});

    });
};
 
right();



