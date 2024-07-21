import React from "react";

import logobeans from "../assets/beanstp.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between px-0 pt-2 font-poppins align-middle pl-0 md:pl-12 sticky bg-[#131313]">
        <div className="">
          <Link to={"/"}>
            <img
              src={logobeans}
              className="md:w-32 md:flex hidden cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-row py-6 px-10 md:pr-14 gap-5 font-semibold ml-0 md:ml-0 md:text-base lg:text-base text-xs cursor-pointer">
          <Link to={"/"}>
            <p className="text-white ">Home</p>
          </Link>
          <Link to={"/About"}>
            <p className="text-white">About</p>
          </Link>
          <Link to={"/Education"}>
            <p className="text-white">Education</p>
          </Link>
          <Link to={"/Skills"}>
            <p className="text-white">Skills</p>
          </Link>
          <Link to={"/Projects"}>
            <p className="text-white">Projects</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
