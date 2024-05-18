import React from "react";
import SideNav from "../../../components/Receptionist/SideNav";
import UpperNav from "../../../components/Receptionist/UpperNav/UpperNav";
import DischargePatientsTable from "../../../components/Receptionist/DischargePatientsTable/DischargePatientsTable";
import browserLinks from "../../../browserlinks";

function DischargePatients() {
  return (
    <div className="superadmin-main flex flex-row w-full h-screen">
      <div className="w-[20%] shadow-lg">
        <SideNav
          activePage={`${browserLinks.receptionist.category}/${browserLinks.receptionist.internalPages.referPatients}`}
        />
      </div>
      <div className="superadmin-main-right flex flex-col w-[80%]">
        <UpperNav />
        <div className="superadmin-main-right_dashboard w-full overflow-y-scroll">
          <DischargePatientsTable />
        </div>
      </div>
    </div>
  );
}

export default DischargePatients;
