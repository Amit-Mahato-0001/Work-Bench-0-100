import Student from "./Student"

function App(){

  const [marks, setMarks] = useState(50)

  return(
    <div>
      <Student name="Amit" marks={marks}/>
      <button onClick={() => setMarks(marks + 5)}>
        Increase marks
      </button>
    </div>
  )
}

export default App