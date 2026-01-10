

function App() {

  const name = "Amit"
  const age =  21

  return(
    <div>
      <h1>Hello {name}</h1>
      <h2>Age: {age}</h2>
      <p>Result : {age >= 18 ? "can vote" : "cannot vote"}</p>
    </div>
  )
}

export default App