import React from 'react'

interface ProfilePictureProps {
  className?: string
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ className }) => {
  return (
    <div
      className={`aspect-square h-10 rounded-full bg-center bg-cover ${className}`}
      style={{ backgroundImage: 'url(./no-pfp.png)' }}
    ></div>
  )
}

export default ProfilePicture
