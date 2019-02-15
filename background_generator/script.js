var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var direction_linear = document.querySelector("#direction");
var direction_radial = document.querySelector("#direction-radial");
var direction;

var orientation = document.getElementsByName("gradient");

var body = document.querySelector("#gradient");
var currentBg = document.getElementById("current_bg");
var radi = document.getElementsByName("gradient");

getSelectedGradiendType();
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);


function setGradient(){
        body.style.background = "";
        body.style.background = getSelectedOrientation()+"("+direction.value+", "+color1.value+", "+color2.value+")";
        currentBg.textContent = "background: "+body.style.background+";";    
}

function getSelectedOrientation(){
    for (let i = 0; i < orientation.length; i++) {
        if(orientation[i].checked)
        return orientation[i].value; 
    }   
}

function getSelectedGradiendType(){
    if(radi[0].checked){
        direction = direction_linear;
        direction_radial.style.visibility = 'hidden';
        direction_linear.style.visibility = 'visible';
    }else{
        direction = direction_radial;
        direction_radial.style.visibility = 'visible';
        direction_linear.style.visibility = 'hidden';
    }
    setGradient();
}
