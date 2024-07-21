import React from 'react'

interface FitLogoProps {
  className?: string
  small?: boolean
}

const FitLogo: React.FC<FitLogoProps> = ({ small, className }) => {
  return (
    <div
      className={`flex gap-2 items-center justify-center ${className} ${
        small ? 'h-10' : 'h-14 w-full self-center'
      }`}
    >
      <div
        className='aspect-[1079/567] h-full bg-center bg-cover'
        style={{ backgroundImage: 'url(./fit-logo.jpg)' }}
      />
      <h1 className={`font-medium text-nowrap ${small ? 'mt-2 text-xl' : 'mt-4 text-4xl'}`}>
        e-služba
      </h1>
    </div>
  )
}

export default FitLogo
