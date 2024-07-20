import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import photo1648552505 from "./assets/photo1648552505.jpeg";
import gaming from "./assets/gaming.jpeg";
import guitar from "./assets/guitar.jpg";
import music from "./assets/spotify.webp";
import asmr from "./assets/hqdefault.jpg";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 py-10 px-10">
        <div className="m-12">
          <img src={photo1648552505} className="w-fit" />
        </div>
        <div className="mt-20">
          <p className="text-white text-xl font-poppins text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
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
            publishing software like Aldus PageMaker including versions of
            Loremxt ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially ore recently with desktop
            publishing software like Aldus PageMaker including versions of
            Loremxt ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially ore recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      <center>
        <h1 className="text-white text-4xl font-poppins font-semibold inline-block py-10">
          Hobbies
        </h1>
      </center>
      <center>
        <div className="md:columns-4 sm:columns-1 w-50 gap-10 mx-10 justify-items-center text-center font-poppins mb-20 w-3/4">
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
