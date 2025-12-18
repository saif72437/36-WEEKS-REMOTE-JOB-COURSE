import React from 'react'

function PrimaryButton({text}) {
  return (
    <button className='py-4 px-5 mt-3 bg-[#242424] text-white rounded-full text-sm '>
        {text}
    </button>
  )
}

export default PrimaryButton
