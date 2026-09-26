"use client";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import React, { useContext, useState } from "react";

type SortOption = "Duration" | "Calories" | "Rating";

type ShotByProps = {
  tab: "today" | "saved";
};

const ShotBy = ({ tab }: ShotByProps) => {
  const {
    addToPlanWorkout,
    setToPlanWorkout,
    addToSavedWorkout,
    setToSavedWorkout,
  } = useContext(WorkoutsContext);

  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const handleSort = (value: SortOption) => {
    setSortBy(value);

    const workouts =
      tab === "today" ? addToPlanWorkout : addToSavedWorkout;

    const sortedWorkouts = [...workouts].sort((a, b) => {
      if (value === "Duration") {
        return b.duration - a.duration;
      }

      if (value === "Calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (value === "Rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

    if (tab === "today") {
      setToPlanWorkout(sortedWorkouts);
    } else {
      setToSavedWorkout(sortedWorkouts);
    }
  };

  return (
    <div className="text-white">
      <select
        value={sortBy}
        onChange={(e) => handleSort(e.target.value as SortOption)}
        className="select border-[#232732] bg-[#13161D] rounded-2xl font-bold"
      >
        <option value="Duration">Duration</option>
        <option value="Calories">Calories</option>
        <option value="Rating">Rating</option>
      </select>
    </div>
  );
};

export default ShotBy;
