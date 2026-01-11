// import {useState} from 'react'

// function App () {
//   const [count, setCount] = useState(0)

//   return(
//     <div>
      
//       <h1>Count: {count}</h1>

//       <button onClick={() => {setCount(count+1) 
//         setCount(count+1)}}>Add</button>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Amit");

//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(prev => prev + 1)}>
//         Increase Count
//       </button>

//       <button onClick={() => setName("Rahul")}>
//         Change Name
//       </button>
//     </div>
//   );
// }

// export default App;

import {useState} from 'react'

function App () {
  const [count, setCount] =  useState(0)

  return(
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase count
      </button>
      <button onClick={() => setCount(prev => prev - 1)}>
        Decrease count
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default App