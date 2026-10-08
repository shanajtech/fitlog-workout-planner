"use client";

import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const WorkoutActions = ({ workout }) => {
  const { plan, setPlan, saved, setSaved } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    const alreadyAdded = plan.find((item) => item.id === workout.id);

    if (!alreadyAdded) {
      setPlan([...plan, workout]);
    }
  };

  const handleSave = () => {
    const alreadySaved = saved.find((item) => item.id === workout.id);

    if (!alreadySaved) {
      setSaved([...saved, workout]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
      <button
        onClick={handleAddToPlan}
        className="bg-[#b6ff00] text-black py-3 px-5 rounded-md text-sm font-bold cursor-pointer"
      >
        ADD TO TODAY&apos;S PLAN
      </button>

      <button
        onClick={handleSave}
        className="border border-[#4b5058] text-white py-3 px-5 rounded-md text-sm font-bold cursor-pointer"
      >
        SAVE FOR LATER
      </button>
    </div>
  );
};

export default WorkoutActions;