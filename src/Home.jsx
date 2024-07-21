import React from "react";
import "./Home.css";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import twitter from "./assets/twitter.png";
import vince from "./assets/vince.jpeg";
import PHP from "./assets/php.png";
import MySQL from "./assets/mysql.png";
import WordPress from "./assets/wordpress.png";
import ReactJS from "./assets/react.png";
import VisualBasic from "./assets/icons8-visual-basic-100.png";
import TailwindCSS from "./assets/icons8-tailwind-css-100.png";
import contact from "./assets/contact.png";

import { useSubscribeEmail } from "herotofu-react";

function Home() {
  return (
    <>
      <div className="">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center px-10 mx-5 font-poppins">
          <div className="flex flex-row items-center my-1 md:ml-8 sm:ml-0 md:w-9/12 sm:w-full">
            <div className="flex flex-col gap-2">
              <a href="https://www.facebook.com/YourSensei04">
                <img src={fb} className="hidden md:flex lg:flex" />
              </a>
              <a href="https://www.instagram.com/yoursensei04/">
                <img src={insta} className="hidden md:flex lg:flex" />
              </a>
              <a href="https://x.com/Toledssz">
                <img src={twitter} className="hidden md:flex lg:flex" />
              </a>
            </div>

            <div className="w-fit pl-0 md:pl-10 lg:pl-10">
              <img src={vince} className="rounded-full" />
            </div>
          </div>

          <div className="flex flex-row items-center text-white">
            <div className="md:text-left sm:text-center">
              <h1 className="lg:text-4xl md:text-xl text-xl md:text-left text-center font-bold py-4">
                Hello, I'm Jan Vincent Neal Toledo
              </h1>
              <h2 className="lg:text-3xl md:text-xl text-md text-center md:text-left lg:text-left font-medium ">
                Aspiring Front End Web-Developer
              </h2>
              <div className="flex flex-row mt-5 gap-4 text-center md:justify-start lg:justify-start justify-center">
                <img
                  src={PHP}
                  className=" md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8"
                  title="PHP"
                />
                <img
                  src={MySQL}
                  className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8"
                  title="MySQL"
                />
                <img
                  src={WordPress}
                  className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8"
                  title="WordPress"
                />
                <img
                  src={ReactJS}
                  className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8"
                  title="ReactJS"
                />
                <img
                  src={VisualBasic}
                  className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8"
                  title="Visual Basic"
                />
                <img
                  src={TailwindCSS}
                  className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8 "
                  title="Tailwind CSS"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-12 font-poppins">
          <h1 className="text-white text-center md:text-2xl text-xl font-semibold inline-block mt-20">
            Short Biography
          </h1>
          <p className="mt-5 text-xs md:text-sm text-gray-400">
            A quick summary of my cover letter.
          </p>
          <br />
          <p className="text-white text-md md:text-base text-xs px-10 py-10 pt-10 md:mx-40 lg:mx-40 mx-10 text-justify rounded-xl leading-relaxed bg-[#1c1c1c]">
            I am Jan Vincent Neal R. Toledo, a 22-years old BS Information
            Technology graduate from Quezon City University. I am interested in
            applying for the position of WordPress Developer. I recently
            graduated from Quezon City University last June 25, 2024 completing
            a Bachelor's Degree in Information Technology. During my four year
            study in the university, I have experienced all of the roles in
            Information Technology including System Documentation, Web
            Development, System Developer, UI/UX Designer and Project
            Management. I am hugely inclined in Front-End Web Development with
            the use of HTML, CSS and JavaScript along with the recent frameworks
            such as ReactJS. I focused all of my time to practice my code in
            Front-End Development and a some of my extra time for some Back-End
            Development with the use of MySQL queries in PHP. From my previous
            company, I was an IT Intern who manages and develops multiple web
            projects for WordPress by utilizing the right tool such as Elementor
            Pro for the design, PHP Code Snippets for other functions and the
            Ahrefs as the SEO for optimizing the webpages articles in the Google
            Search Engine. My continuous hunger for self-improvement has enabled
            me to explore all the possible skills that my course offers. With
            all of this acquired knowledge, I wanted to contribute whatever I
            can offer to my future company.
          </p>
        </div>
        <h1 className="font-poppins text-white text-xl md:text-2xl font-semibold text-center mt-20">
          Let's be friends
        </h1>
        <p className="mt-5 text-xs md:text-sm mx-10 text-gray-400 text-center leading-relaxed font-poppins">
          If you happen to have some job offers, commissions, and inquiries,
          please fill out the form below and it will directly go to my inbox.
        </p>

        <div className="flex flex-col justify-center items-center font-poppins">
          {/* Form */}
          <form
            action="https://public.herotofu.com/v1/d781db70-46c8-11ef-b917-afc6b84c2283"
            method="post"
            accept-charset="UTF-8"
            className="grid md:grid-cols-2 sm:grid-cols-1 py-2 px-4 mx-10 md:mx-40 md:py-10 md:px-10 sm:mx-10 rounded-xl mt-10 mb-10 bg-[#1c1c1c]"
          >
            <div className="flex flex-col">
              <img src={contact} className="w-11/12" />
            </div>
            <div className="grid grid-cols-1">
              <h1 className="text-white md:text-2xl text-xl font-semibold text-center">
                Contact Me
              </h1>
              <label
                for="name"
                className=" font-poppins text-white text-sm pt-10 md:pt-0 lg:pt-0"
              >
                Your Name
              </label>
              <input
                name="Name"
                id="name"
                type="text"
                placeholder="Put your name here"
                className="h-10 rounded-md px-4 mt-2 md:mt-0"
                required
              />

              <label
                for="email"
                className=" font-poppins text-white text-sm mt-2 md:mt-0"
              >
                Your Email
              </label>
              <input
                name="Email"
                id="email"
                type="email"
                placeholder="Put your email here"
                className="h-10 rounded-md px-4"
                required
              />

              <label
                for="message"
                className=" font-poppins text-white text-sm mt-2 md:mt-0"
              >
                Your Message
              </label>
              <textarea
                name="Message"
                id="message"
                type="text"
                placeholder="Put your message here"
                className="px-4 py-4 w-full h-40 rounded-md mt-2 md:mt-0"
                required
              />
              <div>
                <input
                  type="submit"
                  value="Send Email"
                  className="font-poppins cursor-pointer text-white mt-4 px-4 py-4 rounded-md bg-[#121212] float-right text-sm md:text-base"
                />
                <div
                  // style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;"
                  className="overflow-hidden absolute"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="_gotcha"
                    tabindex="-1"
                    autocomplete="off"
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </form>
          {/* End of Form */}
        </div>
      </div>
    </>
  );
}

export default Home;
