"use client";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import React, { useContext, useState } from "react";
import PlanCard from "./PlanCard";
import Link from "next/link";

type Tab = "today" | "saved";
const TodayPlan = () => {
  const { addToPlanWorkout, addToSavedWorkout } = useContext(WorkoutsContext);

  const [activeTab, setActiveTab] = useState<Tab>("today");
  const isToday = activeTab === "today";

  // Today's plan reduce

  const totalMin = addToPlanWorkout.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = addToPlanWorkout.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // Saved Plan reduce
  const savedTotalMin = addToSavedWorkout.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const savedTotalCalories = addToSavedWorkout.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <>
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-[#232732] mt-6">
        {isToday ? (
          <>
            <div className="stat">
              <div className="">Exercises</div>
              <div className="stat-value">{addToPlanWorkout.length}</div>
            </div>

            <div className="stat">
              <div className="">Minutes</div>
              <div className="stat-value">{totalMin}</div>
            </div>

            <div className="stat">
              <div className="">Calories</div>
              <div className="stat-value">{totalCalories}</div>
            </div>
          </>
        ) : (
          <>
            <div className="stat">
              <div className="">Exercises</div>
              <div className="stat-value">{addToSavedWorkout.length}</div>
            </div>

            <div className="stat">
              <div className="">Minutes</div>
              <div className="stat-value">{savedTotalMin}</div>
            </div>

            <div className="stat">
              <div className="">Calories</div>
              <div className="stat-value">{savedTotalCalories}</div>
            </div>
          </>
        )}
      </div>

      <div className="w-full">
        {/* Tabs */}
        <div className="tabs tabs-lift pt-5 flex gap-2">
          {/*  Today's Plan  */}
          <input
            type="radio"
            name="today_plan_tabs"
            className=" tab  rounded-2xl border-2 border-transparent bg-[#151921] px-5 text-base font-bold text-gray-400 mb-10 overflow-hidden checked:border-[#CCFF00] checked:bg-[#101217] checked:text-[#CCFF00]"
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => setActiveTab("today")}
          />

          <div className="tab-content ">
            {addToPlanWorkout.length == 0 ? (
              <div className="rounded-3xl bg-[#1A1D23] p-4" >
              <div className="flex min-h-62.5 flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold uppercase text-white">
                  Nothing here yet
                </h2>

                <p className="mt-4 text-lg text-[#A7ABB5]">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href={'/'}><button className=" btn mt-8 rounded-2xl border-none bg-[#CCFF00] px-7 text-black hover:bg-[#CCFF00] hover:brightness-110">
                  Go to workouts
                </button></Link>
              </div>

              </div>            ) : (
              <div className="grid gap-5">
                {addToPlanWorkout.map((planCard) => (
                  <PlanCard key={planCard.id} planCard={planCard} />
                ))}
              </div>
            )}
          </div>

          {/* Saved */}
          <input
            type="radio"
            name="today_plan_tabs"
            className="tab rounded-2xl border-2 border-transparent bg-[#151921] px-5 text-base font-bold text-gray-400 mb-10 overflow-hidden checked:border-[#CCFF00] checked:bg-[#101217] checked:text-[#CCFF00]
          "
            aria-label="Saved"
            onClick={() => setActiveTab("saved")}
          />

           <div className="tab-content ">
            {addToSavedWorkout.length == 0 ? (
              <div className="rounded-3xl bg-[#1A1D23] p-4" >
              <div className="flex min-h-62.5 flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold uppercase text-white">
                  Nothing here yet
                </h2>

                <p className="mt-4 text-lg text-[#A7ABB5]">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href={'/'}><button className=" btn mt-8 rounded-2xl border-none bg-[#CCFF00] px-7 text-black hover:bg-[#CCFF00] hover:brightness-110">
                  Go to workouts
                </button></Link>
              </div>

              </div>            ) : (
              <div className="grid gap-5">
                {addToSavedWorkout.map((planCard) => (
                  <PlanCard key={planCard.id} planCard={planCard} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayPlan;
