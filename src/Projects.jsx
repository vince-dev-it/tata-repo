import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Agrihub from "./assets/Agrihub.png";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 place-items-center px-10 pb-10 font-poppins">
        <h1 className="text-white text-4xl font-poppins font-bold py-8">
          Recent Projects on Web
        </h1>
        <img src={Agrihub} className="w-3/4 rounded-md" />
        <p className="text-2xl tracking-widest text-white text-center pt-10">
          AgriHub: An Online Data Sharing Platform Implementing <br /> Data
          Analytics and Progressive Web Application for the <br /> Center for
          Urban Agriculture and Innovation
        </p>
        <p className="text-md tracking-wider text-white text-justify pt-10 px-80">
          AgriHub: An Online Data Sharing Platform ImplementingAgriHub: An
          Online Data Sharing Platform ImplementingAgriHub: An Online Data
          Sharing Platform ImplementingAgriHub: An Online Data Sharing Platform
          ImplementingAgriHub: An Online Data Sharing Platform Implementing
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
