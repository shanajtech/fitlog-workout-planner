"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { WorkoutContext } from "../context/WorkoutContext";
import PlanWorkoutCard from "../components/PlanWorkoutCard";

const MyPlanPage = () => {
  const { plan, saved } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0b0e12] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
          MY PLAN
        </h1>

        <p className="mt-3 text-[#9ca0a8]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#15191e] border border-[#292e35] rounded-xl p-6">
            <p className="text-xs text-[#8d9198] uppercase">
              Exercises
            </p>

            <h2 className="font-oswald text-3xl font-bold mt-3">
              {plan.length}
            </h2>
          </div>

          <div className="bg-[#15191e] border border-[#292e35] rounded-xl p-6">
            <p className="text-xs text-[#8d9198] uppercase">
              Minutes
            </p>

            <h2 className="font-oswald text-3xl font-bold mt-3">
              {totalMinutes}
            </h2>
          </div>

          <div className="bg-[#15191e] border border-[#292e35] rounded-xl p-6">
            <p className="text-xs text-[#8d9198] uppercase">
              Calories
            </p>

            <h2 className="font-oswald text-3xl font-bold mt-3">
              {totalCalories}
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-[#292e35] mt-10">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("plan")}
              className={`pb-3 text-sm font-semibold cursor-pointer ${
                activeTab === "plan"
                  ? "text-[#b6ff00] border-b-2 border-[#b6ff00]"
                  : "text-[#8d9198]"
              }`}
            >
              Today&apos;s Plan ({plan.length})
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`pb-3 text-sm font-semibold cursor-pointer ${
                activeTab === "saved"
                  ? "text-[#b6ff00] border-b-2 border-[#b6ff00]"
                  : "text-[#8d9198]"
              }`}
            >
              Saved ({saved.length})
            </button>
          </div>

          {currentWorkouts.length > 0 && (
            <div className="pb-3 flex items-center gap-2 mt-4 sm:mt-0">
              <span className="text-xs text-[#8d9198] font-semibold">
                SORT BY
              </span>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="appearance-none bg-[#15191e] border border-[#3a3f46] text-[#bfc1c5] text-sm rounded-md pl-4 pr-10 py-2 cursor-pointer outline-none"
                >
                  <option value="duration">Duration</option>
                  <option value="calories">Calories</option>
                  <option value="rating">Rating</option>
                </select>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8d9198]"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          {currentWorkouts.length > 0 ? (
            <div className="space-y-4">
              {sortedWorkouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  showDoneButton={activeTab === "plan"}
                  type={activeTab}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="font-oswald text-2xl font-bold uppercase">
                NOTHING HERE YET
              </h2>

              <p className="text-[#8d9198] text-sm mt-3">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="inline-block mt-6 bg-[#b6ff00] text-black px-5 py-3 rounded-md text-sm font-bold hover:bg-[#9fe000] active:scale-95 transition-all"
              >
                GO TO WORKOUTS
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;