import React from 'react'

function WhiteButton({text}) {
  return (
    <div className='bg-white py-2 px-3 rounded-full w-[80px] flex items-center justify-center'>
      {text}
    </div>
  )
}

export default WhiteButton
