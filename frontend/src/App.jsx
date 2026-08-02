import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    "Complete DSA practice",
    "Submit assignment",
    "Work on project"
  ])

  const [newTask, setNewTask] = useState("")

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask])
      setNewTask("")
    }
  }

  return (
    <div>
      <h1>Smart Student Task Manager</h1>

      <h2>Welcome, Shyam 👋</h2>

      <h3>Today's Tasks</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>
        Add Task
      </button>

    </div>
  )
}

export default App