import React from 'react'
import Image from 'next/image'
import datenewsLogo from '../../assets/images/datingnews.png'
import dateadviceLogo from '../../assets/images/datingadvice.png'

const HomeFooter = () => {
return <section className=''>
<div className='bg-white py-12 px-2 sm:px-8 lg:px-32 '>
    <h1 className='text-dark text-3xl font-extrabold text-center mb-12'>Featured on </h1>
    <div className='flex justify-center gap-24 items-center'>
        <Image src={datenewsLogo} alt="Dating news" className='w-24 h-16 md:w-32 md:h-24'/>
        <Image src={dateadviceLogo} alt="dating advice" className='w-24 h-16 md:w-32 md:h-24'/>
    </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 text-gray-400 px-2 md:px-12 lg:px-32 bg-[#333333] py-4 '>
    <div className=''>
      <h1 className='font-bold text-lg tracking-wide mb-8 text-white text-center md:text-left'>Clickdate dating</h1>
      <div className='flex justify-around md:justify-between'>
        <ul className='flex flex-col gap-2 tracking-wide text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Single Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">India Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">African Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Asian Dating</li>
        </ul>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Black Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Blonde Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">American Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">European Dating</li>
        </ul>
    </div>
    </div>

    <div className=''>
      <h1 className='font-bold text-lg tracking-wide mb-8 text-white text-center md:text-left'>Clickdate dating</h1>
      <div className='flex justify-around md:justify-between'>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Single Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">India Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">African Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Asian Dating</li>
        </ul>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Black Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Blonde Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">American Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">European Dating</li>
        </ul>
    </div>
    </div>
    <div className=''>
      <h1 className='font-bold text-lg tracking-wide mb-8 text-white text-center md:text-left'>Clickdate dating</h1>
      <div className='flex justify-around md:justify-between'>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Single Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">India Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">African Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Asian Dating</li>
        </ul>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Black Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Blonde Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">American Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">European Dating</li>
        </ul>
    </div>
    </div>
    <div className=''>
      <h1 className='font-bold text-lg tracking-wide mb-8 text-white text-center md:text-left'>Clickdate dating</h1>
      <div className='flex justify-around md:justify-between'>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Single Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">India Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">African Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Asian Dating</li>
        </ul>
        <ul className='flex flex-col gap-2 tracking-wide  text-sm'>
          <li className="hover:text-white duration-300  cursor-pointer">Black Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">Blonde Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">American Dating</li>
          <li className="hover:text-white duration-300  cursor-pointer">European Dating</li>
        </ul>
    </div>
    </div>
  </div>
</section>
}

export default HomeFooter