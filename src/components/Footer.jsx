import React from "react";
import facebooks from "../assets/facebooks.png";
import jobstreet from "../assets/Jobstreet.png";
import linkedin from "../assets/icons8-linkedin-100.png";
import beanslogo from "../assets/beanstp.png";

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center py-10 bg-[#131313]">
        <div className="flex flex-row items-center gap-2">
          <a href="https://www.facebook.com/YourSensei04/">
            <img src={facebooks} className="w-8" />
          </a>
          <a href="https://www.jobstreet.com.ph/profile/janvincentneal-toledo-WVT9qZwz59">
            <img src={jobstreet} className="w-8 " />
          </a>
          <a href="https://www.linkedin.com/in/jan-vincent-neal-toledo">
            <img src={linkedin} className="w-8" />
          </a>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img src={beanslogo} className="w-24 mt-4 md:mt-0" />
        </div>
        <div className="flex flex-row items-center gap-2 mt-4 md:mt-0">
          <p className="font-poppins text-white">© Jan Vincent Neal Toledo</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
