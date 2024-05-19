import React from 'react'

interface ProfileInfoProps {
  label: string
  value: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ label, value }) => {
  return (
    <div className='flex gap-2'>
      <p className='font-semibold'>{label}:</p>
      <p>{value}</p>
    </div>
  )
}

export default ProfileInfo
