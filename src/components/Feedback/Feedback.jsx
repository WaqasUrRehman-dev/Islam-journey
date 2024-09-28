import React from "react";

export default function Feedback() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-around relative">
      <div className="w-full flex justify-center items-center px-3">
        <h1 className="text-5xl font-extrabold text-center">
          What they say about us
        </h1>
      </div>
      <div className="w-32 h-32 rounded-full top-[30%] absolute">
        <img src="https://qutor.com/assets/lady.png" alt="" />
      </div>
      <div className="w-[90%] lg:w-96 h-[50%] flex flex-col justify-center gap-6 border-2 rounded-md">
        <div className="pt-16">
          <h1 className="text-3xl text-[#ebd654] font-bold flex gap-2 justify-center items-center">
            <img
              className="w-10 h-7"
              src="https://qutor.com/assets/USA.png"
              alt=""
            />
            <span>Ajlal Ali</span>
          </h1>
          <p className="text-xl font-bold mt-2 text-center">Student</p>
        </div>
        <div>
          <img className="pl-8" src="https://qutor.com/assets/coomas.png" alt="" />
          <p className="text-center px-2 pt-2">
            I was quite pleased with the classroom and the tutor. My daughter
            finished reading the Qura. We will definitely recommened it to
            others as well InshaAllah
          </p>
        </div>
      </div>
    </div>
  );
}
