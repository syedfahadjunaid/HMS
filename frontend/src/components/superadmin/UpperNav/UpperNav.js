import React, { useState } from "react";
import "./UpperNav.css";
import { Suspense } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import Logout from "../../../Logout";
import { useSelector } from "react-redux";

export default function UpperNav() {
  const { Admins, adminLoggedIn, adminLoggedInData, adminRole } = useSelector(
    (state) => state.AdminState
  );

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // console.log(adminRole);

  return (
    <>
      <Suspense fallback={<>...</>}>
        <div className='flex flex-row w-full items-center border-b-[1px] border-b-solid relative'>
          <div className='flex p-[1.5rem] w-[70%]'>
            <div className='px-[10px] w-[90%] bg-[#E7EFFF] flex flex-row items-center gap-[10px] rounded-[8px]'>
              <FaSearch className='text-[#636D73]' />
              <input
                className='w-full outline-none py-[10px] bg-transparent'
                placeholder='Search'
              />
            </div>
          </div>
          <div className='w-[30%] flex gap-[1rem] items-center pr-[1rem]'>
            <div className='flex relative cursor-pointer'>
              <div className='p-[6px] rounded-md shadow-md w-fit h-fit'>
                <FaRegBell className='text-[25px] text-[#2662F0]' />
              </div>

              <GoDotFill className='text-[#FDCA40] absolute right-0' />
            </div>
            {/* <img
              src={userImage}
              alt='userImage'
              className='w-[50px] h-[50px]'
            /> */}
            <FaRegUser className='text-[35px] bg-[#3497F9] text-white p-[4px] rounded-full' />
            <div
              className='flex flex-col items-start text-[#414D55] cursor-pointer select-none'
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
              <p className='font-[500] text-[14px]'>
                {adminLoggedInData?.adminName}
              </p>
              <p>{adminLoggedInData?.adminRole}</p>
            </div>
            {showProfileDropdown ? (
              <IoIosArrowUp
                className='cursor-pointer'
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
            ) : (
              <IoIosArrowDown
                className='cursor-pointer'
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
            )}
            {showProfileDropdown && (
              <div className='absolute px-[3rem] top-[5rem] flex flex-col items-center z-10 fade-in'>
                <div className='border-t-[20px] border-t-transparent w-fit border-b-[20px] border-b-[#3497F9] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent'></div>
                <div className='bg-[#3497F9] px-[3rem] shadow-md py-[1rem] rounded-md flex flex-col items-start gap-[10px] w-fit'>
                  <button className='bg-white text-black p-[4px] rounded-md w-full'>
                    My Profile
                  </button>
                  <Logout Style='bg-[#202020] text-white p-[4px] rounded-md w-full' />
                </div>
              </div>
            )}
          </div>
        </div>
      </Suspense>
    </>
  );
}
