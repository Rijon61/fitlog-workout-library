import WorkoutItemsType from "@/Type/WorkoutItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
interface PlanCardProps {
  planCard: WorkoutItemsType;
}

const PlanCard = ({ planCard }: PlanCardProps) => {
  return (
    <div className="rounded-3xl bg-[#1A1D23] p-4 lg:flex md:flex justify-between items-center">
      {/* Image */}
      <div className="md:flex gap-4">
        <Image
        className="md:h-30 h-30 md:w-50 w-full object-cover rounded-2xl"
          src={planCard.image}
          alt={planCard.name}
          height={100}
          width={400}
        />
        <div>
          <h1 className="font-oswald font-bold text-2xl pt-4 md:pt-0 lg:pt-4 ">{planCard.name}</h1>
          <p className="pt-1">{planCard.equipment}</p>
          <div className="flex gap-3 pt-1 ">
            <span className="flex items-center gap-1">
              <IoMdTime className="text-[#C2F800]" />
              {planCard.duration}
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <FaFire className="text-[#C2F800]" />
              {planCard.caloriesBurned}
            </span>
            <span className="flex items-center gap-1">
              <CiStar className="text-[#C2F800]" />
              {planCard.rating}
            </span>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex items-center gap-4 pt-4 md:pt-0">
        
        <Link href={`/Workouts/${planCard.id}`}><button className="border px-2.5 py-1 rounded-2xl border-white font-bold cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">View Details</button></Link>
        <button className="border px-3 py-1 rounded-2xl bg-[#CCFF00] text-black font-bold hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">✔️ Mark as Done</button>
        <MdDeleteForever className="text-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default PlanCard;
