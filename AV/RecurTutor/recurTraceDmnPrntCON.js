// Visualization of Domino Effect to Print a sequence of integers
$(document).ready(function () {
  "use strict";
  var av_name ="recurTraceDmnPrntCON";
  var config = ODSA.UTILS.loadConfig({"av_name": av_name}),
      interpret = config.interpreter,       // get the interpreter
      code = config.code;                   // get the code object
  var av = new JSAV(av_name);
  
  var rect = av.g.rect(100, 30, 50, 90).css({"fill": "grey"});
  var rect1 = av.g.rect(200, 30, 50, 90).css({"fill": "grey"});
  var rect2 = av.g.rect(300, 30, 50, 90).css({"fill": "grey"});
   
  var dots1 = av.g.circle(405, 75, 2);
  var dots2 = av.g.circle(455, 75, 2);
  var dots3 = av.g.circle(505, 75, 2);
  var dots4 = av.g.circle(555, 75, 2);

  var rect4 = av.g.rect(600, 30, 50, 90).css({"fill": "grey"});
  var rect5 = av.g.rect(700, 30, 50, 90).css({"fill": "grey"});

  av.umsg(interpret("av_c1"));
  
  var  pseudo = av.code(code);
  av.displayInit();
  av.step();
  av.umsg(interpret("av_c2"));

  
  rect.hide();
  var rect6 = av.g.rect(125, 30, 50, 90).css({"fill": "lightgray"});
  rect6.rotate(55);
  av.label("1",  {"top": "20px", "left": "120px"}).css({'font-size': '15px', "text-align": "center"});
  pseudo.highlight(3);
  
  av.step();


  av.umsg(interpret("av_c3"));
  pseudo.unhighlight(3);
  pseudo.highlight(5);
  av.step();
  
  av.umsg(interpret("av_c4"))
  pseudo.unhighlight(5);
  pseudo.highlight(6);
  pseudo.unhighlight(3);
  
  rect1.hide();
  var rect7 = av.g.rect(225, 30, 50, 90).css({"fill": "lightgray"});
  rect7.rotate(55);
  av.label("2",  {"top": "20px", "left": "220px"}).css({'font-size': '15px', "text-align": "center"});

  rect2.hide();
  var rect8 = av.g.rect(325, 30, 50, 90).css({"fill": "lightgray"});
  rect8.rotate(55);
  av.label("3",  {"top": "20px", "left": "320px"}).css({'font-size': '15px', "text-align": "center"});
  

  rect4.hide();
  var rect9 = av.g.rect(625, 30, 50, 90).css({"fill": "lightgray"});
  rect9.rotate(55);
  av.label("N-1",  {"top": "20px", "left": "620px"}).css({'font-size': '15px', "text-align": "center"});

  rect5.hide();
  var rect10 = av.g.rect(725, 30, 50, 90).css({"fill": "lightgray"});
  rect10.rotate(55);
  av.label("N",  {"top": "20px", "left": "720px"}).css({'font-size': '15px', "text-align": "center"});

  av.recorded();
});