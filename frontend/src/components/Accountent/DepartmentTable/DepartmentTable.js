import React, { useState } from "react";

function DepartmentTable() {
  const [] = useState();
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">Department</h2>
      </div>
      <div className="flex justify-start gap-3">
        <h2 className="border-b-[3px] border-[#3497F9]">Manage Department</h2>
        <h2 className="border-b-[3px]">Floors Department</h2>
        <h2 className="border-b-[3px]">Manage Ward</h2>
        <h2 className="border-b-[3px]">Manage Beds</h2>
      </div>
      <div></div>
    </div>
  );
}

export default DepartmentTable;
