import React from "react";
import bannerImage from '../../assets/images/banner-img-1.png'

const Hero = () => {
  return (
    <>
    <div className="mb-20">
      <div className="bg-gray-50 mx-12 px-40 py-15 text-center border-3 rounded-3xl border-white">
        <div className="w-3/4 mx-auto">
             <h1 className="text-4xl font-bold">
              Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className="mt-6 mb-4">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
        </div>
        <div className="flex justify-center gap-4 mb-6">
           <label className="input rounded-3xl">
                <input type="search" required placeholder="Search any doctor..." />
              </label>
              <button className="btn btn-primary rounded-3xl">Search Now</button>
        </div>
        <div className="flex gap-4 justify-center">
            <img src={bannerImage} alt="" /><img src={bannerImage} alt="" />
          </div>
      </div>
    </div>
      {/* <div className=" bg-base-200">
        <div className="-content text-center px-40 py-15">
          <div className="w-2/3 bg-white">
            <h1 className="text-4xl font-bold">
              Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className="py-6">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
            <div className="flex gap-4">
            

              <div className="flex">
                <label className="input rounded-3xl">
                <input type="search" required placeholder="Search" />
              </label>
              <button className="btn btn-primary rounded-3xl">Search Now</button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={doctor} alt="" /><img src={doctor} alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
