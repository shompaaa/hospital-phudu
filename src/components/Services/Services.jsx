import React from "react";
import doctors from "../../assets/images/success-doctor.png";
import review from "../../assets/images/success-review.png";
import patients from "../../assets/images/success-patients.png";
import stuffs from "../../assets/images/success-staffs.png";
import CountUp from "react-countup";

const Services = () => {
  return (
    // Services
    <div className="mb-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">
          We Provide Best Medical Services
        </h2>
        <p className="text-gray-400 mt-4 mb-8">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>

      {/* Services CountUp  */}
      <div className="flex gap-6 justify-center">
        <div className="bg-white px-12 py-10 rounded-2xl w-55">
          <img src={doctors} alt="" />
          <CountUp className="text-4xl font-bold" end={199} duration={5} />{" "}
          <span className="text-4xl font-bold">+</span>
          <p className="text-xl text-gray-400 font-semibold">Total Doctors</p>
        </div>
        <div className="bg-white px-12 py-10 rounded-2xl w-55">
          <img src={review} alt="" />
          <CountUp className="text-4xl font-bold" end={467} duration={5} />{" "}
          <span className="text-4xl font-bold">+</span>
          <p className="text-xl text-gray-400 font-semibold">Total Reviews</p>
        </div>
        <div className="bg-white px-12 py-10 rounded-2xl w-55">
          <img src={patients} alt="" />
          <CountUp
            className="text-4xl font-bold"
            end={1900}
            duration={5}
          />{" "}
          <span className="text-4xl font-bold">+</span>
          <p className="text-xl text-gray-400 font-semibold">Patients</p>
        </div>
        <div className="bg-white px-12 py-10 rounded-2xl w-55">
          <img src={stuffs} alt="" />
          <CountUp className="text-4xl font-bold" end={300} duration={5} />{" "}
          <span className="text-4xl font-bold">+</span>
          <p className="text-xl text-gray-400 font-semibold">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
