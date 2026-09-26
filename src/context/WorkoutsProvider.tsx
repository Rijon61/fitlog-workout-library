'use client'

import WorkoutItemsType from '@/Type/WorkoutItems';
import React, { createContext, ReactNode, useState } from 'react';

interface WorkoutsContextType {
  addToPlanWorkout: WorkoutItemsType[];
  setToPlanWorkout: React.Dispatch<React.SetStateAction<WorkoutItemsType[]>>;

  addToSavedWorkout: WorkoutItemsType[];
  setToSavedWorkout: React.Dispatch< React.SetStateAction<WorkoutItemsType[]>>;
}

export const WorkoutsContext = createContext<WorkoutsContextType>({

    addToPlanWorkout: [],
    setToPlanWorkout: () => {},

    addToSavedWorkout: [],
    setToSavedWorkout: () => {},
  });

const WorkoutsProvider = ({children}:{children:ReactNode}) => {
    const [addToPlanWorkout ,setToPlanWorkout] = useState<WorkoutItemsType[]>([]);
    const [addToSavedWorkout , setToSavedWorkout] =useState<WorkoutItemsType[]>([])

    const WorkoutsShareData ={
        addToPlanWorkout ,
        setToPlanWorkout,
        addToSavedWorkout ,
        setToSavedWorkout
    }


    return (
        <WorkoutsContext.Provider value={WorkoutsShareData}>{children}</WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;