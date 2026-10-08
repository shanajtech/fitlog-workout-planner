"use client";

import { createContext, useState } from "react";

export const WorkoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        setPlan,
        saved,
        setSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;