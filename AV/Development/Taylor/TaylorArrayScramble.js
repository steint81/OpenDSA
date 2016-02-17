"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("TaylorArrayScramble");
    var theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Starting Array");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
	for (var i = 0; i < theArray.length; i++){
		var min = 0, max = theArray.length  - 1;
		var rand = Math.floor(Math.random() * (max - min)) + min;
		av.umsg("Swap position " + i + " with position " + rand, {preserve: false});
		arr.swap(i,rand);
		av.step();
	}
    
    av.umsg("The Shuffled Array");
    av.recorded();
});
