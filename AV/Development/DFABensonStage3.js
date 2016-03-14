var jsav = new JSAV("DFABensonStage3");
var dfa = new DFA(jsav);
var textArray = [];

var state1 = dfa.addState(1, 1, "#ffddff", true);
var state2 = dfa.addState(3, 2, "#ffddff", false);

state1.addNextState(state2, ["a"]);
jsav.displayInit();
