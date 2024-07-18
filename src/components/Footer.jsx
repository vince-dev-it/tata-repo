import React from "react";
import facebooks from "../assets/facebooks.png";
import jobstreet from "../assets/Jobstreet.png";
import linkedin from "../assets/icons8-linkedin-100.png";

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center py-16">
        <div className="flex flex-row items-center gap-2">
          <a href="https://www.facebook.com/YourSensei04/">
            <img src={facebooks} className="w-10" />
          </a>
          <a href="https://www.facebook.com/YourSensei04/">
            <p className=" text-white pl-0 ">yoursensei04</p>
          </a>
        </div>
        <div className="flex flex-row items-center gap-2">
          <a href="https://www.jobstreet.com.ph/profile/janvincentneal-toledo-WVT9qZwz59">
            <img src={jobstreet} className="w-10 " />
          </a>
          <a href="https://www.jobstreet.com.ph/profile/janvincentneal-toledo-WVT9qZwz59">
            <p className="text-white">Jan Vincent Neal Toledo</p>
          </a>
        </div>
        <div className="flex flex-row items-center gap-2">
          <a href="https://www.linkedin.com/in/jan-vincent-neal-toledo">
            <img src={linkedin} className="w-10" />
          </a>
          <a href="https://www.linkedin.com/in/jan-vincent-neal-toledo">
            <p className="text-white">Jan Vincent Neal Ramos Toledo</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
