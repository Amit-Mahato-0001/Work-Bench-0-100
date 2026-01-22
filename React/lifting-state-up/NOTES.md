Lifting State Up (Shared State)

Sabse pehle problem ko samjho(WHY)

socho tumhare pass ye structure he:

App
 ├── Counter
 └── Display

Requirement: 
Counter button click kare
Display me updated value dikhe

Problem:
State Counter me hai
Display us state ko access nahi kar sakta

Galat approach:

Counter state → Display ❌

React me sibling components direct baat nahi karte

RULE:

State should live in the nearest common parent of all components that need that state.

Lifting State Up:

Lifting state up means moving the state from a child component to its parent so that multiple child components can share it.

Architecture: 

Parent (state)
 ├── Child A (update state)
 └── Child B (read state)

