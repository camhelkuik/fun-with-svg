window.onload = setupDom;


function setupDom(){

  var gear = document.getElementsByClassName("gears")[0];
  var gearDoc = gear.contentDocument;
  
  var robot = document.getElementsByClassName("robot")[0];
  var robotDoc = robot.contentDocument;
  
  var tree = document.getElementsByClassName("tree")[0];
  var treeDoc = tree.contentDocument;
  
  //gear variables  
  var orangeGear = gearDoc.getElementById("top-gear");
  var grayGear = gearDoc.getElementById("bottom-gear");
  var bigGear = gearDoc.getElementById("big-gear");
  
  //robot variables
  var winder = robotDoc.getElementById("winder");
  var dial = robotDoc.getElementById("dial");
  
  //tree variables
  var allLeaves = treeDoc.getElementById("all-leaves");
  var singleLeaf = treeDoc.getElementById("single-leaf");
    
  //gear animation
  TweenMax.from(bigGear, 3, {rotation:360, transformOrigin:"50% 50%", repeat: 1, yoyo: true});  
  TweenMax.from(orangeGear, 3, {rotation:-360, transformOrigin:"50% 50%", repeat: 1, yoyo: true});
  TweenMax.from(grayGear, 3, {rotation:-360, transformOrigin:"50% 50%", repeat: 1, yoyo: true});
  
  //robot animation
  TweenMax.from(robot, 4, {x: 400});
  TweenMax.from(winder, 4, {rotationY: 360, transformOrigin: "50% 50%"});
  TweenMax.from(dial, 2, {rotation: 120, transformOrigin: "80% 80%", delay: 3});
  
  //tree animation
  TweenMax.allTo(manager.allLeaves, 1, {tint:0x000000});
}


// function setupDom(){
//   changeAllTheSources();
//   var graphic = Document.getElementsByClassName('man-driver')[0];
//   var graphicDoc = graphic.contentDocument;
//
//   var arm = graphicDoc.getElementById("steeting-wheel_x2f_hand");
//   var car = graphicDoc.getElementById("car");
//   console.log(car);
//
//   TweenMax.from(arm, 1, {tranformOrigin: '100% 100%', rotation: -45});
//   TweenMax.to(arm, .5, {transformOrigin: '50% 50%', scale: 1.2, delay: .9});
//
//   TweenMax.from(car, 1, {x: 200});
// }