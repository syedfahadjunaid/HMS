import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React from "react";
import Table from "../../Table";
const addAppoiment = (
  <div>
    <form className="grid grid-cols-2 gap-4">
      <span className="gap-[5px]">
        <p>Full Name</p>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Email ID *</p>
        <input
          type="text"
          placeholder="Email ID *"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>PAN Number *</p>
        <input
          type="text"
          placeholder="PAN Number *"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Designation</p>
        <input
          type="text"
          placeholder="Designation *"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Division</p>
        <input
          type="text"
          placeholder="Division"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Date of Joining </p>
        <input
          type="date"
          placeholder="Division"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Basic Salary / Month </p>
        <input
          type="text"
          placeholder="Basic Salary / Month"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Management Grade</p>
        <input
          type="text"
          placeholder="Management Grade"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>Special Allowance / Month</p>
        <input
          type="text"
          placeholder="Special Allowance / Month"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <span className="gap-[5px]">
        <p>INCENTIVE/BENEFITS APPLICABLE</p>
        <input
          type="text"
          placeholder="INCENTIVE"
          className="w-full h-[2.5rem] outline-none border-[2px] border-[#C8C8C8] pl-[5px] rounded"
        />
      </span>
      <button className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]">
        Save
      </button>
    </form>
  </div>
);
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      label: "Date",
      // render: (list) => list.adminName,
    },
    {
      label: "Basic Salary / Month",
      // render: (list) => list.adminEmail,
    },
    {
      label: "Dob",
      // render: (list) => `${date(list.createdAt)} - ${time(list.createdAt)}`,
    },
    {
      label: "designation",
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
    </div>
  );
}

export default EmployeeAppoimenttable;
