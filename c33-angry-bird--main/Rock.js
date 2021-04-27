class Rock{
    constructor (x,y,width,height){
        var options ={
            isStatic=flase
       
  }
  this.body =Bodies.rectangle (x,y,width,height,options)
  this.width = width;
  this.height =height;
  this.image =loadImage("images/rock1.png")
  World .add(world,this.body)
  
  }
  display(){
      var pos =this.body.position
      imageMode(CENTER)
      Fill ("black")
      stroke ("grey")
      image (this.image,pos.x,pos.y,this.width,this.height)
      
  }
  }