var gDebugMode = false;

function setup() {
  createCanvas(600, 650);
 
 textSize(20);
 textAlign(LEFT);


}

// Draw code goes here
function draw() {
  background(167);
  
  //hair
  fill('#0c0b0d');
  arc(300,390,420,750, QUARTER_PI+ HALF_PI, QUARTER_PI,OPEN);

  //shoulders
  fill('#f1c6ae');
  rect(173,520,250,100);

  //shirt
  fill('#b2c3e3');
  rect(173,590,250,50);

  //neck
  fill('#f1c6ae');
  rect(264,477, 70, 55, 20);

  //front hair
  fill('#0c0b0d');
  rect(100,500,150,145);
  fill('#0c0b0d');
  rect(350,500,150,145);

  //face
  fill('#f1c6ae');
  ellipse( 300,300, 300, 400);

  //white eyes
  fill('ffffff');
  ellipse(232,262,45,25);

  // white eyes
  fill('ffffff');
  ellipse(362,262,45,25);

  // brown eyes
  fill('#38231c');
  ellipse(362,262,25,25);

  //brown eyes
  fill('#38231c');
  ellipse(232,262,25,25);
  //mouth
  fill('#e7838b');
  arc(298, 415, 75,65,0,PI);

  //nose
  noFill();
  arc(298, 345, 59,35,0,PI);

  //eyebrows add ends of eyebrows
  fill('#0c0b0d');
  rect(338,228,35,7);
  beginShape();
  vertex(373,228);
  vertex(390,240);
  vertex(372,235);
  endShape();
  fill('#0c0b0d');
  rect(220,228,35,7);
  beginShape();
  vertex(220,228);
  vertex(198,240);
  vertex(219,235);
  endShape();

  //bangs
  strokeWeight(2);
  beginShape();
  vertex(280,100);
  vertex(150,320);
  vertex(160,180);
  vertex(160,150);
  endShape();

  beginShape();
  vertex(280,100);
  vertex(450,320);
  vertex(440,150);
  vertex(390,100);
  endShape();
  

  if (gDebugMode == true){
    drawDebugInfo();
  }

  function drawDebugInfo() {
    fill(255);
    text("X: " + mouseX + " Y: " + mouseY, 20, height - 20);
  }
}