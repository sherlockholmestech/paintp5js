let c;
let strokeW = 5;
let dfbw;
let dfbh;
let ctemp;
let line, square, circle;
line = true
square = false
circle = false
function setup() {
  frameRate(500);
  createCanvas(windowWidth, windowHeight);
  background(255);
  c = 0, 0, 0;
  dfbw = 69
  dfbh = 69
  transparency = 255
  //Clear Button
  clearButton = createButton('Clear');
  clearButton.position(0, 35);
  clearButton.mousePressed(CLEAR);
  
  //Clear Button
  refreshButton = createButton('Refresh');
  refreshButton.position(windowWidth-69, 35);
  refreshButton.mousePressed(REFRESH);
  
  //Erase Button
  erasebutton = createButton('Eraser');
  erasebutton.position(250, 35);
  erasebutton.mousePressed(ERASE);
  
  //Stroke Button
  let strokeWidth = createInput('5', 'number');
  strokeWidth.position(135, 35);
  strokeWidth.size(100);
  strokeWidth.input(setStrokeWidth);
  
  //Random Clolur Button
  rngButton = createButton('Random Colour!');
  rngButton.position(0, windowHeight-23);
  rngButton.mousePressed(RNGCOLOUR);
  
  //Menu Text
  textFont('Helvetica');
  fill('black');
  textSize(15);
  textStyle(NORMAL);
  text('Pen tip Size:', 50, 50);
  text('COLOURS:', windowWidth-69*7, windowHeight-69);
  text('Current Colour:', 100, windowHeight-69);
  textAlign(CENTER);
  textStyle(BOLD);
  text('CANVAS', windowWidth*1/2, 100);
}

function setStrokeWidth () {
  strokeW = this.value()
}
function RNGCOLOUR () {

  c = color(int(random(255)), int(random(255)), int(random(255)));
  console.log(c);
}

function ERASE () {
  c = 255
}

function REFRESH () {
  fill('black');
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text('CANVAS', windowWidth*1/2, 100);
  textStyle(NORMAL);
  textAlign(LEFT);
  text('Pen tip Size:', 50, 50);
  text('COLOURS:', windowWidth-69*7, windowHeight-69);
  text('Current Colour:', 100, windowHeight-69)
}



function draw() {

  //Brush Stroke
  strokeWeight(strokeW);
  stroke(c);
  if (mouseY > 70 && mouseY < windowHeight-dfbh*2 && pmouseY > 70 && pmouseY < windowHeight-dfbh*2 && mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (mouseY > 70 && mouseY < windowHeight-dfbh*2 && pmouseY > 70 && pmouseY < windowHeight-dfbh*2 && mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  strokeWeight(1);
  stroke('black');
  line(0, windowHeight-dfbh*2, windowWidth, windowHeight-dfbh*2);
  line(0, 70, windowWidth, 70);
  strokeWeight(0);
  //red colour button
  fill('red');
  rect(windowWidth-dfbw, windowHeight-dfbh, 69);
  
  //purple colour button
  fill('purple');
  rect (windowWidth-dfbw*2, windowHeight-dfbh, 69);
  
  //draw blue colour button 
  fill('blue');
  rect (windowWidth-dfbw, windowHeight-dfbh*2, 69);
  
  //draw green colour button 
  fill('green');
  rect (windowWidth-dfbw*2, windowHeight-dfbh*2, 69);
  
  //draw white colour button 
  fill('white');
  rect (windowWidth-dfbw*3, windowHeight-dfbh, 69);
  
  //draw Black colour button
  fill('black');
  rect (windowWidth-dfbw*3, windowHeight-dfbh*2, 69);
  
  //draw yellow colour button 
  fill('yellow');
  rect (windowWidth-dfbw*4, windowHeight-dfbh, 69);
  
  //draw Orange colour button
  fill('orange');
  rect (windowWidth-dfbw*4, windowHeight-dfbh*2, 69);
  
  //draw pink colour button
  fill('pink');
  rect (windowWidth-dfbw*5, windowHeight-dfbh*2, 69);
  
  //draw Brown colour button 
  fill('brown');
  rect (windowWidth-dfbw*5, windowHeight-dfbh, 69);
  
  //draw Current colour button 
  fill(c);
  rect (250, windowHeight-dfbh*1.5, 69);
  
  //logic to red square
  if(mouseX >  windowWidth-dfbw && mouseX < windowWidth && mouseY > windowHeight-dfbh && mouseY < windowHeight && mouseIsPressed){
    c = 'red'
  }
  
  //logic to pruple square
  if(mouseX >  windowWidth-dfbw*2 && mouseX < windowWidth-dfbw && mouseY > windowHeight-dfbh && mouseY < windowHeight && mouseIsPressed){
    c = 'purple'
  }
  
  //logic to blue square
  if(mouseX >  windowWidth-dfbw && mouseX < windowWidth && mouseY > windowHeight-dfbh*2 && mouseY < windowHeight-dfbh && mouseIsPressed){
    c = 'blue'
  }
  
  //logic to green square
  if(mouseX >  windowWidth-dfbw*2 && mouseX < windowWidth-dfbw && mouseY > windowHeight-dfbh*2 && mouseY < windowHeight-dfbh && mouseIsPressed){
    c = 'green'
  }
  
  //logic to white square
  if(mouseX >  windowWidth-dfbw*3 && mouseX < windowWidth-dfbw*2 && mouseY > windowHeight-dfbh && mouseY < windowHeight && mouseIsPressed){
    c = 'white'
  }
  
  //logic to black square
  if(mouseX >  windowWidth-dfbw*3 && mouseX < windowWidth-dfbw*2 && mouseY > windowHeight-dfbh*2 && mouseY < windowHeight-dfbh && mouseIsPressed){
    c = 'black'
  }
  
  //logic to yellow square
  if(mouseX >  windowWidth-dfbw*4 && mouseX < windowWidth-dfbw*3 && mouseY > windowHeight-dfbh && mouseY < windowHeight && mouseIsPressed){
    c = 'yellow'
  }
  
  //logic to orange square
  if(mouseX >  windowWidth-dfbw*4 && mouseX < windowWidth-dfbw*3 && mouseY > windowHeight-dfbh*2 && mouseY < windowHeight-dfbh && mouseIsPressed){
    c = 'orange'
  }
  
  //logic to brown square
  if(mouseX >  windowWidth-dfbw*5 && mouseX < windowWidth-dfbw*4 && mouseY > windowHeight-dfbh && mouseY < windowHeight && mouseIsPressed){
    c = 'brown'
  }
  
  //logic to pink square
  if(mouseX >  windowWidth-dfbw*5 && mouseX < windowWidth-dfbw*4 && mouseY > windowHeight-dfbh*2 && mouseY < windowHeight-dfbh && mouseIsPressed){
    c = 'pink'
  }
}

function CLEAR() {
  c = 'black';
  d = 0;
  clear();
  background(255);
  //Menu Text
  fill('black');
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text('CANVAS', windowWidth*1/2, 100);
  textStyle(NORMAL);
  textAlign(LEFT);
  text('Pen tip Size:', 50, 50);
  text('COLOURS:', windowWidth-69*7, windowHeight-69);
  text('Current Colour:', 100, windowHeight-69);
  console.log('Cleared');
  console.log(c);
}



