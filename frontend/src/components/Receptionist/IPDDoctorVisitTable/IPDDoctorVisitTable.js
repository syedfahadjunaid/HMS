import React from "react";
import "./IPDDoctorVisitTable.css";
import { Suspense } from "react";

import { FaSearch } from "react-icons/fa";
import { MdViewKanban } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LuHardDriveDownload } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";

import { FaRegSave } from "react-icons/fa";

import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";

export default function IPDDoctorVisitTable() {
  const { patients } = useSelector((state) => state.PatientState);
  const { doctors } = useSelector((state) => state.DoctorState);

  const date = (dateTime) => {
    const newdate = new Date(dateTime);

    return newdate.toLocaleDateString();
  };

  const time = (dateTime) => {
    const newDate = new Date(dateTime);

    return newDate.toLocaleTimeString();
  };

  const [searchByPatientReg, setSearchByPatientReg] = React.useState("");
  const [searchByDoctorName, setSearchByDoctorName] = React.useState("");
  const [searchByDate, setSearchByDate] = React.useState("");

  const doctorVisitData = [
    {
      doctorName: "Doctor 1",
      patientId: "Patient12345",
      dateTime: "2024,04,13",
    },
    {
      doctorName: "Doctor 2",
      patientId: "Patient22346",
      dateTime: "2024,04,14",
    },
    {
      doctorName: "Doctor 3",
      patientId: "Patient2254346",
      dateTime: "2024,04,15",
    },
    {
      doctorName: "Doctor 4",
      patientId: "Patient65346",
      dateTime: "2024,04,16",
    },
  ];

  return (
    <Suspense fallback={<>...</>}>
      <div className="flex flex-col gap-[1rem] p-[1rem]">
        <div className="flex justify-between">
          <h2 className="border-b-[4px] border-[#3497F9]">Dr Visit List</h2>
          {/* <button
            onClick={handleOpen}
            className='bg-[#3497F9] text-white p-[10px] rounded-md'>
            + Add Patient
          </button> */}
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="flex gap-[1rem]">
            <div className="flex gap-[10px] bg-[#F4F6F6] items-center p-[10px] rounded-[18px]">
              <FaSearch className="text-[#56585A]" />
              <input
                className="bg-transparent outline-none"
                placeholder="Search by patient"
              />
            </div>
            <div className="flex gap-[10px] bg-[#F4F6F6] items-center p-[10px] rounded-[18px]">
              <FaSearch className="text-[#56585A]" />
              <input
                className="bg-transparent outline-none"
                placeholder="Search by doctor"
              />
            </div>

            <div className="flex gap-[10px] bg-[#F4F6F6] items-center p-[10px] rounded-[18px]">
              <input type="date" className="bg-transparent outline-none" />
            </div>
          </div>

          <table>
            <thead>
              <tr className="py-[1rem]">
                <th className="py-[1rem] border">S No.</th>
                <th className="py-[1rem] border">Dr Name</th>
                <th className="py-[1rem] border">Patients Uhid</th>
                <th className="py-[1rem] border">Date / time</th>
                <th className="py-[1rem] border">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="" key="1">
                <td className="py-[1rem] border"> 1</td>
                <td className="py-[1rem] border"></td>
                <td className="py-[1rem] border"></td>
                <td className="py-[1rem] border"></td>
                <td className="py-[1rem] border flex justify-center">
                  <FaEdit className="text-[30px]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Suspense>
  );
}
