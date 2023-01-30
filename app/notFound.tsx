
import Link from 'next/link'
import React from 'react'

type Props = {}

const notFound = (props: Props) => {
  return (
    <main className='h-screen bg-gray-200 flex justify-center items-center'>
        <h1 className='text-2xl font-extrabold tracking-widest'>
            This Page either has not been Created yet, or does not exist !
        </h1>
        <Link href="/" className='btn-primary bg-dark text-white'>
            Home
        </Link>
    </main>
  )
}

export default notFound