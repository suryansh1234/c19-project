class Paper{
constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        density:1.2,
        friction:0.5,
    }
    this.body=Bodies.circle(x,y,radius,options);

    this.radius=radius;
    this.image = loadImage("sprites/paper.png");
    World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    
    
    imageMode(CENTER)
    //ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    
   
    
    
  }

}