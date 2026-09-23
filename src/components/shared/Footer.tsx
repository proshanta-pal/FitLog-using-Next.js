import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-[#1A1D23] px-3'>
        <div className='flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between max-w-7xl mx-auto py-10'>
            <div className='flex items-center gap-2'>
                <Image src={Logo} alt='FitLog Logo'/>
                <Link href="/" className='uppercase font-bold text-xl'>FitLog</Link>
            </div>

            <div>
                <p className='font-medium text-md text-[#B5B7AD]'>&copy; 2026 FitLog - Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    </footer>
  )
}
