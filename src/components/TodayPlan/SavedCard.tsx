import WorkoutItemsType from "@/Type/WorkoutItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import SavedPlanBtn from "../TodayPlanBtn/SavedPlanBtn";

interface PlanCardProps {
  savedCard: WorkoutItemsType;
}

const SavedCard = ({ savedCard }: PlanCardProps) => {
  return (
    <div className="rounded-3xl bg-[#1A1D23] p-4 lg:flex md:flex justify-between items-center">
      {/* Image */}
      <div className="md:flex gap-4">
        <Image
        className="md:h-30 h-30 md:w-50 w-full object-cover rounded-2xl"
          src={savedCard.image}
          alt={savedCard.name}
          height={100}
          width={400}
        />
        <div>
          <h1 className="font-oswald font-bold text-2xl pt-4 md:pt-0 lg:pt-4 ">{savedCard.name}</h1>
          <p className="pt-1">{savedCard.equipment}</p>
          <div className="flex gap-3 pt-1 ">
            <span className="flex items-center gap-1">
              <IoMdTime className="text-[#C2F800]" />
              {savedCard.duration}
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <FaFire className="text-[#C2F800]" />
              {savedCard.caloriesBurned}
            </span>
            <span className="flex items-center gap-1">
              <CiStar className="text-[#C2F800]" />
              {savedCard.rating}
            </span>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex items-center gap-4 pt-4 md:pt-0">
        
        <Link href={`/Workouts/${savedCard.id}`}><button className="border px-2.5 py-1 rounded-2xl border-white font-bold cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">View Details</button></Link>
        <SavedPlanBtn   savedCard={savedCard} />
      </div>
    </div>
  );
};

export default SavedCard;
