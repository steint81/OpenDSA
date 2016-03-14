..This file is part of the OpenDSA eTextbook project. 
..See http://algoviz.org/OpenDSA for more details.
..Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
..distributed under an MIT open source license.

.. avmetadata::
	:author: Nathan Benson, Taylor Steinhofer
 
============================================================
DFA Introduction
============================================================
.. odsascript:: AV/Development/dfa.js

How to make a DFA
-----------------------

A DFA, which stands for a Deterministic Finite Automata state machine 
that defines a certain Language given from a grammar. A given DFA will 
accepts given strings that are identified by the language and rejects all
other strings. DFA's consist of one start state and can have any number of final
states that determine if a string is accepted or not. For example,

.. inlineav:: DFABensonStage1 dgm
	:align: justify


.. odsascript:: AV/Development/DFABensonStage1.js


Step 1
~~~~~~~~~~~~

For our sample language, we are going to use an alphabet of{a,b} and the language requires a string to have an even number of A's as well as an even number of B's. Our first step will be 
to draw a start state.

.. inlineav:: DFABensonStage2 dgm
	:output: show


.. odsascript:: AV/Development/DFABensonStage2.js

Step 2
~~~~~~~~~~~~

From each state in the DFA model, you must have one and only 1 line leaving that state for each letter in the Languages alphabet(which is {a,b} in this langauge). So, since our goal for this language is to have an even number of A's and B's in every string, state one can also be initialized as a final state. Next, for our first line we draw, we will need to add another state for our a line to go to, like so.

.. inlineav:: DFABensonStage3 dgm
	:output: show


.. odsascript:: AV/Development/DFABensonStage3.js

Step 3
~~~~~~~~~~~

Now it is time to draw the line exiting the start state for B. Since the case for B is going to be the same for A, we will need to draw a line for b, but this time we will need to add another new state leading away from our start state for b. 


.. inlineav:: DFABensonStage4 dgm
	:output: show


.. odsascript:: AV/Development/DFABensonStage4.js

Step 4
~~~~~~~~~~~

Now beginning with our second state that was added, we will need to draw a line from state 2 leading back to the start state for A, since after another A we will be back at an even number of A's, and currently the number of B's is still sitting at an even number if we come from the start state. 

.. inlineav:: DFABensonStage5 dgm
	:output: show


.. odsascript:: AV/Development/DFABensonStage5.js

Step 5
~~~~~~~~~~~

As for the B's, if we are sitting in state 2, we must draw a line to another new state which will keep our count of both A and B currently staying at a odd number for both. 

.. inlineav:: DFABensonStage6 dgm
    :output: show


.. odsascript:: AV/Development/DFABensonStage6.js

Step 6
~~~~~~~~~~~

Now from State 3, a line for B can be drawn back to the start state because the only way to get to this state would be having an even number of A's, and an odd number of B's, so having one more B will take us back to having an even number of A's and B's


.. inlineav:: DFABensonStage7 dgm
    :output: show


.. odsascript:: AV/Development/DFABensonStage7.js

Step 7
~~~~~~~~~~~

A line from state 3 for A must be drawn now, and this one is similar to the one coming from state 3 for its B, because another A at this point will get us to an odd number of both A's and B's


.. inlineav:: DFABensonStage8 dgm
    :output: show


.. odsascript:: AV/Development/DFABensonStage8.js

Step 8
~~~~~~~~~~~

Now for the state 4 we need to draw the A and B lines for this new state. First for B, we will return to state 2 since that will take us to a state where B is an even number and A is still in an odd number, like so. 


.. inlineav:: DFABensonStage9 dgm
    :output: show


.. odsascript:: AV/Development/DFABensonStage9.js
Step 9
~~~~~~~~~~~
Finally, the last line we will draw coming from state 4 will be for A, which will go in the opposite direction of the previous line we drew for B, taking it to the state which will have an even number of A's but an odd number of B's, and this will finish off our DFA for the language of Even-a Even-b.



.. inlineav:: DFABensonStage10 dgm
    :output: show


.. odsascript:: AV/Development/DFABensonStage10.js



Practice Exercise
-----------------

.. avembed:: Exercises/Development/PreProblem1.html ka
