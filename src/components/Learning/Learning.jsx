import React from "react";

export default function Learning() {
  const data = [
    {
      title: "Find a Quran Tutor",
      img: "https://qutor.com/assets/new/Qutor%20Tutor%20Online.png",
      description:
        "You can browse profiles of hand-picked online Quran teachers who teach Quran courses like Noorani Qaida, Quran Recitation, Tajweed, Quran memorization and Arabic language.",
    },
    {
      title: "Select your Plan",
      img: "https://qutor.com/assets/new/Qutor%20Online%20Free%20Trial.png",
      description:
        "Use your thirty minute free classroom time to interview Quran teachers. Continue to learn Quran online with your selected tutor by choosing a classroom plan.",
    },
    {
      title: "Start Learning Quran",
      img: "https://qutor.com/assets/new/Learn%20Quran%20From%20Home.png",
      description:
        "You don't need Zoom or any other software. Our Quran Classroom is designed for online Quran classes and works in your browser with video and audio .",
    },
  ];
  return (
    <div id="teacher" className="w-full lg:h-screen flex flex-col items-center lg:justify-around gap-4 py-8">
      <div className="pt-2">
        <h1 className="lg:text-6xl text-4xl text-center text-[#14a77f] lg:text-slate-700 font-bold px-4">
          3 steps to learn Quran online
        </h1>
      </div>
      <div className="lg:flex flex-col lg:flex-row lg:w-full lg:justify-around gap-4 items-center px-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-80 h-full flex flex-col py-4 gap-8 items-center"
          >
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-700">
              {item.title}
            </h1>
            <div className="w-32 h-32">
              <img className="w-full h-full" src={item.img} alt="" />
            </div>
            <p className="text-center leading-none px-4 lg:px-0">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <button className="bg-[#f4dd5a] px-12 py-2 lg;px-14 lg:py-3 text-xl lg:text-2xl font-semibold lg:rounded-lg hover:text-white">
          Find Quran Tutors
        </button>
      </div>
    </div>
  );
}
