import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../Table";
import {
  addEmployeeAppoiment,
  getAllAppoimentData,
  getOneAppoimentData,
  updateAppoimentData,
} from "../HrApiCollection";
import Snackbars from "../../SnackBar";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { IoMdPrint } from "react-icons/io";
import { useSelector } from "react-redux";

function EmployeeAppoimenttable() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: "600px",
    bgcolor: "background.paper",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "transparent",
    overflowY: "scroll",
  };
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [snackBarData, setSnackBarData] = useState({
    open: false,
    message: "",
  });
  const { adminLoggedInData } = useSelector((state) => state?.AdminState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [appoimentId, setAppoimentId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allAppoimentData, setAllAppimentData] = useState();
  const [getAppoimentData, setGetAppoimentData] = useState({
    fullName: "",
    emailId: "",
    Designation: "",
    PanCard: "",
    Division: "",
    DateofJoining: "",
    BasicSalary: "",
    ManagementGrade: "",
    SpecialAllowance: "",
    INCENTIVE: "",
    createdBy: "",
  });
  const handleGetValue = (e) => {
    setGetAppoimentData({
      ...getAppoimentData,
      [e.target.name]: e.target.value,
    });
  };
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
      label: "Appointments Name",
      // render: (list) => list.tableId,
    },
    {
      label: "Date Of Joining",
      // render: (list) => list.adminName,
    },
    {
      label: "Basic Salary / Month",
      // render: (list) => list.adminEmail,
    },

    {
      label: "Designation",
      // render: (list) => `${date(list.updatedAt)} - ${time(list.updatedAt)}`,
    },

    {
      label: "User Action",
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
  const getAllAppoimentDataHandle = async () => {
    const result = await getAllAppoimentData();
    setAllAppimentData(result && result);
    console.log(result);
  };
  const addAppoimentDataHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", getAppoimentData?.fullName);
    formData.append("Email", getAppoimentData?.emailId);
    formData.append("dataofJoin", getAppoimentData?.DateofJoining);
    formData.append("createdBy", adminLoggedInData?.adminEmail);
    formData.append("basicSalary", getAppoimentData?.BasicSalary);
    formData.append("Ensentive", getAppoimentData?.INCENTIVE);
    formData.append("Division", getAppoimentData?.Division);
    formData.append("Designation", getAppoimentData?.Designation);
    formData.append("managementGrade", getAppoimentData?.ManagementGrade);
    formData.append("specialAllowance", getAppoimentData?.SpecialAllowance);
    formData.append("panNumber", getAppoimentData?.PanCard);
    setIsLoading(true);
    const result = await addEmployeeAppoiment(formData);
    setIsLoading(false);
    if (result) {
      handleClose();
      setSnackBarData({ open: true, message: result?.message });
      getAllAppoimentDataHandle();
    }
  };
  const getOneAppoimentDataHandle = async (id) => {
    const result = await getOneAppoimentData(id);
    setAppoimentId(result && result?.data?._id);
    setGetAppoimentData({
      ...getAllAppoimentData,
      fullName: result?.data?.fullName,
      emailId: result?.data?.Email,
      PanCard: result?.data?.panNumber,
      Designation: result?.data?.Designation,
      Division: result?.data?.Division,
      dataofJoin: result?.data?.dataofJoin,
      BasicSalary: result?.data?.basicSalary,
      ManagementGrade: result?.data?.managementGrade,
      SpecialAllowance: result?.data?.specialAllowance,
      INCENTIVE: result?.data?.Ensentive,
      createdBy: result?.data?.createdBy,
    });

    console.log(result, "result");
  };
  const updateAppoimentDataHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", getAppoimentData?.fullName);
    formData.append("Email", getAppoimentData?.emailId);
    formData.append("dataofJoin", getAppoimentData?.DateofJoining);
    formData.append("createdBy", adminLoggedInData?.adminEmail);
    formData.append("basicSalary", getAppoimentData?.BasicSalary);
    formData.append("Ensentive", getAppoimentData?.INCENTIVE);
    formData.append("Division", getAppoimentData?.Division);
    formData.append("Designation", getAppoimentData?.Designation);
    formData.append("managementGrade", getAppoimentData?.ManagementGrade);
    formData.append("specialAllowance", getAppoimentData?.SpecialAllowance);
    formData.append("panNumber", getAppoimentData?.PanCard);
    setIsLoading(true);
    const result = await updateAppoimentData(appoimentId, formData);
    if (result) {
      handleClose1();
      setSnackBarData({ open: true, message: result?.messaeg });
    }
    setIsLoading(false);
    console.log(result);
  };

  const addAppoiment = (
    <div>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={addAppoimentDataHandle}
      >
        <span className="gap-[5px]">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Email ID *</p>
          <input
            type="text"
            placeholder="Email ID *"
            name="emailId"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>PAN Number *</p>
          <input
            type="text"
            placeholder="PAN Number *"
            name="PanCard"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Designation</p>
          <input
            type="text"
            placeholder="Designation *"
            name="Designation"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Division</p>
          <input
            type="text"
            placeholder="Division"
            name="Division"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Date of Joining </p>
          <input
            type="date"
            placeholder="Division"
            name="DateofJoining"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Basic Salary / Month </p>
          <input
            type="number"
            placeholder="Basic Salary / Month"
            name="BasicSalary"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Management Grade</p>
          <input
            type="number"
            placeholder="Management Grade"
            name="ManagementGrade"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Special Allowance / Month</p>
          <input
            type="number"
            placeholder="Special Allowance / Month"
            name="SpecialAllowance"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>INCENTIVE/BENEFITS APPLICABLE</p>
          <input
            type="number"
            placeholder="INCENTIVE"
            name="INCENTIVE"
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>

        {!isLoading ? (
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md ">
            Save
          </button>
        ) : (
          <button
            className="bg-[#3497F9] text-white p-[10px] rounded-md "
            disabled
          >
            Saveing...
          </button>
        )}
      </form>
    </div>
  );
  const editAppoiment = (
    <div>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={updateAppoimentDataHandle}
      >
        <span className="gap-[5px]">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={getAppoimentData?.fullName}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Email ID *</p>
          <input
            type="text"
            placeholder="Email ID *"
            name="emailId"
            value={getAppoimentData?.emailId}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>PAN Number *</p>
          <input
            type="text"
            placeholder="PAN Number *"
            name="PanCard"
            value={getAppoimentData?.PanCard}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Designation</p>
          <input
            type="text"
            placeholder="Designation *"
            name="Designation"
            value={getAppoimentData?.Designation}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Division</p>
          <input
            type="text"
            placeholder="Division"
            name="Division"
            value={getAppoimentData?.Division}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Date of Joining </p>
          <input
            type="date"
            placeholder="Division"
            name="DateofJoining"
            value={getAppoimentData?.DateofJoining}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Basic Salary / Month </p>
          <input
            type="number"
            placeholder="Basic Salary / Month"
            name="BasicSalary"
            value={getAppoimentData?.BasicSalary}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Management Grade</p>
          <input
            type="number"
            placeholder="Management Grade"
            name="ManagementGrade"
            value={getAppoimentData?.ManagementGrade}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>Special Allowance / Month</p>
          <input
            type="number"
            placeholder="Special Allowance / Month"
            name="SpecialAllowance"
            value={getAppoimentData?.SpecialAllowance}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>
        <span className="gap-[5px]">
          <p>INCENTIVE/BENEFITS APPLICABLE</p>
          <input
            type="number"
            placeholder="INCENTIVE"
            name="INCENTIVE"
            value={getAppoimentData?.INCENTIVE}
            onChange={handleGetValue}
            className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
          />
        </span>

        {!isLoading ? (
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md ">
            Update
          </button>
        ) : (
          <button
            className="bg-[#3497F9] text-white p-[10px] rounded-md "
            disabled
          >
            Updating...
          </button>
        )}
      </form>
    </div>
  );
  useEffect(() => {
    getAllAppoimentDataHandle();
  }, []);

  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">
          Employee Appointments
        </h2>
        <button
          className="bg-[#3497F9] text-white p-[10px] rounded-md "
          onClick={handleOpen}
        >
          Add Appointments
        </button>
      </div>
      {/* <Table config={config} /> */}
      <div>
        <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
          <thead>
            {config?.map((item) => (
              <th className="border-b-[1px]">
                <p>{item?.label}</p>
              </th>
            ))}
          </thead>
          <tbody>
            {allAppoimentData?.map((item, index) => (
              <tr key={index}>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {index + 1}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.fullName}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.dataofJoin}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.basicSalary}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.Designation}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px] flex-row">
                  <div className="flex gap-[10px] justify-center">
                    <div
                      // onClick={() => handleOpenUpdateModal(list)}
                      className="p-[4px] h-fit w-fit border-[2px] border-[#96999C] rounded-[12px] cursor-pointer"
                    >
                      <IoMdPrint className="text-[25px] text-[#96999C]" />
                    </div>
                    <div
                      onClick={() => [
                        handleOpen1(),
                        getOneAppoimentDataHandle(item?._id),
                      ]}
                      className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer"
                    >
                      <RiEdit2Fill className="text-[25px] text-[#3497F9]" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="border-b-[4px] border-[#3497F9] w-fit"
            >
              Appointments
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {addAppoiment}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="border-b-[4px] border-[#3497F9] w-fit"
            >
              Appointments
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {editAppoiment}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Snackbars
        open={snackBarData?.open}
        message={snackBarData?.message}
        setOpen={setSnackBarData}
      />
    </div>
  );
}

export default EmployeeAppoimenttable;
