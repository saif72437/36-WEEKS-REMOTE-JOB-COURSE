import React, { memo, useCallback, useState } from 'react'

function App() {
  console.log("App re render");
  
  const [counter, setCounter] = useState(0)

const logSomething = useCallback(()=>{
  console.log("Hi I am Saif");
  
}, [])

  return (
    <div>
          <h1>{counter}</h1>
          <button onClick={()=>setCounter(counter + 1)}>Increment</button>
          <ButtonComponent text={logSomething} />
    </div>
  )
}

export default App


const ButtonComponent = memo(
  function({text}){
  console.log("Child re render");

text()
  
  
  return <div>
    child component 
  </div>
}

)

