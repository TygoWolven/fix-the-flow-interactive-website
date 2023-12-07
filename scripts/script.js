// === Vanaf hier begint de code van de template! === //

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

// === Vanaf hier begint mijn eigen code! === //

const dropDownButton    = document.querySelector(".authinfo > h3 > button"),
      dropDown          = document.querySelector(".dropdown"),
      reservationButton = document.querySelector(".bookdetails > button"),
      reservationState  = document.querySelector(".bookdetails > button > h3");

var leftButton          = document.getElementById("scroll-left");
var rightButton         = document.getElementById("scroll-right");

dropDownButton.addEventListener("click" , () =>{
    dropDown.classList.toggle("dropdown-open");
});

function scrollWin() {
    window.scrollBy(0, 1000);
};

reservationButton.addEventListener("click" , () =>{
    reservationState.textContent = "Toegevoegd aan Reserveringen!";
});

leftButton.onclick = function () {
    var container = document.querySelector(".recommended > ul");
    sideScroll(container,'left',15,190,10)
};

rightButton.onclick = function () {
    var container = document.querySelector(".recommended > ul");
    sideScroll(container,'right',15,190,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

function isCheckedActie() {
    var listItem = document.querySelector(".science-fiction");
    if(document.getElementById("actie").
    checked) {
        listItem.classList.add("geen-actie");
    } 
    else {
        listItem.classList.remove("geen-actie");
    }
} 

