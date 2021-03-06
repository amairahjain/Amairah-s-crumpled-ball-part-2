class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);

      fill(255);

      fill("cyan");

      imageMode(CENTER);
      image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
  };  
}