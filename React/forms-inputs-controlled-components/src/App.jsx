{/* Task-01 */}

// import { useState } from "react"

// function App(){
//   const[name, setName] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(name)
//   }

//   return(
//     <form onSubmit={handleSubmit}>

//       <input type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Enter name" />

//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// export default App


{/* Task-02 (Multiple inputs handle) */}

import { useState } from "react"

function App(){

  const [form, setForm] = useState({
    name: "",
    email: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  return(
    <form>
      <input name="name"
      value={form.name}
      onChange={handleChange}
      />

      <input name="email"
      value={form.email}
      onChange={handleChange} 
      />

    </form>

  )
}

export default App
