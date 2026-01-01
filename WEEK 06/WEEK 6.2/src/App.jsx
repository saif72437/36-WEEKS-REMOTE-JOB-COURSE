import React, { useMemo, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState("")


let finalResult = useMemo(()=>{

    let sum = 0;
    for(let i = 1; i <= inputValue; i++){
      sum+= i;
      console.log("sum is", sum);
      
    }

    return sum

}, [inputValue]) //


return (
  <div>

    <input type="text" name="" id=""
      onChange={(e) => setInputValue(e.target.value)}
    />

    <p>sum is {finalResult}</p>



    <button onClick={() => {
      setCounter(counter + 1)
    }}>Counter {counter}</button>
  </div>
)
}

export default App
