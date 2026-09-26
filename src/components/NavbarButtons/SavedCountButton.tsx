'use client'

import { WorkoutsContext } from '@/context/WorkoutsContext'
import { IExercise } from '@/types/workout.type';
import Link from 'next/link'
import { useContext } from 'react'

export default function SavedCountButton() {

  const { saved } = useContext(WorkoutsContext) as {
    saved: IExercise[];
  };

  return (
    <div>
        <Link href="/my-plan" className='hover:bg-[#1A1D23] hover:p-2 hover:rounded-2xl text-sm py-1 px-3 transition-all duration-400'>Saved<span className='border border-white px-3 ml-1 rounded-2xl'>{saved.length}</span></Link>
    </div>
  )
}
