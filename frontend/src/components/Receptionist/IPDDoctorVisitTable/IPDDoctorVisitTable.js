import React, { useEffect, useState } from "react";
import "./IPDDoctorVisitTable.css";
import { Suspense } from "react";

import { FaSearch } from "react-icons/fa";
import { MdDeleteForever, MdViewKanban } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LuHardDriveDownload } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";

import { FaRegSave } from "react-icons/fa";

import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { getDoctorVisitListWithIpdPatientsData } from "../NurseApi";
import { Backdrop, Box, Fade, Modal, Switch, Typography } from "@mui/material";
import { CiViewList } from "react-icons/ci";
import style from "../../../styling/styling";

export default function IPDDoctorVisitTable() {
  const { patients } = useSelector((state) => state.PatientState);
  const { doctors } = useSelector((state) => state.DoctorState);
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

  const [searchByPatientReg, setSearchByPatientReg] = React.useState("");
  const [searchByDoctorName, setSearchByDoctorName] = React.useState("");
  const [searchByDate, setSearchByDate] = React.useState("");

  const doctorVisitData = [
    {
      doctorName: "Doctor 1",
      patientId: "Patient12345",
      dateTime: "2024,04,13",
    },
    {
      doctorName: "Doctor 2",
      patientId: "Patient22346",
      dateTime: "2024,04,14",
    },
    {
      doctorName: "Doctor 3",
      patientId: "Patient2254346",
      dateTime: "2024,04,15",
    },
    {
      doctorName: "Doctor 4",
      patientId: "Patient65346",
      dateTime: "2024,04,16",
    },
  ];
  const [doctorWithPatients, setDoctorWithPatients] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState([]);
  const [selectedTest, setSelectedTest] = useState([]);
  const addMedicineTableHandle = (e) => {
    e.preventDefault();
    setSelectedMedicine([
      ...selectedMedicine,
      { name: "", quantity: "", price: "", date: "" },
    ]);
  };
  const getMedicineDataHandle = (e, index) => {
    let oldValue = [...selectedMedicine];
    oldValue[index] = {
      ...oldValue[index],
      [e.target.name]: e.target.value,
    };
    setSelectedMedicine(oldValue && oldValue);
    console.log(selectedMedicine);
  };
  const deleteMedicineHandle = (e, index) => {
    e.preventDefault();
    let oldValue = [...selectedMedicine];
    console.log(oldValue);
    oldValue.splice(index, 1);
    console.log(oldValue);
    setSelectedMedicine(oldValue && oldValue);
  };

  const getDoctorVisitListWithIpdPatientsDataHandle = async () => {
    const result = await getDoctorVisitListWithIpdPatientsData();
    if (result?.status === 200) {
      setDoctorWithPatients(result?.data?.data);
    }
    console.log(result);
  };
  useEffect(() => {
    getDoctorVisitListWithIpdPatientsDataHandle();
  }, []);
  return (
    <Suspense fallback={<>...</>}>
      <div className="flex flex-col gap-[1rem] p-[1rem]">
        <div className="flex justify-between">
          <h2 className="border-b-[4px] border-[#3497F9]">Dr Visit List</h2>
          {/* <button
            onClick={handleOpen}
            className='bg-[#3497F9] text-white p-[10px] rounded-md'>
            + Add Patient
          </button> */}
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="flex gap-[1rem]">
            <div className="flex gap-[10px] bg-[#F4F6F6] items-center p-[10px] rounded-[18px]">
              <FaSearch className="text-[#56585A]" />
              <input
                className="bg-transparent outline-none"
                placeholder="Search by patient"
              />
            </div>
            <div className="flex gap-[10px] bg-[#F4F6F6] items-center p-[10px] rounded-[18px]">
              <FaSearch className="text-[#56585A]" />
              <input
                className="bg-transparent outline-none"
                placeholder="Search by doctor"
              />
            </div>

            <div className="flex gap-[10px] bg-[#F4F6F6] items-center p-[10px] rounded-[18px]">
              <input type="date" className="bg-transparent outline-none" />
            </div>
          </div>

          <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
            <thead>
              <th className="border-[1px] p-1 font-semibold">
                <p>S_N</p>
              </th>
              <th className="border-[1px] p-1 font-semibold">
                <p>Patient Uhid</p>
              </th>
              <th className="border-[1px] p-1 font-semibold">
                <p>Doctor Name</p>
              </th>
              <th className="border-[1px] p-1 font-semibold">
                <p> Admiited Date/TIme </p>
              </th>

              <th className="border-[1px] p-1 font-semibold">
                <p>Doc Visit Checked</p>
              </th>

              <th className="border-[1px] p-1 font-semibold">
                <p>Action</p>
              </th>
            </thead>

            <tbody>
              {doctorWithPatients?.map((item, index) => (
                <tr key={index} className="border-b-[1px]">
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {index + 1}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {"Uhid" + item?.IpdpatientId}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {item?.doctorName}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    {date(item?.IpdPatientCreatedTime)} /
                    {time(item?.IpdPatientCreatedTime)}
                  </td>{" "}
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                    <Switch />
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center  flex-row border-r">
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
              ))}
            </tbody>
          </table>
        </div>
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
              Doctor Visit
            </Typography>
            <form className="w-full flex flex-col gap-3">
              <div className="w-full grid grid-cols-2 gap-3 pt-3">
                <div className="w-full flex items-start justify-start flex-col gap-1">
                  <p>Doctor Name</p>
                  <span className="w-full border-[1px] rounded border-[#ccc] p-1">
                    <input
                      type="text"
                      placeholder="Doctor Name"
                      className="w-full border-none outline-none"
                    />
                  </span>
                </div>{" "}
                <div className="w-full flex items-start justify-start flex-col gap-1">
                  <p>Doctor Visti Time</p>
                  <span className="w-full border-[1px] rounded border-[#ccc] p-1">
                    <input
                      type="datetime-local"
                      placeholder="Doctor Name"
                      className="w-full border-none outline-none"
                    />
                  </span>
                </div>{" "}
              </div>
              <div className="w-full ">
                <div className="w-full flex justify-between items-center pt-1 pb-3">
                  <p className="text-[1.2rem] font-semibold">Medicine</p>
                  <button
                    className="buttonFilled w-fit flex items-center"
                    onClick={addMedicineTableHandle}
                  >
                    Add Medicine
                  </button>
                </div>
                <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
                  <thead>
                    <th className="border-[1px] p-1 font-semibold">
                      <p>S_N</p>
                    </th>
                    <th className="border-[1px] p-1 font-semibold">
                      <p>Medicine</p>
                    </th>

                    <th className="border-[1px] p-1 font-semibold">
                      <p>Quantity</p>
                    </th>
                    <th className="border-[1px] p-1 font-semibold">
                      <p>Price</p>
                    </th>
                    <th className="border-[1px] p-1 font-semibold">
                      <p>Date</p>
                    </th>

                    <th className="border-[1px] p-1 font-semibold">
                      <p>Action</p>
                    </th>
                  </thead>
                  <tbody>
                    {selectedMedicine?.map((item, index) => (
                      <tr key={index} className="border-b-[1px]">
                        <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                          {index + 1}
                        </td>
                        <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                          <input
                            type="text"
                            className="w-full  outline-none"
                            placeholder="Medicine"
                            name="name"
                            value={item?.name}
                            onChange={(e) => getMedicineDataHandle(e, index)}
                          />
                        </td>

                        <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                          <input
                            type="text"
                            className="w-[5rem]  outline-none"
                            placeholder="quantity"
                            name="quantity"
                            onChange={(e) => getMedicineDataHandle(e, index)}
                          />
                        </td>
                        <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                          <input
                            type="text"
                            className="w-[5rem]  outline-none"
                            placeholder="price"
                            name="price"
                            onChange={(e) => getMedicineDataHandle(e, index)}
                          />
                        </td>
                        <td className="justify-center text-[16px] py-4 px-[4px] text-center border-r">
                          <input
                            type="date"
                            className="w-[8rem]  outline-none"
                            name="date"
                            onChange={(e) => getMedicineDataHandle(e, index)}
                          />
                        </td>
                        <td
                          className="justify-center text-[16px] py-4 px-[4px] text-center border-r flex items-center justify-center"
                          onClick={(e) => deleteMedicineHandle(e, index)}
                        >
                          <MdDeleteForever className="text-[red] text-[1.5rem] cursor-pointer" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Suspense>
  );
}
