'use client'

import { btnType, WorkoutsContext } from '@/context/WorkoutsContext';
import Plan from './Plan';
import Saved from './Saved';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { IExercise } from '@/types/workout.type';

export type SortBy = 'duration' | 'calories' | 'rating';

export default function WorkoutPlansTabs() {

  const { plans, saved, buttonType, setButtonType } = useContext(WorkoutsContext) as {
    plans: IExercise[];
    saved: IExercise[];
    buttonType: btnType;
    setButtonType: Dispatch<SetStateAction<btnType>>;
  };

  const [sortBy, setSortBy] = useState<SortBy>('duration');

  const sortWorkouts = (exercises: IExercise[]) => {
    const sortedWorkouts = [...exercises];

    if(sortBy === 'duration'){
        sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if(sortBy === 'calories'){
        sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else if(sortBy === 'rating'){
        sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  }

  const sortedPlans = sortWorkouts(plans);
  const sortedSaved = sortWorkouts(saved);


  const handleButton = (type: btnType) => {
    setButtonType(type);
  }

  return (
    <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
                <button onClick={() => handleButton('plan')} className={`btn btn-active ${buttonType === 'plan' ? 'btn-success' : ''} rounded-r-none`}>Today&apos;s plan</button>

                <button onClick={() => handleButton('saved')} className={`btn btn-active ${buttonType === 'saved' ? 'btn-success' : ''} rounded-l-none`}>Saved</button>
            </div>


            <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend">
                Sort By
                </legend>

                <select 
                className="select"
                value={sortBy}
                onChange={ e => setSortBy(e.target.value as SortBy)}>
                <option value={'duration'}>Duration</option>
                <option value={'calories'}>Calories</option>
                <option value={'rating'}>Rating</option>
                </select>
            </fieldset>
        </div>

        <div>
            {
                buttonType === 'plan' ? <Plan sortedPlans={sortedPlans}/> : <Saved sortedSaved={sortedSaved}/>
            }
        </div>

        
    </section>
    );
}
