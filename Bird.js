class Bird extends BaseClass {
  constructor(x,y){

    super(x,y,50,50);
    this.v=255;
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

   push () ;
    for(var i=0; i<this.trajectory.length; i++){
   this.v=this.v-1;
   tint (255, this.v);
   image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
    pop ();
  }
}
