import { FaceSmileIcon, FireIcon, PaperClipIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const MsgInputBox = (props: Props) => {
  return (
        <form className='w-full h-32 p-2 bg-gray-100'>
            <textarea className='outline-none border-none tracking-widest px-4 py-2 w-full h-[75%] rounded-lg resize-none'  placeholder='Type your message here'/>
            
            <div className='px-2  w-full flex justify-between items-center'>
              <div className='flex justify-between items-center w-24'>
                    <FaceSmileIcon className='cursor-pointer h-5 w-5 text-dark duration-300 hover:scale-110'/>
                    <PaperClipIcon className='-rotate-45 cursor-pointer h-5 w-5 text-dark duration-300 hover:scale-110'/>
                    <FireIcon className='cursor-pointer h-5 w-5 text-dark duration-300 hover:scale-110'/>
              </div>
              <PaperAirplaneIcon className='text-secondary cursor-pointer h-5 w-5 duration-300 hover:scale-110'/>
            </div>

        </form>
  )
}

export default MsgInputBox