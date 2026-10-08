import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const workouts = await response.json();

  return (
    <section id="library" className="bg-[#0b0e12] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
          THE LIBRARY
        </h2>

        <p className="mt-3 text-[#9ca0a8]">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkoutLibrary;