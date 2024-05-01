import React from "react";
import SideNav from "../../../components/DoctorsTable/SideNav";

import browserLinks from "../../../browserlinks";
import UpperNav from "../../../components/DoctorsTable/UpperNav/UpperNav";
import DoctorTable from "../../../components/DoctorsTable/DoctorsTable/DoctorTable";

function Doctors() {
  return (
    <div className="superadmin-main flex flex-row w-full h-screen">
      <div className="superadmin-main-left w-[20%] shadow-lg">
        <SideNav
          activePage={`${browserLinks.Doctor.category}/${browserLinks.Doctor.internalPages.Doctors}`}
        />
      </div>
      <div className="superadmin-main-right flex flex-col w-[80%]">
        <UpperNav />
        <div className="superadmin-main-right_dashboard w-full overflow-y-scroll">
          <DoctorTable />
        </div>
      </div>
    </div>
  );
}

export default Doctors;
