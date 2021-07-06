var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var sofia = createSprite(20,25,18,18);
var cardboard = createSprite(10, 70,100,20);
var cardboard1 = createSprite(100, 3,20,200);
var cardboard2 = createSprite(150, 19,100,20);
var cardboard3 = createSprite(78, 135,100,20);
var cardboard4 = createSprite(164, 130,20,90);
var cardboard5 = createSprite(330, 50,100,20);
var cardboard6 = createSprite(249, 70,20,90);
var cardboard7 = createSprite(246, 142,100,20);
var cardboard8 = createSprite(348, 130,20,90);
var cardboard9 = createSprite(348, 198,140,20);
var cardboard10 = createSprite(352, 251,100,20);
var cardboard11 = createSprite(300, 276,20,90);
var cardboard12 = createSprite(240, 251,20,120);
var cardboard13 = createSprite(201, 299,100,20);
var cardboard14 = createSprite(176, 353,20,90);
var cardboard15 = createSprite(161, 201,100,20);
var cardboard16 = createSprite(116, 297,20,90);
var cardboard17= createSprite(268, 396,100,20);
var cardboard18 = createSprite(340, 390,20,100);
var cardboard19 = createSprite(3, 232,100,20);
var  cardboard20 = createSprite(54, 228,20,110);
var cardboard21 = createSprite(79, 374,20,150);
var endline = createSprite(393, 352,20,90);

sofia.shapeColor="orange"
cardboard.shapeColor="brown"
cardboard1.shapeColor="brown"
cardboard2.shapeColor="brown"
cardboard3.shapeColor="brown"
cardboard4.shapeColor="brown"
cardboard5.shapeColor="brown"
cardboard6.shapeColor="brown"
cardboard7.shapeColor="brown"
cardboard8.shapeColor="brown"
cardboard9.shapeColor="brown"
cardboard10.shapeColor="brown"
cardboard11.shapeColor="brown"
cardboard12.shapeColor="brown"
cardboard13.shapeColor="brown"
cardboard14.shapeColor="brown"
cardboard15.shapeColor="brown"
cardboard16.shapeColor="brown"
cardboard17.shapeColor="brown"
cardboard18.shapeColor="brown"
cardboard18.shapeColor="brown"
cardboard19.shapeColor="brown"
cardboard20.shapeColor="brown"
cardboard21.shapeColor="brown"
endline.shapeColor="yellow"


function draw() {
createEdgeSprites();
  
  background("blue")
   if (keyDown("right")) {
    sofia.x=sofia.x+5;
  }
  if (keyDown("left")) {
    sofia.x=sofia.x-5;
  }
  
if (keyDown("DOWN_ARROW")) {
 sofia.y=sofia.y+5;
 
}
if (keyDown(UP_ARROW)) {
  sofia.y=sofia.y-5
}
if (sofia.isTouching(cardboard)) {
 sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard1)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard2)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard3)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard4)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard5)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard6)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard7)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard8)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard9)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard10)) {
 sofia.x=20
 sofia.y=25 
}
if (sofia.isTouching(cardboard11)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard12)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard13)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard14)) {
 sofia.x=20
 sofia.y=25 
}
if (sofia.isTouching(cardboard15)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard16)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard17)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard18)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard19)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard20)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(cardboard21)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(edges)) {
  sofia.x=20
 sofia.y=25
}
if (sofia.isTouching(endline)) {
  text=("YUUUU WINNN")
}

 









drawSprites();

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
