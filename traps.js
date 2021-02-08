class Traps extends Base
{
    constructor(x,y)
    {
       super(x,y,100,100)
       Math.round(x, 1000), 500;
       Math.random(x, 1000), 500;
       this.image=loadImage("pics/knife.png");
    }

    display()
    {
      super.display();
    }
}