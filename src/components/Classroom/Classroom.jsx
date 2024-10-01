import React from "react";

export default function Classroom() {
  const data = [
    {
      image: "https://qutor.com/assets/new/Quran%20online%20classroom.png",
      description1: "Interactive Quran:",
      description2: "Learning Quran online is knowledge for kids and adults",
    },
    {
      image:
        "https://qutor.com/assets/new/Interactive%20Quran%20Learning%20Online.png",
      description1: "Enhanced Learning:",
      description2:
        "Video and Audio Streaming, Text Chat and White Board help you learn Tajweed online",
    },
    {
      image: "https://qutor.com/assets/new/Learn%20Quran%20for%20Kids.png",
      description1: "Parental Watch: ",
      description2:
        "Parents can monitor their child through video snippets as they learn Quran online",
    },
    {
      image:
        "https://qutor.com/assets/new/Best%20Quran%20Learning%20website.png",
      description1: "Archiving:",
      description2:
        "Record and play back your online Quran class for Tajweed and Hifz",
    },
  ];
  return (
    <div id="mobile" className="w-full bg-blue-400 p-5 py-14 flex flex-col gap-16 lg:gap-24 items-center">
      <div>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center px-1">
          Advances Classroom to Learn Quran Online
        </h1>
      </div>
      {/* For mobile menu */}
      {data.map((item, index) => (
        <div key={index} className="lg:hidden flex flex-col gap-6 px-2">
          <img className="w-full" src={item.image} alt="" />
          <p className="text-center text-2xl font-light">
            <span className="font-extrabold text-5xl">
              {item.description1}{" "}
            </span>
            {item.description2}
          </p>
        </div>
      ))}
      {/* for deckstop menu */}
      <div className="hidden w-full lg:flex flex-col items-center gap-10 px-20">
        {data.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className="w-full flex items-center gap-10">
              <div className="w-[45%]">
                <img
                  className="w-full h-full"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="w-[50%]">
                <p className="text-4xl font-light tracking-tight">
                  <span className="font-extrabold ">{item.description1} </span>
                  {item.description2}
                </p>
              </div>
            </div>
          ) : (
            <div key={index} className="w-full flex items-center gap-10">
              <div className="w-[50%]">
                <p className="text-4xl font-light tracking-tight">
                  <span className="font-extrabold ">{item.description1} </span>
                  {item.description2}
                </p>
              </div>
              <div className="w-[45%]">
                <img
                  className="w-full h-full"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-3 lg:px-28">
        <div>
          <img
            className=""
            src="https://qutor.com/assets/icon-systemCheck-654a07310b8bf6e1037193d4f1be2edf435b40e55090c3d3fad2af0e316eb4df.png"
            alt=""
          />
        </div>
        <h1 className="font-extrabold text-4xl">
          Check Your System Compatibility
        </h1>
        <p className="text-2xl lg:text-4xl font-light">
          Learning Quran online works best when you can communicate perfectly
          with each other. Make sure your Desktop or Laptop is set up properly
          for online Quran classes.
        </p>
        <button className="px-8 py-2 bg-[#f4dd5a] text-xl font-semibold mt-4 lg:mt-8">
          Check your system now
        </button>
      </div>
    </div>
  );
}
