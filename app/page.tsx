"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import {ChatBubbleOvalLeftIcon, HeartIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import Form from '../components/home/Form'
import homeImg from '../assets/images/home.jpeg'
import privacyImg from '../assets/images/privacy.png'
import secureImg from '../assets/images/securee.png'
import Features from '../components/home/Features'
import DateAdviceSection from '../components/home/DateAdviceSection'
import "../styles/globals.css"
import HomeFooter from '../components/home/HomeFooter'
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"

const HomePage = () => {
    const isLoggedIn = false;
    const router = useRouter();

    useEffect(()=>{
      // we need to route the user straight to /matches if she/he is logged in
      if(isLoggedIn) router.push("/matches");
    })
  return (
      <main className=''>
          <Image src={homeImg} alt="dating app home page" className="absolute top-0 left-0 w-screen h-screen -z-20" />
          <div className='py-8 px-2 sm:px-8 lg:px-32 mb-12 min-h-[75vh]'>
              <h1 className='font-extrabold text-4xl text-center text-gray-100 w-[350px] mb-4'>Find Real Love in Real Time at a Click</h1>
              <Form/>
              <div className='hidden absolute bottom-44 right-32 lg:flex items-center rounded-md bg-gray-100 w-90 h-16'>
                  <Image src={privacyImg} alt="privacy" className='h-full w-32'/>
                  <Image src={secureImg} alt="privacy" className='h-full w-44'/>
              </div>
          </div>
           <div className='h-28 bg-white flex items-center justify-around gap-2 px-2 sm:px-8 lg:px-32 '>
                   <div className='flex flex-col justify-center items-center -translate-y-10 gap-4'>
                       <div className='flex justify-center items-center w-12 h-12 rounded-full bg-primary group hover:bg-gray-100 duration-300'>
                           <UserPlusIcon className='h-6 w-6 text-gray-100 group-hover:text-primary'/> 
                       </div>
                       <h1 className='text-center text-sm lg:font-extrabold text-dark'>Sign Up and Get Started</h1>
                   </div>
                   <div className='flex flex-col justify-center items-center  -translate-y-10 gap-4'>
                       <div className='flex justify-center items-center w-12 h-12 rounded-full bg-primary group hover:bg-gray-100 duration-300'>
                           <ChatBubbleOvalLeftIcon className='h-6 w-6 text-gray-100 group-hover:text-primary'/> 
                       </div>
                       <h1 className='text-center text-sm lg:font-extrabold text-dark'>Unlock "Ready To Chat"</h1>
                   </div>
                   <div className='flex flex-col justify-center items-center  -translate-y-10 gap-4'>
                       <div className='group flex justify-center items-center w-12 h-12 rounded-full bg-primary hover:bg-gray-100 duration-300'>
                           <HeartIcon className='h-6 w-6 text-gray-100 group-hover:text-primary duration-300'/> 
                       </div>
                       <h1 className='text-center text-sm lg:font-extrabold text-dark'>Invite your match to date</h1>
                   </div>
           </div>
           <Features/>
           <DateAdviceSection />
           {/* scroll to the top button */}
           {
              /* <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className="absolute right-8 bottom-4 bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center">
                   <ArrowUpCircleIcon className="w-6 h-6 text-gray-900"/>
                 </button> */
            }
           <HomeFooter />
       </main>
  )
}
export default HomePage;