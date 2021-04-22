function setup() {
  createCanvas(660, 480);
  background(0);
  fill(220);                           //drawing board
  rect(0, 0, 600, 300);
  fill(255);
  textSize(16);
  text('Directions:', 10, 330);
  text('- Press key: 1 for thin brush', 10, 350);
  text('2 for medium brush', 95, 370);
  text('3 for large brush', 95, 390);
  text('C to clear drawing board', 95,410);
  text('- On the right hand side click on the button of the color brush you want to use',10,430);
  text('or select the gray button to erase',20, 450);
  text('** for greatest accuracy, draw slowly**',10,470)
  fill(220);                           //drawing board
  rect(0, 0, 600, 300);
  
}

function draw() {   // Buttons on side
  fill(255, 0, 0);
  ellipse(630, 30, 30, 30);
  fill(0, 255, 0);
  ellipse(630, 70, 30, 30);
  fill(0, 0, 255);
  ellipse(630, 110, 30, 30);
  fill(255, 255, 0);
  ellipse(630, 150, 30, 30);
  fill(220);
  ellipse(630, 190, 30, 30);
  fill(0);
  text('r', 628, 35);
  text('g', 626, 75);
  text('b', 626, 115);
  text('y', 626, 155);
  text('e', 626, 195);
  textSize(12);
  fill(255);
  text('eraser', 612, 220);

  //strokeWeight(5);                       //colors
  if(mouseX>615 && mouseX<645 && mouseY>15 && mouseY<45 && mouseIsPressed) stroke(255,0,0); 
  if(mouseX>615 && mouseX<645 && mouseY>55 && mouseY<85 && mouseIsPressed) stroke(0,255,0);
  if(mouseX>615 && mouseX<645 && mouseY>95 && mouseY<125 && mouseIsPressed) stroke(0,0,255);
  if(mouseX>615 && mouseX<645 && mouseY>135 && mouseY<165 && mouseIsPressed) stroke(255,255,0);
  if(mouseX>615 && mouseX<645 && mouseY>175 && mouseY<205 && mouseIsPressed) stroke(220);

  if(mouseX>0 && mouseX<600 && mouseY>0 && mouseY<300 && mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY);       //drawing utensil
  }
   
    if(keyIsPressed){                      //key buttons
      if(key == '1') strokeWeight(1);
      if(key =='2') strokeWeight(4);
      if(key == '3') strokeWeight(6);
      if(key == 'C'){
        strokeWeight(0.1);
        fill(220);
        rect(0,0,600,300);
      }
  }
}