"use client";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import WorkoutItemsType from "@/Type/WorkoutItems";
import React, { useContext } from "react";
import { IoBagAdd } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

interface PlanWorkoutButtonProps {
  workOut: WorkoutItemsType;
}

const PlanWorkoutButton = ({ workOut }: PlanWorkoutButtonProps) => {
  const { addToPlanWorkout, setToPlanWorkout } = useContext(WorkoutsContext);

  const HandlePlanWorkout = () => {
    const alreadyExists = addToPlanWorkout.find((w) => w.id === workOut.id);

    if (alreadyExists) {
      return toast.error("Already exist in your plan", {
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
    setToPlanWorkout([...addToPlanWorkout, workOut]);
    toast.success("Added your today plan", {
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
      className="flex gap-1.5 items-center px-3 py-1 border bg-[#CCFF00] rounded-[10px] text-black hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
      onClick={() => HandlePlanWorkout()}
    >
      <span>
        <IoBagAdd />
      </span>
      <p>Add to today`s plan</p>
    </button>
  );
};

export default PlanWorkoutButton;
