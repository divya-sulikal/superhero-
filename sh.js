class sh{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.1

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.Image=loadImage("images/superhero-02.png")
        World.add(world, this.body);

    }
    display()
    {
        var ballpos=this.body.position;
        
        push()
        translate(ballpos.x,ballpos.y);
       fill("black")
       imageMode(CENTER)
    image(this.Image,0,0,this.r,this.r)

        pop()
    }
}