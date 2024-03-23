import React, { useEffect, useState } from "react";
import Table from "../../Table";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import {
  addCompensationData,
  getAllCompensitionData,
  getOneCompensationData,
  updateCompensationData,
} from "../HrApiCollection";
import Snackbars from "../../SnackBar";
import { IoMdPrint } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";

function EmployeeCompensationTable() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "transparent",
    height: "400px",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsLoading(false);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setIsLoading(false);
  };
  const [allCompensationData, setAllCompensationData] = useState();
  const [compensationId, setCompensationId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarData, setSnackBarData] = useState({
    open: false,
    message: "",
  });
  const [compensationData, setCompensationData] = useState({
    employeeId: "",
    compensationPayout: "",
    effectiveData: "",
    status: "",
  });
  const handleGetValue = (e) => {
    setCompensationData({
      ...compensationData,
      [e.target.name]: e.target.value,
    });
  };
  const getAllCompensitionDataHandle = async () => {
    const result = await getAllCompensitionData();
    setAllCompensationData(result && result);
    console.log(result, "compen");
  };
  const addEmployeeCompensationHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("EmpolyeeID", compensationData?.employeeId);
    formData.append("Compensationpayout", compensationData?.compensationPayout);
    formData.append("EffectiveDate", compensationData?.effectiveData);
    formData.append("Status", compensationData?.status);
    setIsLoading(true);
    const resuult = await addCompensationData(formData);
    if (resuult) {
      handleClose();
      setSnackBarData({ open: true, message: resuult?.message });
    }
    console.log(resuult);
    setIsLoading(false);
  };
  const getOneCompensationDataHandle = async (id) => {
    const result = await getOneCompensationData(id);
    setCompensationId(result && result?.[0]?._id);
    setCompensationData({
      ...compensationData,
      employeeId: result?.[0]?.EmpolyeeID,
      compensationPayout: result?.[0]?.Compensationpayout,
      effectiveData: result?.[0]?.EffectiveDate,
      status: result?.[0]?.Status,
    });
    console.log(result);
  };
  const updateCompensationDataHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("EmpolyeeID", compensationData?.employeeId);
    formData.append("Compensationpayout", compensationData?.compensationPayout);
    formData.append("EffectiveDate", compensationData?.effectiveData);
    formData.append("Status", compensationData?.status);
    const result = await updateCompensationData(compensationId, formData);
    console.log(result);
  };
  const addCompensation = (
    <div>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={addEmployeeCompensationHandle}
      >
        <span className="w-full">
          <p> EmpolyeeID</p>
          <input
            type="text"
            placeholder=" EmpolyeeID"
            name="employeeId"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            onChange={handleGetValue}
            required
          />
        </span>
        <span>
          <p>Compensation Payout</p>
          <input
            type="text"
            placeholder="Compensationpayout"
            name="compensationPayout"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            onChange={handleGetValue}
            required
          />
        </span>
        <span>
          <p>Effective Date</p>
          <input
            type="date"
            placeholder="EffectiveDate"
            name="effectiveData"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            onChange={handleGetValue}
            required
          />
        </span>
        <span>
          <p>Status</p>
          <select
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            name="status"
            onChange={handleGetValue}
            required
          >
            <option value="">Select One status</option>
            <option value="1">Active</option>
            <option value="0">InActive</option>
          </select>
        </span>
        {!isLoading ? (
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md">
            Add Compensation
          </button>
        ) : (
          <button
            className="bg-[#3497F9] text-white p-[10px] rounded-md"
            disabled
          >
            Adding...
          </button>
        )}
      </form>
    </div>
  );
  const updateCompensation = (
    <div>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={updateCompensationDataHandle}
      >
        <span className="w-full">
          <p> EmpolyeeID</p>
          <input
            type="text"
            placeholder=" EmpolyeeID"
            name="employeeId"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            value={compensationData?.employeeId}
            onChange={handleGetValue}
            required
          />
        </span>
        <span>
          <p>Compensation Payout</p>
          <input
            type="text"
            placeholder="Compensationpayout"
            name="compensationPayout"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            value={compensationData?.compensationPayout}
            onChange={handleGetValue}
            required
          />
        </span>
        <span>
          <p>Effective Date</p>
          <input
            type="date"
            placeholder="EffectiveDate"
            name="effectiveData"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            value={compensationData?.effectiveData}
            onChange={handleGetValue}
            required
          />
        </span>
        <span>
          <p>Status</p>
          <select
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
            name="status"
            onChange={handleGetValue}
            value={compensationData?.status}
            required
          >
            <option value="">Select One status</option>
            <option value="1">Active</option>
            <option value="0">InActive</option>
          </select>
        </span>
        {!isLoading ? (
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md">
            Update Compensation
          </button>
        ) : (
          <button
            className="bg-[#3497F9] text-white p-[10px] rounded-md"
            disabled
          >
            Adding...
          </button>
        )}
      </form>
    </div>
  );
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
      label: "Employee Name",
      // render: (list) => list.tableId,
    },
    {
      label: "Employement Number",
      // render: (list) => list.adminName,
    },
    {
      label: "Currency",
      // render: (list) => list.adminEmail,
    },
    {
      label: "Total  CTC",
      // render: (list) => `${date(list.createdAt)} - ${time(list.createdAt)}`,
    },
    {
      label: "Effective Date",
      // render: (list) => `${date(list.updatedAt)} - ${time(list.updatedAt)}`,
    },

    {
      label: "Action",
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
  useEffect(() => {
    getAllCompensitionDataHandle();
  }, []);
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">Compensation</h2>
        <button
          className="bg-[#3497F9] text-white p-[10px] rounded-md"
          onClick={handleOpen}
        >
          Add Compensation
        </button>
      </div>
      <form className="flex flex-col align-start justify-start gap-[10px]">
        <p className="w-fit">Upload File *</p>
        <span className="w-fit flex gap-[10px]">
          <input type="file" required />
          <button className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]">
            Submit
          </button>
        </span>
      </form>
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">
          Compensation Details
        </h2>
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
            {allCompensationData?.data?.map((item, index) => (
              <tr key={index}>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {index + 1}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.fullname}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.workedemail}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.bloodgroup}
                </td>
                <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                  {item?.PAN}
                </td>
                <td>
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
                        getOneCompensationDataHandle(
                          item?.compensation?.[0]?._id
                        ),
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Compensation
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {addCompensation}
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Compensation
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {updateCompensation}
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

export default EmployeeCompensationTable;
