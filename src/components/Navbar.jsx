import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";

import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkList = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Destination",
    },
    {
      id: 3,
      link: "Travel",
    },
    {
      id: 4,
      link: "View",
    },
    {
      id: 5,
      link: "Book",
    },
  ];

  return (
    <div
      className="flex justify-between z-10
      text-white items-center h-20  bg-transparent absolute  w-full px-10  mx-auto "
    >
      <div className={`${open ? "hidden" : ""}`}>
        <h1 className="">BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        {linkList.map((link) => {
          return <li key={link.id}>{link.link}</li>;
        })}
      </ul>
      <div className="hidden md:flex space-x-4">
        <BiSearch size={20}></BiSearch>
        <BsPerson size={20}></BsPerson>
      </div>

      <div className={`md:hidden ${open ? "hidden" : ""} cursor-pointer`}>
        <GiHamburgerMenu
          className=" cursor-pointer"
          size={20}
          onClick={() => setOpen(true)}
        ></GiHamburgerMenu>
      </div>

      {/* Sidebar For Mobile ---------------- */}
      <div
        className={` ${
          open ? "translate-y-0" : "-translate-y-full"
        } absolute text-gray-900 left-0 top-0 w-full bg-gray-200 bg-opacity-90 px-4 py-7 flex flex-col duration-200`}
      >
        <div className=" flex justify-between items-center ">
          <h1>BEACHES .</h1>
          <AiFillCloseSquare
            size={30}
            className="cursor-pointer  text-primary-dark  "
            onClick={() => setOpen(false)}
          ></AiFillCloseSquare>
        </div>
        <ul>
          {linkList.map((link) => {
            return (
              <li
                key={link.id}
                className=" hover:text-primary-dark  border-gray-800 hover:border-primary-dark hover:border-b-2 border-b cursor-pointer"
              >
                {link.link}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col w-11/12 mx-auto space-y-4 mt-4">
          <PrimaryButton
            title="Search"
            classname=" text-white px-2 py-3 text-lg capitalize font-semibold"
          ></PrimaryButton>
          <PrimaryButton
            title="Account"
            classname=" text-white px-2 py-3 text-lg capitalize font-semibold"
          ></PrimaryButton>
        </div>

        <div className="flex justify-between mt-10 px-3 ">
          <FaFacebook className=" text-primary-dark" size={25}></FaFacebook>
          <FaTwitter className=" text-primary-dark" size={25}></FaTwitter>
          <FaYoutube className=" text-primary-dark" size={25}></FaYoutube>
          <FaPinterest className=" text-primary-dark" size={25}></FaPinterest>
          <FaInstagramSquare
            className=" text-primary-dark"
            size={25}
          ></FaInstagramSquare>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
