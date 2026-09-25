'use client'

import { IExercise } from '@/types/workout.type';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import Image from 'next/image';
import { IoTime } from 'react-icons/io5';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { IoIosStarOutline } from 'react-icons/io';
import { PiCheckBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import EmptyPopup from '../shared/EmptyPopup';

export default function PlanCard({ sortedPlans }: { sortedPlans: IExercise[]}) {

  const { plans, setPlans } = useContext(WorkoutsContext) as {
    plans: IExercise[];
    setPlans: Dispatch<SetStateAction<IExercise[]>>;
  };

  const handleRemovePlanWorkout = (exercise: IExercise) => {
    const restPlanWorkout = plans.filter(plan => plan.id !== exercise.id);
    setPlans(restPlanWorkout);
  }

  return (
    <section>
        <div>
            {
              sortedPlans.length !== 0 ? sortedPlans.map((exercise: IExercise) => {
                return (
                  <div key={exercise.id} 
                  className='bg-[#1A1D23] p-5 md:p-5 rounded-3xl flex flex-col md:flex-row justify-between md:items-center mb-5 md:mb-8'>
                    <div className='flex gap-5 flex-col md:flex-row'>
                      <Image src={exercise.image} alt={exercise.name} width={120} height={50}
                      className='rounded-3xl w-full object-cover'/>

                      <div className='space-y-2'>
                        <h3 className='text-2xl'>{exercise.name}</h3>
                        <p className='text-lg text-gray-400'>{exercise.equipment}</p>

                        <div className='flex gap-1 md:gap-5'>
                          <div className="flex items-center gap-2 w-21">
                            <span className="text-xl text-lime-400">
                                <IoTime />
                            </span>
                            <span>{exercise.duration} min</span>
                          </div>
      
                          
                          <div className="flex items-center gap-2 w-21">
                              <span className="text-xl text-lime-400">
                                  <FaFireFlameCurved />
                              </span>
                              <span>{exercise.caloriesBurned} kcal</span>
                          </div>
      
                          
                          <div className="flex items-center gap-2 w-21">
                              <span className="text-xl text-lime-400">
                                  <IoIosStarOutline />
                              </span>
                              <span>{exercise.rating}</span>
                          </div>
                        </div>
                      </div>
                      

                    </div>


                    <div className='flex flex-col md:flex-row gap-2 md:items-center my-2 md:gap-3'>
                      <Link href={`/exercise/${exercise.id}`}>
                        <button className='btn rounded-3xl border border-white transition-all hover:bg-[#1A1D23] hover:border-none '>View Details</button>
                      </Link>
                      <button className='btn rounded-3xl px-5 text-black bg-[#ccff00] transition-all hover:bg-[#ccff00dd] hover:border-none w-35'
                      onClick={() => handleRemovePlanWorkout(exercise)}>
                        <PiCheckBold />
                        Mark as Done
                      </button>
                      <button className='cursor-pointer'
                      onClick={() => handleRemovePlanWorkout(exercise)}><RxCross2 /></button>
                    </div>
                  </div>
                )
              }) : <EmptyPopup />
            }
        </div>
    </section>
  )
}
