import React from "react";

const WorkoutDetailsSkeleton = () => {
  return (
    <div className="container mx-auto p-4 py-10 lg:flex lg:justify-between">

      {/* Image Skeleton */}
      <div>
        <div
          className="
            h-70
            w-full
            animate-pulse
            rounded-2xl
            bg-[#252A33]
            sm:w-full
            lg:h-full
            lg:w-140
          "
        />
      </div>

      {/* Details Skeleton */}
      <div className="w-full lg:ml-10">

        {/* Workout Name */}
        <div
          className="
            mt-6
            h-9
            w-3/4
            animate-pulse
            rounded-lg
            bg-[#252A33]
            lg:mt-0
          "
        />

        {/* Description */}
        <div className="pt-3 space-y-2">

          <div className="h-4 w-full animate-pulse rounded bg-[#252A33]" />

          <div className="h-4 w-[95%] animate-pulse rounded bg-[#252A33]" />

          <div className="h-4 w-[70%] animate-pulse rounded bg-[#252A33]" />

        </div>

        {/* Muscle Groups */}
        <div className="flex gap-2 py-2 pb-5">

          <div className="h-6 w-20 animate-pulse rounded-full bg-[#252A33]" />

          <div className="h-6 w-24 animate-pulse rounded-full bg-[#252A33]" />

          <div className="h-6 w-20 animate-pulse rounded-full bg-[#252A33]" />

        </div>

        {/* Table Skeleton */}
        <div className="w-full overflow-hidden rounded-xl border bg-[#151922]">

          {/* Equipment */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-24 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-28 animate-pulse rounded bg-[#252A33]" />
          </div>

          {/* Difficulty */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-24 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-20 animate-pulse rounded bg-[#252A33]" />
          </div>

          {/* Sets */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-16 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-12 animate-pulse rounded bg-[#252A33]" />
          </div>

          {/* Reps */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-16 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-12 animate-pulse rounded bg-[#252A33]" />
          </div>

          {/* Duration */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-20 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-20 animate-pulse rounded bg-[#252A33]" />
          </div>

          {/* Calories */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-20 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-24 animate-pulse rounded bg-[#252A33]" />
          </div>

          {/* Rating */}
          <div className="flex justify-between border-b border-gray-700 px-3 py-2">
            <div className="h-4 w-16 animate-pulse rounded bg-[#252A33]" />
            <div className="h-4 w-12 animate-pulse rounded bg-[#252A33]" />
          </div>

        </div>

        {/* Instructions Heading */}
        <div
          className="
            mt-4
            h-5
            w-32
            animate-pulse
            rounded
            bg-[#252A33]
          "
        />

        {/* Instructions */}
        <div className="space-y-3 p-3">

          <div className="h-4 w-full animate-pulse rounded bg-[#252A33]" />

          <div className="h-4 w-[95%] animate-pulse rounded bg-[#252A33]" />

          <div className="h-4 w-[90%] animate-pulse rounded bg-[#252A33]" />

          <div className="h-4 w-[75%] animate-pulse rounded bg-[#252A33]" />

        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">

          {/* Add to today's plan */}
          <div
            className="
              h-9
              w-44
              animate-pulse
              rounded-[10px]
              bg-[#252A33]
            "
          />

          {/* Save for later */}
          <div
            className="
              h-9
              w-32
              animate-pulse
              rounded-[10px]
              bg-[#252A33]
            "
          />

        </div>

      </div>

    </div>
  );
};

export default WorkoutDetailsSkeleton;