import React, { useEffect, useState } from "react";
import HeroImage from "../assets/foto.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(
      "Sandi Priyo Kartiko"
    )
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 200)
    }
  }, [index])

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <p className="text-lg font-bold md:text-4xl md:font-bold text-white"> Im {text}</p>
          <p className="text-gray-500 py-4 max-w-md">
            I am a fresh graduate from Malang National Institute of Technology.
            I love to work on web applications using technologies like React,
            Tailwind, Laravel, MySQL.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
