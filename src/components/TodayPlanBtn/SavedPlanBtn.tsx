'use client'

import { WorkoutsContext } from '@/context/WorkoutsProvider';
import WorkoutItemsType from '@/Type/WorkoutItems';
import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';
interface SavedPlanBtnProps{
  savedCard:WorkoutItemsType
}

const SavedPlanBtn = ({savedCard}:SavedPlanBtnProps) => {
    const { addToSavedWorkout, setToSavedWorkout}= useContext(WorkoutsContext);


     const HandleRemovedWorkout = () => {
    const exists = addToSavedWorkout.find((w) => w.id === savedCard.id);
    if (exists) {
      const remainingWorkout = addToSavedWorkout.filter(
        (w) => w.id !== savedCard.id,
      );
      setToSavedWorkout(remainingWorkout);
      toast.success("Removed from saved", {
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
        <MdDeleteForever
                    className="text-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
                    onClick={() => HandleRemovedWorkout()}/>
        </>
            
        
    );
};

export default SavedPlanBtn;