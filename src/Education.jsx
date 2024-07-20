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
            <a href="https://www.facebook.com/136555oldbala">
              <img src={OBES} />
            </a>

            <p className="text-white text-3xl text-center pt-8 text-wrap">
              Old Balara Elementary School
            </p>

            <p className="text-white text-xl text-center pt-8">2008-2014</p>

            <p className="text-white text-md text-center pt-8 ">
              Studied: Grade 1 to Grade 6
            </p>
          </div>
          <div className="w-80">
            <a href="https://www.facebook.com/TagaJudgeAko">
              <img src={JUDGE} />
            </a>
            <p className="text-white text-3xl text-center pt-8 text-wrap">
              Judge Feliciano Belmonte Sr. High School
            </p>
            <p className="text-white text-xl text-center pt-8">2014-2020</p>
            <p className="text-white text-md text-center pt-8 ">
              Studied: Grade 7 to Grade 12
            </p>
          </div>
          <div className="w-80">
            <a href="https://www.facebook.com/qcu1994">
              <img src={QCU} />
            </a>
            <p className="text-white text-3xl text-center pt-8 text-wrap">
              Quezon City University
            </p>
            <p className="text-white text-md text-center pt-8">2020-2024</p>
            <p className="text-white text-md text-center pt-8 ">
              Studied: 1st year college to 4th year college
            </p>
          </div>
        </div>
      </div>
      {/* End of School */}

      <Footer></Footer>
    </>
  );
}
