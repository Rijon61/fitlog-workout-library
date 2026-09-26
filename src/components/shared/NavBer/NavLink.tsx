'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
    const pathname =usePathname()
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href={"/"} className={`px-4 py-1 rounded-2xl ${
            pathname === "/" ? "bg-[#1A2312] text-[#C2F800]" : ""}`}>Workouts</Link>
      </li>
      <li>
        <Link href={"/my-plan"} className={`px-4 py-1 rounded-2xl ${
            pathname === "/my-plan" ? "bg-[#1A2312] text-[#C2F800]" : ""}`}>My Plan</Link>
      </li>
    </ul>
  );
};

export default NavLink;
