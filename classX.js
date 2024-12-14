class project{
  
    constructor(x,y,distance,col)
    {
      this.x1 = x;
      this.y1 = y;
      this.myDistance = distance;
      this.x2 = this.x1 + this.myDistance;
      this.y2 = this.y1 + this.myDistance;
      
  
      
    }
    
    display()
    {
      stroke(this.myColor);
      strokeWeight(2);
      line(this.x1,this.y1,this.x2,this.y2);
      
      this.x1 = this.x2
      this.y1 = this.y2
    }
    
    walkingDirection()
    {
      let nextPost = floor(random(4));
      if (nextPos == 0)
        {
          this.x2 = this.x1 + this.myDistance
        }
      else if (nextPos == 1)
        {
          this.x2 = this.x1 = this.myDistance
        }
      else if (nextPos == 2)
        {
          this.y2 = this.y1 + this.myDistance
        }
      else
        {
          this.y2 = this.y1 - this.myDistance
        }
    }
    
    keepInCanvas()
    {
      if(this.x2 < 0)
        {
          this.x2 = 0
        }
      else if (this.x2 > width)
        {
          this.x2 == width;
        }
      if (this.y2 < 0)
        {
          this.y2 == 0;
        }
      else if (this.y2 > height)
        {
          this.y2 = height;
        }
        
    }
  }
