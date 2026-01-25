import userContext from "./context/userContext"
import Dashboard from "./components/Dashboard"

function App () {

  const user = {name: "Amit", role: "Admin"}

  return(
    <userContext.Provider value={user}>
      <Dashboard/>
    </userContext.Provider>
  )
}

export default App