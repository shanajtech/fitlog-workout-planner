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
    toast.success("Workout added to today's plan");
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
       className="bg-[#b6ff00] text-black py-3 px-5 rounded-md text-sm font-bold cursor-pointer
        hover:bg-[#9fe000] active:scale-95 transition-all duration-200"
      >
        ADD TO TODAY&apos;S PLAN
      </button>

      <button
        onClick={handleSave}
      className="border border-[#4b5058] text-white py-3 px-5 rounded-md text-sm font-bold cursor-pointer hover:border-[#b6ff00]
       hover:text-[#b6ff00] active:scale-95 transition-all duration-200"
      >
        SAVE FOR LATER
      </button>
    </div>
  );
};

export default WorkoutActions;