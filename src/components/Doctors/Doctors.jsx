import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const doctors = useLoaderData();
  const [showAll, setShowAll] = useState(false);

const visibleDoctors= showAll ? doctors : doctors.slice(0,6);


  return (
    // Title & Description
    <div className="mx-40 mb-20">
      <div className="w-2/3 mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Best Doctors</h2>
        <p className="text-gray-400 mt-4 mb-8">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      {/* Doctors Card */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleDoctors.map((doctor) => (
          <Doctor key={visibleDoctors.id} doctor={doctor}></Doctor>
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={()=>setShowAll(true)} className="btn btn-primary text-white rounded-3xl border-none">
        View All Doctors
      </button>
      </div>
    </div>
  );
};

export default Doctors;
