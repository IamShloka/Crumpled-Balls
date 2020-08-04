class Dustbin {
    constructor(){
    this. body1Sprite=createSprite(400+1000,675,200,20)
	this.body1Sprite.shapeColor="red"
	this.body2Sprite=createSprite(500+1000,620,20,100)
	this.body2Sprite.shapeColor="red"
	this.body3Sprite=createSprite(304+1000,620,20,100)
    this.body3Sprite.shapeColor="red"
    
    this.body1=Bodies.rectangle(400+1000,675,200,20,{isStatic:true})
	this.body2=Bodies.rectangle(500+1000,620,20,100,{isStatic:true})
	this.body3=Bodies.rectangle(304+1000,620,20,100,{isStatic:true})
	World.add(world,this.body1)
	World.add(world,this.body2)
	World.add(world,this.body3)

        

    }
    display(){
        push();
        this.body1Sprite.x=this.body1.position.x;
        this.body1Sprite.y=this.body1.position.y;
        this.body2Sprite.x=this.body2.position.x;
        this.body2Sprite.y=this.body2.position.y;
        this.body3Sprite.x=this.body3.position.x;
        this.body3Sprite.y=this.body3.position.y;
        

        pop();
    }
}