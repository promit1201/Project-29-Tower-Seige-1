class Ground{
constructor(){
    var goptions={
        isStatic:true
    }
this.ground=Bodies.rectangle(450, 390, 900, 20, goptions);
World.add(world, this.ground);
}

display(){

noStroke();
fill("blue");
rectMode(CENTER);
rect(this.ground.position.x, this.ground.position.y, 900, 20);

}

}