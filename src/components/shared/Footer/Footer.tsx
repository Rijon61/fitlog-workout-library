import Image from "next/image";
import React from "react";
import Footer from "@/assets/Footer.png";

const FooTer = () => {
  return (
    <div className="border-t border-[#1A1D24]">
      <div className="flex flex-col md:flex-row md:flex md:justify-between container mx-auto py-4 items-center text-center ">
        <div className="flex items-center gap-1 ">
          <Image src={Footer} alt="footer-logo" height={24} width={24} />
          <h2 className="text-2xl font-bold">FITLOG</h2>
        </div>
        <div>
          <span className="text-sm">© 2026 FitLog — Workout Library. Train hard, log honest.</span>
        </div>
      </div>
    </div>
  );
};

export default FooTer;
