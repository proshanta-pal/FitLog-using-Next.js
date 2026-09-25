'use client'

import { createContext, ReactNode, useState } from "react"

export const WorkoutsContext = createContext({});

export type btnType = 'plan' | 'saved';

export default function WorkoutsProvider({ children }: { children: ReactNode}) {

  const [plans, setPlans] = useState([]);
  const [saved, setSaved] = useState([]);
  const [buttonType, setButtonType] = useState<btnType>('plan');

  const sharedData = {
    plans, setPlans, saved, setSaved, buttonType, setButtonType
  }



  return (
    <WorkoutsContext.Provider value={sharedData}>
        { children }
    </WorkoutsContext.Provider>
  )
}
