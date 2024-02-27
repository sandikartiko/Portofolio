import React from "react";
import laravel from "../assets/Portofolio/laravel.png";
import mysql from "../assets/Portofolio/mysql.png";
import web from "../assets/Portofolio/web.png";
import spk from "../assets/Portofolio/spk.png";
import php from "../assets/Portofolio/php.png";
import arsip from "../assets/Portofolio/arsip.png";
import figma from "../assets/Portofolio/figma.png";
import mobilo from "../assets/Portofolio/mobilo.png";
import react from "../assets/react.png";
import figma1 from "../assets/figma.png";
import tailwind from "../assets/tailwind.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: web,
      title: "Landing Page SMP N 4 Arso",
      repo: "https://twelscione.vercel.app/",
      subtitle: react,
      icon: tailwind,
    },
    {
      id: 2,
      src: spk,
      title: "Skripsi SPK",
      repo: "https://github.com/sandikartiko/Project-Skrips-Seleksi-Penerimaan-Siswa-Baru-SMP-Negeri1-Sumberpucung",
      subtitle: laravel,
      icon: mysql,
    },
    {
      id: 3,
      src: arsip,
      title: "Arsip Digital",
      repo: "https://github.com/sandikartiko/Project-Skrips-Seleksi-Penerimaan-Siswa-Baru-SMP-Negeri1-Sumberpucung",
      subtitle: php,
      icon: mysql,
    },
    {
      id: 4,
      src: figma,
      title: "Design UI UX Travel Guide",
      repo: "https://www.figma.com/proto/ZG15bM0cgx3ergelwSszOo/Responsive-Web-Design-in-Figma-(Community)?type=design&node-id=1156-718&t=BxXGacfkecpkq0CZ-1&scaling=min-zoom&page-id=206%3A173&mode=design",
      subtitle: figma1,
      icon: null,
    },
    {
      id: 5,
      src: mobilo,
      title: "Design UI UX Course Bimbingan Online",
      repo: "https://www.figma.com/proto/x1rM4tFqCiiSr8pYrEu3d3/High?type=design&node-id=145-862&t=T8GhYyZSvbTYDJJO-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=145%3A862&mode=design",
      subtitle: figma1,
      icon: null,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full portfolio mt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, repo, subtitle, icon }) => (
            <div key={id} className="shadow-md rounded-lg m-2">
              <p className="text-sm font-bold py-2">{title}</p>
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105  "
              />
              <div className="flex items-center justify-center">

              <button className="w-1/2 px-6 py-3 m-4 rounded-lg duration-200 hover:scale-x-105 hover:bg-blue-700" onClick={() => window.open(icon ? repo : 'DEMO_LINK_HERE', '_blank')}>
        {icon ? 'Demo' : 'Launch'}
      </button>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={subtitle}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105 w-10 h-10"
                />
                {icon && (
                  <img
                    src={icon}
                    alt="prosjects"
                    className="rounded-md duration-200 hover:scale-105 w-10 h-10"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
