import WorkoutItemsType from "@/Type/WorkoutItems";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
interface WorkoutCardProps {
  WorkoutItems: WorkoutItemsType;
}

const WorkoutCard = ({ WorkoutItems }: WorkoutCardProps) => {
  return (
    <div className="bg-[#1A1D23] rounded-[10px] hover:border hover:border-[#C2F800] hover:scale-101 active:scale-95 transition-all duration-300 ease-in-out">
      <Image
        className="h-55 object-cover w-full rounded-t-[10px]"
        src={WorkoutItems.image}
        alt={WorkoutItems.name}
        height={100}
        width={500}
      />
      <div className="p-4">
        <div className="flex gap-2">
          {WorkoutItems.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="px-3 py-0.5 rounded-full bg-[#C2F800] text-black text-sm font-bold"
            >
              {muscle}
            </span>
          ))}
        </div>
        <h1 className="text-[20px] font-semibold mt-1">{WorkoutItems.name}</h1>
        <p>{WorkoutItems.equipment}</p>
        <div className="flex gap-3 border-dashed border-t pt-2 mt-2">
          <span className="flex items-center gap-1">
            <IoMdTime className="text-[#C2F800]" />
            {WorkoutItems.duration}
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <FaFire className="text-[#C2F800]" />
            {WorkoutItems.caloriesBurned}
          </span>
          <span className="flex items-center gap-1">
            <CiStar className="text-[#C2F800]" />
            {WorkoutItems.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
