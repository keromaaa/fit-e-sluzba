import React from 'react'

const FitLogo = () => {
  const logoUrl = './fit-logo.jpg'

  return (
    <div className='flex gap-2 items-center'>
      <div
        className='aspect-[1079/567] h-16 bg-center bg-cover'
        style={{ backgroundImage: `url(${logoUrl})` }}
      />
      <h1 className='text-4xl font-medium mt-4'>e-služba</h1>
    </div>
  )
}

export default FitLogo
