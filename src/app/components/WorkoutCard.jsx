import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block bg-[#15191e] border border-[#292e35] rounded-xl overflow-hidden"
    >
      <img
        src={workout.image}
        alt={workout.name}
        className="w-full h-[210px] object-cover"
      />

      <div className="px-5 pt-5 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-[#b6ff00] text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="font-oswald text-[20px] font-bold uppercase leading-tight text-white">
          {workout.name}
        </h3>

        <p className="text-[#8d9198] text-xs mt-2">
          {workout.equipment}
        </p>

        <div className="border-t border-[#292e35] mt-5 pt-4 flex items-center gap-6 text-[11px] text-[#9ca0a8]">
          <span className="flex items-center gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9 6 6 8.5 6 13a6 6 0 0 0 12 0c0-3-1.5-5.5-4-8 .2 3-1 4.5-2 5.5C11 8 11 5 12 2Z" />
            </svg>

            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>

            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;