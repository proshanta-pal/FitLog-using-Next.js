import React from 'react'
import BannerImg from '@/assets/banner.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <section className='max-w-7xl mx-auto bg-[#1A1D23] py-10 px-10 border border-gray-800 rounded-3xl grid grid-cols-1 items-center gap-5 lg:grid-cols-2'>
        <div className='space-y-5'>
            <h3 className='text-[#ccff00] uppercase text-sm font-medium'>Workout Library</h3>
            <h1 className='text-4xl lg:text-6xl leading-tight uppercase'>Train with intent. <br /> Log every set.</h1>
            <p className='text-[#B5B7AD] text-lg font-medium lg:max-w-100'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.</p>

            <Link href='#library'>
                <button className='bg-[#ccff00] py-2 px-4 rounded-2xl text-black text-lg font-medium transition-all hover:bg-[#ccff00e7] cursor-pointer'>Browse Workouts</button>
            </Link>
        </div>

        <div>
            <Image src={BannerImg} alt='Banner Image' width={500} height={400}></Image>
        </div>


    </section>
  )
}
