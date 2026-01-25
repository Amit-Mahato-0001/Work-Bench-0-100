CONTEXT API(global state without prop drilling)

Why context API??
Socho ye component structure:
App
 └── Parent
      └── Child
           └── GrandChild

requirement:
App me user data hai
GrandChild ko wo data chahiye

Props Drilling??
props drilling means passing props through multiple components even when intermediate components do not need that data.

problems:
code messy
hard to maintain
unnecessary props

Context API??
Context API allows us to share data globally without passing props manually at every level.

simple:
ek central store
jo bhi component chahiye directly access

context API 3 main parts:
1. create context
2. provide context
3. consume context

When to use context API??
good use cases:
1. auth user
2. theme(light/dark)
3. language
4. settings

avoid for:
very frequently changing data
small apps

context + state ??
context sirf data share karne ka medium hai
actual data/state useState se hi aata hai

context = wire
state = electricity

