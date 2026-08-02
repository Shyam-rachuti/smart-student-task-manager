const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


let tasks = [
    {
        id: 1,
        text: "Complete DSA practice",
        completed: false
    },
    {
        id: 2,
        text: "Submit assignment",
        completed: false
    }
]


app.get("/tasks", (req, res) => {
    res.json(tasks)
})


app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        text: req.body.text,
        completed: false
    }

    tasks.push(newTask)

    res.json(newTask)
})


app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id)

    tasks = tasks.filter(
        task => task.id !== id
    )

    res.json({
        message: "Task deleted"
    })

})


app.listen(5000, () => {
    console.log("Server running on port 5000")
})