var jsav = new JSAV("DFABensonStage5");
var dfa = new DFA(jsav);
var textArray = [];

var state1 = dfa.addState(1, 1, "#ffddff", true);
var state2 = dfa.addState(3, 2, "#ffddff", false);
var state3 = dfa.addState(3, 0, "#ffddff", false);

state1.addNextState(state2, ["a"]);
state1.addNextState(state3, ["b"]);
state2.addNextState(state1, ["a"]);
jsav.displayInit();
