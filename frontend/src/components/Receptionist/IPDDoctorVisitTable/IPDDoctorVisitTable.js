import React, { useEffect, useState } from "react";
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
import { getDoctorVisitListWithIpdPatientsData } from "../NurseApi";
import { Switch } from "@mui/material";
import { CiViewList } from "react-icons/ci";

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
  const [doctorWithPatients, setDoctorWithPatients] = useState([]);

  const getDoctorVisitListWithIpdPatientsDataHandle = async () => {
    const result = await getDoctorVisitListWithIpdPatientsData();
    if (result?.status === 200) {
      setDoctorWithPatients(result?.data?.data);
    }
    console.log(result);
  };
  useEffect(() => {
    getDoctorVisitListWithIpdPatientsDataHandle();
  }, []);
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

          <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
            <thead>
              <th className="border-[1px] p-1 font-semibold">
                <p>S_N</p>
              </th>
              <th className="border-[1px] p-1 font-semibold">
                <p>Patient Uhid</p>
              </th>
              <th className="border-[1px] p-1 font-semibold">
                <p>Doctor Name</p>
              </th>
              <th className="border-[1px] p-1 font-semibold">
                <p>TIme / date</p>
              </th>

              <th className="border-[1px] p-1 font-semibold">
                <p>Doc Visit Checked</p>
              </th>

              <th className="border-[1px] p-1 font-semibold">
                <p>Action</p>
              </th>
            </thead>

            <tbody>
              {doctorWithPatients?.map((item, index) => (
                <tr key={index} className="border-b-[1px]">
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {index + 1}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {"Uhid" + item?.IpdpatientId}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {item?.doctorName}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {date(item?.IpdPatientCreatedTime)} /
                    {time(item?.IpdPatientCreatedTime)}
                  </td>{" "}
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    <Switch />
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center  flex-row border-r">
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Suspense>
  );
}
