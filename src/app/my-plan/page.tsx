import TodayPlan from "@/components/TodayPlan/TodayPlan";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="container mx-auto pt-6 p-4 ">
      <h1 className="font-oswald text-4xl font-bold ">My Plan</h1>
      <p className="pt-1.5">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      
      <TodayPlan/>
    </div>
  );
};

export default MyPlanPage;
