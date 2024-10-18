import React from "react";
import "./Home.css";
import Tata1 from "./assets/Rosalie (1).png";
import Tata2 from "./assets/Rosalie (2).png";
import Tata3 from "./assets/Rosalie (3).png";
import Tata4 from "./assets/Rosalie (4).png";
import Tata5 from "./assets/Rosalie (5).png";
import Rosalie1 from "./assets/Tata (1).png";
import Rosalie2 from "./assets/Tata (2).png";
import Rosalie3 from "./assets/Tata (3).png";
import Rosalie4 from "./assets/Tata (4).png";
import Rosalie5 from "./assets/Tata (5).png";
import Rosalie6 from "./assets/Tata (6).png";
import Rosalie7 from "./assets/Tata (7).png";
import Rosalie8 from "./assets/Tata (8).png";
import Rosalie9 from "./assets/Tata (9).png";
import RosalieCard1 from "./assets/PhotoCard.png";
import RosalieCard2 from "./assets/PhotoCard-1.png";
import RosalieCard3 from "./assets/PhotoCard-2.png";
import RosalieCard4 from "./assets/PhotoCard-3.png";
import RosalieCard5 from "./assets/PhotoCard-4.png";
import RosalieCard6 from "./assets/PhotoCard-5.png";
// import RosalieCard2 from "./assets/Rosalie2.jpg";
// import RosalieCard3 from "./assets/Rosalie3.jpg";
// import RosalieCard4 from "./assets/Rosalie4.jpg";
// import RosalieCard5 from "./assets/Rosalie5.jpg";
// import RosalieCard6 from "./assets/Rosalie6.jpg";
// import RosalieCard7 from "./assets/Rosalie7.jpg";
// import RosalieCard8 from "./assets/Rosalie8.jpg";
// import RosalieCard9 from "./assets/Rosalie9.jpg";
// import RosalieCard10 from "./assets/Rosalie10.jpg";
// import RosalieCard11 from "./assets/Rosalie11.jpg";
// import RosalieCard12 from "./assets/Rosalie12.jpg";

import { useSubscribeEmail } from "herotofu-react";

function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="m-3 flex flex-row gap-5">
        {/* Sidebar */}
        <div className="flex flex-col p-4 text-white gap-4 max-h-full bg-[#222222] rounded-lg w-[110px]">
          <div className="mt-5">
            <img src={Tata1} className="w-full"></img>
          </div>
          <div>
            <img src={Tata2} className="w-full"></img>
          </div>
          <div>
            <img src={Tata3} className="w-full"></img>
          </div>
          <div>
            <img src={Tata4} className="w-full"></img>
          </div>
          <div>
            <img src={Tata5} className="w-full"></img>
          </div>
          <div>
            <img src={Rosalie2} className="w-full"></img>
          </div>
        </div>
        {/* Body */}
        <div className="flex flex-col p-4 gap-4 h-full bg-[#222222] rounded-lg w-11/12">
          {/* Top text */}
          <div className="flex gap-2 m-2">
            <p className="bg-[#FFFFFF] text-black py-[5px] px-[12px] rounded-[14px]">
              All
            </p>
            <p className="bg-[#646161] text-white py-[5px] px-[12px] rounded-[14px]">
              Music
            </p>
            <p className="bg-[#646161] text-white py-[5px] px-[12px] rounded-[14px]">
              Podcasts
            </p>
          </div>

          <div>
            <p className="text-white font-bold text-[20px]">
              Made for Jan Vincent Neal Toledo
            </p>
          </div>
          {/* First Row */}
          <div className="flex md:flex-row sm:flex-col gap-5 w-full">
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={Rosalie4}></img>
              <p className="pt-1 px-2">Your smile is heavenly</p>
              <p className="px-2">never fails to make me happy</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={Rosalie5}></img>
              <p className="pt-1 px-2">Every moment with you</p>
              <p className="px-2">is worth the time</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={Rosalie6}></img>
              <p className="pt-1 px-2">When I am with you</p>
              <p className="px-2">It feels like I'm always home</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={Rosalie7}></img>
              <p className="pt-1 px-2">In this world full of toxicity,</p>
              <p className="px-2">you are my favorite distraction</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={Rosalie8}></img>
              <p className="pt-1 px-2">My feelings for you is always</p>
              <p className="px-2">the same since day one</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={Rosalie9}></img>
              <p className="pt-1 px-2">You are not just my girlfriend,</p>
              <p className="px-2">you are my best companion</p>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex md:flex-row sm:flex-col gap-5 w-full">
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={RosalieCard1}></img>
              <p className="pt-1 px-2">I feel invincible</p>
              <p className="px-2">especially when I'm with you</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={RosalieCard2}></img>
              <p className="pt-1 px-2">Everything feels like eternity</p>
              <p className="px-2">when I am not with you</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={RosalieCard3}></img>
              <p className="pt-1 px-2">You are the greatest blessing</p>
              <p className="px-2">that I have ever received</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={RosalieCard4}></img>
              <p className="pt-1 px-2">This feeling is so magical,</p>
              <p className="px-2">loving you feels so good</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={RosalieCard5}></img>
              <p className="pt-1 px-2">You are the spark</p>
              <p className="px-2">that ignites my soul</p>
            </div>
            <div className="text-gray-300 text-[14px] font-medium">
              <img src={RosalieCard6}></img>
              <p className="pt-1 px-2">Happy Birthday!</p>
              <p className="px-2">love of my life</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
