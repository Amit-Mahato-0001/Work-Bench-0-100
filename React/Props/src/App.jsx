// import Student from "./Student"

// import { useState } from "react"

// function App(){

//   const [marks, setMarks] = useState(50)

//   return(
//     <div>
//       <Student name="Amit" marks={marks}/>
//       <button onClick={() => setMarks(marks + 5)}>
//         Increase marks
//       </button>
//     </div>
//   )
// }

// export default App

// import { useState } from "react"
// import Child from './Student'

// function App(){

//   const[count, setCount] = useState(0)

//   const increaseCount = () => {
//     setCount(prev => prev + 1)
//   }

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <Child onIncrease={increaseCount}/>
//     </div>
//   )
// }

// export default App

{/* Small project practice */}

import { useState } from "react"
import Child from './Student'

function App(){

    const[count, setCount] = useState(30)
    const [name] = useState("Amit")

    const increaseCount = () => {
        setCount(prev => prev + 1)
    }

    const decreaseCount = () => {
        setCount(prev => (prev > 0 ? prev - 1 : 0))
    }

    return(
        <div className="bg-gray-400 h-screen w-full flex items-center justify-center">
            <Child 
            name={name}
            count={count}
            onIncrease={increaseCount}
            onDecrease={decreaseCount}
            />
        </div>
    )
}

export default App