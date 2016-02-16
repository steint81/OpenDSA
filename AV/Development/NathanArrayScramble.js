"use strict";

$(document).ready(function () {


    JSAV.init();

                  var av = new JSAV("container");
                  var theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                  var arr = av.ds.array(theArray, {indexed: true});
                  av.umsg("Start array");
                  // Note: av.displayInit() will not affect the number of slides.
                  // All that it will do is affect what you get to see on the
                  // initial slide.
                  av.displayInit();
                  // We are now starting a new slide (#2)
                  for (var i = 0;i < 10;i++)
                  {
                  var first = Math.floor((Math.random() * 10));
                  var second = Math.floor((Math.random() * 10));
                  av.umsg("swap " + first + " with " + second);
                  arr.swap(first,second);
                  av.step();
                  }
                  // We are now starting a new slide (#3)
                  av.recorded();
                  // If you add av.umsg after av.recorded, it will add new slides in
                  // ways that you probably do not expect and probably cannot
                  // control in the way that you want. As av.recorded() rewinds the
                  // slideshow, the new slides would go to the beginning of the slideshow.
                  // So, unless you are trying to add slides on-the-fly
                  // interactively, you don't want to do this.
                  // av.umsg("Text after av.recorded()");
});
