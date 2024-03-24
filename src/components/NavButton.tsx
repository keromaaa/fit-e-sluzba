import React from 'react'

interface NavButtonProps {
  text: string
}

const NavButton: React.FC<NavButtonProps> = ({ text }) => {
  return (
    <button className='font-semibold hover:text-primary transition-colors cursor-pointer'>
      {text}
    </button>
  )
}

export default NavButton
