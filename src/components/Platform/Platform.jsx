import React from "react";

export default function Platform() {
  const data = [
    {
      image: "https://qutor.com/assets/new/Quran%20Classroom%20Online.png",
      text1: "Advanced Classroom:",
      text2: "like sitting next to a teacher",
    },
    {
      image:
        "https://qutor.com/assets/new/learn_quran_in_my_language-50d7d6d867c71b6ab65ed991d12beedb74273de6fa873d533e22af19f28265cb.png",
      text1: "Learn Quran online in your",
      text2: "native language",
    },
    {
      image:
        "https://qutor.com/assets/new/Learn%20Quran%20for%20beginners%20online",
      text1: "Hire multiple Quran teachers,",
      text2: "one for each subject",
    },
    {
      image: "https://qutor.com/assets/new/Female%20Quran%20Tutors%20Online",
      text1: "Qualified Female",
      text2: "Quran Teachers available",
    },
    {
      image: "https://qutor.com/assets/new/Best%20Quran%20Tutors%20Online",
      text1: "Choose from thousands of,",
      text2: "hand-picked Quran Tutors",
    },
    {
      image:
        "https://qutor.com/assets/new/Quran%20Online%20Classroom%20for%20kids%20and%20adults.png",
      text1: "Safe Quran Classroom",
      text2: "for kids and adults",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-10 bg-sky-300 py-6">
      <div className="p-4">
        <h1 className="lg:text-5xl text-4xl font-extrabold text-center">
          Most trusted platform to learn Quran
        </h1>
      </div>
      <div className="lg:w-4/5 flex flex-wrap justify-between gap-y-8 py-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-72 flex flex-col items-center gap-12 py-4"
          >
            <div className="w-36 h-36">
              <img  src={item.image} alt="" />
            </div>
            <p className="text-center text-lg font-semibold">
              {item.text1} <br /> {item.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
