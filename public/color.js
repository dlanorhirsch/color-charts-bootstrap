

//------------- circle1 ----------------- //
var circle1 = document.createElement('div');
circle1.className = "hide1";
document.getElementById('cm1');
cm1.addEventListener("click", function(){
    if(circle1.className === "hide1") {
        circle1.className = "";
    } else  {
        circle1.className = "hide1";
    }
});

document.getElementById("container");
container.appendChild(circle1);

//------------- circle2 ------------------
var circle2 = document.createElement('div');
circle2.className = "hide2";
document.getElementById('cm2');
cm2.addEventListener("click", function(){
    if(circle2.className === "hide2") {
        circle2.className = "";
    } else {
        circle2.className = "hide2";
    }
});
document.getElementById("container");
container.appendChild(circle2);

//------------  circle3 -------------------
var circle3 = document.createElement('div');
circle3.className = "hide3";
document.getElementById('cm3');
cm3.addEventListener("click", function(){
    if(circle3.className === "hide3") {
        circle3.className = "";
    } else  {
        circle3.className = "hide3";
    }
});
document.getElementById("container");
container.appendChild(circle3);

// --- chip4 (Random Color Pad)  ---
// -----------------------------------------------------------------

const btn = document.getElementById("rndColorbtn");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        e.target.style.backgroundColor = rndCol;
}
btn.addEventListener('click', bgChange);


// ------------------------------------------------------------------
var chip4 = document.createElement("div");
chip4.setAttribute("id", "chip4");
var textCont4 = document.createTextNode("Box 4");
chip4.appendChild(textCont4);
document.getElementById("container2");
container2.appendChild(chip4);

//--- random color selector ---

mouseToColor = function (e){
  // console.log("this is:", this.constructor);
  
  axisX = Math.ceil((e.offsetX/e.target.clientWidth) * 255);
  axisY = Math.ceil((e.offsetY/e.target.clientHeight) * 255);
  axisZ = 128;
  if(e.ctrlKey){
    axisZ = Math.ceil((e.offsetY/e.target.clientHeight) * 255);
  } 

  
  console.log(axisX, axisY, axisZ);
  
  this.innerText = (axisX, axisY, axisZ);
  this.style.background = `rgb(${axisX}, ${axisY},${axisZ})`;
  // console.log(`rgb(${e.clientX}, ${e.clientY},255)`);
};


block = document.getElementById("chip4");
block.handleEvent = mouseToColor;
pad = document.getElementById("mousePad");
pad.addEventListener("mousemove", block);
// addEventListener takes an event name and a function or an object with an 
  // handleEvent property set to a function, to handle the event

//--- chip 1 ---
var chip1 = document.createElement('div');
chip1.setAttribute("id", "chip1");
var textCont1 = document.createTextNode("RED");
chip1.appendChild(textCont1);
document.getElementById('container3');
container3.appendChild(chip1);


//--- chip 2 ---
var chip2 = document.createElement('div');
chip2.setAttribute("id", "chip2");
var textCont2 = document.createTextNode("GREEN");
chip2.appendChild(textCont2);
document.getElementById('container3');
container3.appendChild(chip2);

//--- chip 3 ---
var chip3 = document.createElement('div');
chip3.setAttribute("id", "chip3");
var textCont3 = document.createTextNode("BLUE");
chip3.appendChild(textCont3);
document.getElementById("container3");
container3.appendChild(chip3);






