import React from 'react'
import Navbar from '../components/ui/components/Navbar'

interface ProfileLayoutProps {
  children: React.ReactNode
  className?: string
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, className }) => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <main className={`w-2/3 mx-auto mt-8 flex gap-8 ${className}`}>{children}</main>
    </div>
  )
}

export default ProfileLayout
