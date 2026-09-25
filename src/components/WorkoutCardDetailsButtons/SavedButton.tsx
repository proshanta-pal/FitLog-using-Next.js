'use client'

import { WorkoutsContext } from '@/context/WorkoutsContext'
import { IExercise } from '@/types/workout.type'
import { Dispatch, SetStateAction, useContext } from 'react'
import { LiaBookmarkSolid } from 'react-icons/lia'
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
        <LiaBookmarkSolid className="h-6 w-4" />
        Save for later
    </button>
  )
}
