function App(){

   let data = [
      {
        img: "https://plus.unsplash.com/premium_photo-1698201941202-a3b8cabc4189?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Random Stuff",
        description: "This is some random shit"
      },
      {
        img: "https://images.unsplash.com/photo-1765218111706-960690aed429?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Camera",
        description: "this is vintage camera good for vintage photography"
      },
      {
        img: "https://images.unsplash.com/photo-1765202659641-9ad9facfe5cf?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Building",
        description: "Building with a beautiful view"
      },
   ]

  return (
    <div className="main">
          {
            data.map(element => <Card img={element.img} title={element.title} description={element.description} />)
          }
    </div>
  )
}


export default App

// card component
function Card({img, title, description}){
  return (
    <div className="card">
      <img src={img} alt="camera" />
      <Heading2 title={title} />
      <SmallText description={description}/>
      <BuyNowButton/>
    </div>
  )
}

function Heading2({title}){
  return (
    <h2 className="heading2">{title}</h2>
  )
}

function SmallText({description}){
  return (
    <p className="smalltext">{description}</p>
  )
}

function BuyNowButton(){
  return (
    <button className="buynow">Buy Now</button>
  )
}