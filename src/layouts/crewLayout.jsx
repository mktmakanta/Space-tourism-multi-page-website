import { useState } from "react";

const crewData = [
  {
    name: "Douglas Hurley",

    png: "src/assets/crew/image-douglas-hurley.png",

    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",

    png: "src/assets/crew/image-mark-shuttleworth.png",

    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",

    png: "src/assets/crew/image-victor-glover.png",

    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",

    png: "src/assets/crew/image-anousheh-ansari.png",

    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function Crew() {
  const [onCrewIndex, setCrewIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(onCrewIndex);

  const crew = crewData[onCrewIndex];
  return (
    <>
      <section
        id="section-crew"
        className="overflow-hidden text-white p-4 md:pt-24 lg:px-32 h-screen bg-[url('src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('src/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('src/assets/crew/background-crew-desktop.jpg')] bg-cover bg-center"
      >
        <h2 className="md:text-2xl">
          <span className="text-slate-400 mx-3">02</span> Meet your crew
        </h2>
        <div className="text-center mt-32 md:mt-24 lg:grid grid-cols-2">
          <div className="lg:text-start">
            <h3 className="text-slate-400 text-2xl md:text-4xl lg:text-3xl lg:mt-14">
              {crew.role}
            </h3>

            <h2 className="text-4xl md:text-6xl mt-5 lg:text-7xl lg:overflow-visible lg:text-nowrap">
              {crew.name}
            </h2>
            <p className="md:px-24 lg:px-0 lg:w-96 md:my-6 md:text-xl my-4 lg:mt-12">
              {crew.bio}
            </p>
            <div className=" flex w-14 md:w-20 justify-between my-10 lg:mt-216  mx-auto lg:mx-0">
              {crewData.map((crewPerson, index) => (
                <div
                  key={crewPerson.name}
                  onClick={() => {
                    setCrewIndex(index);
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 md:w-4 md:h-4 lg:h-2 lg:w-2 hover:bg-blue-500 hover:scale-150 lg:mt cursor-pointer bg-slate-200 rounded-full ${
                    activeIndex === index ? "bg-red-600" : " "
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="md:mx-auto ">
            <img src={crew.png} alt="" className="md:mx-auto " />
          </div>
        </div>
      </section>
    </>
  );
}
export default Crew;
