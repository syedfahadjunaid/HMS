import { Switch } from "@mui/material";
import React from "react";
import { CiViewList } from "react-icons/ci";
import { RiEdit2Fill } from "react-icons/ri";

function DoctorTable() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">
          OPD Patient Table Data
        </h2>
      </div>
      <div className="w-full">
        <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
          <thead>
            <th className="border-[1px] p-1 font-semibold">
              <p>S_N</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>UHID</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Patient Name</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Patient Checked</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p> Request to Transfer to IPD</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Action</p>
            </th>
          </thead>
          <tbody>
            <tr key={1}>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                1
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                uhid014110200
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                Arman
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                <Switch {...label} defaultChecked />
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                <Switch {...label} />
              </td>{" "}
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px] flex-row">
                <div className="flex gap-[10px] justify-center">
                  <div className="p-[4px] h-fit w-fit border-[2px] border-[#96999C] rounded-[12px] cursor-pointer">
                    <CiViewList className="text-[20px] text-[#96999C]" />
                  </div>{" "}
                  <div className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer">
                    <RiEdit2Fill className="text-[20px] text-[#3497F9]" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorTable;
