'use client'

import { btnType, WorkoutsContext } from '@/context/WorkoutsContext';
import Plan from './Plan';
import Saved from './Saved';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

export default function WorkoutPlansTabs() {

  const { buttonType, setButtonType } = useContext(WorkoutsContext) as {
    buttonType: btnType;
    setButtonType: Dispatch<SetStateAction<btnType>>;
  };

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

                <select defaultValue="Duration" className="select">
                <option>Duration</option>
                <option>Calories</option>
                <option>Rating</option>
                </select>
            </fieldset>
        </div>

        <div>
            {
                buttonType === 'plan' ? <Plan /> : <Saved />
            }
        </div>

        
    </section>
    );
}
