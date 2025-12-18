import React from 'react'
import PrimaryButton from './PrimaryButton'

function MainSection() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
        <img className='size-36 object-cover rounded-full border-4 border-white' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="profile" />
        <h1 className='text-center text-5xl font-semibold mask-r-from-30% text-[#242424]'>Building Digital <br />products, brands and <br />experience.</h1>
        <PrimaryButton text={"Latest shows 🖕🏻"}/>
    </div>
  )
}

export default MainSection
