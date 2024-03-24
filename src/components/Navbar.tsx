import React from 'react'
import FitLogo from './FitLogo'
import NavButton from './NavButton'

const Navbar = () => {
  return (
    <nav className='w-full shadow-md h-20 px-16 grid grid-cols-3 place-content-center'>
      <FitLogo small={true} className='place-content-start' />
      <div className='grid grid-cols-4 w-full h-full'>
        <NavButton text='Početna' />
        <NavButton text='Služba' />
        <NavButton text='Ispiti' />
        <NavButton text='Moji podaci' />
      </div>
      <div
        className='aspect-square h-10 rounded-full place-self-end bg-center bg-cover'
        style={{ backgroundImage: 'url(./no-pfp.png)' }}
      ></div>
    </nav>
  )
}

export default Navbar
