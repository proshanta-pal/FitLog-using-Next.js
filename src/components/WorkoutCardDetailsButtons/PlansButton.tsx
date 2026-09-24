'use client'

import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IExercise } from '@/types/workout.type';
import { Dispatch, SetStateAction, useContext } from 'react';
import { BiCalendarPlus } from 'react-icons/bi'
import { toast, Zoom } from 'react-toastify';

export default function PlaysButton({ exercise }: { exercise: IExercise }) {

  const { plans, setPlans } = useContext(WorkoutsContext) as {
    plans: IExercise[];
    setPlans: Dispatch<SetStateAction<IExercise[]>>
  };

  const handlePlansButton = () => {
    if(!plans.includes(exercise)){
      setPlans([...plans, exercise]);
      toast.success(`Added to today's plan`, {
        position: "top-right",
        theme: "dark",
        transition: Zoom,
      });
    } else {
      toast.error(`Already in your plan`, {
        position: "top-right",
        theme: "dark",
        transition: Zoom,
      });
    }
  }


  return (
    <button className="btn border-0 bg-[#ccff00] px-5 font-normal text-black hover:bg-[#ccff00da] md:w-auto"
    onClick={() => handlePlansButton()}>
        <BiCalendarPlus className="h-4 w-4" />
        Add to today&apos;s plan
    </button>
  )
}
