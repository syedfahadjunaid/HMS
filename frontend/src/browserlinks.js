const browserLinks = {
  login: "/",
  superadmin: {
    category: "/Superadmin",
    internalPages: {
      dashboard: "Dashboard",
      authenticatedUsers: "Authenticated Users",
      billing: "Billing",
      patients: "Patients",
      appointments: "Appointments",
      doctors: "Doctors",
      messages: "Messages",
      educationContent: "Education Content",
      medicineInventory: "Medicine Inventory",
      settings: "Settings",
      opd: "OPD",
      ipd: "IPD",
      opdPatients: "OPD Patients",
      ipdPatients: "IPD Patients",
    },
  },
  hr: {
    category: "/HR",
    internalPages: {
      dashboard: "Dashboard",
      employeeManagement: "Employee Management",
      preOnboardingCandidate: "Pre Onboarding Candidate",
      employeeCreation: "Employee Creation",
      searchEmployee: "Search Employee",
      employeeBulkUpdate: "Employee Bulk Update",
      employeeBackgroundVerification: "Background Verification",
      employeeCompensation: "Compensation",
      employeeAppointments: "Appointments",
    },
  },
  nurse: {
    category: "/Receptionist",
    pageCategories: {
      patientRegistration: "Patients",
      opdPatients: "OPD Patients",
      emergency: "Emergency",
    },
    internalPages: {
      dashboard: "Dashboard",
      addPatient: "Add Patient",
      editPatient: "Patient List",
      addOPDPatient: "Add OPD Patient",
      editOPDPatient: "OPD Patient List",
      addEmergencyPatient: "Add Emergency Patient",
      editEmergencyPatient: "Emergency Patient List",
    },
  },
  Pharmacist: {
    category: "/Pharmacist",
    internalPages: {
      Patientlist: "Patient List",
    },
  },
  Doctor: {
    category: "/Doctor",
    internalPages: {
      Doctors: "Doctor",
    },
  },
  Accountant: {
    category: "/Accountant",
    internalPages: {
      Billing: "Billing",
      Department: "Department",
      AdmissionandCharges: "Admission Charges",
      OPDConsultationCharges: "OPD Consultation Charges",
      AccommodationCharges: "Accommodation Charges",
      DoctorvisitCharges: "Doctor visit Charges",
      OTChargesSuperSpecialtyOperation:
        "O.T Charges / Super Specialty operation",
      OTCharges: "OT charges",
      PhysiotheraphyOPD: "Physiotheraphy OPD",
      BedsidePhysiotherapyIPD: "Bedside  Physiotherapy  IPD",
      TariffsofMinorProcedures: "Tariffs of  minor procedures",
      DayCareProcedure: "Day Care Procedure",
      Package: "Package",
      otherpackage: "Other Package",
      TraumaCases: "Trauma Cases",
    },
  },
};

// 1 = "Super Admin"
// 2 = "Doctor"
// 3 = "HR"
// 4 = "Receptionist"
// 5 = "Pharmacist"
// 6 = "Accountant"
// 7 = "Nurse"
// 8 = "Radiologist"
// 9 = "Laboratory Assistant"

// nurse = receptionist (nurse section is named as receptionist)
// receptionist = nurse (receptionist is named as nurse)

export default browserLinks;
