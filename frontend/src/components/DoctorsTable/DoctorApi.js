import axios from "axios";

export const getAllOpdPatientsData = async () => {
  try {
    const response = await axios.get("/api/OPDPatient-GET-ALL");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOpdPatientsDoctorData = async () => {
  try {
    const response = await axios.get("/api/OPD-GET-ALL");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addOpdDoctorCheckData = async (formData) => {
  try {
    const response = await axios.post("/api/OPD-Create", formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getOneOpdDoctorCheckData = async (Id, formData) => {
  try {
    const response = await axios.post(`/api/get-one-opd-data/${Id}`, formData);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
export const updateOpdDoctorCheckData = async (Id, formData) => {
  try {
    const response = await axios.post(`/api/update-one-Opd/${Id}`, formData);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
