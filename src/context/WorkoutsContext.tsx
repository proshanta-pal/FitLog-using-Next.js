'use client'

import { createContext, ReactNode, useState } from "react"

export const WorkoutsContext = createContext({});


export default function WorkoutsProvider({ children }: { children: ReactNode}) {

  const [plans, setPlans] = useState([]);
  const [saved, setSaved] = useState([]);

  const sharedData = {
    plans, setPlans, saved, setSaved
  }



  return (
    <WorkoutsContext.Provider value={sharedData}>
        { children }
    </WorkoutsContext.Provider>
  )
}
