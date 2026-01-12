## PROPS

- Props are used to pass data from a parent component to a child component. Props are read-only and cannot be changed by the child.

NOTE: State is managed by the component itself. Props are recieved from outside.

## Parent / Child

- The component which sends data is called Parent.

- The component which recieves data is called Child.

## How Props passing done

Parent Component(App.jsx)

function App(){
    return(
        <div>
        <Student name="Amit" age={21}/>
        </div>
    )
}

Child component(Student.jsx)

function Student(props){
    return(
        <div>
        <h1>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        </div>
    )
}

export default Student

## Why props are read-only ??

- Props are read-only to maintain one-way data flow and prevent accidental data changes.

- Control parent ke pass
- Child sirf display karta hai

clean way of props passing :

function Student({ name, age }){
    return(
        <div>
        <h1>{name}</h2>
        <h2>{age}</h2>
        </div>
    )
}

## Props vs state

| Props              | State                    |
| ------------------ | ------------------------ |
| Passed from parent | Managed inside component |
| Read-only          | Can be updated           |
| Used for display   | Used for logic           |


## Callback Props 

- Callback props are functions passed from a parent to a child to notify the parent about the event.

- parent function deta hai
- child us function ko call karta hai
- parent state update karta hai
