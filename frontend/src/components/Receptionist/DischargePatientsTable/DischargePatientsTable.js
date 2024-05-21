import { Backdrop, Box, Fade, Modal, Switch, Typography } from "@mui/material";
import React from "react";
import { CiViewList } from "react-icons/ci";
import { RiEdit2Fill } from "react-icons/ri";
import style from "../../../styling/styling";
import { IoIosArrowForward } from "react-icons/io";

function DischargePatientsTable() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">
          Discharge Patient List
        </h2>
      </div>
      <div className="w-full">
        <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
          <thead>
            <th className="border-[1px] p-1 font-semibold">
              <p>S_N</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>UIHD</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Patient Name</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Dis Checked</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Date and time</p>
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
              <td className="justify-center text-[16px] py-4 px-[4px] text-center ">
                21/02/24 15:30
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center  flex-row">
                <div className="flex gap-[10px] justify-center">
                  <div className="p-[4px] h-fit w-fit border-[2px] border-[#96999C] rounded-[12px] cursor-pointer">
                    <CiViewList className="text-[20px] text-[#96999C]" />
                  </div>{" "}
                  <div
                    className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer"
                    onClick={handleOpen}
                  >
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
            <h2 className="border-b-[4px] border-[#3497F9] w-fit mb-2 pb-1">
              Discharge Patient
            </h2>
            <form className="w-full flex flex-col justify-start items-start gap-2">
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <p>Admitted For:</p>
                <textarea
                  rows={3}
                  placeholder="Admitted For"
                  className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <p>Investigation / Procedure:</p>
                <textarea
                  rows={3}
                  placeholder="Investigation / Procedure"
                  className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <p>Condition During Discharge:</p>
                <textarea
                  rows={3}
                  placeholder="Condition During 
                  Discharge"
                  className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                />
              </div>
              <p className="text-[1rem] font-semibold">
                Treatment Given in Brief:
              </p>
              <div className="w-full grid grid-cols-3 gap-2">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Date:</p>
                  <textarea
                    rows={2}
                    placeholder="Date"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>{" "}
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Operation:</p>
                  <textarea
                    rows={2}
                    placeholder="Operation"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>{" "}
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Indications:</p>
                  <textarea
                    rows={2}
                    placeholder="Indications"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Surgeon:</p>
                  <textarea
                    rows={2}
                    placeholder="Surgeon"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Assistants:</p>
                  <textarea
                    rows={2}
                    placeholder="Assistants"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Nurse:</p>
                  <textarea
                    rows={2}
                    placeholder="Nurse"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Anaesthetist:</p>
                  <textarea
                    rows={2}
                    placeholder="Anaesthetist"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Anaesthesia:</p>
                  <textarea
                    rows={2}
                    placeholder="Anaesthesia"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p>Implant Details:</p>
                  <textarea
                    rows={2}
                    placeholder="Implant Details"
                    className="border-[2px] w-full rounded outline-none pl-1 pt-1"
                  />
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 bg-[#3497F9] text-white py-[5px] px-[10px] rounded-md ">
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
