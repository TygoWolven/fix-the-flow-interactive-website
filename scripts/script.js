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

// const   dropDownBtn = document.querySelector(".filters > li > button"),
//         dropDown    = document.querySelector(".dropdown");

// dropDownBtn.addEventListener("mouseover, dropDownOpen");

// function dropDownOpen (){
//     dropDown.classList.add(".dropdown-open");
// }