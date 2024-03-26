import React from 'react'
import Navbar from '../components/ui/Navbar'
import PageTitle from '../components/PageTitle'

interface DefaultLayoutProps {
  children: React.ReactNode
  className?: string
  pageTitle?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, className, pageTitle }) => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Navbar />
      <main className={`w-2/3 mx-auto mt-8 flex flex-col gap-8 ${className}`}>
        {pageTitle && <PageTitle text={pageTitle} />}
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout
