function App(){
  return (
    <div className="website">
        <Navbar/> 

        <div className="card-parent">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        
    </div>
    
  )
}

export default App;

// component
function Navbar(){
  return (
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Our Services</li>
    </nav>
  )
}

function Card(){
  return (
    <div className="card">
      <img src="https://i.pinimg.com/736x/e9/66/75/e96675b19a653c5186a9311cceda01ad.jpg" alt="" />
      <div className="text">
        <h2>Hoodie</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, similique!</p>
        <button>Buy Now</button>
      </div>
    </div>
  )
}