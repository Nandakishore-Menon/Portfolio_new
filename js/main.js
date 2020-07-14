
var signUpButton = document.getElementById('Add');
const signInButton = document.getElementById('GoBack');
const container = document.getElementById('container');
var lr;

function queryfunc(x) {
  if (x.matches) { 
        lr=document.getElementsByClassName('left')[0];
        var signUpButton=document.getElementById('Addid');
        console.log(lr);
        console.log(signUpButton);
        signUpButton.addEventListener('click', () => {

});
  } 
  else {
        lr=document.getElementsByClassName('right')[0];
        var signUpButton = document.getElementById('Add');
        signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    //console.log(lr);

});

  }
}
var x = window.matchMedia("(max-width: 767px)");

if(x.matches){
    queryfunc(x);
}
else{
    queryfunc(x);
}
x.addListener(queryfunc);



signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.getElementsByClassName('left')[0].innerHTML=`                <div class="profile">
                    <img src="./img/me.jpeg" height="150px"id="me" alt="Avatar">
                </div>
                <div class="bio text-center">
                    <h2>Hey! I am Nandakishore S Menon.</h2>Software developer<br>Computer Science undergrad student at IIIT Bangalore.
                </div>`;

});


