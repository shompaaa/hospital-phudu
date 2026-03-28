import React from "react";
import { useLoaderData, useParams } from "react-router";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const singleDoctor = data.find((doctor) => doctor.id === doctorId);
  const {
    image,
    name,
    education,
    speciality,
    experience,
    registrationNumber,
    availability,
  } = singleDoctor;
  return (
    <div className="bg-gray-100 lg:mx-40">
      <div className="text-center lg:px-40 lg:py-16 md:px-20 md:py-8 px-10 py-4 mx-auto rounded-2xl my-8 bg-white">
        <h2 className="font-bold text-3xl mb-4">Doctor’s Profile Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>

        {/* Each Doctor Details */}
      </div>
      <div className="md:flex gap-2 p-8 bg-white rounded-2xl">
        <img className="md:w-2/5 w-full" src={image} alt="" />
        <div>
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="text-gray-400 my-3">
            <p>{education}</p>
            <p>{speciality}</p>
          </div>
          <div>
            <p className="text-gray-400">Working at</p>
            <h3 className="font-semibold">{experience}</h3>
          </div>
          <div className="border-t border-dashed text-gray-300 mt-2"></div>
          <div className="flex items-center text-gray-500 gap-3 mt-2 mb-2">
            <AiOutlineTrademarkCircle />
            <h4>Reg No: {registrationNumber}</h4>
          </div>
          <h4>Availability: {availability}</h4>
          <h4>Consultation Fee: 800tk</h4>
        </div>
      </div>

      {/* Book Appointment */}
      <div className="bg-white rounded-2xl mb-20 mt-6 p-4">
        <h2 className=" mb-4 font-bold text-2xl text-center">Book an Appointment</h2>
        <hr className="border-dashed text-gray-200" />
        <div className="flex justify-between my-4">
          <p>Availability</p>
          <p className="badge bg-green-200 p-2">Doctors available today</p>
        </div>
        <hr className="text-gray-200" />
        <div className="badge bg-orange-100 text-orange-400 my-4">
          <RiErrorWarningLine />
          <p>
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        <div className="p-6">
          <button className="text-white font-semibold bg-blue-700 rounded-4xl text-center py-1  w-full">Book an Appointment Now</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
