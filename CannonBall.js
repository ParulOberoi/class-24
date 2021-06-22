class CannonBall{

    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true

        };

        this.r=40;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("./assets/cannonball.png");
        World.add(world,this.body);
    }



    shoot(){
        Matter.Body.setVelocity(this.body,{x:50,y:-30});
    }
    display(){

        var angle=this.body.angle;
        var position=this.body.position;
        push();
        translate(pos.x,pos.y);
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

    
}