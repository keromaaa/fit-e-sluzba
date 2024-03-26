import React from 'react'

interface PageTitleProps {
  text: string
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return <h2 className='font-bold text-4xl'>{text}</h2>
}

export default PageTitle
