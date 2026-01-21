// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count: {count}
//     </button>
//   );
// }

// export default App

{/* API CALL USING USE-EFFECT */}

import { useState, useEffect } from "react"

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchUsers = async () => {

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!res.ok){
          throw new Error("Failed")
        }

        const data = await res.json()
        setUsers(data)

      } catch (error) {
        setError(error.message)
        
      } finally{
        setLoading(false)
      }
    }

    fetchUsers()

  }, [])

  if(loading){
    return <h2>Loading!!!</h2>
  }

  if(error){
    return <h2>Error: {error}</h2>
  }

  return(
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
  )
}

export default App