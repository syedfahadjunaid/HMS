import { Backdrop, Box, Fade, Modal, Switch, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { RiEdit2Fill } from "react-icons/ri";
import style from "../../../styling/styling";
import img from "../../../assets/20180125_001_1_.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { getReferPatientsData } from "../DoctorApi";
import { useSelector } from "react-redux";
import PaginationComponent from "../../Pagination";

function DoctorReferTable() {
  const { adminUniqueId } = useSelector((state) => state.AdminState);
  const [allReferPatients, setAllReferPatients] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const getReferPatientsDataHandle = async () => {
    const result = await getReferPatientsData();

    if (result?.status === 200) {
      const filter = result?.data?.data?.filter(
        (item) => item?.ReferredDoctorDetails?.[0]?.doctorId === adminUniqueId
      );

      setAllReferPatients(filter?.reverse());
    }
  };
  useEffect(() => {
    getReferPatientsDataHandle();
  }, []);
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-between">
        <h2 className="border-b-[4px] border-[#3497F9]">Refered Patient</h2>
      </div>
      <div className="w-full">
        <table className="w-full table-auto border-spacing-2 text-[#595959] font-[300]">
          <thead>
            <th className="border-[1px] p-1 font-semibold">
              <p>S_N</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>UHID</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Patient Name</p>
            </th>

            <th className="border-[1px] p-1 font-semibold">
              <p>Referal Notes</p>
            </th>
            <th className="border-[1px] p-1 font-semibold">
              <p>Refering Doctor </p>
            </th>

            <th className="border-[1px] p-1 font-semibold">
              <p>Action</p>
            </th>
          </thead>
          <tbody>
            {allReferPatients
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((item, index) => (
                <tr key={index}>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                    {index + 1}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                    {"Uhid" + item?.ipdPatientsDetails?.ipdPatientId}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                    {item?.PatientsDetails?.[0]?.patientName}
                  </td>{" "}
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                    {item?.ReasonForReferal}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px]">
                    {item?.ReferringDoctorDetails?.[0]?.doctorName}
                  </td>
                  <td className="justify-center text-[16px] py-4 px-[4px] text-center border-[1px] flex-row">
                    <div className="flex gap-[10px] justify-center">
                      <div
                        className="p-[4px] h-fit w-fit border-[2px] border-[#96999C] rounded-[12px] cursor-pointer"
                        onClick={handleOpen1}
                      >
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
        <PaginationComponent
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          data={allReferPatients}
        />
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
              Refer Patient's
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="flex pt-[10px] pb-[10px] gap-[10%]">
                <span>
                  <img src={img} alt="patients " className="w-[15rem] " />
                </span>
                <div class="grid grid-cols-2 gap-4">
                  <div className="flex gap-[10px]">
                    <span>Patients Reg ID</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Admission Date / Time</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Name</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Discharge Date / Time</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Gender</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Patient Categ</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Age</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Tarilt Catrg</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>IPD NO</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>MR and IP No</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Bill Bed Catrg</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Admitting Doctor</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>OCC bed categ</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Room and bed NO</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Bill Date and Time</span>:<p>19</p>
                  </div>
                </div>
              </div>
              <form className="w-full flex flex-col justify-start gap-2">
                <span className="flex flex-col justify-start gap-1">
                  <p>Provisional Diagnosis</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                  />
                </span>

                <span className="flex flex-col justify-start gap-1">
                  <p>Final Diagnosis :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>Physician in Charge :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>Name :</p>
                  <input
                    type="text"
                    placeholder="Add Symptoms"
                    className="border-[2px] w-full rounded outline-none w-full h-[2.2rem]  pl-[5px] "
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>ICD :</p>
                  <input
                    type="text"
                    placeholder="Add Symptoms"
                    className="border-[2px] w-full rounded outline-none w-full h-[2.2rem]  pl-[5px] "
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>Result : :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p> Disease / Diagnose :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p> Advise During Discharge</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                  />
                </span>

                <button className="buttonFilled w-fit flex items-center">
                  {" "}
                  Save <IoIosArrowForward />
                </button>
              </form>
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
              Refer Patient's
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="flex pt-[10px] pb-[10px] gap-[10%]">
                <span>
                  <img src={img} alt="patients " className="w-[15rem] " />
                </span>
                <div class="grid grid-cols-2 gap-4">
                  <div className="flex gap-[10px]">
                    <span>Patients Reg ID</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Admission Date / Time</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Name</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Discharge Date / Time</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Gender</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Patient Categ</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Age</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Tarilt Catrg</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>IPD NO</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>MR and IP No</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Bill Bed Catrg</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Admitting Doctor</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>OCC bed categ</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Room and bed NO</span>:<p>19</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <span>Bill Date and Time</span>:<p>19</p>
                  </div>
                </div>
              </div>
              <form className="w-full flex flex-col justify-start gap-2">
                <span className="flex flex-col justify-start gap-1">
                  <p>Provisional Diagnosis</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                    disabled
                  />
                </span>

                <span className="flex flex-col justify-start gap-1">
                  <p>Final Diagnosis :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                    disabled
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>Physician in Charge :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                    disabled
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>Name :</p>
                  <input
                    type="text"
                    placeholder="Add Symptoms"
                    className="border-[2px] w-full rounded outline-none w-full h-[2.2rem]  pl-[5px] "
                    disabled
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>ICD :</p>
                  <input
                    type="text"
                    placeholder="Add Symptoms"
                    className="border-[2px] w-full rounded outline-none w-full h-[2.2rem]  pl-[5px] "
                    disabled
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p>Result : :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                    disabled
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p> Disease / Diagnose :</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                    disabled
                  />
                </span>
                <span className="flex flex-col justify-start gap-1">
                  <p> Advise During Discharge</p>
                  <textarea
                    rows={5}
                    placeholder="Note"
                    className="border-[2px] w-full rounded outline-none w-full   pl-[5px] pt-[5px]"
                    disabled
                  />
                </span>

                <button className="buttonFilled w-fit flex items-center">
                  {" "}
                  Update <IoIosArrowForward />
                </button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default DoctorReferTable;
