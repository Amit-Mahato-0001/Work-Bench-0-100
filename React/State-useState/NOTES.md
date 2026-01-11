## State

- state is a variable that stores data which can change over time and when state changes React automatically updates the UI.

## useState

- useState is a react hook that allows a component to store and update state data.

- state banata he aur state update karta he

## Hook 

- A hook is a special function provided by react that lets us use React features like state.

- useState: state use karne ka tool

## useState syntax :

const [count, setCount] = useState(0)

useState(0)
- 0 = initial value
- matlab count 0 se start hoga

[count, setCount]
- array destructuring 
- count : current value
- setcount : value change karne ka function

- RULE : state ko directly change nhi karte set function se change karte hai

## Previous state

- Previous state means the last saved value of state before the current update.

- React har state ka last value yaad rakhta hai

Eg :

setCount(count + 1)
setCount(count + 1)  

expected result: 0 --> 2 ; actual result: 0 --> 1

kyun??

- react state updates of batch(combine) karta he
- count dono lines me same old value hota he

Solution :

setCount(prevCount => prevCount + 1)

ye setState form previous state value use karta he next state calculate karne ke lie.

RULE: when the new state depends on the old state use the previous state function.

## Multiple state

- A component can have more than one state variable to manage different pieces of data.

