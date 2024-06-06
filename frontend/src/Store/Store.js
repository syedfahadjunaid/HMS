import { configureStore } from "@reduxjs/toolkit";

// Slices
import PatientSlice from "./Slices/PatientSlice";
import DoctorSlice from "./Slices/DoctorSlice";
import OPDPatientSlice from "./Slices/OPDPatientSlice";
import IPDPatientSlice from "./Slices/IPDPatientSlice";
import BillingSlice from "./Slices/BillingSlice";
import AdminSlice from "./Slices/AdminSlice";
import NurseSlice from "./Slices/NurseSlice";
// Services
import { patientService } from "./Services/PatientService";
import { doctorService } from "./Services/DoctorService";
import { OPDPatientService } from "./Services/OPDPatientService";
import { IPDPatientService } from "./Services/IPDPatientService";
import { billingService } from "./Services/BillingService";
import { AdminService } from "./Services/AdminService";
import Employee from "./Slices/HrSlice";
import Medicine from "./Slices/Medicine";
import Test from "./Slices/Test";
import { NurseService } from "./Services/NurseService";
export const store = configureStore({
  reducer: {
    PatientState: PatientSlice,
    [patientService.reducerPath]: patientService.reducer,
    DoctorState: DoctorSlice,
    [doctorService.reducerPath]: doctorService.reducer,
    OPDPatientState: OPDPatientSlice,
    [OPDPatientService.reducerPath]: OPDPatientService.reducer,
    IPDPatientState: IPDPatientSlice,
    [IPDPatientService.reducerPath]: IPDPatientService.reducer,
    BillingState: BillingSlice,
    [billingService.reducerPath]: billingService.reducer,
    AdminState: AdminSlice,
    [AdminService.reducerPath]: AdminService.reducer,
    EmployeeTableData: Employee,
    MedicineData: Medicine,
    TestData: Test,
    NurseState: NurseSlice,
    [NurseService.reducerPath]: NurseService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      patientService.middleware,
      doctorService.middleware,
      OPDPatientService.middleware,
      IPDPatientService.middleware,
      billingService.middleware,
      AdminService.middleware,
      NurseService.middleware,
    ]),
});
