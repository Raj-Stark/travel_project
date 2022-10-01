import React from "react";
import bora from "../assets/borabora.jpg";
import bora1 from "../assets/borabora2.jpg";
import bora2 from "../assets/keywest.jpg";
import bora3 from "../assets/maldives.jpg";
import bora4 from "../assets/maldives2.jpg";

const Destinations = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto py-16 px-4 text-center  ">
      <h1>All Inclusive Resort</h1>
      <p className=" font-semibold py-4 text-xl ">
        On the best Indian Ocean Beaches
      </p>

      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 ">
        <img
          src={bora}
          className="w-full h-full object-cover col-span-2 row-span-2 md:col-span-3"
          alt=""
        />
        <img src={bora1} className="w-full h-full object-cover " alt="" />
        <img src={bora2} className="w-full h-full object-cover " alt="" />
        <img src={bora3} className="w-full h-full object-cover " alt="" />
        <img src={bora4} className="w-full h-full object-cover " alt="" />
      </div>
    </div>
  );
};

export default Destinations;
