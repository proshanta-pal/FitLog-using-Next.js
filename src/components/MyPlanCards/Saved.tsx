'use client'

import { IExercise } from '@/types/workout.type';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import Image from 'next/image';
import { IoTime } from 'react-icons/io5';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { IoIosStarOutline } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import EmptyPopup from '../shared/EmptyPopup';
import { toast, Zoom } from 'react-toastify';

export default function PlanCard({ sortedSaved } : { sortedSaved: IExercise[]}) {

  const { saved, setSaved } = useContext(WorkoutsContext) as {
    saved: IExercise[];
    setSaved: Dispatch<SetStateAction<IExercise[]>>;
  };

  const handleRemoveSavedWorkout = (exercise: IExercise) => {
    const restSavedWorkout = saved.filter(save => save.id !== exercise.id);
    setSaved(restSavedWorkout);
    toast.success(`Removed from saved`, {
      position: "top-right",
      theme: "dark",
      transition: Zoom
    });
  }

  return (
    <section>
        <div>
            {
              sortedSaved.length !== 0 ? sortedSaved.map((exercise: IExercise) => {
                return (
                  <div key={exercise.id} 
                  className='bg-[#1A1D23] p-5 rounded-3xl flex justify-between items-center mb-8'>
                    <div className='flex gap-5'>
                      <Image src={exercise.image} alt={exercise.name} width={120} height={50}
                      className='rounded-3xl'/>

                      <div className='space-y-2'>
                        <h3 className='text-2xl'>{exercise.name}</h3>
                        <p className='text-lg text-gray-400'>{exercise.equipment}</p>

                        <div className='flex gap-5'>
                          <div className="flex items-center gap-2">
                            <span className="text-xl text-lime-400">
                                <IoTime />
                            </span>
                            <span>{exercise.duration} min</span>
                          </div>
      
                          
                          <div className="flex items-center gap-2">
                              <span className="text-xl text-lime-400">
                                  <FaFireFlameCurved />
                              </span>
                              <span>{exercise.caloriesBurned} kcal</span>
                          </div>
      
                          
                          <div className="flex items-center gap-2">
                              <span className="text-xl text-lime-400">
                                  <IoIosStarOutline />
                              </span>
                              <span>{exercise.rating}</span>
                          </div>
                        </div>
                      </div>
                      

                    </div>


                    <div className='flex items-center gap-3'>
                      <Link href={`/exercise/${exercise.id}`}>
                        <button className='btn rounded-3xl border border-white transition-all hover:bg-[#1A1D23] hover:border-none '>View Details</button>
                      </Link>
                      <button className='cursor-pointer'
                      onClick={() => handleRemoveSavedWorkout(exercise)}><RxCross2 /></button>
                    </div>
                  </div>
                )
              }) : <EmptyPopup />
            }
        </div>
    </section>
  )
}
