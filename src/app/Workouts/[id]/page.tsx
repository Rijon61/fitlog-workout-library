import PlanWorkoutButton from "@/components/WorkoutDetailsBtn/planWorkoutButton";
import SavedWorkoutButton from "@/components/WorkoutDetailsBtn/SavedWorkoutButton";
import { getWorkoutItems } from "@/lib/ApiData";
import WorkoutItemsType from "@/Type/WorkoutItems";
import Image from "next/image";
import React from "react";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;
  const WorkoutData = await getWorkoutItems();
  const workOut = WorkoutData.find(
    (workOut: WorkoutItemsType) => String(workOut.id) === String(id),
  );
  if (!workOut) {
    return (
      <h1 className="min-h-120 flex items-center justify-center text-7xl font-bold">
        Workout not found
      </h1>
    );
  }
  return (
    <div className="container mx-auto p-4 lg:flex justify-between py-10">
      <div>
        <Image
        className=" object-cover h-70 sm:w-full lg:h-full lg:w-140 rounded-2xl"
          src={workOut.image}
          alt={workOut.name}
          height={800}
          width={600}
        />
      </div>
      <div>
        <h1 className="font-oswald font-bold text-3xl pt-6 lg:pt-0">{workOut.name}</h1>
        <p className="pt-2">{workOut.description}</p>
        <div className="flex gap-2 py-2 pb-5">
          {workOut.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="px-3 py-0.5 rounded-full bg-[#C2F800] text-black text-sm font-bold"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Table */}

        <table className="bg-[#151922] border rounded-xl overflow-hidden text-left text-white w-full  ">
          <tbody>
            <tr className="border-b border-gray-700 ">
              <td className="px-3 py-2 text-gray-400 text-sm">EQUIPMENT</td>
              <td className="px-3 py-2 text-right text-sm ">{workOut.equipment}</td>
            </tr>

            <tr className="border-b border-gray-700 ">
              <td className="px-3 py-2 text-gray-400 text-sm">DIFFICULTY</td>
              <td className="px-3 py-2 text-sm text-right ">{workOut.difficulty}</td>
            </tr>

            <tr className="border-b border-gray-700">
              <td className="px-3 py-2 text-gray-400 text-sm">SETS</td>
              <td className="px-3 py-2 text-right text-sm ">{workOut.sets}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2 text-gray-400 text-sm">REPS</td>
              <td className="px-3 py-2 text-right text-sm">{workOut.reps}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2 text-gray-400 text-sm">DURATION</td>
              <td className="px-3 py-2 text-right text-sm">{workOut.duration} min</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2 text-gray-400 text-sm">CALORIES</td>
              <td className="px-3 py-2 text-right text-sm">
                {workOut.caloriesBurned} kcal
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2 text-gray-400 text-sm">RATING</td>
              <td className="px-3 py-2 text-right text-sm">{workOut.rating}</td>
            </tr>
          </tbody>
        </table>

        <h2 className="pt-3 font-bold" >INSTRUCTIONS</h2>
        <ul className="p-3">
            {
                workOut.instructions.map((I,ind)=>(
                    <li key={I}>
                        {`${ind+1}. ${I}`}
                    </li>
                ))
            }
        </ul>
        <div className="flex gap-4 pt-4">
            <PlanWorkoutButton workOut={workOut} />
            <SavedWorkoutButton workOut={workOut}/>
        </div>

      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
