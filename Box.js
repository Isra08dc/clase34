class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.04,
        }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      world.add (world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode (CENTER);
        strokeWeight(4);
        stroke("red")
        fill ("5C74F6");
        rect (0,0,this.height, this.width);
        pop();
    }
};