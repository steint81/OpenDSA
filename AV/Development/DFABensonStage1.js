var jsav = new JSAV("DFABensonStage1");
var dfa = new DFA(jsav);
var textArray = [];

var state1 = dfa.addState(1, 1, "#ffddff", false);
var state2 = dfa.addState(3, 2, "#ffddff", false);
var state3 = dfa.addState(5, 1, "#ffddff", false);
var state4 = dfa.addState(3, 3, "#ffddff", true);

state1.addNextState(state1, ["a"]);
state1.addNextState(state2, ["b"]);

state2.addNextState(state1, ["a"]);
state2.addNextState(state3, ["b"]);

state3.addNextState(state1, ["a"]);
state3.addNextState(state4, ["b"]);

state4.addNextState(state1, ["a"]);
state4.addNextState(state4, ["b"]);
//dfa.draw(jsav);
jsav.displayInit();
jsav.recorded();