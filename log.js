class Log {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     this.image = loadImage("th.jpg");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      imageMode(CENTER)
    }
  };
