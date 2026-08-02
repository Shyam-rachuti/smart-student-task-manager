import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    { text: "Complete DSA practice", completed: false },
    { text: "Submit assignment", completed: false },
    { text: "Work on project", completed: false }
  ])

  const [newTask, setNewTask] = useState("")

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          text: newTask,
          completed: false
        }
      ])

      setNewTask("")
    }
  }

  function toggleTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index
        ? { ...task, completed: !task.completed }
        : task
    )

    setTasks(updatedTasks)
  }

  return (
    <div>

      <h1>Smart Student Task Manager</h1>

      <h2>Welcome, Shyam 👋</h2>

      <h3>Today's Tasks</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                textDecoration:
                  task.completed
                    ? "line-through"
                    : "none"
              }}
            >
              {task.text}
            </span>

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