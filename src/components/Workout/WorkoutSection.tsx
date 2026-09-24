import WorkoutItemsType from "@/Type/WorkoutItems";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import Link from "next/link";
import { getWorkoutItems } from "@/lib/ApiData";

const WorkoutSection = async () => {
  const WorkoutItem: WorkoutItemsType[] = await getWorkoutItems();
  return (
    <div className="container mx-auto py-10 p-4">
      <h1 className=" font-oswald text-4xl font-bold ">The Library</h1>
      <p className="pt-1.5">Twelve lifts covering every major muscle group.</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 ">
        
        {WorkoutItem.map((WorkoutItem) => ( <Link
            key={WorkoutItem.id}
            href={`/Workouts/${WorkoutItem.id}`}
          >
            <WorkoutCard WorkoutItems={WorkoutItem} />
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default WorkoutSection;
