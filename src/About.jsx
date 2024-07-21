import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import photo1648552505 from "./assets/aboutphoto.jpg";
import gaming from "./assets/gaming.jpeg";
import guitar from "./assets/guitar.jpg";
import music from "./assets/spotify.webp";
import asmr from "./assets/hqdefault.jpg";
import download from "./assets/download.png";
import resume from "./assets/Jan Vincent Neal R. Toledo - Resume.pdf";
import coverletter from "./assets/Jan Vincent Neal R. Toledo - Cover Letter.pdf";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 md:mx-40 sm:mx-20 mt-5 rounded-lg px-10 py-10 gap-10 bg-[#1c1c1c]">
        <div className="w-fit">
          <p className="text-white md:text-4xl sm:text-xl font-poppins font-medium tracking-wide w-fit text-left leading-snug">
            I design and code websites according to the needs of the client.
          </p>
          <br />
          <br />
          <p className="text-gray-400 md:text-xl sm:text-sm font-poppins font-normal tracking-wide w-fit text-left leading-relaxed pb-10">
            An aspiring Front-End Web Developer which specializes in JavaScript
            and CSS Frameworks for Responsive Web-Design. I am dedicated to meet
            the expectations and preference of my future clients in every
            detail.
          </p>
          <div className="flex flex-row font-poppins text-white cursor-pointer bg-[#131313] px-8 py-5 text-md rounded-lg md:w-3/6 sm:w-5/6 items-center text-center">
            <img src={download} className="pr-2" />
            <a href={resume} download="Jan Vincent Neal Toledo Resume">
              Download my Resume
            </a>
          </div>
          <div className="flex flex-row font-poppins mt-5 text-white cursor-pointer bg-[#131313] px-8 py-5 text-md rounded-lg md:w-7/12 items-center text-center">
            <img src={download} className="pr-2" />
            <a
              href={coverletter}
              download="Jan Vincent Neal Toledo Cover Letter"
            >
              Download my Cover Letter
            </a>
          </div>

          <br />
        </div>
        <div className="object-scale-down">
          <img src={photo1648552505} className="w-full rounded-md" />
        </div>
      </div>
      <center>
        <h1 className="text-white text-4xl font-poppins font-semibold inline-block py-10 mt-20">
          Hobbies
        </h1>
      </center>
      <center>
        <div className="md:columns-4 sm:columns-1 gap-10 mx-10 justify-items-center text-center font-poppins mb-20 w-5/6">
          <div className="md:grid sm:flex sm:items-center sm:text-m md:pt-0 sm:pt-10">
            <img
              src={gaming}
              className="rounded-2xl md:w-full sm:w-1/2 aspect-square"
            />
            <p className="text-white md:text-xl py-10 md:pl-0 sm:pl-10">
              Playing Online Games
            </p>
          </div>
          <div className="md:grid sm:flex sm:items-center sm:text-m md:pt-0 sm:pt-10">
            <img
              src={guitar}
              className="rounded-2xl md:w-full sm:w-1/2 aspect-square"
            />
            <p className="text-white md:text-xl py-10 md:pl-0 sm:pl-10 ">
              Playing Guitar
            </p>
          </div>
          <div className="md:grid sm:flex sm:items-center sm:text-m md:pt-0 sm:pt-10">
            <img
              src={music}
              className="rounded-2xl md:w-full sm:w-1/2 aspect-square"
            />
            <p className="text-white md:text-xl py-10 md:pl-0 sm:pl-10">
              Listening to Music
            </p>
          </div>
          <div className="md:grid sm:flex sm:items-center md:pt-0 sm:pt-10">
            <img
              src={asmr}
              className="rounded-2xl md:w-full sm:w-1/2 aspect-square"
            />
            <p className="text-white md:text-xl py-10 md:pl-0 sm:pl-10">
              Watching Coding ASMR
            </p>
          </div>
        </div>
      </center>

      <Footer></Footer>
    </>
  );
}
