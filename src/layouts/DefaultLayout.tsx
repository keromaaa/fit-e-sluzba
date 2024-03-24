import React from 'react'
import Navbar from '../components/ui/Navbar'

interface DefaultLayoutProps {
  children: React.ReactNode
  className?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, className }) => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <main className={`w-2/3 mx-auto mt-8 flex flex-col gap-8 ${className}`}>{children}</main>
    </div>
  )
}

export default DefaultLayout
