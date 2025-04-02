import React from "react";

export default function Feedback() {
  return (
    <div className="relative h-96 border shadow rounded">  
      <div className="w-32 h-32 rounded-full top-[-20%] left-[30%] absolute">
        <img src="https://qutor.com/assets/lady.png" alt="" />
      </div>
      <div className="w-[90%] lg:w-96 h-full flex flex-col justify-center items-center gap-6">
        <div>
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
          <img
            className="pl-8"
            src="https://qutor.com/assets/coomas.png"
            alt=""
          />
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
