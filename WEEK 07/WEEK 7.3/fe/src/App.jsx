import React, { useEffect, useState } from "react"
import axios from "axios"
import { TodoContext } from "./Context/TodoContext"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  async function getTodos() {
    const response = await axios.get("http://localhost:3000/todos")
    setTodos(response.data.todos)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Todo App
          </h1>

          {/* Input */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={async () => {
                if (!inputValue.trim()) return
                await axios.post("http://localhost:3000/create", {
                  text: inputValue,
                })
                setInputValue("")
                getTodos()
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          {/* Todo List */}
          <ul className="space-y-3">
            {todos.map((singleTodo) => (
              <li
                key={singleTodo._id}
                className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2"
              >
                <span
                  className={`flex-1 ${
                    singleTodo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {singleTodo.text}
                </span>

                <div className="flex gap-2 ml-4">
                  <button
                    onClick={async () => {
                      await axios.put(
                        `http://localhost:3000/update/${singleTodo._id}`
                      )
                      getTodos()
                    }}
                    className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition"
                  >
                    {singleTodo.completed ? "✅" : "Done"}
                  </button>

                  <button
                    onClick={async () => {
                      await axios.delete(
                        `http://localhost:3000/delete/${singleTodo._id}`
                      )
                      getTodos()
                    }}
                    className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
