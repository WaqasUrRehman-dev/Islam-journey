import React from 'react'

export default function Teaching() {
  const data = [
    {
      title: "Build Your Profile",
      img: "https://qutor.com/assets/new/Quran%20teaching%20online.png",
      description:
        "Build your Quran Tutor profile and choose the Quran courses you want to teach, like online Tajweed,Hifz memorization and Arabic Language course.",
    },
    {
      title: "Launch",
      img: "https://qutor.com/assets/new/Teach%20Quran%20online.png",
      description:
        "You can message Quran students and they can message you. If you are a good match, set up your first Quran lesson and start teaching your online Quran classes",
    },
    {
      title: "Teach and earn",
      img: "https://qutor.com/assets/new/Teach%20Quran.png",
      description:
        "Set your hourly rate and every minute you spend teaching Quran online, the time gets logged so you know how much to bill each student. Students pay you directly.",
    },
  ];
  return (
    <div className="w-full lg:h-screen flex flex-col items-center lg:justify-around gap-4 py-8">
      <div className="pt-2">
        <h1 className="lg:text-6xl text-4xl text-center text-[#14a77f] lg:text-slate-700 font-bold px-4">
          Register as a tutor on Qutor
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
            <p className="text-center px-4 lg:px-0">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <button className="bg-[#f4dd5a] px-12 py-2 lg;px-14 lg:py-3 text-xl lg:text-2xl font-semibold lg:rounded-lg hover:text-white">
          Sign up as Tutors
        </button>
      </div>
    </div>
  );
}