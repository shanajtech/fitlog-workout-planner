"use client";

import { createContext, useEffect, useState } from "react";

export const WorkoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPlan = JSON.parse(localStorage.getItem("plan")) || [];
    const storedSaved = JSON.parse(localStorage.getItem("saved")) || [];

    setPlan(storedPlan);
    setSaved(storedSaved);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("plan", JSON.stringify(plan));
    }
  }, [plan, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }, [saved, loading]);

  return (
    <WorkoutContext.Provider
      value={{ plan, setPlan, saved, setSaved, loading }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;