## curly braces {} in react

- In react jsx, {} are used to write js expressions inside HTML-like code.

- They tell react that the content inside is js not plain text.

eg: <h1>Hello {name}</h1>

## Expression

- An expression is a piece of code that produces a value.

- In jsx expressions are allowed becuase react needs a value to render on UI.

eg: <p>{age + 1}</p>

## Statement

- a statement is a piece of code that performs an action or gives instructions, but it does not directly return a value. statements are not allowed inside jsx.

eg: {if (age > 18) {}} ❌ not allowed

## Ternary Operator

- The ternary operator is a short form of if-else that returns a value, which makes it an expression.
Because it returns a value it is allowed in react jsx.

eg: <p>{isLoggedIn ? "Welcome" : "Please Login"}</p>
