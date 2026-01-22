import { useState } from "react"
import Counter from "./Counter"
import Display from "./Display"

function App(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <Counter count={count} setCount={setCount}/>
      <Display count={count}/>
    </div>
  )
}

export default App


{/*
  
FLOW: 

State parent me hai

Parent props ke through state deta hai

Child event trigger karta hai

Parent state update hoti hai

Dono children re-render hote hain
  
*/}