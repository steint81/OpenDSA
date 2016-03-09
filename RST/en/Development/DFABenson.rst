..This file is part of the OpenDSA eTextbook project. 
..See http://algoviz.org/OpenDSA for more details.
..Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
..distributed under an MIT open source license.

.. avmetadata::
	:author: Nathan Benson, Taylor Steinhofer
 
============================================================
DFA Introduction
============================================================

How to make a DFA
-----------------------

A DFA, which stands for a Deterministic Finite Automata state machine 
that defines a certain Language given from a grammar. A given DFA will 
accepts given strings that are identified by the language and rejects all
other strings. DFA's consist of one start state and can have any number of final
states that determine if a string is accepted or not. For example,

.. inlineav:: DFABenson ss
	:output: show


.. odsascript:: AV/Development/DFABensonStage1.js


Step 1
~~~~~~~~~~~~

For our sample language, we are going to use an alphabet of{a,b} and the language requires a string to have an even number of A's. Our first step will be 
to draw a start state.

.. inlineav:: DFABenson1 ss
	:output: show


.. odsascript:: AV/Development/DFABensonStage2.js

Step 2
~~~~~~~~~~~~

From each state in the DFA model, you must have one and only 1 line leaving that state for each letter in the Languages alphabet(which is {a,b} in this langauge). So, since our goal for this language is to have an even number of A's in every string, state one can also be initialized as a final state. Also, since the number of B's are irrelevant, a line from state 1 for b will wrap around and point back to the same state like so.

.. inlineav:: DFABenson2 ss
	:output: show


.. odsascript:: AV/Development/DFABensonStage3.js

Step 3
~~~~~~~~~~~

Now it is time to draw the line exiting the start state for A. Since a odd number of A's is required, having an a read in as the next input from this string will cause it to have at that moment, an odd number of A's, so you must go to a new state if an A is read. 


.. inlineav:: DFABenson3 ss
	:output: show


.. odsascript:: AV/Development/DFABensonStage4.js

Step 4
~~~~~~~~~~~

Now that we have added a second state to our diagram, two additional lines must be drawn leaving that state, one for A and one for B. Again, since the B's read in are irrelavant for the target language, another line leading back to the same state will be drawn for any additional B's, like so. 

.. inlineav:: DFABenson4 ss
	:output: show


.. odsascript:: AV/Development/DFABensonStage5.js

Step 5
~~~~~~~~~~~

Now the line for A must be drawn. A line going from state 2 back to state 1 musty be drawn for A since our goal is to have an even number of As in our language.

.. inlineav:: DFABenson5 ss
    :output: show


.. odsascript:: AV/Development/DFABensonStage6.js

Step 6
~~~~~~~~~~~

This is your completed DFA for the language of Even-As.


.. inlineav:: DFABenson6 ss
    :output: show


.. odsascript:: AV/Development/DFABensonStage7.js




Practice Exercise
-----------------

.. avembed:: Exercises/Development/edit-KA2.html ka
