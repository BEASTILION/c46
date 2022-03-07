var bg_img;
var bird,b_animation;
var form,game,canvas,witch_img,witch,cloud,cloud_img;
var witch;
function preload(){
//bg_img = loadImage("assets/bg.png")
ab_animation =loadAnimation("./assets/bird1.png","./assets/bird2.png","./assets/bird1.png","./assets/bird3.png","./assets/bird4.png","./assets/bird5.png","./assets/bird6.png","./assets/bird7.png","./assets/bird8.png")
bg_img = loadImage("./assets/bg.jpg")
witch_img = loadImage("./assets/ob1.png")
cloud_img = loadImage("./assets/cloud1.png")

}

function setup() {

  canvas = createCanvas(800,800)
    game = new Game()
    game.start()
    game.play()
}

function draw() {
 background(bg_img);  
 
// if(form.handleMousePressed()){
  
 // }
 drawSprites();

  
}