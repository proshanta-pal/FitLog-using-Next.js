import Link from 'next/link'
import React from 'react'

export default function EmptyPopup() {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center gap-4 py-10 bg-[#1A1D23] mt-5 mb-10 rounded-3xl'>
            <h3 className='uppercase text-lg'>Nothing here yet</h3>
            <p className='text-[#B5B7AD]'>Browse the library and add a lift to get today moving.</p>

            <Link href='/'>
                <button className='bg-[#ccff00] py-2 px-4 rounded-2xl text-black text-lg font-medium transition-all hover:bg-[#ccff00e7] cursor-pointer'>Go to Workouts</button>
            </Link>
        </div>
    </section>
  )
}
