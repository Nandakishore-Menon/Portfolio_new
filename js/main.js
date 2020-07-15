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
                <button id="about" class="ghost">About me</button>
                </div>`;

var projs=`<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  
    <div class="carousel-item">
      <a href="https://github.com/Nandakishore-Menon/Student_Database_Management" target="_blank">
      <div  class="car-img d-block w-100">
        <img src="img/stu.png" alt="First slide">
      </div></a>
      <div class="d-none carousel-caption">
        <h1>Student Database Management System</h1>
        <p>Uses a REST API to take user info and stores in database, which can later be viewed, searched, updated and deleted.</p>
        <div class="techused"><h3>Technologies used:</h3>
            <i class="devicon-mongodb-plain techu"></i>
            <i class="devicon-nodejs-plain techu"></i>
            <i class="devicon-express-original techu"></i>
            <i class="devicon-javascript-plain techu"></i>
        </div>
      </div>
      
    </div>
    
    <div class="carousel-item  active">
    <a href="https://github.com/Nandakishore-Menon/Socket_quiz_python" target="_blank">
        <div  class="car-img d-block active w-100">
            <img src="img/quiz.png" alt="First slide">
        </div></a>
        <div class="d-none carousel-caption">
            <h1>Socket Programming Quiz</h1>
            <p>A multiplayer trivia game.Answer within 10 seconds, or the question is skipped.Implemented in python.</p>
            <div class="techused"><h3>Technologies used:</h3>
                <i class="devicon-python-plain techu"></i>
            </div>
        </div>
    
    </div>
    
    <div class="carousel-item">
    <a href="https://github.com/Nandakishore-Menon/Sliding_puzzle" target="_blank">
        <div  class="car-img d-block active w-100">
            <img src="img/slide.png" alt="First slide">
        </div></a>
        <div class="d-none carousel-caption">
            <h1>Sliding puzzle</h1>
            <p>Solves the sliding puzzle in minimum moves and also allows user to play.Implemented in python.</p>
            <div class="techused"><h3>Technologies used:</h3>
                <i class="devicon-python-plain techu"></i>
            </div>
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

var social=`<div class="tech social">
    <a href="https://www.linkedin.com/in/nandakishore-menon-b4a021196/" target="_blank"><i class="devicon-linkedin-plain techic"></i></a>
    <a href="https://github.com/Nandakishore-Menon" target="_blank"><i class="devicon-github-plain techic"></i></a>
    <a href=""><i class="devicon-facebook-plain techic"></i></a>
    <a href="https://twitter.com/Nandakishore_SM"  target="_blank"><i class="devicon-twitter-plain techic"></i></a>
</div>`;

var caro_info=`<div class="projinfo text-center">            
                    <h1>Socket Programming Quiz</h1>
            <p>A multiplayer trivia game.Answer within 10 seconds, or the question is skipped.Implemented in python.</p>
            <div class="techused"><h3>Technologies used:</h3>
                <i class="devicon-python-plain techu"></i>
            </div>
                </div>`;


var exp=`<div id="exp"><h2>Currently seeking intership opportunities.</h2><button id="back" class="ghost">Back</button></div>`;
var interest=`<div id="interest"><ul>
    <li><h3>I am passionate about problem solving in general, be it a development challenge or competitive programming questions.</h3></li><br>
    <li><h3>I enjoy CTFs and Hackathons</h3></li><br>
    <li><h3>I look forward to contributing to Open Source projects</h3></li>
</ul></div>`;

var cont_info=`<div id="cont_info"><h2>Send me your message,here </h2><span><br>OR THROUGH<br><span>
${social}<span><br>OR mail me at<br><span><h3 id="mail">Nandakishore.Menon@iiitb.org</h3>
<button id="back" class="ghost">Back</button></div>`;

var cont_form=`<div id="form_div"><form id="cont_form" action="https://formspree.io/xpzyorad" method="POST">
  <label>
    Your email:<br><input type="email" name="_replyto">
  </label>
  <label>
    Your message:<br><textarea name="message"></textarea>
  </label>

  <!-- your other form fields go here -->
  <br>
  <button id="sub" type="submit">Send</button>
</form></div>`;





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
    $(".blue-box").html(exp);
    // $(".blue-box").append(l_content);
    $(".right").html(interest);
    
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
        interval: 4000
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
        $(".right").html("");

    });
};
 
right();

$("#contact").click(function(){

        $(".blue-box").animate({right: '+=50%',
        opacity: "0.99"
        },800);
        contact();
        $(".blue-box").animate({opacity:"1"});
        //$(".blue-box").html(l_content);
    });

var contact=function(){
    $(".right").html(cont_form);
    //$(".blue-box").html();
    $(".blue-box").html(cont_info);
    $("#back").click(function(){

        $(".blue-box").animate({right: '-=50%',
            opacity: "0.99"
        },800);
        $(".blue-box").animate({opacity:"1"});
        $(".right").html("");
        //$(".blue-box").html(r_content);
        right();
    });
};
