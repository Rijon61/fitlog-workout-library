"use client";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import WorkoutItemsType from "@/Type/WorkoutItems";
import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

interface TodayPlanBtnProps {
  planCard: WorkoutItemsType;
}

const TodayPlanBtn = ({ planCard }: TodayPlanBtnProps) => {
  const { addToPlanWorkout, setToPlanWorkout } = useContext(WorkoutsContext);

  // Event Handling Mark as done

  const HandleMarkAsDone = () => {
    const exists = addToPlanWorkout.find((w) => w.id === planCard.id);
    if (exists) {
      const remainingWorkout = addToPlanWorkout.filter(
        (w) => w.id !== planCard.id,
      );
      setToPlanWorkout(remainingWorkout);
      toast.success("Workout logged — nice work", {
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
  };

  // Event Handling removed workout
  const HandleRemovedWorkout = () => {
    const exists = addToPlanWorkout.find((w) => w.id === planCard.id);
    if (exists) {
      const remainingWorkout = addToPlanWorkout.filter(
        (w) => w.id !== planCard.id,
      );
      setToPlanWorkout(remainingWorkout);
      toast.success("Removed from today's plan", {
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
  };

  return (
    <>
      <button
        className="border px-3 py-1 rounded-2xl bg-[#CCFF00] text-black font-bold hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
        onClick={() => HandleMarkAsDone()}
      >
        ✔️ Mark as Done
      </button>
      <MdDeleteForever
        className="text-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
        onClick={() => HandleRemovedWorkout()}
      />
    </>
  );
};

export default TodayPlanBtn;
