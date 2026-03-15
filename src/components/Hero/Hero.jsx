import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content text-center px-40 py-15 border-2">
          <div className="max-w-md">
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
              {/* Search Bar */}
              <label className="input rounded-3xl">
                <input type="search" required placeholder="Search" />
              </label>
              <button className="btn btn-primary rounded-3xl">Search Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
