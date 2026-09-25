import { IExercise } from "@/types/workout.type";
import Image from "next/image";
import PlaysButton from "../WorkoutCardDetailsButtons/PlansButton";
import SavedButton from "../WorkoutCardDetailsButtons/SavedButton";

interface WorkoutCardDetailsProps {
  exercise: IExercise;
}

export default function WorkoutCardDetails({ exercise }: WorkoutCardDetailsProps) {
  return (
    <div className="min-h-screen bg-[#0d0f13] p-4 sm:p-5 md:p-6 lg:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-10">
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={500}
            height={700}
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex w-full flex-col">
          <h1 className="text-2xl font-medium uppercase text-white sm:text-3xl lg:text-4xl">
            {exercise.name}
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 font-normal text-gray-400 sm:text-base lg:text-lg">
            {exercise.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge border-0 bg-[#ccff00] px-3 py-1.5 text-xs font-medium text-black sm:px-4 sm:py-2 sm:text-sm"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="card mt-5 w-full max-w-2xl overflow-hidden border border-[#292d35] bg-[#191c22] shadow-none">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr className="border-b border-[#292d35]">
                    <td className="w-1/2 text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Equipment
                    </td>
                    <td className="w-1/2 text-xs text-white sm:text-sm lg:text-base">
                      {exercise.equipment}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Difficulty
                    </td>
                    <td className="text-xs text-white sm:text-sm lg:text-base">
                      {exercise.difficulty}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Sets
                    </td>
                    <td className="text-xs text-white sm:text-sm lg:text-base">
                      {exercise.sets}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Reps
                    </td>
                    <td className="text-xs text-white sm:text-sm lg:text-base">
                      {exercise.reps}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Duration
                    </td>
                    <td className="text-xs text-white sm:text-sm lg:text-base">
                      {exercise.duration} min
                    </td>
                  </tr>

                  <tr className="border-b border-[#292d35]">
                    <td className="text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Calories
                    </td>
                    <td className="text-xs text-white sm:text-sm lg:text-base">
                      {exercise.caloriesBurned} kcal
                    </td>
                  </tr>

                  <tr>
                    <td className="text-[10px] font-bold uppercase text-gray-300 sm:text-xs">
                      Rating
                    </td>
                    <td className="text-xs text-white sm:text-sm lg:text-base">
                      {exercise.rating}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-xl font-medium uppercase text-white sm:text-2xl">
              Instructions
            </h2>

            <ol className="mt-4 space-y-4">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-200 sm:text-base lg:text-lg"
                >
                  <span className="shrink-0 font-normal text-white">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <PlaysButton exercise={exercise}/>

            <SavedButton exercise={exercise} />
          </div>
        </div>
      </div>
    </div>
  );
}
