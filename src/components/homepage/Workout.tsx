import { getWorkoutData } from '@/lib/apps'
import WorkoutCard from '../shared/WorkoutCard';
import { IExercise } from '@/types/workout.type';

export default async function Workout() {

  const workoutData = await getWorkoutData();

  return (
    <main className='max-w-7xl mx-auto mt-12' id='library'>
        <div className='space-y-3'>
            <h2 className='uppercase text-5xl'>THe Library</h2>
            <p className='text-xl font-medium text-[#B5B7AD]'>Twelve lifts covering every major muscle group.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-5'>
            {
                workoutData.map((exercise: IExercise) => <WorkoutCard key={exercise.id} exercise={exercise}/>)
            }
        </div>

    </main>
  )
}
