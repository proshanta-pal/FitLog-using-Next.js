import WorkoutCardDetails from '@/components/shared/WorkoutCardDetails';
import { getWorkoutData } from '@/lib/apps';
import { IExercise } from '@/types/workout.type';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exercise | FitLog',
  description: "Details page for each exercise or workout",
};

interface ExerciseDetailsPageProps{
    params: Promise<{
        id: string;
    }>
}

export default async function ExerciseDetailsPage({ params }: ExerciseDetailsPageProps) {

  const { id } = await params;

  const workoutData: IExercise[] = await getWorkoutData();
  const exercise = workoutData.find((ex: IExercise) => ex.id === parseInt(id)) as IExercise;

  return (
    <section>
        <WorkoutCardDetails key={exercise.id} exercise={exercise}/>
    </section>
  )
}
