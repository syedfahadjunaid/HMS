import React from "react";
import Table from "../../Table";

function EmployeeCompensationTable() {
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
      label: "S N",
      // render: (list) => list.tableId,
    },
    {
      label: "Employee Name",
      // render: (list) => list.tableId,
    },
    {
      label: "Employement Number",
      // render: (list) => list.adminName,
    },
    {
      label: "Currency",
      // render: (list) => list.adminEmail,
    },
    {
      label: "Total  CTC",
      // render: (list) => `${date(list.createdAt)} - ${time(list.createdAt)}`,
    },
    {
      label: "Effective Date",
      // render: (list) => `${date(list.updatedAt)} - ${time(list.updatedAt)}`,
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
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">Compensation</h2>
      </div>
      <form className="flex flex-col align-start justify-start gap-[10px]">
        <p className="w-fit">Upload File *</p>
        <span className="w-fit flex gap-[10px]">
          <input type="file" required />
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]">
            Submit
          </button>
        </span>
      </form>
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">
          Compensation Details
        </h2>
      </div>
      <Table config={config} />
    </div>
  );
}

export default EmployeeCompensationTable;
