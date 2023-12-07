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

// === Dit is voor de navigatieknoppen op de Detailpagina! === //

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

// === Dit is voor het filtersysteem van de Leeslijst! === //

function isCheckedActie() {
    var listItems = document.querySelector(".science-fiction");
    if(document.getElementById("actie").
    checked) {
        listItems.classList.add("geen-actie");
    } 
    else {
        listItems.classList.remove("geen-actie");
    }
};

function isCheckedRoman() {
    var listItems = document.querySelector(".actie");
    if(document.getElementById("roman").
    checked) {
        listItems.classList.add("geen-roman");
    } 
    else {
        listItems.classList.remove("geen-roman");
    }
};

function isCheckedWaargebeurd() {
    var listItems = document.querySelector(".roman");
    if(document.getElementById("waargebeurd").
    checked) {
        listItems.classList.add("geen-waargebeurd");
    } 
    else {
        listItems.classList.remove("geen-waargebeurd");
    }
};
