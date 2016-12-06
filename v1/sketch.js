var topBoundary = 0;
var bottomBoundary = 0;
var fxTopbutton = 0;
var fxMiddlebutton = 0;
var fxBottombutton = 0;

var fxTopbuttonbox = 0;
var fxMiddlebuttonbox = 0;
var fxBottombuttonbox = 0;
var fxEndbuttonbox = 0;

var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var currentArea = "";

var reverbEllipseleft = 0;
var reverbEllipsecenter = 0;
var reverbEllipseright = 0;

var delayEllipseleft = 0;
var delayEllipsecenter = 0;
var delayEllipseright = 0;

var oscEllipse0 = 0;
var oscEllipse1 = 0;
var oscEllipse2 = 0;

var buttonSize = 240;
var fxSize = 0;



function setup() {
  createCanvas(600,800);
  background(200);
  noStroke();
  
  topBoundary = 150;
  buttonBoundary = height-410;
  
  boundary0 = 75;
  boundary1 = 315;
  boundary2 = 75;
  boundary3 = 315;
  boundary4 = 555;
  
  
  fxTopbutton = 650;
  fxMiddlebutton = 700;
  fxBottombutton = 750;
  reverbEllipseleft = 100;
  reverbEllipsecenter = 315;
  reverbEllipseright = 530;
  delayEllipseleft = 100;
  delayEllipsecenter = 315;
  delayEllipseright = 530;
  oscEllipse0 = 100;
  oscEllipse1 = 315;
  oscEllipse2 = 530;
  fxSize = 25;
  
  fxTopbuttonbox = 625;
  fxMiddlebuttonbox = 675;
  fxBottombuttonbox = 725;
  fxEndbuttonbox = 775;
}

function draw() {
  fill("black");
  textFont("Helvetica");
  textSize(50);
  text("Kaossilator", 200, 90);
  textSize(15);
  text("Reverb",20,655);
  text("Delay",20,705);
  text("OSC",20,755);
  
  //reverb buttons
  ellipse(reverbEllipseleft,fxTopbutton,fxSize,fxSize);
  ellipse(reverbEllipsecenter,fxTopbutton,fxSize,fxSize);
  ellipse(reverbEllipseright,fxTopbutton,fxSize,fxSize);
  //delay
  ellipse(delayEllipseleft,fxMiddlebutton,fxSize,fxSize);
  ellipse(delayEllipsecenter,fxMiddlebutton,fxSize,fxSize);
  ellipse(delayEllipseright,fxMiddlebutton,fxSize,fxSize);
  //osc
  ellipse(oscEllipse0,fxBottombutton,fxSize,fxSize);
  ellipse(oscEllipse1,fxBottombutton,fxSize,fxSize);
  ellipse(oscEllipse2,fxBottombutton,fxSize,fxSize);
  
  //kaoss pad
  fill("green");
  rect(boundary0,topBoundary,buttonSize,buttonSize);
  fill("red");
  rect(boundary1,topBoundary,buttonSize,buttonSize);
  fill("blue");
  rect(boundary2,buttonBoundary,buttonSize,buttonSize);
  fill("yellow");
  rect(boundary3,buttonBoundary,buttonSize,buttonSize);
  
  if(mouseY > topBoundary && mouseY < buttonBoundary){
    //console.log("color picker area");
    if(mouseX > boundary0 && mouseX < boundary1){
      console.log("green");
      currentArea = ("green");
    }else if(mouseX > boundary1 && mouseX < boundary4){
      console.log("red");
      currentArea = ("red");
    }
  }
  if(mouseY > buttonBoundary && mouseY < height-170){  
    if(mouseX > boundary2 && mouseX < boundary3){
      console.log("blue");
      currentArea = ("blue");
    }else if(mouseX > boundary3 && mouseX < boundary4){
      console.log("yellow");
      currentArea = ("yellow");
    }  
  //reverb identification  
  if(mouseY > fxTopbuttonbox && mouseY < fxMiddlebuttonbox){
    if(mouseX > reverbEllipseleft && mouseX < reverbEllipsecenter - 100){
      console.log("Low Reverb");
      currentArea = ("lowReverb");
    }else if(mouseX > reverbEllipsecenter && mouseX < reverbEllipseright - 100){
      console.log("Medium Reverb");
      currentArea = ("medReverb");
    }else if(mouseX > reverbEllipseright && mouseX < width){
      console.log("High Reverb");
      currentArea = ("highReverb");
    }
    }
  //delay identification  
  if(mouseY > fxMiddlebuttonbox && mouseY < fxBottombuttonbox){
    if(mouseX > delayEllipseleft && mouseX < delayEllipsecenter - 100){
      console.log("Low delay");
      currentArea = ("lowDelay");
    }else if(mouseX > delayEllipsecenter && mouseX < delayEllipseright - 100){
      console.log("Medium Delay");
      currentArea = ("medDelay");
    }else if(mouseX > delayEllipseright && mouseX < width){
      console.log("High Delay");
      currentArea = ("highDelay");  
    }
  }    
  }
  
}
