## List rendering
- List rendering means displaying multiple similiar UI elements by looping over an array using js.

## map 
- map() is a js function that runs on an array and returns a new array.

simple:
- 1 item lo
- kuch banao
- return karo
- sab items ke liye repeat

SYNTAX:
array.map((element, index, array) => {
    return newElement
})

eg:
const numbers = [1, 2, 3]

const doubled = numbers.map(num => num * 2)

RESULT: [2, 4, 6]

## How render list in React
SIMPLE LIST EG:

function App(){
    const fruits = ["Apple", "Banana", "Mango"]

    return(
        <ul>
        {fruits.map(fruit => (
            <li>
            {fruit}
            </li>
        ))}
        </ul>
    )
}

EACH CHILD IN A LIST SHOULD HAVE A UNIQUE KEY PROP

## Key
- A key is a special unique identifier that helps React identify which list item has changed, added, or removed.

KEY KYUN CHAHIYE??

- Old list yaad rakhta he
- New list compare karta he
- Sirf changed item update karta he

EG: 

function App(){
    const fruits = ["Apple", "Mango", "Banana"]

    return(
        <ul>
        {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
        ))}
        </ul>
    )
}

## Conditional rendering

- Conditional rendering means displaying different UI elements based on a condition.

simple: condition: true ---> ek UI
condition false ---> dusri UI

RULE: jsx ke ander sirf expressions allowed he isliye conditions ko expressions banana padta he.

METHOD 1: Ternary operator

- Ternary operator is used when we have two UI options.

EG:

function App() {
  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? "Welcome" : "Please Login"}
    </h1>
  );
}

METHOD 2: && operator 

- && operator is used when you want to show UI only if the condition is true.

function App(){
    const isAdmin = true

    return(
        <div>
        {isAdmin && <button>Delete</button>}
        </div>
    )
}

METHOD 3: Early return

- Early return means returning UI before jsx based on a condition.

function App() {
  const isLoading = true;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Data Loaded</h1>;
}

METHOD 4: Condition outside jsx

function App() {
  const isLoggedIn = false;

  let message;
  if (isLoggedIn) {
    message = "Welcome";
  } else {
    message = "Please Login";
  }

  return <h1>{message}</h1>;
}

CHEATSHEET:

| Situation         | Best Method  |
| ----------------- | ------------ |
| If–Else UI        | Ternary      |
| Show only if true | `&&`         |
| Loading screen    | Early return |
| Complex logic     | Outside JSX  |
