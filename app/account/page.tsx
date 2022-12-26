import React from 'react'
import SharedPageNav from '../../components/SharedPageNav'
import { UserGroupIcon, StarIcon, HandThumbUpIcon, EyeSlashIcon, HeartIcon } from '@heroicons/react/24/outline'

const sharednavLinks = [
  {title:'My matches', icon: <HeartIcon className='h-5 w-5'/>},
  {title:'Favorites', icon: <StarIcon className='h-5 w-5'/>},
  {title:'Visitors', icon: <UserGroupIcon className='h-5 w-5'/>},
  {title:'Likes', icon: <HandThumbUpIcon className='h-5 w-5'/>},
  {title:'Hidden matches', icon: <EyeSlashIcon className='h-5 w-5'/>},
]

const Account = () => {
  return (
    <div className='min-h-screen'>
        <SharedPageNav sharednavLinks={sharednavLinks}/>
    </div>
  )
}

export default Account