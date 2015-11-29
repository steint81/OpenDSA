// Diagram used for examples
$(document).ready(function() {
  "use strict";
  var jsav = new JSAV("buffpooldgmCON", {animationMode: "none"});
  var arr = jsav.ds.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {layout: "vertical"});
  var buffer_pool = jsav.ds.array([1, 7, 5, 3, 8], {layout: "vertical", indexed: true, left: 600, top: 40});
  jsav.label("Secondary Storage (On Disk)", {left: 120, top: 300});
  jsav.label("Main Memory (in RAM)", {left: 550, top: 300});
  av.displayInit();
  av.recorded();
});
