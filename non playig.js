class Non extends Base
{
    constructor(x,y)
    {
       super(x,y,100,100)
       Math.round(x, 1000), 500;
       Math.random(x, 1000), 500;
       this.image=loadImage("pics/wolf.png");
    }

    display()
    {
      super.display();
    }
}