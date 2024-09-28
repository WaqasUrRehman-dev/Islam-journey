import React from "react";

export default function Banner() {
  return (
    <div className="lg:w-full flex flex-col lg:flex-row lg:justify-around items-center gap-10 p-4 lg:py-12 lg:pr-24">
      <div className="flex flex-col gap-6 items-center lg:w-1/2 lg:items-start py-6 text-center lg:text-left lg:pl-16 lg:pb-20">
        <h1 className="text-5xl text-white font-bold ">Learn Quran Online</h1>
        <p className="text-white text-lg leading-none lg:w-2/3">
          We provide online Quran classes for kids and adults. Our online Quran
          tutors are highly qualified and experienced.
        </p>
        <div className="w-[70%]">
          <select
            id="tutors"
            className="py-3 px-4 w-full outline-none text-base"
          >
            <option value="tutors">Find Quran Tutors</option>
            <option value="tajweed">Tajweed</option>
            <option value="recitation">Recitation</option>
            <option value="arabic">Arabic</option>
            <option value="hifz">Hifz</option>
          </select>
          {/* <input
            type="search"
            className="py-2 px-4 w-full outline-none text-base"
            placeholder="Find Quran Tutors"
          /> */}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <img
            src="https://qutor.com/assets/new/Online%20Quran%20Classroom.png"
            alt="Online Quran Classroom"
          />
        </div>
        <button className="bg-[#f4dd5a] py-3 px-10 lg:px-16 text-lg font-bold mt-2">
          Try Free Lesson
        </button>
        <p className="text-white text-sm mt-1">No credit card required</p>
      </div>
    </div>
  );
}
