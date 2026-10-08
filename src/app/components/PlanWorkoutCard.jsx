"use client";

import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "../context/WorkoutContext";

const PlanWorkoutCard = ({ workout, showDoneButton, type }) => {
  const { plan, setPlan, saved, setSaved } = useContext(WorkoutContext);

  const handleMarkAsDone = () => {
    const remainingWorkouts = plan.filter(
      (item) => item.id !== workout.id
    );

    setPlan(remainingWorkouts);
    toast.success("Workout marked as done");
  };

  const handleRemove = () => {
    if (type === "plan") {
      const remainingWorkouts = plan.filter(
        (item) => item.id !== workout.id
      );

      setPlan(remainingWorkouts);
      toast.success("Workout removed from today's plan");
    } else {
      const remainingWorkouts = saved.filter(
        (item) => item.id !== workout.id
      );

      setSaved(remainingWorkouts);
      toast.success("Workout removed from saved");
    }
  };

  return (
    <div className="bg-[#15191e] border border-[#292e35] rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4">
      <img
        src={workout.image}
        alt={workout.name}
        className="w-full md:w-28 h-32 md:h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-oswald text-xl font-bold uppercase">
          {workout.name}
        </h3>

        <p className="text-xs text-[#8d9198] mt-1">
          {workout.equipment}
        </p>

        <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#9ca0a8]">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="border border-[#4b5058] px-4 py-2 rounded-md text-xs font-semibold hover:border-[#b6ff00] hover:text-[#b6ff00] transition-colors"
        >
          VIEW DETAILS
        </Link>

        {showDoneButton && (
          <button
            onClick={handleMarkAsDone}
            className="bg-[#b6ff00] text-black px-4 py-2 rounded-md text-xs font-bold cursor-pointer hover:bg-[#9fe000] active:scale-95 transition-all"
          >
            MARK AS DONE
          </button>
        )}

        <button
          onClick={handleRemove}
          className="w-9 h-9 border border-[#4b5058] rounded-md text-[#9ca0a8] cursor-pointer hover:border-red-400 hover:text-red-400 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;