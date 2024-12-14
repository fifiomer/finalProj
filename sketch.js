let finalProject, x,y,radius,r,g,b, circleSize, posX, posY, offSet,numShapes,space,columSize,rowSize,colum1,colum2,colum3,row1,row2,row3,angleShape1,angleShape2,angleShape3,x1,y2,x2,y1,distance;
let myColor = ['#EBC402','#e1d4ff','#8c99e4','#CCFAFF','#a0d8e9','#EBC402','#e38ce4','#ffe2d4','#CCFAFF','#e38ce4']

function setup() {
  createCanvas(400, 400);
  
  finalProject = new project ()
  x=random(0,width);
  y=random(0,height);
  radius = random(30,100)

  xDir = random(-2,2);
  yDir = random(-2,2);
  
  speed = 2
  
  numShapes = 10;
  circleSize = width-300;
  space = circleSize/numShapes;
  offSet = 10;
  
  posX = width/2;
  posY = height/2;
  
  x1 = width/2;
  y1 = height/2;
  
  distance = 5;
  
  x2 = x1+distance;
  y2 = y1+distance;
  
  
  r=242;
  g=193;
  b=58;
  
  rectMode(CENTER);
  angleMode(DEGREES);
  angleShape1 = 45;
  angleShape2 = 30;
  angleShape3 = 90;
  
  columSize = width/4;
  rowSize = height/4;
  
  colum1 = columSize;
  colum2 = columSize*4;
  colum3 = columSize*4;
  
  row1 = rowSize;
  row2 = rowSize*4;
  row3 = rowSize*4;
  
  
}


function draw () {
  background(30,30,10,1);
  r = random(10,255)
  g = random(10,255)
  b = random(10,255)
  colorAdjust = random(30,100)
  fill (r+colorAdjust,g+colorAdjust,b+colorAdjust);
  strokeWeight(1);
  circle(x,y,radius);
  
  line(colum1,0,colum1,height);
  line(colum2,0,colum2,height);
  line(colum3,0,colum3,height);
 
  line(0,row1,width,row1);
  line(0,row2,width,row2);
  line(0,row3,width,row3);
  
  
  push()
  rectMode(CORNER);
  translate(colum3,row3);
  rotate(angleShape2);
  rect(0,0,rowSize);
  pop();
  
  display();
  walkingDirection();
  keepInCanvas();
  
  
  angleShape1 += 1;
  angleShape2 += 2;
  angleShape3 += 4;
  
  if((x > width)||(x < 0))
    {
      xDir = -xDir
    }
  if((y > height)||(y<0))
    {
      yDir = -yDir
    }
  
  x += xDir*speed;
  y += yDir*speed;
    
  {
    for(i=0;i<numShapes;i++)
    {
      fill(myColor[i]);
      strokeWeight(2);
      stroke(190,56,200);
      circle(posX+offSet*i,posY,circleSize-space*i)
      
    }
  mySignature();
  
 // offSet++;

}
  
  function display()
{
  stroke('white');
  strokeWeight(2);
  line(x1,y1,x2,y2);
  
  x1 = x2;
  y1 = y2;
}

  function walkingDirection()
{
  let nextPos = floor(random(4));
  if (nextPos ==0){
    x2 = x1 + distance;
  }
  else if(nextPos == 1)
    {
      x2 = x1 - distance;
    }
  else if(nextPos == 2)
    {
      y2 = y1 + distance;
    }
  else if(nextPos == 3)
    {
      y2 = y1 - distance;
    }
}
  
  function keepInCanvas()
{
  if(x2 < 0)
    {
      x2 = 0;
    }
  else if (x2 > width)
    {
      x2 = width;
    }
  if(y2 < 0)
    {
      y2 = 0;
    }
  else if (y2 > height)
    {
      y2 = height;
    }
}

function mySignature()
{
  textSize(12);
  strokeWeight(1);
  stroke('#e38ce4');
  fill('#a10000');
  text('Fifi Omer',width-60,height-10);
}
  
}