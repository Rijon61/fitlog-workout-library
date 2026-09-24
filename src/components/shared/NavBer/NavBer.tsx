import Link from "next/link";
import React from "react";
import NavLoge from "@/assets/logo.png";
import Image from "next/image";

const NavBer = () => {
  return (
    <nav className=" bg-[#0C0D10] border-b border-[#1C1F26] sticky top-0 z-50">
      <div className="container mx-auto ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"}>Workouts</Link>
                </li>
                <li>
                  <Link href={""}>My Plan</Link>
                </li>
              </ul>
            </div>
            <Link href="/" className=" text-xl">
              <div className="flex items-center gap-1">
                <Image
                  className="pt-1"
                  src={NavLoge}
                  alt="FitLog Logo"
                  width={24}
                  height={28}
                />

                <h1 className="font-bold text-2xl">FITLOG</h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Workouts</Link>
              </li>
              <li>
                <Link href={""}>My Plan</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <Link href="/my-plan">
               <button className=" px-4 py-1 rounded-[10px] hover:bg-white/15 font-bold cursor-pointer transition-transform duration-150 active:scale-95">Plan</button> 
            </Link>

            <Link href="/saved">
              <button className=" px-4 py-1 rounded-[10px] hover:bg-white/15 font-bold cursor-pointer transition-transform duration-150 active:scale-95">Saved</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
