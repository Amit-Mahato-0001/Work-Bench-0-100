// import userContext from "./context/userContext"
// import Dashboard from "./components/Dashboard"

// function App () {

//   const user = {name: "Amit", role: "Admin"}

//   return(
//     <userContext.Provider value={user}>
//       <Dashboard/>
//     </userContext.Provider>
//   )
// }

// export default App

{/* context + state (task) */}

import { useState } from "react"
import userContext from "./context/userContext"
import Dashboard from "./components/Dashboard"

function App() {
  const [user, setUser] = useState(null)
  
  return(
    <userContext.Provider value={{user, setUser}}>
      <Dashboard/>
    </userContext.Provider>
  )
}

export default App