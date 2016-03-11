var jsav = new JSAV("DFABensonStage5");
var dfa = new DFA(jsav);
var textArray = [];

var state1 = dfa.addState(3, 1, "#ffddff", false);
var state2 = dfa.addState(5, 1, "#ffddff", false);


state1.addNextState(state1, ["b"]);
state1.addNextState(state2, ["a"]);

state2.addNextState(state2, ["b"]);

// dfa.draw(jsav);
jsav.label("DFA Test", {top: 10, left: 500}).css({"font-size": "150%"});
jsav.displayInit();

/*function testString() {
  var input = prompt("Enter a string:", "1010111");
  if (input != null) {
      // Must refresh before testStringButton can be used again.
      // This is because jsav.recorded() finalizes the slideshow.
      // Can also reinstantiate JSAV and provide instance to DFA, if preferred.
      $("#testStringButton").hide();
      myJsFunction(input);
  }
}
*/


/*function myJsFunction(input) {
  var text = input;
  for (var i = 0; i < text.length; i++) {
    textArray.push(text.charAt(i));
  }

  var arr1 = jsav.ds.array(textArray);

  for (var i = 0; i < textArray.length; i++) {
    var result = dfa.traverse(text.charAt(i));

    // Invalid result from rejected character
    if (result == -1) {
        arr1.css(i, {"background-color": "#ff2222"});
        break;
    }
    arr1.css(i, {"background-color": "#ffaaaa"});
    jsav.step();
  }

  if (dfa.getCurrentState().isFinal == true) {
    arr1.css(textArray.length - 1, {"background-color": "#22ff22"});
    jsav.step();
  } else if (result != -1) {
    // If result == 1, that means an invalid character was provided.
    // Line 96 takes care of this by marking the invalid character with red.
    // The last character does not need to provide redundant information.
    arr1.css(textArray.length - 1, {"background-color": "#ff2222"});
    jsav.step();
  }

  jsav.recorded();
}
*/
/*
function showQuestion() {
  // For some reason, question cannot be shown before jsav.recorded() is called.
  // Must refresh page before an input string can be provided.
  jsav.recorded();
  $("#testStringButton").hide();

  var randomString = "";
  var upperBound = Math.floor(Math.random() * 7) + 3;
  for (var i = 0; i < 2 + upperBound; i++) {
    randomString += Math.round(Math.random());
  }
  randomString += "1";
  var answer = dfa.simulate(randomString);
  dfa.reset();

  var q = jsav.question("TF", "The Finite State Machine shown above accepts the string: " + randomString + "?",
                    {correct: answer,
                    falseLabel: "No",
                    trueLabel: "Yes"});
  q.show();
}
*/