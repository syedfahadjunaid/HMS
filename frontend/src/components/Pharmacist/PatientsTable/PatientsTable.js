import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdPrint } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";

function PatientsTable() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "background.paper",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "transparent",
    height: "600px",
    overflowY: "scroll",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [consumables, setConsumables] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const addConsumableHandle = () => {
    setConsumables([
      ...consumables,
      { title: "", date: "", qty: "", rate: "", discount: "", amount: "" },
    ]);
  };
  const getConsumableValueHandle = (e, index) => {
    let oldValue = [...consumables];
    oldValue[index] = {
      ...oldValue[index],
      [e.target.name]: e.target.value,
    };
    setConsumables(oldValue && oldValue);
  };
  const deleteConsumableValueHandle = (index) => {
    let oldValue = [...consumables];
    oldValue.splice(index, 1);
    setConsumables(oldValue && oldValue);
  };
  useEffect(() => {
    console.log(consumables);
  }, [consumables]);
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">Patients List</h2>
      </div>
      <div>
        <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
          <thead>
            <tr>
              <th className="border-b-[1px]">
                <p>S N</p>
              </th>
              <th className="border-b-[1px]">
                <p>Name</p>
              </th>
              <th className="border-b-[1px]">
                <p>Date</p>
              </th>
              <th className="border-b-[1px]">
                <p>Mobile number</p>
              </th>
              <th className="border-b-[1px]">
                <p> Add Medicine </p>
              </th>
              <th className="border-b-[1px]">
                <p> View Medicine </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                1
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                Arman Ali
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                27/02/2024
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                8808907050
              </td>
              <td className="justify-center align-center flex text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                <div
                  // onClick={() => handleOpenUpdateModal(list)}
                  className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer"
                >
                  <IoMdAdd
                    className="text-[25px] text-[#3497F9]"
                    onClick={handleOpen}
                  />
                </div>
              </td>
              <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px] flex-row">
                <div className="flex gap-[10px] justify-center">
                  <div
                    // onClick={() => handleOpenUpdateModal(list)}
                    className="p-[4px] h-fit w-fit border-[2px] border-[#96999C] rounded-[12px] cursor-pointer"
                  >
                    <IoMdPrint className="text-[25px] text-[#96999C]" />
                  </div>
                  <div className="p-[4px] h-fit w-fit border-[2px] border-[#3497F9] rounded-[12px] cursor-pointer">
                    <RiEdit2Fill className="text-[25px] text-[#3497F9]" />
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
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="border-b-[4px] border-[#444444] w-fit"
            >
              Patients Details
            </Typography>
            <div class="grid grid-cols-3 gap-4 pt-[10px] pb-[10px]">
              <div className="">
                <span>Patients Reg ID</span>:
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Admission Date / Time</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Name</span>: <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Discharge Date / Time</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Gender</span>: <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Patient Categ</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Age</span>: <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Tarilt Catrg</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>IPD NO</span>: <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>MR and IP No</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>OPD NO </span>: <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Admitting Doctor </span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>OCC bed categ</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Room and bed NO</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
              <div className="">
                <span>Bill Date and Time</span>:{" "}
                <span className="text-[#444444]">19</span>
              </div>
            </div>
            <hr />
            <div className="w-full">
              <div className="flex justify-between pt-[10px] pb-[10px]">
                <p className="">Consumables</p>
                <button
                  className="bg-[#3497F9] text-white p-[8px] rounded-md "
                  onClick={addConsumableHandle}
                >
                  Add Items
                </button>
              </div>
              <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300] overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="border-b-[1px]">
                      <p>SN</p>
                    </th>
                    <th className="border-b-[1px]">
                      <p>Date</p>
                    </th>
                    <th className="border-b-[1px]">
                      <p>Material Name</p>
                    </th>
                    <th className="border-b-[1px]">
                      <p>Qty</p>
                    </th>
                    <th className="border-b-[1px]">
                      <p>Rate</p>
                    </th>
                    <th className="border-b-[1px]">
                      <p>Discount</p>
                    </th>
                    <th className="border-b-[1px]">
                      <p>Amount</p>
                    </th>
                  </tr>
                </thead>
                <tbody className="overflow-x-scroll">
                  {consumables?.map((item, index) => (
                    <tr>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <p>{index + 1}</p>
                      </td>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <input
                          type="date"
                          name="date"
                          onChange={(e) => getConsumableValueHandle(e, index)}
                          className="w-[8rem] h-[2rem] border-[2px] border-[#888] rounded outline-none"
                        />
                      </td>
                      <td className="flex align-center justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <textarea
                          rows={5}
                          name="title"
                          onChange={(e) => getConsumableValueHandle(e, index)}
                          className=" border-[2px] border-[#888] w-[10rem] h-[2rem] rounded pl-[5px] outline-none"
                        />
                      </td>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px] outline-none">
                        <input
                          type="text"
                          name="qty"
                          onChange={(e) => getConsumableValueHandle(e, index)}
                          className=" border-[2px] border-[#888] w-[10rem] h-[2rem] rounded pl-[5px] outline-none"
                        />
                      </td>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <input
                          type="text"
                          name="rate"
                          onChange={(e) => getConsumableValueHandle(e, index)}
                          className=" border-[2px] border-[#888] w-[10rem] h-[2rem] rounded pl-[5px] outline-none"
                        />
                      </td>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <input
                          type="text"
                          name="discount"
                          onChange={(e) => getConsumableValueHandle(e, index)}
                          className=" border-[2px] border-[#888] w-[10rem] h-[2rem] rounded pl-[5px] outline-none"
                        />
                      </td>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <input
                          type="text"
                          name="amount"
                          onChange={(e) => getConsumableValueHandle(e, index)}
                          className=" border-[2px] border-[#888] w-[10rem] h-[2rem] rounded pl-[5px] outline-none"
                        />
                      </td>
                      <td className="justify-center text-[16px] py-4 px-[4px] text-center border-b-[1px]">
                        <button
                          className="bg-[red] text-white p-[4px] rounded-md "
                          onClick={() => deleteConsumableValueHandle(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default PatientsTable;
