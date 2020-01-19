//------------- circle1 ----------------- //
var button = document.getElementById("btn1");
var circ1 = document.getElementById("circle1");

btn1.addEventListener("click", function(){
  function hide(){
    if(circle1.style.visibility === "visible") {
      circle1.style.visibility = "hidden";
    } else {
      circle1.style.visibility = "visible";
  }
}
hide();
});
//------------- circle2 ------------------
var circ2 = document.getElementById("circle2");
btn2.addEventListener("click", function(){
  function changeColor(){
    if(circ2.style.backgroundColor === "green") {
    circ2.style.backgroundColor = "purple";
  } else {
    circ2.style.backgroundColor = "green";
  }
}
changeColor();
});
//------------  circle3 -------------------
var theCircle = document.querySelector("#circle3");
var box = document.querySelector("#contentContainer");

box.addEventListener("click", getClickPosition, false );

function getClickPosition(e) {
  var xPosition = e.clientX - (theCircle.offsetWidth / 2);
  var yPosition = e.clientY - (theCircle.offsetHeight / 2);

  // offsetWidth / 2 re-positions the circle from its center rather than its edge

  var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px,  0)";
  theCircle.style.transform = translate3dValue;
}

// --- box4 (Random Color Pad)  --- //

const btn = document.getElementById("rndColorbtn");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        e.target.style.backgroundColor = rndCol;
}
btn.addEventListener('click', bgChange);

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

block = document.getElementById("box4");
block.handleEvent = mouseToColor;
pad = document.getElementById("mousePad");
pad.addEventListener("mousemove", block);
// addEventListener takes an event name and a function or an object with an 
  // handleEvent property set to a function, to handle the event






