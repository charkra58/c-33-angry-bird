class Boggie{
  constructor (x,y,width,height){
      var options ={
          isStatic= flase
     
}
this.body =Bodies.rectangle (x,y,width,height,options)
this.width = width;
this.height =height;
this.image =loadImage("images/coach.png")
World .add(world,this.body)
Mattter .body.setMars(this.body,this.body.Mars*5)

}
display()
{
    imageMode(CENTER)
    image (this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    
}
}