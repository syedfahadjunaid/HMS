import React from "react";
import img from "../../../assets/20180125_001_1_.jpg";
import { imageListItemBarClasses } from "@mui/material";

function EmployeeCreationForm() {
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">Add New Employee</h2>
      </div>
      <div className="flex flex-col items-start w-full">
        <h4>Employee Details</h4>
        <form className="w-full grid grid-cols-3 gap-[10px] items-start justify-start mt-[10px]">
          <span className="border-[2px] border-[#C8C8C8]  rounded flex-wrap">
            <select
              onChange={(e) => console.log(e.target.value)}
              className="w-full h-[40px] outline-none"
            >
              <option>Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </select>
          </span>
          <span className="border-[2px] border-[#C8C8C8] rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Full  name  *"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="date"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="DOB *"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Zip  code *"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="State*"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="City*"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Nationality*"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Country*"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Aadhar Number*"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <select
              onChange={(e) => console.log(e.target.value)}
              className="w-full h-[40px] outline-none"
            >
              <option>Blood Group</option>
              <option>O positive</option>
              <option>O negative</option>
              <option>A positive</option>
              <option>A negative</option>
              <option>B positive</option>
              <option>B negative</option>
              <option>AB positive</option>
              <option>AB negative</option>
            </select>
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Work Email ID*"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Marital  Status "
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="PAN Number"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Employment Type"
              required
            />
          </span>

          <div className="flex align-center gap-[10px]">
            <span className="flex align-center gap-[5px]">
              <input type="radio" name="gender" value="male" />
              <p>Male</p>
            </span>
            <span className="flex align-center gap-[5px]">
              <input type="radio" name="gender" value={"female"} />
              <p>Female</p>
            </span>
          </div>
          <span>
            <input
              type="file"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Employment Type"
              required
            />
          </span>
          <span>
            <img src={img} alt="employee" className="w-[250px] h-[200px]" />
          </span>
          <br />
          <h4 className="border-b-[4px] border-[#3497F9] text-start w-fit">
            Address
          </h4>
          <br />
          <span></span>

          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <textarea
              rows={5}
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Enter Current Address"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <textarea
              rows={5}
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Enter Permanent Address"
              required
            />
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <textarea
              rows={5}
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Zip  Code"
              required
            />
          </span>
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeCreationForm;
