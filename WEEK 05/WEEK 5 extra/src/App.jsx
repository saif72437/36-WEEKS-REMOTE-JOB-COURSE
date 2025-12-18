import MainSection from "./component/MainSection"
import Navbar from "./component/Navbar"

function App(){
  // pin link: https://www.pinterest.com/pin/6192518232330897/
  return (
    <div>
      {/* hero section */}
      <div className="bg-[#E0E0DE] w-full h-screen">

        <Navbar/>

        <MainSection/>

      </div>
    </div>
  )
}

export default App

