import React from 'react'
import SharedPageNav from '../../components/SharedPageNav'
import { ArchiveBoxIcon, BellAlertIcon, InboxArrowDownIcon } from '@heroicons/react/24/outline'

const sharednavLinks = [
  {title:'Inbox', icon: <InboxArrowDownIcon  className='h-5 w-5'/>},
  {title:'Archive', icon: <ArchiveBoxIcon className='h-5 w-5'/>},
  {title:'Notifications', icon: <BellAlertIcon className='h-5 w-5'/>},
]

const dates = () => {
  return (
    <div className='min-h-screen'>
        <SharedPageNav sharednavLinks={sharednavLinks}/>
    </div>
  )
}

export default dates