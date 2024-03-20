import axios from "axios";
export const addNewEmployee = async (formData) => {
  const { data } = await axios
    .post(`${process.env.React_App_Base_url + "create-empolyee"}`, formData, {
      headers: { "Content-type": "multipart/form-data" },
    })
    .then((response) => response)
    .catch((error) => console.log(error));

  return data;
};
export const getAllEmployeeData = async () => {
  const { data } = await axios
    .get(`${process.env.React_App_Base_url + "Get-all-empolyee"}`, {
      headers: { "Content-type": "multipart/form-data" },
    })
    .then((response) => response)
    .catch((error) => console.log(error));
  return data;
};
