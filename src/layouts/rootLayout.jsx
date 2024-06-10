import { useState, useEffect } from "react";
import Destination from "./destinationLayout";
import Crew from "./crewLayout";
import Technology from "./technologylayout";
import "../root.css";

function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  // hover

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className=" scroll-smooth ">
        <header className="md:hidden fixed w-screen">
          <div
            className=" flex bg-black  p-3 px-4 justify-between
      "
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fillRule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#FFF" />
                  <path
                    fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                  />
                </g>
              </svg>
            </div>
            <button onClick={toggle}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                  <g fill="#D0D6F9" fillRule="evenodd">
                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                  </g>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                  <g fill="#D0D6F9" fillRule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                  </g>
                </svg>
              )}
            </button>
          </div>
          <nav className={`${isOpen ? "block" : "hidden"} `}>
            <ul className="flex flex-col cursor-pointer space-y-12  right-0 py-16 text-center ml-auto  text-white font-semibold bg-black/70 backdrop-blur-lg  h-screen w-7/12">
              <li
                className="hover:bg-pink-300/20 py-2 rounded-r-lg transition border-l-4 border-pink-500 ease-in duration-200 "
                onClick={toCloseNav}
              >
                <a href="#">Home</a>
              </li>
              <li
                className="hover:bg-cyan-300/20 py-2 rounded-r-lg transition border-l-4 border-cyan-500 ease-in duration-200 "
                onClick={toCloseNav}
              >
                <a href="#section-dest">Destination</a>
              </li>
              <li
                className="hover:bg-violet-300/20 py-2 rounded-r-lg transition border-l-4 border-violet-500 ease-in duration-200 "
                onClick={toCloseNav}
              >
                <a href="#section-crew">Crew</a>
              </li>
              <li
                className="hover:bg-orange-300/20 py-2 rounded-r-lg transition border-l-4 border-orange-500 ease-in duration-200 "
                onClick={toCloseNav}
              >
                <a href="#section-tech">Technology</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className=" main snap-mandatory snap-y">
          <div className="fixed left-10 top-12 z-10 hidden sm:hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>
          <div className="h-1 lg:block fixed top-16 left-11  bg-slate-800/80 w-5/12  hidden"></div>
          <nav className="sm:hidden hidden text-white md:block  backdrop-blur-md fixed right-0 top-10 p-2 md:px-10 bg-black/30 font-normal text-lg lg:text-2xl w-7/12 ">
            <ul className="flex justify-between space-x-10  w-full">
              <li className="  px-2 border-white my-0 cursor-pointer">
                <div className="w-full h-1 translate-y-14 "></div>
                <a className="fading" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="fading" href="#section-dest">
                  Destination
                </a>
              </li>
              <li>
                <a className="fading" href="#section-crew">
                  Crew
                </a>
              </li>
              <li>
                <a className="fading" href="#section-tech">
                  Technology
                </a>
              </li>
            </ul>
          </nav>
          <section className=" snap-start lg:grid grid-cols-2 lg:pb-52 text-white pt-44  text-center px-4 md:px-32  h-screen bg-[url('src/assets/home/background-home-mobile.jpg')] md:bg-[url('src/assets/home/background-home-tablet.jpg')] lg:bg-[url('src/assets/home/background-home-desktop.jpg')] bg-cover bg-center">
            <div className="lg:text-start ">
              <h2 className="text-xl md:mt-32 md:text-2xl lg:text-xl">
                So, you want to travel to
              </h2>
              <h1 className="text-8xl mt-8 md:text-9xl lg:my-6 ">SPACE</h1>
              <p className="mt-8 text-wrap md:text-2xl lg:mt-14 lg:text-xl">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="place-self-end">
              <div className="mt-20 md:mt-28 w-40 h-40 md:h-64 md:w-64 lg:w-52 lg:h-52 lg:mr-14 bg-white flex items-center justify-center mx-auto text-black text-2xl md:text-4xl rounded-full">
                Explore
              </div>
            </div>
          </section>
          <Destination />
          <Crew />
          <Technology />
        </main>
      </div>
    </>
  );
}
export default RootLayout;
