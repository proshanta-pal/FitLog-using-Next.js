'use client'

import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IExercise } from '@/types/workout.type';
import Link from 'next/link'
import { useContext } from 'react';

export default function PlanCountButton() {

  const { plans } = useContext(WorkoutsContext) as {
      plans: IExercise[]
  };

  return (
    <div>
        <Link href="/my-plan" className='hover:bg-[#1A1D23] hover:p-2 hover:rounded-2xl text-sm py-1 px-3 transition-all'>Plan <span className='bg-[#ccff00] px-3 ml-1 rounded-2xl text-black'>{plans.length}</span></Link>
    </div>
  )
}
