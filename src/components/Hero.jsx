import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className=" w-full h-screen">
      <video
        className="w-full h-full object-cover brightness-[0.8] "
        src={beachVid}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0  w-full h-full   flex justify-center items-center">
        <div className="flex flex-col text-white text-center md:w-6/12 w-10/12 space-y-6 max-w-6xl ">
          <h1 className="text-6xl">First Class Travels</h1>
          <h2 className="text-2xl">Top 1% Location World Wide</h2>

          <form className="flex justify-between items-center  w-full mx-auto border p-1 px-2 rounded-md text-black bg-gray-100/90">
            <div>
              <input
                type="text"
                className=" bg-transparent w-[300px] sm:w-[400px] max-w-max h-fit focus:outline-none "
                placeholder="Search Destinations"
              />
            </div>
            <div>
              <button className="px-2 py-2 bg-gradient-to-r from-primary-dark to-primary-light rounded-md text-center border border-white text-white ">
                {<BiSearch size={30}></BiSearch>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
