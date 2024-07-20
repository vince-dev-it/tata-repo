import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PHP from "./assets/php.png";
import MySQL from "./assets/mysql.png";
import WordPress from "./assets/wordpress.png";
import ReactJS from "./assets/react.png";
import VisualBasic from "./assets/icons8-visual-basic-100.png";
import TailwindCSS from "./assets/icons8-tailwind-css-100.png";

export default function Skills() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-row-2 place-items-center pt-10 font-poppins">
        <div className="flex flex-row gap-10">
          <div className="border border-solid border-white rounded-lg w-80 h-96 mb-10 p-14 grid place-items-center bg-[#8B7F7F]/[.3]">
            <img src={PHP} />
            <p className="text-white text-xl text-center">
              PHP: Hypertext Preprocessor
            </p>
            <p className="text-white text-md text-center">1 year experience</p>
          </div>
          <div className="border border-solid border-white rounded-lg w-80 h-96 mb-10 p-14 grid place-items-center bg-[#8B7F7F]/[.3]">
            <img src={TailwindCSS} />
            <p className="text-white text-xl text-center">Tailwind CSS</p>
            <p className="text-white text-md text-center">1 year experience</p>
          </div>
          <div className="border border-solid border-white rounded-lg w-80 h-96 mb-10 p-14 grid place-items-center bg-[#8B7F7F]/[.3]">
            <img src={ReactJS} />
            <p className="text-white text-xl text-center">React JS</p>
            <p className="text-white text-md text-center">1 year experience</p>
          </div>
        </div>
      </div>
      {/* ROW 2 */}
      <div className="grid grid-row-2 place-items-center font-poppins">
        <div className="flex flex-row gap-10">
          <div className="border border-solid border-white rounded-lg w-80 h-96 mb-10 p-14 grid place-items-center bg-[#8B7F7F]/[.3]">
            <img src={WordPress} />
            <p className="text-white text-xl text-center">WordPress</p>
            <p className="text-white text-md text-center">1 year experience</p>
          </div>
          <div className="border border-solid border-white rounded-lg w-80 h-96 mb-10 p-14 grid place-items-center bg-[#8B7F7F]/[.3]">
            <img src={MySQL} />
            <p className="text-white text-xl text-center">MySQL</p>
            <p className="text-white text-md text-center">1 year experience</p>
          </div>
          <div className="border border-solid border-white rounded-lg w-80 h-96 mb-10 p-14 grid place-items-center bg-[#8B7F7F]/[.3]">
            <img src={VisualBasic} />
            <p className="text-white text-xl text-center">Visual Basic</p>
            <p className="text-white text-md text-center">1 year experience</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
