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
