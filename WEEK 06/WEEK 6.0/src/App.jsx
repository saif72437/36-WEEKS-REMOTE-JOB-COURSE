import React, { useState } from "react"

function App() {

  console.log("App refresh happen");
  
  // use state hook

  
  return (
    <div>
     
        <Counter/>

    </div>
    
  )
}

export default App

function Counter() {
  console.log("Counter Refresh happen");
  
  // let count = 0
  let [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1) // this will update the count variable
  }

  return (
     <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={()=>{
          setCount(count- 1)
          console.log(count)

      }}>Decrement</button>
     </div>

  )
}