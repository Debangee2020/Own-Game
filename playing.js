class Player extends Base
{
    constructor(x,y)
    {
      super(x,y,50,50);
      this.image=loadImage("pics/runningboy.png");
    }

    display()
    {
      super.display();
    }
}
