import React, { useEffect, useState } from "react";
import img from "../../../assets/20180125_001_1_.jpg";
import { useForm } from "react-hook-form";
import { addNewEmployee } from "../HrApiCollection";
import Snackbars from "../../SnackBar";
function EmployeeCreationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [snackBarData, setSnackBarData] = useState({
    open: false,
    message: "",
  });
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("fullname", data?.fullName);
    formData.append("dateOfBrith", data?.dob);
    formData.append("zipCode", data?.zipcode);
    formData.append("state", data?.state);
    formData.append("city", data?.city);
    formData.append("Nationality", data?.nationality);
    formData.append("AadharNumber", data?.adharnumber);
    formData.append("bloodgroup", data?.bloodgroup);
    formData.append("workedemail", data?.workEmailId);
    formData.append("country", data?.country);
    formData.append("empolyeeType", data?.employeeStatus);
    formData.append("mertialStatus", data?.maritalStatus);
    formData.append("PAN", data?.panNumber);
    formData.append("gender", data?.gender);
    formData.append("image", data?.image[0]);
    formData.append("BasicSalary", data?.basisSalary);
    formData.append("Allowance", data?.specialAllowance);
    formData.append("Incentive", data?.incentive);
    formData.append("currentAddress", data?.currentAddress);
    formData.append("permanentaddress", data?.permanentAddress);
    setIsLoading(true);
    const result = await addNewEmployee(formData);
    if (result) {
      setSnackBarData({ open: true, message: result?.message });
      console.log(result);
      reset();
      setImage();
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-[1rem] p-[1rem]">
      <div className="flex justify-start">
        <h2 className="border-b-[4px] border-[#3497F9]">Add New Employee</h2>
      </div>
      <div className="flex flex-col items-start w-full">
        <h4>Employee Details</h4>
        <form
          className="w-full grid grid-cols-3 gap-[10px] items-start justify-start mt-[10px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="border-[2px] border-[#C8C8C8]  rounded flex-wrap">
            <select
              className="w-full h-[40px] outline-none"
              {...register("title", {
                required: true,
              })}
            >
              <option value="">Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </select>
            {errors?.title && <p className="errors ">This Field is Required</p>}
          </span>
          <span className="border-[2px] border-[#C8C8C8] rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Full  name  *"
              {...register("fullName", {
                required: true,
                maxLength: 20,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.fullName && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="date"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="DOB *"
              {...register("dob", {
                required: true,
              })}
            />
            {errors?.dob && <p className="errors ">This Field is Required</p>}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Zip  code *"
              {...register("zipcode", {
                required: true,
                pattern: /^[0-9+-]+$/,
                minLength: 6,
                maxLength: 6,
              })}
            />
            {errors?.zipcode && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="State*"
              {...register("state", {
                required: true,
                maxLength: 25,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.state && <p className="errors ">This Field is Required</p>}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="City*"
              {...register("city", {
                required: true,
                maxLength: 25,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.city && <p className="errors ">This Field is Required</p>}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Nationality*"
              {...register("nationality", {
                required: true,
                maxLength: 25,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.nationality && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Country*"
              {...register("country", {
                required: true,
                maxLength: 25,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.country && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Aadhar Number*"
              {...register("adharnumber", {
                required: true,
                pattern: /^[0-9+-]+$/,
                minLength: 12,
                maxLength: 12,
              })}
            />
            {errors?.adharnumber && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <select
              onChange={(e) => console.log(e.target.value)}
              className="w-full h-[40px] outline-none"
              {...register("bloodgroup", {
                required: true,
              })}
            >
              <option value="">Blood Group</option>
              <option>O positive</option>
              <option>O negative</option>
              <option>A positive</option>
              <option>A negative</option>
              <option>B positive</option>
              <option>B negative</option>
              <option>AB positive</option>
              <option>AB negative</option>
            </select>
            {errors?.bloodgroup && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Work Email ID*"
              {...register("workEmailId", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors?.workEmailId && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <select
              className="w-full h-[40px] pl-[5px] outline-none"
              {...register("maritalStatus", {
                required: true,
              })}
            >
              <option value="">Select Marital Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            {errors?.maritalStatus && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="PAN Number"
              {...register("panNumber", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors?.panNumber && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <select
              className="w-full h-[40px] pl-[5px] outline-none"
              {...register("employeeStatus", {
                required: true,
              })}
            >
              <option value="">Select Employee Status</option>
              <option>Active</option>
              <option>InActive</option>
            </select>
            {errors?.employeeStatus && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>

          <div className="flex align-center gap-[10px]">
            <span className="flex align-center gap-[5px]">
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender", {
                  required: true,
                })}
              />
              <p>Male</p>
            </span>
            <span className="flex align-center gap-[5px]">
              <input
                type="radio"
                name="gender"
                value={"female"}
                {...register("gender", {
                  required: true,
                })}
              />
              <p>Female</p>
            </span>
            {errors?.gender && (
              <p className="errors ">This Field is Required</p>
            )}
          </div>
          <span>
            <input
              type="file"
              className="w-full h-[40px] pl-[5px] outline-none"
              {...register("image", {
                required: "Image is required",
                validate: {
                  acceptedFormats: (value) => {
                    const acceptedFormats = [
                      "image/jpeg",
                      "image/png",
                      "image/gif",
                      "image/jpg",
                    ];
                    return (
                      acceptedFormats.includes(value[0]?.type) ||
                      "Only JPEG,JPG, PNG, or GIF images are allowed"
                    );
                  },
                  maxSize: (value) =>
                    value[0]?.size <= 10485760 ||
                    "Image size should be less than or equal to 10MB",
                },
              })}
              onChange={(e) => setImage(e.target.files[0])}
            />
            {errors?.image && <p className="errors ">This Field is Required</p>}
          </span>
          <span>
            <img
              src={image ? URL.createObjectURL(image) : img}
              alt="employee"
              className="w-[250px] h-[200px]"
            />
          </span>
          <br />
          <h4 className="border-b-[4px] border-[#3497F9] text-start w-fit">
            Address
          </h4>
          <br />
          <span></span>

          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <textarea
              rows={5}
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Enter Current Address"
              {...register("currentAddress", {
                required: true,

                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.currentAddress && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <textarea
              rows={5}
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Enter Permanent Address"
              {...register("permanentAddress", {
                required: true,

                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors?.permanentAddress && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span></span>

          <h4 className="border-b-[4px] border-[#3497F9] text-start w-fit">
            Salary
          </h4>
          <br />
          <span></span>

          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Enter Basic Salary"
              {...register("basisSalary", {
                required: true,

                pattern: /^[0-9+-]+$/,
              })}
            />
            {errors?.basisSalary && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="Enter Special Allowance"
              {...register("specialAllowance", {
                pattern: /^[0-9+-]+$/,
              })}
            />
            {errors?.specialAllowance && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          <span className="border-[2px] border-[#C8C8C8]  rounded ">
            <input
              type="text"
              className="w-full h-[40px] pl-[5px] outline-none"
              placeholder="INCENTIVE"
              {...register("incentive", {
                pattern: /^[0-9+-]+$/,
              })}
            />
            {errors?.incentive && (
              <p className="errors ">This Field is Required</p>
            )}
          </span>
          {!isLoading ? (
            <button className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]">
              Add Employee
            </button>
          ) : (
            <button
              className="bg-[#3497F9] text-white p-[10px] rounded-md w-[150px]"
              disabled
            >
              Adding...
            </button>
          )}
        </form>
      </div>
      <Snackbars
        open={snackBarData?.open}
        message={snackBarData?.message}
        setOpen={setSnackBarData}
      />
    </div>
  );
}

export default EmployeeCreationForm;
