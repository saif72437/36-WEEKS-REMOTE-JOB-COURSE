import React from 'react'
import { useNavigate } from 'react-router-dom'

function ServicesPage() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>this is Services page</h1>

        <button onClick={
            ()=>{
                navigate("/login")
            }
        } >Login</button>
      
    </div>
  )
}

export default ServicesPage
