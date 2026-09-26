'use client'

import { WorkoutsContext } from '@/context/WorkoutsProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavBerBtn = () => {
    const {addToSavedWorkout,addToPlanWorkout}= useContext(WorkoutsContext)
    return (
        <div className="navbar-end gap-2 ">
            <Link href="/my-plan " >
               <button className=" px-4 py-1  rounded-[10px] hover:bg-white/15 font-bold cursor-pointer transition-transform duration-150 active:scale-95 text-nowrap items-center">Plan    <span className='px-2  border rounded-full bg-[#C2F10E] text-black '>{addToPlanWorkout.length}</span></button> 
            </Link>

            <Link href="/my-plan">
              <button className=" px-4 py-1 rounded-[10px] hover:bg-white/15 font-bold cursor-pointer transition-transform duration-150 active:scale-95 text-nowrap">Saved <span className='px-2 border rounded-full'>{addToSavedWorkout.length}</span></button>
            </Link>
          </div>
    );
};

export default NavBerBtn;