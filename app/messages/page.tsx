"use client"
import { ArchiveBoxIcon, ArrowUturnLeftIcon, BellAlertIcon, InboxArrowDownIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import React, { FC, useState } from 'react'
import BoxHeader from '../../components/messages/BoxHeader'
import ContactItem from '../../components/messages/ContactItem'
import MsgInputBox from '../../components/messages/MsgInputBox'
import SharedPageNav from '../../components/SharedPageNav'

type Props = {}
type TchatBox = {
  id:number
  name:string
}
const sharednavLinks = [
  {title:'Inbox', icon: <InboxArrowDownIcon  className='h-5 w-5'/>},
  {title:'Archive', icon: <ArchiveBoxIcon className='h-5 w-5'/>},
  {title:'Notifications', icon: <BellAlertIcon className='h-5 w-5'/>},
]

const Messages:NextPage = (props: Props) => {
  // this is very helpful for phone version, so that we open chatbox only when we click a recent chat 
  const [ChatBox, setChatBox] = useState<TchatBox | null>(null) //

  return (
    <section className='px-2 lg:px-32 pt-16 h-screen w-full bg-gray-200'>
      <SharedPageNav sharednavLinks={sharednavLinks}/>

      <div className='w-full h-[89vh] relative bg-white rounded-lg overflow-hidden border shadow md:grid md:grid-cols-3'>
             <div className={`${ChatBox && "hidden md:block"} col-span-1 relative pt-20 overflow-hidden h-full border-r-2`}>
                 <div className=' flex items-center pl-6 pr-2 absolute bg-gray-100 top-0 right-0 left-0 h-20 border-b-2'>
                    <MagnifyingGlassIcon className='w-6 h-6 -mr-8 z-10 text-primary'/>    
                    <input type="text"  placeholder='Type names for quick find'
                          className='bg-white w-full h-10 rounded-lg pl-10'
                    />
                 </div>
                 <div className='overflow-scroll h-full' onClick={()=>setChatBox({id:1, name:"Xavier Hernandez  "})}>
                   {/* here we should render the list of recent chats */}
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>

                    {/* we render this message, When there are no messages yet means has never talked to someone */}
                    {/* <p className='text-primary text-xl ml-24 mt-72'>No Chats yet !</p> */}
                 </div>
            </div>
            {/* goBack icon is shown ony in mobile version and when there is a chat selected */}
            <div onClick={()=> setChatBox(null)} className={`${!ChatBox && "hidden"} bg-red-500 w-10 h-10 rounded-full absolute md:hidden top-0 left-[50%] cursor-pointer flex items-center justify-center`}>
                <XMarkIcon className="w-5 h-5 text-white "/>
            </div>
              {/* this is where the chats will happen, and it display only whe a chat is selected */}
            <div className={` ${ChatBox ? "flex  " : "hidden h-0"} h-full transition-all duratin-500 origin-bottom  overflow-hidden shadow-md md:col-span-2  flex-col items-stretch justify-between`}>
                 {ChatBox &&  <BoxHeader id={ChatBox!.id || 0}  name={ChatBox!.name || "no user"} /> }
                  <MsgInputBox/>
            </div>
            {/* we render this message when there is not chat selected */}
            <h1 className={`${ChatBox && "hidden"} opacity-0 md:opacity-100 text-primary text-2xl font-bold absolute bottom-[50%] left-[50%] text-center`}>
                  Please select a person to talk to
            </h1>
      </div>
    </section>
  )
}
export default Messages