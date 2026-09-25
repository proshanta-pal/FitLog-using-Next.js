'use client'

import { WorkoutsContext } from '@/context/WorkoutsContext'
import { IExercise } from '@/types/workout.type'
import { Dispatch, SetStateAction, useContext } from 'react'
import { LuBookMarked } from 'react-icons/lu'
import { toast, Zoom } from 'react-toastify'

export default function SavedButton({ exercise }: { exercise: IExercise }) {

  const {saved, setSaved } = useContext(WorkoutsContext) as {
    saved: IExercise[];
    setSaved: Dispatch<SetStateAction<IExercise[]>>;
  }

  const handleSavedButton = () => {

    const exists = saved.find(ex => ex.id === exercise.id);
    if(!exists){
        const newSaved = [...saved, exercise];
        setSaved(newSaved);
        toast.success(`Saved for later`, {
          position: "top-right",
          theme: "dark",
          transition: Zoom,
        });
      } else {
        toast.error(`Already in your saved list`, {
          position: "top-right",
          theme: "dark",
          transition: Zoom,
        });
    }
  }

  return (
    <button className="btn rounded-2xl border-gray-400 text-white hover:border-none md:w-auto"
    onClick={() => handleSavedButton()}>
        <LuBookMarked className="h-4 w-4" />
        Save for later
    </button>
  )
}
