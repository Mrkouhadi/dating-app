import { ArchiveBoxIcon, CameraIcon, EnvelopeIcon, FlagIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import imgProfile from '../../assets/images/profile.png'
type Props = {}
const msgExample = "Hi buddy ! I have already booked the trip tickets, don't forget to pack your stuff"

const ContactItem = (props: Props) => {
  return (
    <div className='p-1 bg-gray-50 hover:bg-white hover:border-l-8 border-l-secondary duration-300 border-b-2 cursor-pointer'>
        <div className='flex items-center pt-2 mb-3'>
            <Image src={imgProfile} alt="clickdate user" className='rounded-full w-12 h-12 mr-2'/>
            <div className='flex-1'>
                <h1 className='font-extrabold text-md tracking-wide'>Xavier Hernandez</h1>
                <p className='text-sm  text-gray-500'>{msgExample.substring(0,70)}...</p>
            </div>
            <div className='flex self-start flex-col items-end justify-start gap-4'>
                <p className='text-primary text-sm '>Online Now</p>
                <span className='self-center flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-dark text-sm'>34</span>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <StarIcon className='cursor-pointer h-5 w-5 text-gray-300 hover:text-dark duration-300'/>
                <TrashIcon className='cursor-pointer h-5 w-5 text-gray-300 hover:text-dark duration-300'/>
                <CameraIcon className='cursor-pointer h-5 w-5 text-gray-300 hover:text-dark duration-300'/>
            </div>
            <div className='flex gap-4 items-center'>
                <EnvelopeIcon className='cursor-pointer h-5 w-5 text-gray-300 hover:text-dark duration-300'/>
                <FlagIcon className='cursor-pointer h-5 w-5 text-gray-300 hover:text-dark duration-300'/>
                <ArchiveBoxIcon className='cursor-pointer h-5 w-5 text-gray-300 hover:text-dark duration-300'/>
            </div>
        </div>
    </div>
  )
}

export default ContactItem