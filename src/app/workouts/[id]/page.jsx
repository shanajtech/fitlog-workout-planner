import { notFound } from "next/navigation";
import WorkoutActions from "../../components/WorkoutActions";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );
if (!response.ok) {
  notFound();
}
  const workout = await response.json();

  return (
    <main className="min-h-screen bg-[#0b0e12] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover rounded-xl"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#b6ff00] text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight">
              {workout.name}
            </h1>

            <p className="mt-4 text-[#9ca0a8] text-sm md:text-base leading-7">
              {workout.description}
            </p>

            <div className="bg-[#15191e] border border-[#292e35] rounded-xl p-5 mt-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Equipment
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.equipment}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Difficulty
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.difficulty}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Sets
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.sets}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Reps
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.reps}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Duration
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.duration} min
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Calories
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.caloriesBurned} kcal
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777c84] uppercase">
                    Rating
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    ★ {workout.rating}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-oswald text-2xl font-bold uppercase">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm text-[#b1b4ba] leading-6"
                  >
                    <span className="font-bold">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;