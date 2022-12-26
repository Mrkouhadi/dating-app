"use client"
import Image from 'next/image';
import {ChevronDownIcon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useState } from 'react';

// List of links will be rendered in nav element
const navLinks = ['Matches', 'Dates', 'Messages', 'Discovery'];

// tsx
const Nav = ():any => {
  const isLoggedIn = true;
  const [isOpen, setIsOpen] = useState(false)

  const activeClass = 'translate-y-[-4px] text-primary';

    if (isLoggedIn) {
      return <header className='shadow'>
                <nav className='bg-white flex justify-between items-center h-12 px-2 md:px-8 lg:px-32'>
                    {/* logo to be added later as an SVG or PNG */}
                    <Link href="/" >
                      <h1 className="font-extrabold text-2xl text-primary mr-4">ClickDate</h1>
                    </Link>

                    {/* (nav 1) when it hits the smallest breakpoint, this menu will be off and the one below (nav 2) will be on*/}
                    <ul className="hidden sm:flex items-center flex-1 gap-4 ml-4 md:ml-8">
                      {navLinks.map((L, I) => <Link href={`/${L.toLocaleLowerCase()}`} key={I}> <li className="cursor-pointer text-dark hover:text-primary text-sm  md:text-lg md:tracking-wide hover:translate-y-[-4px] transition-all duration-300">{L}</li></Link>)}
                    </ul>

                    {/*(profile) responsible for showing the links */}
                    <div className="flex items-center gap-2">
                        <Image src={`https://picsum.photos/id/64/300/300`}
                           width={300} height={400} alt="clickdate" className='w-10 h-10 rounded-full'/>

                        <p onClick={()=>setIsOpen(!isOpen)}  className="cursor-pointer text-dark hover:text-primary duration-300 text-sm md:text-lg">{"Kouhadi Bryan".substring(0,15)}</p>
                        {!isOpen ? <ChevronDownIcon onClick={()=>setIsOpen(true)} className="cursor-pointer h-5 w-5 lg:h-6 lg:w-6 text-primary"/>
                                 : <XMarkIcon onClick={()=>setIsOpen(false)} className='cursor-pointer h-5 w-5 lg:h-6 lg:w-6 text-primary'/>
                        }
                    </div>

                    {/* (nav 2) when it hits the phone breakpoints, this menue will be on, and the one above (nav 1) will be off */}
                    <div className={`sm:hidden ${isOpen ? "visible":"invisible" } fixed z-50 top-0 right-0 w-screen h-screen`}>
                      <XMarkIcon onClick={()=>setIsOpen(false)} className='fixed top-3 right-2 cursor-pointer h-8 w-8 text-primary'/>
                      <ul className={`${isOpen ? "h-full":"h-0"} transition-all duration-500 flex w-screen flex-col items-center justify-center gap-12 bg-gray-200 overflow-hidden `}>
                        {navLinks.map((L, I) => <Link href={`/${L.toLocaleLowerCase()}`} onClick={()=>setIsOpen(false)} key={I}> 
                                                   <li className="cursor-pointer text-dark text-xl font-bold tracking-widest">{L}</li>
                                                </Link>
                        )}
                        <Link href="/account" onClick={()=>setIsOpen(false)}> <li className="cursor-pointer text-dark text-xl font-bold tracking-widest">Account</li></Link>
                        <button onClick={()=>setIsOpen(false)} className='bg-secondary px-6 py-2 rounded-md text-gray-100 text-lg'>Log Out</button>
                      </ul>
                    </div>
                    {/* account setting links available only in the SM breakpoint */}
                    <ul onMouseLeave={()=>setIsOpen(false)} className={`hidden sm:flex overflow-hidden w-40 ${ isOpen? "h-48 " : "h-0" } bg-white shadow-md duration-500 transition-all flex-col items-center justify-around rounded-b-md top-12 right-8 lg:right-32 absolute z-50 `}>
                        <Link href="/account"> <li className="hover:text-primary duration-300 cursor-pointer text-dark text-xl font-bold tracking-widest">Account</li></Link>
                        <Link href="/account"> <li className="hover:text-primary duration-300 cursor-pointer text-dark text-xl font-bold tracking-widest">Insights</li></Link>
                        <button onClick={()=>setIsOpen(false)} className='bg-secondary px-6 py-2 rounded-md text-gray-100 text-lg duration-300 hover:bg-red-500 hover:text-white'>Log Out</button>
                    </ul>
                </nav>
            </header>
    }
  if(!isLoggedIn) return <header className='bg-dark '>
                            <nav className='flex justify-between items-center h-12 px-2 sm:px-8 lg:px-32'>
                              {/* logo to be added later as an SVG or PNG */}
                              <Link href="/">
                                  <h1 className="font-extrabold text-2xl text-primary mr-4">ClickDate</h1>
                              </Link>                              
                              <div className='flex items-center gap-1 md:gap-2'>
                                <p className='text-gray-200 text-sm'>Already a member ? </p>
                                <button className='btn-accent text-sm tracking-widest'>Login</button>
                              </div>
                            </nav>
                         </header>
}
export default Nav;