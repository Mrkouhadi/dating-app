import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react'

type Props = {}

const Form = (props: Props) => {
  return (
    <form className='rounded-md p-4 bg-gray-100 w-[350px] shadow-md flex flex-col gap-4 justify-center'>
       <div className='flex justify-between items-center'>
            <div className='flex-[.47]'>
                <h2 className='font-bold text-gray-600 mb-4'>I am a :</h2>
                <label htmlFor="radio-man"  className=' cursor-pointer group mb-2 hover:bg-accent border  border-accent flex items-center justify-around rounded-lg  gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-1" id="radio-man" className='bg-primary h-6 w-6 cursor-pointer' />
                    <p className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Man</p>
                </label>
                <label htmlFor="radio-woman" className='cursor-pointer  group hover:bg-accent border border-accent flex items-center justify-around rounded-lg  gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-1" id="radio-woman" className='bg-primary h-6 w-6 cursor-pointer' />
                    <p className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Woman</p>
                </label>
            </div>
            <div className='flex-[.47]'>
                <h2 className='font-bold text-gray-600 mb-4'>I am looking for a :</h2>
                <label htmlFor="radio-man-2" className='cursor-pointer  group mb-2 hover:bg-accent border border-accent flex items-center justify-around rounded-lg  gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-2" id="radio-man-2" className='bg-primary h-6 w-6 cursor-pointer' />
                    <p className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Man</p>
                </label>
                <label htmlFor="radio-woman-2" className=' cursor-pointer  group hover:bg-accent border border-accent flex items-center justify-around rounded-lg gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-2" id="radio-woman-2" className='bg-primary h-6 w-6 cursor-pointer' />
                    <p className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Woman</p>
                </label>
            </div>
       </div> 
       <label className='border border-accent rounded-md relative gap-2'>
            <UserIcon className='h-6 w-6 text-accent absolute top-2 left-2'/>
            <input type="text"  className='bg-transparent  w-full h-full pl-10 p-2 rounded-md placeholder:italic placeholder:text-slate-400 ' placeholder="First and Last Names"/>
       </label>
       <label className='border border-accent rounded-md relative gap-2'>
            <EnvelopeIcon className='h-6 w-6 text-accent absolute top-2 left-2'/>
            <input type="text"  className='bg-transparent  w-full h-full pl-10 p-2 rounded-md placeholder:italic placeholder:text-slate-400 ' placeholder="Your Email"/>
       </label>
       <label className='border border-accent rounded-md relative gap-2'>
            <UserIcon className='h-6 w-6 text-accent absolute top-2 left-2'/>
            <input type="password"  className='bg-transparent  w-full h-full pl-10 p-2 rounded-md placeholder:italic placeholder:text-slate-400 ' placeholder="Password"/>
       </label>
        <button className='btn-primary w-full hover:translate-y-[-2px] duration-300'>Register Now for Free</button>
        <button className='btn-secondary w-full hover:translate-y-[-2px] duration-300 flex items-center justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
            Sign in With Facebook
        </button>
    </form>
  )
}
export default Form;