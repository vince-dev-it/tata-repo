import React from "react";
import "./Home.css";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import twitter from "./assets/twitter.png";
import vince from "./assets/vince.jpeg";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#121212] from-47% via-[#252525] via-76% to-[#303030] to-100%">
        <div className="flex flex-row justify-center items-center px-10 gap-4 mx-5 font-poppins ">
          <div className="flex flex-col items-center my-20">
            <a href="https://www.facebook.com/YourSensei04">
              <img src={fb} className="mb-4" />
            </a>
            <a href="https://www.instagram.com/yoursensei04/">
              <img src={insta} className="mb-4" />
            </a>
            <a href="https://x.com/Toledssz">
              <img src={twitter} />
            </a>
          </div>
          <div className="flex flex-row items-center text-white">
            <img src={vince} className="rounded-full w-2/6" />
            <div className="px-20">
              <h1 className="md:text-4xl sm:text-sm font-bold py-4">
                Hello, I'm Jan Vincent Neal Toledo
              </h1>
              <h2 className="md:text-3xl font-medium sm:text-md">
                Aspiring Front End Web-Developer
              </h2>
              <div className="flex flex-row mt-5 gap-4">
                <img
                  src="../src/assets/php.png"
                  className="md:w-10 md:h-10 sm:w-5 sm:h-5"
                  title="PHP"
                />
                <img
                  src="../src/assets/mysql.png"
                  className="md:w-10 md:h-10 sm:w-5 sm:h-5"
                  title="MySQL"
                />
                <img
                  src="../src/assets/wordpress.png"
                  className="md:w-10 md:h-10 sm:w-5 sm:h-5"
                  title="WordPress"
                />
                <img
                  src="../src/assets/react.png"
                  className="md:w-10 md:h-10 sm:w-5 sm:h-5"
                  title="ReactJS"
                />
                <img
                  src="../src/assets/icons8-visual-basic-100.png"
                  className="md:w-10 md:h-10 sm:w-5 sm:h-5"
                  title="Visual Basic"
                />
                <img
                  src="../src/assets/icons8-tailwind-css-100.png"
                  className="md:w-10 md:h-10 sm:w-5 sm:h-5"
                  title="Tailwind CSS"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-12 font-poppins">
          <h1 className="text-white text-3xl font-bold inline-block mt-20">
            Short Biography
          </h1>
          <br />
          <p className="text-white px-20 pt-10 text-justify pb-40">
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
      </div>
    </>
  );
}

export default Home;
