import React, { useEffect, useState } from "react";
import "./EmployeeManagementTable.css";
import Table from "../../Table";
import { RiEdit2Fill } from "react-icons/ri";
import { Switch } from "@mui/material";
import { getAllEmployeeData } from "../HrApiCollection";
function EmployeeManagementTable() {
  const [employeeData, setEmployeeData] = useState();
  const getAllEmployeeDataHandle = async () => {
    const result = await getAllEmployeeData();
    setEmployeeData(result && result?.data);
    console.log(result);
  };
  const date = (dateTime) => {
    const newdate = new Date(dateTime);

    return newdate.toLocaleDateString();
  };

  const time = (dateTime) => {
    const newDate = new Date(dateTime);

    return newDate.toLocaleTimeString();
  };
  const config = [
    {
      label: "Candidate ID",
      // render: (list) => list.index,
    },
    {
      label: "Candidate Name",
      // render: (list) => list.fullname,
    },
    {
      label: "Expected date  of  joining",
      // render: (list) => list.adminEmail,
    },
    {
      label: "Created On",
      // render: (list) => `${date(list.createdAt)} - ${time(list.createdAt)}`,
    },
    {
      label: "Link Valid Till",
      // render: (list) => `${date(list.updatedAt)} - ${time(list.updatedAt)}`,
    },
    {
      label: "Status",
      // render: (list) => list.adminRole,
    },

    {
      label: "Action",
      // render: (list) => (
      //   <div className="flex gap-[10px] justify-center">
      //     <div
      //       onClick={() => handleOpenUpdateModal(list)}
      //       className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer"
      //     >
      //       <RiEdit2Fill className="text-[25px] text-[#3497F9]" />
      //     </div>
      //   </div>
      // ),
    },
  ];
  useEffect(() => {
    getAllEmployeeDataHandle();
  }, []);
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">Candidate List</h2>
      </div>
      <Table config={config} />
    </div>
  );
}

export default EmployeeManagementTable;
