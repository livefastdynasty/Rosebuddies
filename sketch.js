// GAY WITCHCRAFT BY TOMMY TING //

//level 1 sprites
var line01;
var isActive = false;
var rose01, rose02, rose03;
var bloomingose, bloomingrose01;
var blackRose, redRose, whiteRose, yellowRose, pinkRose, navyRose, blueRose

// level 2 sprites
var body1, body2, body3, body4, body5, stonehenge1, stonehenge2, stonehenge3, stonehenge4, stonehenge5, stonehenge6, stonehenge7;
var eyes;
var scribble;
var scribs;

//background
var bg;

// cursor settings
var gem;
var gemX, gemY;
var MARGIN = 40;
var gravity = .5;
var Sink = 20;
var jump = 15;

//bullets
var bullets = true;
var bulletsImage;

// health 
var maxHealth = 100;
var health = 100;
var healthdecrease = 1;
var healthBarWidth = 60;



function preload(){
  
scribble = loadAnimation("assets/scribble01.png", "assets/scribble02.png", "assets/scribble03.png", "assets/scribble04.png");
scribs = loadAnimation("assets/scribs01.png", "assets/scribs02.png", "assets/scribs03.png", "assets/scribs04.png", "assets/scribs05.png", "assets/scribs06.png", "assets/scribs07.png");
bloomingrose = loadAnimation("assets/bloomingrose01.png", "assets/bloomingrose02.png", "assets/bloomingrose03.png", "assets/bloomingrose04.png", "assets/bloomingrose05.png", "assets/bloomingrose06.png", "assets/bloomingrose07.png", "assets/bloomingrose08.png", "assets/bloomingrose09.png", "assets/bloomingrose10.png");


  //gem = loadAnimation("assets/jellygummie01.png", "assets/jellygummie02.png", "assets/jellygummie03.png", "assets/jellygummie04.png", "assets/jellygummie05.png", "assets/jellygummie06.png", "assets/jellygummie07.png", "assets/jellygummie08.png", "assets/jellygummie09.png", "assets/jellygummie10.png", "assets/jellygummie11.png")
bulletsImage = loadImage("assets/bullets01.png")
}

function setup() {
  bg = loadImage("assets/cave01.png");
  createCanvas(1500, 3000);
  
//level 1create the sprites
  
//floating eyes  
  eyes = new Group();
  bullets = new Group();
  
for(var i = 0; i<32; i++) {
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createEyes(3, px, py);
  }
  
//level 1 create the sprites
  blackRose = createSprite(450, 200);
  blackRose.addImage(loadImage("assets/blackrose.png"));
  
  yellowRose = createSprite(350, 400);
  yellowRose.addImage(loadImage("assets/yellowrose.png"));
  
  whiteRose = createSprite(450, 600);
  whiteRose.addImage(loadImage("assets/whiterose.png"));
  
  redRose = createSprite(1100, 200);
  redRose.addImage(loadImage("assets/redrose.png"));
  
  navyRose = createSprite(1200, 400);
  navyRose.addImage(loadImage("assets/navyrose.png"));
  
  blueRose = createSprite(1100, 600);
  blueRose.addImage(loadImage("assets/lightbluerose.png"));
  
//level 2 create the sprites
  stonehenge1 = createSprite(300, 1300);
  stonehenge1.addImage(loadImage("assets/stonehenge01.png"));
  
  stonehenge2 = createSprite(500, 1100);
  stonehenge2.addImage(loadImage("assets/stonehenge02.png"));
  
  stonehenge3 = createSprite(800, 1100);
  stonehenge3.addImage(loadImage("assets/stonehenge03.png"));
  
  stonehenge4 = createSprite(1100, 1200);
  stonehenge4.addImage(loadImage("assets/stonehenge04.png"));
  
  stonehenge5 = createSprite(480, 1600);
  stonehenge5.addImage(loadImage("assets/stonehenge06.png"));
  
  stonehenge6 = createSprite(750, 1500);
  stonehenge6.addImage(loadImage("assets/stonehenge05.png"));
  
  stonehenge7 = createSprite(300, 1500);
  stonehenge7.addImage(loadImage("assets/stonehenge07.png"));
  
  body1 = createSprite(100, 1500);
  body1.addImage("normal", loadImage("assets/body01.png"));
 
  
  body2 = createSprite(900, 1500);
  body2.addImage("normal", loadImage("assets/body02.png"));
  
  
  body3 = createSprite(600, 1500);
  body3.addImage("normal", loadImage("assets/body03.png"));
  
  
  body4 = createSprite(650, 1500);
  body4.addImage("normal", loadImage("assets/body04.png"));
  
  
  body5 = createSprite(1150, 1500);
  body5.addImage("normal", loadImage("assets/body05.png"));
  
  
  line01 = createSprite(750, 800);
  line01.addImage(loadImage("assets/line01.png"))
  
  //avatar
  gem = createSprite(600, 200);
  gem.addAnimation("assets/jellygummie01.png", "assets/jellygummie02.png", "assets/jellygummie03.png", "assets/jellygummie04.png", "assets/jellygummie05.png", "assets/jellygummie06.png", "assets/jellygummie07.png", "assets/jellygummie08.png", "assets/jellygummie09.png", "assets/jellygummie10.png", "assets/jellygummie11.png");
  //gem.addImage("normal", loadImage("assets/gem.png"));
  //gem.addImage("eye", loadImage("assets/eye01.png"));
  
  gem.setCollider("circle", 0,0, 20);
  gemX = width/4;
  gemY = height/5;
  
}

function draw() {

  //background
  background(bg);  
    
  //set avatar physics
  gem.velocity.y += gravity;
  
  //set canvas boundary for sprites so they dont disappear once they leave the canvas
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }
  
  textSize(60);
  textStyle(BOLD)
  fill(50);
  text("I OUTLAWS", 50, 50, 1000, 80);
  
  textSize(24);
  textStyle(BOLD)
  fill(50);
  text("Collect the Roses", 50, 125, 1000, 80);
  
  animation(scribble, 90, 225);
  animation(scribs, 1300, 100);

  if(gem.overlap(body1) || isActive){
    
  textSize(24);
  fill(50);
  text("Picture a land where you're free, like really free.", 500, 50, 600, 90) &&
  text("Humans are on the brink of extinction, water levels have rise dramatically due to natural diasters and mega dam projects.", 500, 100, 600, 90) &&
  text("Floodings everywhere.", 500, 200, 600, 90) &&
  text("Since you do not reproduce,", 500, 250, 600, 90) &&
  text("YOU ARE AN OUTLAW", 500, 300, 600, 90) &&
  text("You were born even though you were not supposed to, they should have caught it during your mother's pregnancy.", 500, 350, 600, 90) &&
  text("There is a place that you have to go to, you need to get there to survive, but the only way is down, down to the bottom of the sea.", 500, 450, 600, 90) &&
  text("They have killed you before and they will kill you again.", 500, 550, 600, 90) &&
  animation(bloomingrose, 90, 250);
  isActive = true
  }
  
  if(gem.overlap(body1) || isActive){
 animation(bloomingrose, 1450, 300);
    isActive = true
  }
  

  //LEVEL  set the sprites to change animation when overlapped on the correct object
  
  textSize(60);
  textStyle(BOLD)
  fill(50);
  text("II MAGICK", 50, 925, 1000, 80);
  
  textSize(24);
  textStyle(BOLD)
  fill(50);
  text("Match the Roses", 50, 1000, 1000, 80);
  
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
  
   
  ///LEVEL THREE THE MAZE
      
  textSize(60);
  textStyle(BOLD)
  fill(50);
  text("III Sub Rosa", 50, 1800, 1000, 80);
  
  textSize(24);
  textStyle(BOLD)
  fill(50);
  text("Find the Rose", 50, 1875, 1000, 80);
  
                                                                          
  //displacer so gem can move the bodies around
  
  gem.displace(body2);
  gem.displace(body3);
  gem.displace(body4);
  gem.displace(body5);
  eyes.displace(gem);
  
  if(keyCode == (88))
    {
    bullet = createSprite(gem.position.x, gem.position.y);
    bullet.addImage(bulletsImage);
    bullet.setSpeed(10+gem.getSpeed(), gem.rotation);
    bullet.life = 30;
    bullets.add(bullet);
  
  
    }
  
  //draw the sprites
  drawSprites();
  

  if(gem.collide(line01)) {
    gem.velocity.y = 0;
  }
  
  
  //drawHealthBar();
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
