import React from "react";

const GallaryComponent = ({ img, title }) => {
  return (
    <div className="relative">
      <img
        src={img}
        className="brightness-[0.5] object-cover  w-full h-full"
        alt=""
      />
      <p className="absolute left-4 bottom-4 text-xl font-bold text-white">
        {title}
      </p>
    </div>
  );
};

export default GallaryComponent;
