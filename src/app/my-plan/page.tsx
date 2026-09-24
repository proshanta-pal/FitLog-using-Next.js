import Link from 'next/link'
import React from 'react'

export default function MyPlanPage() {
  return (
    <section className='mx-5'>
        <div className="mx-auto max-w-7xl">
            <div className="space-y-3 mt-5">
                <h2 className="text-3xl font-medium uppercase text-white">
                    My Plan
                </h2>

                <p className="text-xl font-thin text-[#B5B7AD]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            
            <div className="card my-8 overflow-hidden rounded-3xl border border-[#2A2D34] bg-[#1A1D23] shadow-none">
                <div className="grid grid-cols-1 md:grid-cols-3">                    
                    <div className="px-8 py-5">
                        <p className="text-xl text-[#92919A]">
                            Exercises
                        </p>

                        <h3 className="mt-3 text-5xl font-bold leading-none text-[#CCFF00]">
                            0
                        </h3>
                    </div>

                    <div className="border-t border-dashed border-[#30333A] px-8 py-5 md:border-l md:border-t-0">
                        <p className="text-xl text-[#92919A]">
                            Minutes
                        </p>

                        <h3 className="mt-3 text-5xl font-bold leading-none text-white">
                            0
                        </h3>
                    </div>

                    <div className="border-t border-dashed border-[#30333A] px-8 py-5 md:border-l md:border-t-0">
                        <p className="text-xl text-[#92919A]">
                            Calories
                        </p>

                        <h3 className="mt-3 text-5xl font-bold leading-none text-white">
                            0
                        </h3>
                    </div>
                </div>
            </div>


            <div className='flex md:justify-between flex-col md:flex-row md:items-center'>
                <div className="tabs tabs-box w-37">
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Today's Plan" defaultChecked/>
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Saved" />
                </div>


                <fieldset className="fieldset mb-3">
                    <legend className="fieldset-legend">Sort By</legend>
                    <select defaultValue="Pick a browser" className="select">
                        <option>Duration</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>
                </fieldset>
            </div>

            <div className='flex flex-col items-center gap-4 py-10 bg-[#1A1D23] mt-5 mb-10 rounded-3xl'>
                <h3 className='uppercase text-lg'>Nothing here yet</h3>
                <p className='text-[#B5B7AD]'>Browse the library and add a lift to get today moving.</p>

                <Link href='/'>
                    <button className='bg-[#ccff00] py-2 px-4 rounded-2xl text-black text-lg font-medium transition-all hover:bg-[#ccff00e7] cursor-pointer'>Go to Workouts</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
