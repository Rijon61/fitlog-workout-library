"use client";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import WorkoutItemsType from "@/Type/WorkoutItems";
import React, { useContext } from "react";
import { HiSave } from "react-icons/hi";
import { Bounce, toast } from "react-toastify";
interface SavedWorkoutButtonProps {
  workOut: WorkoutItemsType;
}

const SavedWorkoutButton = ({ workOut }: SavedWorkoutButtonProps) => {
  const { addToSavedWorkout, setToSavedWorkout } = useContext(WorkoutsContext);
  const HandleSavedWorkout = () => {
    const alreadyExists = addToSavedWorkout.find((w) => w.id === workOut.id);
    if (alreadyExists) {
      return toast.error("Already in your saved list", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    setToSavedWorkout([...addToSavedWorkout, workOut]);
    toast.success("Saved for letter", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <button
      className="flex gap-1.5 items-center px-3 py-1 border rounded-[10px] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
      onClick={() => HandleSavedWorkout()}
    >
      <span>
        <HiSave />
      </span>
      <p>Save for later</p>
    </button>
  );
};

export default SavedWorkoutButton;
