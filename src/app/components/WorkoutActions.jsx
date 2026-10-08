"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "../context/WorkoutContext";

const WorkoutActions = ({ workout }) => {
  const { plan, setPlan, saved, setSaved } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    const alreadyAdded = plan.find((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.error("Workout already added to today's plan");
      return;
    }

    setPlan([...plan, workout]);
    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    const alreadySaved = saved.find((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.error("Workout already saved");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Workout saved for later");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
      <button
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 bg-[#b6ff00] text-black py-3 px-5 rounded-md text-sm font-bold cursor-pointer hover:bg-[#9fe000] active:scale-95 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>

        ADD TO TODAY&apos;S PLAN
      </button>

      <button
        onClick={handleSave}
        className="flex items-center justify-center gap-2 border border-[#4b5058] text-white py-3 px-5 rounded-md text-sm font-bold cursor-pointer hover:border-[#b6ff00] hover:text-[#b6ff00] active:scale-95 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>

        SAVE FOR LATER
      </button>
    </div>
  );
};

export default WorkoutActions;