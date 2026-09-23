import { IExercise } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
import { BiCalendarPlus } from "react-icons/bi";
import { LuBookMarked } from "react-icons/lu";

interface WorkoutCardDetailsProps {
  exercise: IExercise;
}

export default function WorkoutCardDetails({ exercise }: WorkoutCardDetailsProps) {
  return (
    <div className="min-h-screen bg-[#0d0f13] p-4 md:p-6 lg:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[500px_1fr]">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl font-medium uppercase text-white md:text-3xl">
            {exercise.name}
          </h1>

          <p className="mt-3 max-w-lg text-sm font-thin text-gray-400 md:text-lg">
            {exercise.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge border-0 bg-[#ccff00] px-4 py-3 text-sm font-medium text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="card mt-5 overflow-hidden border w-122 border-[#292d35] bg-[#191c22] shadow-none">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr className="border-b border-[#292d35]">
                    <td className="w-1/2 text-xs font-bold uppercase text-gray-300">
                      Equipment
                    </td>
                    <td className="w-1/2 text-sm text-white md:text-base">
                      {exercise.equipment}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-xs font-bold uppercase text-gray-300">
                      Difficulty
                    </td>
                    <td className="text-sm text-white md:text-base">
                      {exercise.difficulty}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-xs font-bold uppercase text-gray-300">
                      Sets
                    </td>
                    <td className="text-sm text-white md:text-base">
                      {exercise.sets}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-xs font-bold uppercase text-gray-300">
                      Reps
                    </td>
                    <td className="text-sm text-white md:text-base">
                      {exercise.reps}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-xs font-bold uppercase text-gray-300">
                      Duration
                    </td>
                    <td className="text-sm text-white md:text-base">
                      {exercise.duration} min
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-xs font-bold uppercase text-gray-300">
                      Calories
                    </td>
                    <td className="text-sm text-white md:text-base">
                      {exercise.caloriesBurned} kcal
                    </td>
                  </tr>

                  <tr>
                    <td className="text-xs font-bold uppercase text-gray-300">
                      Rating
                    </td>
                    <td className="text-sm text-white md:text-base">
                      {exercise.rating}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-medium uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-4">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-200 md:text-lg"
                >
                  <span className="shrink-0 font-thin text-white">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn border-0 bg-[#ccff00] px-5 font-thin text-black hover:bg-[#ccff00da]">
              <BiCalendarPlus className="h-4 w-4" />
              Add to today&apos;s plan
            </button>

            <button className="btn btn-outline border-gray-400 text-white rounded-2xl hover:border-none ">
              <LuBookMarked className="h-4 w-4" />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
