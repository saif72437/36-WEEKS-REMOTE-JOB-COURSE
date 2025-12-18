import SmallText from "./SmallText"
import WhiteButton from "./WhiteButton"

function Navbar(){
  return (
    <div className="w-full flex items-center justify-between pt-8 px-8">
        <div className="flex items-center gap-4">
            <SmallText text={"saifullahkhan.dev@gmail.com"}/>
            <WhiteButton text={"Copy"}/>
            <WhiteButton text={"CV"} />
        </div>
        <div>
            <SmallText text={"LinkedIn / Instagram / Dribbble"} />
        </div>
    </div>
  )
}

export default Navbar