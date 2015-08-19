window.onload = setupDom;


function setupDom(){

  var graphic = document.getElementsByClassName("gears")[0];
  var graphicDoc = graphic.contentDocument;
    
  var orangeGear = graphicDoc.getElementById("top-gear");
  var grayGear = graphicDoc.getElementById("bottom-gear");
  var bigGear = graphicDoc.getElementById("big-gear");
  
  TweenMax.to(bigGear, 3, {rotation:360, transformOrigin:"50% 50%"});
  TweenMax.to(orangeGear, 3, {rotation:-360, transformOrigin:"50% 50%"});
  TweenMax.to(grayGear, 3, {rotation:-360, transformOrigin:"50% 50%"});
  
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