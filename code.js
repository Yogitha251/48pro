var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ba73e03f-9606-400e-965d-81e66e867884","c2e32ac8-a3d0-4844-8366-43a21c979bd4","019ed998-518e-4a10-aa57-e3f4f7ffc79a","1d7c0c37-18e4-45f7-b6e1-ab8a75721e26","cd8d9baa-43a8-4ece-a291-863e58e91b4c","39653a01-a6d4-4be9-bc1b-54f7354f8881","f8cca33e-7246-4a37-ba0b-5d00ec427a0f","7194148f-964b-4a70-b5e3-bc1c8a6fd82b","abf6e332-91ff-44e1-88f9-486d73a4ae9a","89a721f9-2938-495c-a7a3-e8c4eab04b9c","cd548aaf-71bd-4a11-a536-7dfb843dc3b2","b6ac2030-9d9c-4011-b430-bf1b58514425","d0b82514-9a9e-42f7-ac9c-a9eb7636242d","055cc14f-79c2-49af-b4a0-02238bdd1c33","02cb9770-462e-4243-8f18-3b1472e77891","156e1206-2a31-4cf6-99a1-1c3e8b914e22","7806e565-c981-4bab-8725-bdb6a4794b9e"],"propsByKey":{"ba73e03f-9606-400e-965d-81e66e867884":{"name":"rainbow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2JbYx3k.w.ZsY_IjFwTPssGZWs1Pv25./category_backgrounds/background_rainbow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"2JbYx3k.w.ZsY_IjFwTPssGZWs1Pv25.","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2JbYx3k.w.ZsY_IjFwTPssGZWs1Pv25./category_backgrounds/background_rainbow.png"},"c2e32ac8-a3d0-4844-8366-43a21c979bd4":{"name":"bird1","sourceUrl":null,"frameSize":{"x":98,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"_7Rg6d0CAhSUMD6vvQ345IePf7l._U0T","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":85},"rootRelativePath":"assets/c2e32ac8-a3d0-4844-8366-43a21c979bd4.png"},"019ed998-518e-4a10-aa57-e3f4f7ffc79a":{"name":"pig1","sourceUrl":null,"frameSize":{"x":109,"y":129},"frameCount":1,"looping":true,"frameDelay":12,"version":"GRjbGa6jv3Zf_lDnviV2c4FcbQq1inkC","loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":129},"rootRelativePath":"assets/019ed998-518e-4a10-aa57-e3f4f7ffc79a.png"},"1d7c0c37-18e4-45f7-b6e1-ab8a75721e26":{"name":"bird2","sourceUrl":null,"frameSize":{"x":98,"y":86},"frameCount":1,"looping":true,"frameDelay":12,"version":"0vVayjHC5hqgdPszL.ScXmlLYTspP3yY","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":86},"rootRelativePath":"assets/1d7c0c37-18e4-45f7-b6e1-ab8a75721e26.png"},"cd8d9baa-43a8-4ece-a291-863e58e91b4c":{"name":"pig2","sourceUrl":null,"frameSize":{"x":95,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"EemAoOdAxO0TPoiOYLpbsgssvv3oeS87","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":94},"rootRelativePath":"assets/cd8d9baa-43a8-4ece-a291-863e58e91b4c.png"},"39653a01-a6d4-4be9-bc1b-54f7354f8881":{"name":"bird3","sourceUrl":null,"frameSize":{"x":114,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"FMcQh6e5Hh9AljLHLGOwVuys4Z3N2hvt","loadedFromSource":true,"saved":true,"sourceSize":{"x":114,"y":109},"rootRelativePath":"assets/39653a01-a6d4-4be9-bc1b-54f7354f8881.png"},"f8cca33e-7246-4a37-ba0b-5d00ec427a0f":{"name":"pig3","sourceUrl":null,"frameSize":{"x":84,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"cR7ziRTnOSHhHL8jHwINVOco4Bf5Q.6D","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":73},"rootRelativePath":"assets/f8cca33e-7246-4a37-ba0b-5d00ec427a0f.png"},"7194148f-964b-4a70-b5e3-bc1c8a6fd82b":{"name":"bird4","sourceUrl":null,"frameSize":{"x":117,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"yJQPfD8uxu7Ws4.RMdx3RjnQqe_5GVUl","loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":90},"rootRelativePath":"assets/7194148f-964b-4a70-b5e3-bc1c8a6fd82b.png"},"abf6e332-91ff-44e1-88f9-486d73a4ae9a":{"name":"pig4","sourceUrl":null,"frameSize":{"x":86,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"h6sTqodBJKe1Z2YYCFihgM78IFl2KtvG","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":81},"rootRelativePath":"assets/abf6e332-91ff-44e1-88f9-486d73a4ae9a.png"},"89a721f9-2938-495c-a7a3-e8c4eab04b9c":{"name":"bird5","sourceUrl":null,"frameSize":{"x":101,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"CKnZJeimculO52wWBezm9ZUMgAA.T0xc","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":98},"rootRelativePath":"assets/89a721f9-2938-495c-a7a3-e8c4eab04b9c.png"},"cd548aaf-71bd-4a11-a536-7dfb843dc3b2":{"name":"pig5","sourceUrl":null,"frameSize":{"x":41,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"csNA_vtdueHZgee4dYleubHzCqcFzQa0","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":42},"rootRelativePath":"assets/cd548aaf-71bd-4a11-a536-7dfb843dc3b2.png"},"b6ac2030-9d9c-4011-b430-bf1b58514425":{"name":"bird6","sourceUrl":null,"frameSize":{"x":68,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"S1_RPjn2vD8slWu8mVkEDAY45cf.XWg0","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":76},"rootRelativePath":"assets/b6ac2030-9d9c-4011-b430-bf1b58514425.png"},"d0b82514-9a9e-42f7-ac9c-a9eb7636242d":{"name":"abstract_31_1","sourceUrl":"assets/api/v1/animation-library/gamelab/G6zNSPyV_J5FTDqy5pnctbs5uLBuNMUv/category_backgrounds/abstract_31.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"G6zNSPyV_J5FTDqy5pnctbs5uLBuNMUv","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/G6zNSPyV_J5FTDqy5pnctbs5uLBuNMUv/category_backgrounds/abstract_31.png"},"055cc14f-79c2-49af-b4a0-02238bdd1c33":{"name":"removeed gun.png_1","sourceUrl":"assets/v3/animations/4lQ8jCQX-i5ZBjnWdiH8N0qgl_UVDUpxwEQh_5caGEA/055cc14f-79c2-49af-b4a0-02238bdd1c33.png","frameSize":{"x":453,"y":276},"frameCount":1,"looping":true,"frameDelay":4,"version":"x0QjwUOn.bxI4a4CmWOUYqZakm06Y.nU","loadedFromSource":true,"saved":true,"sourceSize":{"x":453,"y":276},"rootRelativePath":"assets/v3/animations/4lQ8jCQX-i5ZBjnWdiH8N0qgl_UVDUpxwEQh_5caGEA/055cc14f-79c2-49af-b4a0-02238bdd1c33.png"},"02cb9770-462e-4243-8f18-3b1472e77891":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"156e1206-2a31-4cf6-99a1-1c3e8b914e22":{"name":"gun3-removebg.png_1","sourceUrl":"assets/v3/animations/0XshQeK0ADHo8a1KBOEgklaxUPHehNiHg-TZObNSGfQ/156e1206-2a31-4cf6-99a1-1c3e8b914e22.png","frameSize":{"x":241,"y":180},"frameCount":1,"looping":true,"frameDelay":4,"version":"ARgpw2qqUQVbytrIyInUyvG4pN..YSPv","loadedFromSource":true,"saved":true,"sourceSize":{"x":241,"y":180},"rootRelativePath":"assets/v3/animations/0XshQeK0ADHo8a1KBOEgklaxUPHehNiHg-TZObNSGfQ/156e1206-2a31-4cf6-99a1-1c3e8b914e22.png"},"7806e565-c981-4bab-8725-bdb6a4794b9e":{"name":"gun22-removebg.png_1","sourceUrl":"assets/v3/animations/0XshQeK0ADHo8a1KBOEgklaxUPHehNiHg-TZObNSGfQ/7806e565-c981-4bab-8725-bdb6a4794b9e.png","frameSize":{"x":292,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"GJz9S8dtwdr96ZKjPM5_HvJhm_uNJeKV","loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":300},"rootRelativePath":"assets/v3/animations/0XshQeK0ADHo8a1KBOEgklaxUPHehNiHg-TZObNSGfQ/7806e565-c981-4bab-8725-bdb6a4794b9e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var sback= createSprite(200,200,400,400);
var gun=createSprite(200,200,10,10); 
gun.setAnimation("removeed gun.png_1");
gun.scale=0.3;
//gun.visible=false;
var gun2=createSprite(200,110,10,10);
gun2.visible=false;
var gun3=createSprite(310,120,10,10);
gun3.visible=false;

//var ground= createSprite(200,320,400,10);
//ground.visible=true;

 //var birds= createSprite(390,300,5,5);
   // birds.setCollider("circle",0,0,20 );
    //birds.debug=true;


var start=0;
var play=1;
var end=2;
var gamestate=start;
var score=0;
var birdgroup = createGroup();
var pigsgroup = createGroup();

function draw() {
  background("white",World.width,World.height);
  
  if(pigsgroup.isTouching(gun)){
    playSound("assets/category_explosion/8bit_explosion.mp3");
    score=score+10;
    pigsgroup.destroyEach();
    
  }
  
  if(birdgroup.isTouching(gun)){
    playSound("assets/category_animals/cartoon_animal_chirp_1.mp3");
    gamestate=end;
  }
  
  if(keyDown("r")){
    
    gamestate=start;
  }
 
 drawSprites();
 textSize(30);
  text("score:"+score,110,40);


if (keyDown("space")){
 //  sback.setAnimation("rainbow_1");
 
  gamestate=play;
}

if(gamestate===start){
  gun.visible=true;
  Start();
}

if (gamestate===play){
   on();
  //var ground=createSprite(200,200,400,400);
  //ground.setAnimation("rainbow_1");
 sback.setAnimation("rainbow_1");
  
gun.visible=true;
gun.x=World.mouseX;
gun.y=World.mouseY;
  spawnBirds();
spawnPigs();
/*if(mousePressedOver(pigsgroup)){
  playSound("assets/category_explosion/8bit_explosion.mp3");
  //pigsgroup.destroyEach();
}*/
}
 if (gamestate===end){
  // var ending=createSprite(200,200,1000,1000);
   sback.setAnimation("cave_1");
   textSize(50);
   text("GAME OVER!!",30,200);
   textSize(30);
   text("press r to replay",100,110);
   gun.visible=false;
  // gun.destroy();
   birdgroup.velocityX=0;
   pigsgroup.velocityX=0;
   
 }
}
 
function spawnBirds(){
  if(World.frameCount%60===0){
    var birds= createSprite(0,0,5,5);
    birds.setCollider("circle",0,0,20 );
   // birds.debug=true;
    //birds.velocityY=7;
    birds.velocityX=7;
  
  var rand= randomNumber(1,6);
 birds.setAnimation("bird"+rand);
 var num=random(50,350);
 birds.y=num;
birdgroup.add(birds);
console.log(birds);
 birds.lfetime=100;
  }
 
   
}

function spawnPigs (){
 if(World.frameCount%120===0){
  var pigs=createSprite(400,200,5,5);
  pigs.setCollider("circle",0,0,20 );
   // pigs.debug=true;
  pigs.velocityX=-7;
  var num=randomNumber(1,5);
  pigs.setAnimation("pig"+num);
  var rand=random(50,350);
 rand.y=num;
  pigsgroup.add(pigs);
  pigs.lifetime=100;
}
}

function on(){
  //var ground=createSprite(200,200,400,600);
//ground.setAnimation("rainbow_1");

}

function Start(){
   sback.setAnimation("abstract_31_1");
 // birds.velocityX=birds.velocityX+0.2;
 // birds.velocityY=birds.velocityY+0.2;  
var gun2=createSprite(200,110,10,10);
gun2.setAnimation("gun22-removebg.png_1");
gun2.scale=0.3;
gun2.visible=false;

var gun3=createSprite(310,120,10,10);
gun3.setAnimation("gun3-removebg.png_1");
gun3.scale=0.4;
gun3.visible=false;

gun.x=200;
gun.y=100;

if(keyDown("1")){
  gun.setAnimation("removeed gun.png_1");
  gun2.visible=false;
  gun3.visible=false;
}
  if (keyDown("2")){
    gun.setAnimation("gun22-removebg.png_1");
    gun3.visible=false;
    
  }
  if(keyDown("3")){
    gun.setAnimation("gun3-removebg.png_1");
    gun2.visible=false;
  }

fill("black");
textSize(25);
text("Welcome to the shooting game ",10,200);
fill("black");
textSize(25);
text(" here are the instructions: ",10,220);
fill("black");
textSize(25);
text("press on the cruel pigs to shoot  ",10,240);
fill("black");
textSize(25);
text("with gun beaware do not  ",10,260);
fill("black");
textSize(25);
text(" press any of the good bird",10,280);
fill("black");
textSize(25);
text("you DO SO YOU lose.....ENJOY!!",10,300);
fill("black");
textSize(24);
text("to choose gun 1 or 2 or 3 :",80,60);
fill("black");
textSize(24);
text("click 1 or 2 or 3",100,170);

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
