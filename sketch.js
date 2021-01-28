var dog; 
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  dogImg = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);


      database = firebase.database();
   dog = createSprite(250,300,10,10);
   dog.addImage(dogImg);
   dog.scale = 0.2;

   foodStock = database.ref('Food');
   foodStock.on("value",readStock);


}


function draw() {  
  background(46,139,87);
   fill(255,255,254);
   stroke("black");
   text("Food Remaining: "+foodS,170,200);
   text("Note: Press UP_ARROW key to feed Drago Milk!", 130,10,300,20);


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    
  }
   

  

  drawSprites();
 }




 function readStock(data){
   foodS = data.val();
 }

 function writeStock(x){
   if(x<=0){
      x=0
   }else{
     x=x-1;
   }
   database.ref('/').update({
     Food:x
   })
 }

 




