'use client'

import { btnType, WorkoutsContext } from "@/context/WorkoutsContext";
import { IExercise } from "@/types/workout.type";
import React, { useContext } from "react";

export default function MetricsCard() {

  const { plans, buttonType, saved } = useContext(WorkoutsContext) as {
    plans: IExercise[];
    buttonType: btnType;
    saved: IExercise[];
  };

  const exercises = buttonType === 'plan' ? plans : saved;
  const totalTime = exercises.reduce((total, ex) => total + ex.duration, 0);
  const totalCalories = exercises.reduce((total, ex) => total + ex.caloriesBurned, 0);

  return (
    <div className="card my-8 overflow-hidden rounded-3xl border border-[#2A2D34] bg-[#1A1D23] shadow-none">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="px-8 py-5">
          <p className="text-xl text-[#92919A]">Exercises</p>

          <h3 className="mt-3 text-5xl font-bold leading-none text-[#CCFF00]">
            {exercises.length}
          </h3>
        </div>

        <div className="border-t border-dashed border-[#30333A] px-8 py-5 md:border-l md:border-t-0">
          <p className="text-xl text-[#92919A]">Minutes</p>

          <h3 className="mt-3 text-5xl font-bold leading-none text-white">
            {totalTime}
          </h3>
        </div>

        <div className="border-t border-dashed border-[#30333A] px-8 py-5 md:border-l md:border-t-0">
          <p className="text-xl text-[#92919A]">Calories</p>

          <h3 className="mt-3 text-5xl font-bold leading-none text-white">
            {totalCalories}
          </h3>
        </div>
      </div>
    </div>
  );
}
