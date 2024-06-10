import { useState } from "react";

const technologyData = [
  {
    id: 1,
    name: "Launch vehicle",
    images: {
      portrait: "src/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "src/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    name: "Spaceport",
    images: {
      portrait: "src/assets/technology/image-spaceport-portrait.jpg",
      landscape: "src/assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    name: "Space capsule",
    images: {
      portrait: "src/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "src/assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Technology() {
  const [techIndex, setTechIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(techIndex);

  const technology = technologyData[techIndex];

  return (
    <>
      <section
        id="section-tech"
        className=" text-white  md:pt-24 lg:pt-32 lg:pl-32 h-screen bg-[url('src/assets/technology/background-technology-mobile.jpg')]  md:bg-[url('src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('src/assets/technology/background-technology-desktop.jpg')] bg-cover bg-center"
      >
        <h2 className="p-4 md:text-2xl">
          <span className="text-slate-400 mx-3">03</span> Space launch 101
        </h2>
        <div className="lg:grid grid-cols-2 grid-flow-row-dense lg:mt-5">
          <div className="order-2">
            <img
              src={technology.images.portrait}
              alt=""
              className="mx-auto md:w-10/12 lg:mr-0 lg:w-8/12"
            />
          </div>
          <div className=" order-1 text-center p-4 lg:flex">
            <ul className="flex justify-between lg:flex-col lg:justify-center lg:mr-8 lg:mt-4 mx-auto cursor-pointer w-5/12 md:w-3/12 my-3">
              {technologyData.map((tech, index) => (
                <li
                  key={tech.id}
                  onClick={() => {
                    setTechIndex(index);
                    setActiveIndex(index);
                  }}
                  className={`w-10 h-10 lg:h-16 lg:w-16 lg:my-3 rounded-full border  ${
                    activeIndex === index ? "bg-sky-900 " : ""
                  } hover:bg-white text-white hover:text-black flex items-center justify-center font-semibold`}
                >
                  {tech.id}
                </li>
              ))}
            </ul>
            <div className="lg:text-start">
              <h3 className="text-xl md:text-3xl  mt-8 lg:mt-14 text-slate-400">
                The terminology...
              </h3>
              <h2 className="text-4xl md:text-6xl  my-1">{technology.name}</h2>
              <p className="mt-5 md:text-2xl md:mx-5 lg:mt-10 lg:leading-8 lg:text-xl text-slate-400 lg:mx-0">
                {technology.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Technology;
