import axios from "axios";

export const getAllNurseReferData = async () => {
  try {
    const response = await axios.get("/api/get-all-refered-patients");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const addNurseReferPatientsData = async (formData) => {
  try {
    const response = await axios.post("/api/refer-a-patients", formData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const getDoctorVisitListWithIpdPatientsData = async () => {
  try {
    const response = await axios.get("/api/get-each-doctor-with-patients");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const getAllDischargePatientsListData = async () => {
  try {
    const response = await axios.get("/api/IPDPatient-GET-ALL");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const addNurseDetailsForPatientsDischargeData = async (Id, formData) => {
  try {
    const response = await axios.put(
      `/api/IPDPatientDischarge-NurseDischargeDetails-PUT/${Id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
