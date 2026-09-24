import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto p-4 pt-10">
      <div className="bg-[#15171D] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Content */}
        <div>
          <h3 className="text-sm md:text-base text-[#C2F800] uppercase tracking-wider">
            Workout Library
          </h3>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-5 md:mt-10">
            Train with intent.Log every set.
          </h1>

          <p className="text-gray-400 mt-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          <button
            className="
              mt-6 px-6 py-3
              bg-[#C2F800]
              text-black font-semibold
              rounded-lg
              transition-all duration-200
              hover:scale-105
              active:scale-95
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div >
          <Image
            src={BannerImage}
            alt="Gym Banner"
            width={500}
            height={350}
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;