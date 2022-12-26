import Image from 'next/image'
import React from 'react'
import exampleImg from '../../assets/images/home.jpeg'

type Props = {
    title:string
    date:string 
    image: string
    description:string
}

const AdviceCard = ({image, title, date, description}: Props) => {
  return (
    <div className='group rounded-md overflow-hidden shadow hover:shadow-lg duration-300 cursor-pointer bg-white '>
        <div className='w-full h-56 overflow-hidden'>
          <Image src={exampleImg} alt="a dating advice"  className="group-hover:scale-105 w-full h-full duration-300"/>
        </div>
        <div className='p-4'>
            <p className='text-gray-600/50 mb-2 text-sm'>{date}</p>
            <h1 className='font-extrabold text-xl mb-2 text-dark'>{title}</h1>
            <p className='text-sm text-gray-600' >{description}</p>
        </div>
    </div>
  )
}
export default AdviceCard