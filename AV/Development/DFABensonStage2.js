var jsav = new JSAV("DFABensonStage2");
var dfa = new DFA(jsav);
var textArray = [];

var state1 = dfa.addState(1, 1, "#ffddff", true);
jsav.displayInit();
