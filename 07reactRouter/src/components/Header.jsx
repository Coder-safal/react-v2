import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (

    <>
      <div className='w-full mx-auto max-w-screen-md h-[100px] bg-slate-800 flex items-center justify-around'>

        <div className='text-white'>
          logo
        </div>
        <div>
          <ul className='w-[300px] flex justify-between items-center text-white' >
            <NavLink
              className={
                ({ isActive }) => `${isActive ?
                  "text-orange-700" : "text-white"}`
              }
              to="/">Home</NavLink>

            <NavLink

              className={({ isActive }) => `${isActive ? "text-orange-700" : "text-white"
                }`

              }
              to="/about">About</NavLink>
            <NavLink

              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-white"}`}
              to="/contact">Contact Us</NavLink>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Header