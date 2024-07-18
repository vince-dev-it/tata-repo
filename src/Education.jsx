import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OBES from "./assets/OBES.png";
import JUDGE from "./assets/JFBSHS.png";
import QCU from "./assets/QCU.png";

export default function Education() {
  return (
    <>
      <Navbar></Navbar>
      {/* School */}
      <div className="grid md:grid-cols-1 pt-12 grid-flow-row items-center place-items-center font-poppins scroll-smooth">
        <div className="flex md:flex-row sm:flex-col gap-12">
          <div className="w-80">
            <img src={OBES} />
            <p className="text-white text-3xl text-center pt-8 text-wrap">
              Old Balara Elementary School
            </p>
            <p className="text-white text-md text-center pt-8">2008-2014</p>
          </div>
          <div className="w-80">
            <img src={JUDGE} />
            <p className="text-white text-3xl text-center pt-8 text-wrap">
              Judge Feliciano Belmonte Sr. High School
            </p>
            <p className="text-white text-md text-center pt-8">2014-2020</p>
          </div>
          <div className="w-80">
            <img src={QCU} />
            <p className="text-white text-3xl text-center pt-8 text-wrap">
              Quezon City University
            </p>
            <p className="text-white text-md text-center pt-8">2020-2024</p>
          </div>
        </div>
      </div>
      {/* End of School */}

      {/* Start of School Descriptions */}
      <div className="grid grid-flow-row grid-rows-3 font-poppins text-white text-xl mt-20 mx-20 gap-8">
        <div className="flex flex-row justify-start border border-solid border-white rounded-md bg-obes-bg h-80">
          <p className="text-white text-3xl font-bold py-10 px-10">
            Old Balara <br />
            Elementary School
          </p>
          <div>
            <p className="text-white text-sm py-10 px-10">
              Old Balara Elementary School
            </p>
            <p className="text-white text-md font-semibold py-10 px-10">
              Visit School
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start text-xl border border-solid border-white rounded-md bg-judge-bg h-80">
          <div>
            <p className="text-white text-sm py-10 px-10">
              Old Balara Elementary School
            </p>
            <p className="text-white text-md font-semibold py-10 px-10">
              Visit School
            </p>
          </div>
          <p className="text-white text-3xl font-bold py-10 px-10">
            Judge Feliciano <br /> Belmonte Sr. <br />
            High School
          </p>
        </div>
        <div className="flex flex-row justify-start text-xl border border-solid border-white rounded-md bg-qcu-bg h-80">
          <p className="text-white text-3xl font-bold py-10 px-10">
            Quezon City University
          </p>
          <div>
            <p className="text-white text-sm py-10 px-10">
              Old Balara Elementary School
            </p>
            <p className="text-white text-md font-semibold py-10 px-10">
              Visit School
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
