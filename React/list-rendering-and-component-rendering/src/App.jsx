import {useState} from 'react'

function App(){

  const [tasks] = useState([
    {id: 1, title: "Learn react", completed: true},
    {id: 2, title: "Practice backend", completed: false},
    {id: 3, title: "Build project", completed: false}
  ])

  return(
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            
            <span>{task.completed ? "--Done": "--Pending"}</span>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p>No tasks available</p>
      )}
    </div>
  )
}

export default App