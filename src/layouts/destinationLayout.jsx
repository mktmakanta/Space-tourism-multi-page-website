import { useState } from "react";

const destinationData = [
  {
    name: "Moon",
    png: "src/assets/destination/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    png: "src/assets/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    png: "src/assets/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    png: "src/assets/destination/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

function Destination() {
  const [onTurn, setTurn] = useState(0);
  const [activeIndex, setActiveIndex] = useState(onTurn);

  const destination = destinationData[onTurn];
  return (
    <>
      <section
        id="section-dest"
        className="   text-white  p-5  md:pt-24 lg:pt-40 lg:px-28 overflow-hidden h-screen bg-[url('src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('src/assets/destination/background-destination-desktop.jpg')] bg-cover bg-center"
      >
        <h2 className="md:text-2xl">
          <span className="text-slate-400 mx-3">01 </span> Pick your destination
        </h2>
        <div className="text-center md:mt-32 lg:mt-4 lg:grid grid-cols-2">
          <div>
            <img
              className="w-52 h-52 md:h-96 md:w-96 mx-auto mt-20 "
              src={destination.png}
              alt={destination.name}
            />
          </div>
          <div className="md:px-20 lg:px-0 lg:flex flex-col items-start lg:text-start">
            <nav className="mx-auto lg:mx-0 my-3 lg:mt-8">
              <ul className="flex justify-between my-2 w-8/12 md:font-medium md:text-2xl md:mb-10 lg:mb-5 mx-auto lg:mx-0 md:text-slate-400 text-slate-300">
                {destinationData.map((dest, index) => (
                  <li
                    className={` cursor-pointer lg:mr-4 hover:bg-white bg-t mx-2 md:bg-sky-800 hover:text-sky-900 px-2 md:py-2 text-white rounded-full md:px-6 shadow-lg 
                    ${activeIndex === index ? "bg-sky-400 " : ""}`}
                    key={dest.name}
                    onClick={() => {
                      setTurn(index);
                      setActiveIndex(index);
                    }}
                  >
                    {dest.name}
                  </li>
                ))}
              </ul>
            </nav>

            <h1 className="text-6xl mt-5 lg:mt-0 md:text-9xl lg:text-7xl ">
              {destination.name.toUpperCase()}
            </h1>
            <p className="my-3 mt-8 pb-10 lg:mt-5 lg:pb-5 text-wrap border-b-2 md:text-2xl lg:text-lg border-slate-600">
              {destination.description}
            </p>
            <div className="md:flex ">
              <div className="m-6 md:text-left space-y-5 md:mr-40 ">
                <h3 className="text-xl lg:text-2xl text-slate-400">
                  Avg. distance
                </h3>
                <h1 className="text-4xl lg:text-4xl">{destination.distance}</h1>
              </div>
              <div className="m-6 md:space-y-5">
                <h3 className="text-xl  lg:text-2xl text-slate-400">
                  Est. travel time
                </h3>
                <h1 className="text-4xl lg:text-4xl">{destination.travel} </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Destination;
