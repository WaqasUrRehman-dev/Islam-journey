import React from "react";
import { IoIosStar } from "react-icons/io";

export default function RatingandReview() {
  return (
    <div className="flex flex-col lg:flex-row h-screen lg:h-auto lg:py-8 items-center justify-around px-6 w-full py-12 lg:px-20 bg-zinc-200">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex justify-center items-center text-5xl text-yellow-500">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p className="font-semibold">Rating 4.9 | 3464 Reviews</p>
        <hr className="w-72 bg-zinc-500 mt-2" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl text-yellow-500 font-extrabold">46646</h1>
        <p className="font-semibold">REGISTERED STUDENTS</p>
        <hr className="w-72 bg-zinc-500 mt-2" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl text-yellow-500 font-extrabold">1679</h1>
        <p className="font-semibold">QURAN TUTORS AVAILABLE</p>
        <hr className="w-72 bg-zinc-500 mt-2" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl text-yellow-500 font-extrabold">354956</h1>
        <p className="font-semibold">ONLINE QURAN CLASSES</p>
        <hr className="w-72 bg-zinc-500 mt-2" />
      </div>
    </div>
  );
}
