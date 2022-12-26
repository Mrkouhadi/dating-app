
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <main className='h-screen bg-gray-300 flex justify-center items-center'>
        <div className='loading loading-1'></div>
        <div className='loading loading-2'></div>
        <div className='loading loading-3'></div>
        <div className='loading loading-4'></div>
    </main>
  )
}

export default loading