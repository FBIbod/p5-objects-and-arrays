var allMyBubbles = [];        
var numOfBubbles = prompt("How many blood cells do you want to see? ");
var sizeOfBulle = 50; 

function setup(){
    createCanvas(600,400);
    for(var i = 0; i < numOfBubbles; i++){
    allMyBubbles[i] = new Bubble(random(0,600), random(0,400));
    }
}

function draw(){
     backgorund(0);
     for(var i= 0; i <allMyBubbles.length; i++){
     allMyBubbles[i].display();
     allMyBubbles[i].mvoe();
     }
}
    

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(255, 0, 50,100);
    this.display= function(){
        stroke(255);
        ellipse(this.x, this.y, sizeOfBulle,sizeOfBulle)
    }
    this.move = function (){
     this.x = this.x + random (-1,1);
     this.y = this.y + random (-1,1);
     }
    
}