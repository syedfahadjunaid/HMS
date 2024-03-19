import React from "react";

function EmployeeBackgroundVerificationForm() {
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">
          Background Verification
        </h2>
      </div>
      <form className="w-full flex flex-col align-start justify-start gap-[10px]">
        <span className="flex flex-col align-start justify-start gap-[5px]">
          <p className="w-fit">Organization</p>
          <select className="border-[2px] border-[#C8C8C8] w-[22rem] h-[2.5rem] rounded outline-none">
            <option>Select Category</option>
          </select>
        </span>
        <div className="w-[25rem] flex justify-between">
          <span className="flex gap-[5px]">
            <input type="checkbox" />
            <p className="text-[12px]">Pre-Employment Verification</p>
          </span>
          <span className="flex gap-[5px]">
            <input type="checkbox" />
            <p className="text-[12px]">On Boarded Employee</p>
          </span>
        </div>
        <span className="flex flex-col align-start justify-start gap-[5px]">
          <p className="w-fit">Select Candidate</p>
          <select className="border-[2px] border-[#C8C8C8] w-[22rem] h-[2.5rem] rounded outline-none">
            <option>Select Candidate</option>
          </select>
        </span>
        <div className="grid grid-cols-2 gap-4">
          <span className="flex flex-col align-start justify-start gap-[5px]">
            <p className="w-fit">First Name</p>

            <input
              className="border-[2px] border-[#C8C8C8]  h-[2.5rem] rounded outline-none pl-[5px]"
              type="text"
              placeholder="First Name"
            />
          </span>
          <span className="flex flex-col align-start justify-start gap-[5px]">
            <p className="w-fit">Middle Name</p>

            <input
              className="border-[2px] border-[#C8C8C8]  h-[2.5rem] rounded outline-none pl-[5px]"
              type="text"
              placeholder="Middle Name"
            />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="flex flex-col align-start justify-start gap-[5px]">
            <p className="w-fit">Late Name</p>

            <input
              className="border-[2px] border-[#C8C8C8]  h-[2.5rem] rounded outline-none pl-[5px]"
              type="text"
              placeholder="Late Name"
            />
          </span>
          <span className="flex flex-col align-start justify-start gap-[5px]">
            <p className="w-fit">Email ID</p>

            <input
              className="border-[2px] border-[#C8C8C8]  h-[2.5rem] rounded outline-none pl-[5px]"
              type="text"
              placeholder="Middle Name"
            />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="flex flex-col align-start justify-start gap-[5px]">
            <p className="w-fit">Link Valid Till </p>

            <input
              className="border-[2px] border-[#C8C8C8]  h-[2.5rem] rounded outline-none pl-[5px]"
              type="text"
              placeholder="Link Valid Till "
            />
          </span>
          <span className="flex flex-col align-start justify-start gap-[5px]">
            <p className="w-fit">Comments</p>

            <textarea
              className="border-[2px] border-[#C8C8C8]  h-[2.5rem] rounded outline-none pl-[5px]"
              type="text"
              placeholder="Enter  Comments"
            />
          </span>
        </div>
        <button className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployeeBackgroundVerificationForm;
