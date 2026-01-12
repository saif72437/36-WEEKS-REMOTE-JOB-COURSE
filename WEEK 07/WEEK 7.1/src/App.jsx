import React, { createContext, useContext, useState } from 'react'
import { CountContext } from './CounterContext';

function App() {

  console.log("app re render");
  
  const [count,setCount] = useState(0)

  return (
    <CountContext.Provider value={{count, setCount}} >
      <ShowCount/>
      
    </CountContext.Provider>
  )
}

export default App

function ShowCount(){
  console.log("Show count re reder");
  const {count} = useContext(CountContext);

  return <div>
    <h1>Count is {count} </h1>
    <Button />
    <DecreaseButton />
  </div>
}

function Button(){
  console.log("button re render");
    const {count, setCount} = useContext(CountContext);



  return <button onClick={()=>{
    setCount(count + 1)
  }}>Increment Count</button>
}

function DecreaseButton(){

  const {count, setCount} = useContext(CountContext);

  return <button onClick={()=> setCount(count - 1)}>Decrement</button>
}

