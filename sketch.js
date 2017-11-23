// GAY WITCHCRAFT BY TOMMY TING //

// sprites
var body1, body2, body3, body4, body5, gem, stonehenge1, stonehenge2, stonehenge3, stonehenge4, stonehenge5, stonehenge6, stonehenge7, eye;
var eyes
var scribble
var scribs
var line01

//background
var bg

// cursor settings
var gemX, gemY
var MARGIN = 40
var gravity = .5;
var Sink = 20;
var jump = 15

// health 
var maxHealth = 100;
var health = 100;
var healthdecrease = 1;
var healthBarWidth = 60;

var isActive = false;



function preload(){
  
scribble = loadAnimation("assets/scribble01.png", "assets/scribble02.png", "assets/scribble03.png", "assets/scribble04.png")
scribs = loadAnimation("assets/scribs01.png", "assets/scribs02.png", "assets/scribs03.png", "assets/scribs04.png", "assets/scribs05.png", "assets/scribs06.png", "assets/scribs07.png")  
}

function setup() {
  bg = loadImage("assets/cave01.png");
  createCanvas(1500, 3000);
  
  //create the sprites
  
   
  eyes = new Group();
  
for(var i = 0; i<32; i++) {
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createEyes(3, px, py);
  }

  stonehenge1 = createSprite(300, 150);
  stonehenge1.addImage(loadImage("assets/stonehenge01.png"))
  
  stonehenge2 = createSprite(550, 100);
  stonehenge2.addImage(loadImage("assets/stonehenge02.png"))
  
  stonehenge3 = createSprite(800, 120);
  stonehenge3.addImage(loadImage("assets/stonehenge03.png"))
  
  stonehenge4 = createSprite(1050, 250);
  stonehenge4.addImage(loadImage("assets/stonehenge04.png"))
  
  stonehenge5 = createSprite(480, 300);
  stonehenge5.addImage(loadImage("assets/stonehenge06.png"))
  
  stonehenge6 = createSprite(750, 350);
  stonehenge6.addImage(loadImage("assets/stonehenge05.png"))
  
  stonehenge7 = createSprite(300, 420);
  stonehenge7.addImage(loadImage("assets/stonehenge07.png"))
  
  body1 = createSprite(100, 370);
  body1.addImage("normal", loadImage("assets/body01.png"));
  body1.addImage("poppers", loadImage("assets/poppers.png"));
  
  body2 = createSprite(900, 450);
  body2.addImage("normal", loadImage("assets/body02.png"));
  body2.addImage("jockstrap", loadImage("assets/jockstrap.png"));
  
  body3 = createSprite(600, 450);
  body3.addImage("normal", loadImage("assets/body03.png"));
  body3.addImage("collar", loadImage("assets/collar.png"));
  
  body4 = createSprite(650, 500);
  body4.addImage("normal", loadImage("assets/body04.png"));
  body4.addImage("truvada", loadImage("assets/truvada.png"));
  
  body5 = createSprite(1150, 400);
  body5.addImage("normal", loadImage("assets/body05.png"));
  body5.addImage("jockstrap", loadImage("assets/urinal.png"));
  
  line01 = createSprite(750,800);
  line01.addImage(loadImage("assets/line01.png"))
  
  gem = createSprite(600, 200);
  //gem.maxSpeed = 4;
  //gem.friction = .98;
  //gem.setCollider("circle", 0,0, 20);
  
  
  gem.addImage("normal", loadImage("assets/gem.png"));
  gem.addImage("eye", loadImage("assets/eye01.png"));
  
  gem.setCollider("circle", 0,0, 20);
  gemX = width/4;
  gemY = height/5;
}

function draw() {

  background(bg);  
  
  //gem.velocity.y= -0.5;
  
   drawHealthBar();
  gem.velocity.y += gravity;
  
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  
  //set the sprites to change animation when overlapped on the correct object
  if(body1.overlap(stonehenge4))
    body1.changeAnimation("poppers");
  else
    body1.changeAnimation("normal");
  
   if(body2.overlap(stonehenge1))
    body2.changeAnimation("jockstrap");
  else
    body2.changeAnimation("normal");
  
  if(body3.overlap(stonehenge2))
    body3.changeAnimation("collar");
  else
    body3.changeAnimation("normal");
  
  if(body4.overlap(stonehenge3))
    body4.changeAnimation("truvada");
  else
    body4.changeAnimation("normal");
  
  if(body5.overlap(stonehenge5))
    body5.changeAnimation("jockstrap");
  else
    body5.changeAnimation("normal");
  
//when all sprites make the correct overlap then load image of Dionysus
if ((body1.overlap(stonehenge4)) && (body2.overlap(stonehenge1)) && (body3.overlap(stonehenge2)) && (body4.overlap(stonehenge3)) && (body5.overlap(stonehenge5)))
    {
  dionysus = createSprite(640,290)
  dionysus.addAnimation("normal", "assets/dionysus01.png", "assets/dionysus02.png", "assets/dionysus03.png");  
    }
  
                                                                          
  //  displacer so gem can move the bodies around
  
  gem.displace(body2);
  gem.displace(body3);
  gem.displace(body4);
  gem.displace(body5);
  eyes.displace(gem);
  
  //draw the sprites
  drawSprites();
  
 animation(scribble, 90, 250);
 animation(scribs, 1450, 300);
  
  if(gem.collide(line01)) {
    gem.velocity.y = 0;
    }
  
 s = "OUTLAWS";
  textSize(60);
  textStyle(BOLD)
  fill(50);
  text(s, 400, 500, 70, 80);

   if(gem.overlap(body1) || isActive){
  textSize(16);
  fill(50);
  text("Picture a land where you're free - really free.", 70, 300, 250, 90);
  isActive = true
   }
}

//use WASD keys to move Gem

function keyPressed() {
  if (keyCode == (68)) 
    gem.setSpeed(1.5, 0);
  if (keyCode == (65)) 
    gem.setSpeed(1.5, 180);
  if (keyCode == (83))
    gem.setSpeed(1.5, 90);
    if (keyCode == (87))
	gem.velocity.y = -jump;

  }

function keyReleased(){
  if (keyCode == (68))
    gem.setSpeed (0,0);
   if (keyCode == (65))
    gem.setSpeed (0,0);
  if (keyCode == (83))
    gem.setSpeed (0,0);
  if (keyCode == (87))
    gem.setSpeed(0,0);
}

function createEyes(type, x, y) {
  var a = createSprite(x, y);
  var img  = loadImage("assets/eye0"+floor(random(1,3))+".png");
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;
  //a.debug = true;
  a.type = type;
  
  if(type == 2)
    a.scale = .6;
  if(type == 1)
    a.scale = .3;
  
  a.mass = 2+a.scale;
  a.setCollider("circle", 0, 0, 50);
  eyes.add(a);
  return a;
}

function drawHealthBar() {
  noStroke();
  fill(100, 100, 100);
  rectMode(CORNER);
  rect(gem.position.x -(healthBarWidth/2), gem.position.y - 60, healthBarWidth, 5);
  if (health > 60) {
    fill(46, 204, 113);
  } else if (health > 30) {
    fill(230, 126, 34);
  } else {
    fill(231, 76, 60);
  }
  rectMode(CORNER);
  rect(gem.position.x -(healthBarWidth/2), gem.position.y - 60, healthBarWidth*(health/maxHealth), 5);
  
}

//function returnToTop() {
  
//if(gem.overlap(eyes))
   // gem.changeAnimation("eye");
 // else
    //gem.changeAnimation("normal");
  
//}
