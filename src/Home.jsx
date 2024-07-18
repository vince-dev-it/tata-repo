import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#121212] from-47% via-[#252525] via-76% to-[#303030] to-100%">
        <div className="flex flex-row justify-center items-center px-10 gap-4 mx-5 font-poppins ">
          <div className="flex flex-col items-center my-20">
            <a href="https://www.facebook.com/YourSensei04">
              <img src="../src/assets/fb.png" className="mb-4" />
            </a>
            <a href="https://www.instagram.com/yoursensei04/">
              <img src="../src/assets/insta.png" className="mb-4" />
            </a>
            <a href="https://x.com/Toledssz">
              <img src="../src/assets/twitter.png" />
            </a>
          </div>
          <div className="flex flex-row items-center text-white">
            <img
              src="../src/assets/vince.jpeg"
              className="rounded-full w-2/6"
            />
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
            Biography
          </h1>
          <br />
          <p className="text-white px-20 pt-10 text-justify">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lochanged. It
            was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.orem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially ore recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
