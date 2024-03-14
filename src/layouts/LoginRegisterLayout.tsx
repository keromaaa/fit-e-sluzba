import React from 'react'

const LoginRegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[600px] h-screen mx-auto flex flex-col items-center justify-center gap-8'>
      {children}
    </div>
  )
}

export default LoginRegisterLayout
