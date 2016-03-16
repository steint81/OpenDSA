(function() {
	"use strict";
	
			var question = "";
		  	var solved = "";
		  	var arrA = [],
		  	 arrB = [],
		  	 jsav;
		
		  	var generateExp = function(){
		  		debugger;
		  		if (question.length <= 1){
		  			var lengths = (Math.random() * 6) + 1;
					for(var i = 0; i < lengths; i++){
						var rand = Math.floor(Math.random() + .5);
						question += rand === 0 ? "a" : "b"; 				
					}
		  		}
		  		
				return question;
		  	}
		  	
		  	var initJSAV = function(){
		  	debugger;
		  		arrA = [];
		  		arrB = [];
		  		jsav = new JSAV("PreProblem3", {"animationMode": "none"});
				var dfa = new DFA(jsav);
				var textArray = [];

				var state1 = dfa.addState(1, 1, "#ffddff", true, false, 0);
				var state2 = dfa.addState(3, 2, "#ffddff", false, false, 1);
				var state3 = dfa.addState(3, 0, "#ffddff", false, false, 2);
				var state4 = dfa.addState(5, 1, "#ffddff", false, false, 3);
				var stateArr = [state1, state2, state3, state4];
				
				
				state1.addNextState(state[Math.floor(Math.random() * 4)], ["a"]);
				state1.addNextState(state[Math.floor(Math.random() * 4)], ["b"]);
				state2.addNextState(state[Math.floor(Math.random() * 4)], ["a"]);
				state2.addNextState(state[Math.floor(Math.random() * 4)], ["b"]);
				state3.addNextState(state[Math.floor(Math.random() * 4)], ["b"]);
				state3.addNextState(state[Math.floor(Math.random() * 4)], ["a"]);
				state4.addNextState(state[Math.floor(Math.random() * 4)], ["b"]);
				state4.addNextState(state[Math.floor(Math.random() * 4)], ["a"]);
				jsav.forward();
		  	};
		  	
		  	var solve = function(){
		  		if (solved.length <= 0){
		  			var exp = question; 
		  			var curPos = 0;
					for (var i = 0; i < exp.length; i++){
						curPos = newPosition(curPos, exp.charAt(i));			
					}
					if(curPos == 0){
						solved = 'Left';
					} else if (curPos == 1){
						solved = 'Bottom';
					} else if (curPos == 2){
						solved = 'Top';
					} else{
						solved = 'Right';
					}
				}
				return solved;
		  	}
		  	
		  	var newPosition = function(pos, curChar){
				if (curChar == 'a'){
					if(pos == 0)	{
						return 1;
					}else if(pos == 1){
						return 0;
					}else if(pos == 2){
						return 3;
					}else{
						return 2;
					}
				}else{
					if(pos == 0)	{
						return 2;
					}else if(pos == 1){
						return 3;
					}else if(pos == 2){
						return 0;
					}else{
						return 1;
					}			
				}	  	
		  	}
		  	
 }());