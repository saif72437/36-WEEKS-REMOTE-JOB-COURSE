import React from 'react'

function App() {
  return (
    <div>
        <CardComponent  children={<TextComponent title={"Hello how are you"}/>}/>
      
      <CardComponent>
          <TextComponent title={"I am component 2"} />
      </CardComponent>

    </div>
  )
}

export default App


function TextComponent ({title}){
  return <h1>{title}</h1>
}

function CardComponent({children}){
  return <div style={{backgroundColor: "#c7c7c7", color:"black", padding:"10px", borderRadius:"12px"}}>
    <>{children}</>
  </div>
}