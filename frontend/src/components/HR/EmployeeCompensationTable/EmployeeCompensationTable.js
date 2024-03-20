import React from "react";
import Table from "../../Table";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";

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
  const handleClose = () => setOpen(false);
  const addCompensation = (
    <div>
      <form className="grid grid-cols-2 gap-4">
        <span className="w-full">
          <p> EmpolyeeID</p>
          <input
            type="text"
            placeholder=" EmpolyeeID"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
          />
        </span>
        <span>
          <p>Compensation Payout</p>
          <input
            type="text"
            placeholder="Compensationpayout"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
          />
        </span>
        <span>
          <p>Effective Date</p>
          <input
            type="date"
            placeholder="EffectiveDate"
            className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]"
          />
        </span>
        <span>
          <p>Status</p>
          <select className="border-[2px] border-[#C8C8C8] rounded w-full h-[40px] outline-none pl-[5px]">
            <option value="">Select One status</option>
            <option value="1">Active</option>
            <option value="0">InActive</option>
          </select>
        </span>
        <button className="bg-[#3497F9] text-white p-[10px] rounded-md">
          Add Compensation
        </button>
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
      <Table config={config} />
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
    </div>
  );
}

export default EmployeeCompensationTable;
