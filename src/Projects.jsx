import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Agrihub from "./assets/Agrihub.png";
import ByOllie from "./assets/ByOllie.png";
import HappyScent from "./assets/HappyScent.png";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-white text-4xl font-poppins font-bold py-8 text-center">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-baseline px-6 pb-10 font-poppins gap-8 ">
        {/* Card 1 */}
        <div className="flex flex-col gap-10 rounded-md py-10 px-10 place-items-center bg-[#1c1c1c]">
          <p className="text-white font-poppins text-xl font-semibold text-center">
            Capstone Project
          </p>

          <a href="https://app.qc-agrihub.xyz/">
            <img src={Agrihub} className="w-full rounded-md" />
          </a>

          <a
            className="text-white font-poppins text-md font-medium bg-[#8B7F7F]/[.3] px-2 py-2 text-center rounded-md"
            href="https://app.qc-agrihub.xyz/"
          >
            https://app.qc-agrihub.xyz/
          </a>
          <p className="text-white font-poppins text-md font-semibold text-center">
            "AgriHub: An Online Data Sharing Platform Implementing Data
            Analytics and Progressive Web Application for the Center for Urban
            Agriculture and Innovation"
          </p>
          <p className="text-white font-poppins text-sm text-justify">
            Our group encourage the development of AgriHub, which is an online
            data-sharing platform implemented with data analytics, specifically
            prescriptive and descriptive data analytics, and the use of
            Progressive Web Application (PWA). The project aims to assist Center
            for Urban Agriculture and Innovation in hosting events about urban
            agriculture, connecting farmers to farmers, identify existing urban
            farming communities within Quezon City District 5. Helping
            interested users to contribute and provide innovative urban farming
            technologies to the communities to become productive in adapting
            urban agriculture in a modern way through collaboration and
            community building.
          </p>
          <p className="text-white font-poppins text-sm text-justify">
            Role: Front-End Programmer, Documentation
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col gap-10 rounded-md py-10 px-10 place-items-center bg-[#1c1c1c]">
          <p className="text-white font-poppins text-xl font-semibold text-center">
            E-Commerce Website for Beauty Products and Fragrances
          </p>

          <a href="https://www.happyscent.co/">
            <img src={HappyScent} className="w-full rounded-md" />
          </a>

          <a
            className="text-white font-poppins text-md font-medium bg-[#8B7F7F]/[.3] px-2 py-2  text-center rounded-md"
            href="https://www.happyscent.co/"
          >
            https://www.happyscent.co/
          </a>
          <p className="text-white font-poppins text-md font-semibold text-center">
            Happy Scents
          </p>
          <p className="text-white font-poppins text-sm text-justify">
            The Happy Scents is commited to promote environmental friendly
            products which supports farmers and indigenous communities. The
            user-friendly design made with WordPress allows users to browse
            through their beauty products and promotions. Utilizing WooCommerce
            Plugin, PHP Snippets, MailerLite and Elementor Pro for overall
            functionality of the website.
          </p>
          <p className="text-white font-poppins text-sm text-justify">
            Role: Project Lead, Front-End Development
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col gap-10 rounded-md py-10 px-10 place-items-center bg-[#1c1c1c]">
          <p className="text-white font-poppins text-xl font-semibold text-center">
            E-Commerce Website for Wallpaper Designs and Fixtures
          </p>

          <a href="https://www.byollie.co/">
            <img src={ByOllie} className="w-full rounded-md" />
          </a>

          <a
            className="text-white font-poppins text-md font-medium bg-[#8B7F7F]/[.3] px-2 py-2 text-center rounded-md"
            href="https://www.byollie.co/"
          >
            https://www.byollie.co/
          </a>
          <p className="text-white font-poppins text-md font-semibold text-center">
            ByOllie
          </p>
          <p className="text-white font-poppins text-sm text-justify">
            ByOllie is a WordPress driven website that sells different digital
            backdrops utilizing a user-friendly experience with functioning
            MailerLite and Elementor Pro for dynamic design of the website. The
            products varies on different interior designs that offers different
            art styles and designs.
          </p>
          <p className="text-white font-poppins text-sm text-justify">
            Role: Project Lead, Front-End Development
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
