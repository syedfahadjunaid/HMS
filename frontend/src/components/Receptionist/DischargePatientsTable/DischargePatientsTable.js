import { Backdrop, Box, Fade, Modal, Switch } from "@mui/material";
import React from "react";
import { CiViewList } from "react-icons/ci";
import { RiEdit2Fill } from "react-icons/ri";
import style from "../../../styling/styling";
import Select from "react-select";
import { IoIosArrowForward } from "react-icons/io";
function DischargePatientsTable() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: "",
    marginBottom: 8,
    marginTop: 8,
    width: 1,
    border: "transparent",
    outline: "none",
  };
  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">Refer Patient List</h2>
        <button
          className="bg-[#3497F9] text-white py-[5px] px-[10px] rounded-md "
          onClick={handleOpen}
        >
          Add Referral
        </button>
      </div>
      <div className="w-full">
        <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
          <thead>
            <th className="border-[1px] p-1 font-semibold">
              <p>S_N</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>ReferrallD</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Referring DoctorID</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>ReferredToDoctorID</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>PatientID</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>ReferralDate</p>
            </th>

            <th className="border-[1px] p-1 font-semibold">
              <p>Patient Checked</p>
            </th>

            <th className="border-[1px] p-1 font-semibold">
              <p>Action</p>
            </th>
          </thead>
          <tbody>
            <tr key={1} className="border-b-[1px]">
              <td className="justify-center text-[16px] py-4 px-[4px] text-center ">
                1
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center ">
                uhid014110200
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center ">
                Arman
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center ">
                <Switch {...label} defaultChecked />
              </td>

              <td className="justify-center text-[16px] py-4 px-[4px] text-center  flex-row">
                <div className="flex gap-[10px] justify-center">
                  <div className="p-[4px] h-fit w-fit border-[2px] border-[#96999C] rounded-[12px] cursor-pointer">
                    <CiViewList className="text-[20px] text-[#96999C]" />
                  </div>{" "}
                  <div className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer">
                    <RiEdit2Fill className="text-[20px] text-[#3497F9]" />
                  </div>
                </div>
              </td>
            </tr>
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
            <form className="w-full flex flex-col items-start justify-start gap-2">
              <div className="grid grid-cols-2 gap-4 w-full">
                <span className="flex flex-col justify-start items-start w-full gap-2">
                  <p>Patients Uhid</p>
                  <Select
                    closeMenuOnSelect={false}
                    components={{ indicatorSeparatorStyle }}
                    defaultValue={colourOptions[2]}
                    options={colourOptions}
                    className="border-[2px] w-full rounded"
                  />
                </span>
                <span className="flex flex-col justify-start items-start w-full gap-2">
                  <p>Refrring Doc ID</p>
                  <Select
                    closeMenuOnSelect={false}
                    components={{ indicatorSeparatorStyle }}
                    defaultValue={colourOptions[2]}
                    options={colourOptions}
                    className="border-[2px] w-full rounded"
                  />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <span className="flex flex-col justify-start items-start w-full gap-2">
                  <p>Referred Doc ID </p>
                  <Select
                    closeMenuOnSelect={false}
                    components={{ indicatorSeparatorStyle }}
                    defaultValue={colourOptions[2]}
                    options={colourOptions}
                    className="border-[2px] w-full rounded"
                  />
                </span>
                <span className="flex flex-col justify-start items-start w-full gap-2">
                  <p>Referral Date</p>
                  <input
                    type="datetime-local"
                    id="meeting-time"
                    name="meeting-time"
                    value="2018-06-12T19:30"
                    min="2018-06-07T00:00"
                    max="2018-06-14T00:00"
                    className="border-[2px] w-full h-[2.4rem] rounded"
                    style={{borderWidth:'2px'}}
                    onChange={(e) => console.log(e.target.value)}
                  />
                </span>
              </div>
              <div className="grid grid-cols-2 gap- w-full">
                <span className="flex flex-col justify-start items-start w-full gap-2">
                  <p>Reason for Referral </p>
                  <textarea
                    rows={3}
                    placeholder="Reason for Referral"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 w-full">
                <p>Note </p>
                <textarea
                  rows={4}
                  placeholder="Additional Info"
                  className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                />
              </div>
              <button className="flex items-center gap-1 bg-[#3497F9] text-white py-[5px] px-[10px] rounded-md">
                Save <IoIosArrowForward />
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default DischargePatientsTable;
