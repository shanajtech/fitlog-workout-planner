"use client";

import { useState } from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts }) => {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchText = search.toLowerCase();

    const nameMatch = workout.name
      .toLowerCase()
      .includes(searchText);

    const muscleMatch = workout.muscleGroups.some((muscle) =>
      muscle.toLowerCase().includes(searchText)
    );

    return nameMatch || muscleMatch;
  });

  return (
    <>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search by workout name or muscle group..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full md:w-[400px] bg-[#15191e] border border-[#3a3f46] text-white placeholder:text-[#777b82] px-4 py-3 rounded-md outline-none focus:border-[#b6ff00]"
        />
      </div>

      {filteredWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <h3 className="font-oswald text-2xl font-bold">
            NO WORKOUTS FOUND
          </h3>

          <p className="text-[#9ca0a8] mt-2">
            Try searching with another workout name or muscle group.
          </p>
        </div>
      )}
    </>
  );
};

export default WorkoutList;