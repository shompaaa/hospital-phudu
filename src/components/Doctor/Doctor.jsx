import React from "react";
import { AiOutlineTrademark } from "react-icons/ai";
import { Link } from "react-router";

const Doctor = ({ doctor }) => {
  const {
    id,
    image,
    name,
    education,
    isAvailable,
    experience,
    registrationNumber,
  } = doctor;
  return (
    
      <div className="card bg-white p-8 mb-12">
        <figure>
          <img className="w-full h-62" src={image} alt="Doctor" />
        </figure>
        <div className="flex gap-3 mt-2 mb-2">
          <p className="badge bg-green-50 text-green-600">
            {isAvailable ? "available" : "Not available"}
          </p>
          <p className="badge bg-blue-50 text-blue-600">{experience}</p>
        </div>
        <div>
          <h2 className="card-title font-extrabold">{name}</h2>
          <p className="text-gray-500 mt- mb-2">{education}</p>
          <div className="border-t border-dashed text-gray-300"></div>
          <div className="flex items-center text-gray-500 gap-3 mt-2 mb-2">
            <AiOutlineTrademark />
            <p>{registrationNumber}</p>
          </div>
         <Link to={`doctorDetails/${id}`}>
          <button className="btn btn-wide bg-transparent rounded-3xl border-blue-600 text-blue-600">
            View Details
          </button>
         </Link>
        </div>
      </div>

  );
};

export default Doctor;
