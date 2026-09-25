import MetricsCard from '@/components/MyPlanCards/MetricsCard';
import WorkoutPlansTabs from '@/components/MyPlanCards/WorkoutPlansTabs';

export default function MyPlanPage() {

  

  return (
    <section className='mx-5'>
        <div className="mx-auto max-w-7xl">
            <div className="space-y-3 mt-5">
                <h2 className="text-3xl font-medium uppercase text-white">
                    My Plan
                </h2>

                <p className="text-xl font-thin text-[#B5B7AD]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            
            <MetricsCard />
            <WorkoutPlansTabs />

            </div>
    </section>
  )
}
