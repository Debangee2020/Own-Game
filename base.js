class Base 
{
    constructor(x,y,width,height)
    {
       this.body=Bodies.rectangle(x,y,width,height);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
       this.image=loadImage("pics/day forest.png");
    }

    Scroll()
    {
      b= this.body.velocityX =-4;
     if (b.x < 0){
      b.x =300;
    }
    }

    display()
    {
      rect(this.body.position.x,
           this.body.position.y,
           this.body.width,
           this.body.height);
    }
}