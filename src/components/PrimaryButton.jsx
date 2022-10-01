import React, { Children } from "react";

const PrimaryButton = ({ classname, title, onClick, icon }) => {
  return (
    <button
      className={
        " bg-gradient-to-r from-primary-dark to-primary-light uppercase tracking-wider rounded-md shadow-lg " +
        " " +
        classname
      }
      onClick={onClick}
    >
      {title}
      {/* {Children} */}
    </button>
  );
};

export default PrimaryButton;
