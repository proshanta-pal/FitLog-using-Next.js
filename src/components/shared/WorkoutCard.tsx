import { IExercise } from '@/types/workout.type';
import Image from 'next/image';
import React from 'react'
import { FaFireFlameCurved } from 'react-icons/fa6';
import { IoIosStarOutline } from 'react-icons/io';
import { IoTime } from 'react-icons/io5';

interface WorkOutCardProps {
    exercise: IExercise;
}

export default function WorkoutCard({ exercise }: WorkOutCardProps) {
  return (
    <div className="card w-full max-w-md overflow-hidden rounded-2xl hover:border hover:border-lime-400/70 bg-[#191c22] shadow-none cursor-pointer">
        
        <figure className="h-60 overflow-hidden">
            <Image
                src={exercise.image}
                alt={exercise.name}
                width={500}
                height={400}
                className="h-full w-full object-cover"
            />
        </figure>

        
        <div className="card-body gap-0 p-6">
            <div className="mb-5 flex flex-wrap gap-2">
                {exercise.muscleGroups.map((muscle) => (
                <span
                    key={muscle}
                    className="badge border-0 bg-lime-400 px-4 py-3 text-sm font-medium text-black"
                >
                    {muscle}
                </span>
                ))}
            </div>

        
            <h2 className="mb-3 text-2xl font-extrabold uppercase tracking-wide text-white">
                {exercise.name}
            </h2>

            
            <p className="mb-5 text-base text-gray-400">
                {exercise.equipment}
            </p>

        
            <div className="flex items-center gap-5 text-gray-200">
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
  );
}
