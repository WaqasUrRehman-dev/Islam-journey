import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const data = [
    "Home",
    "Our Courses",
    "Find Teacher",
    "Pricing",
    "Mobile App",
    "Contact",
    "Blog",
  ];
  return (
    <div className="w-full">
      {/* desktop menu */}
      <div className="hidden lg:flex justify-between items-center py-10">
        <div className="flex gap-20 items-center sm:pl-8 pl-12">
          <div className="w-20 h-12 pt-2">
            <img src="https://qutor.com/assets/new-logo.png" alt="" />
          </div>
          <div className="flex lg:gap-6 xl:gap-8 text-white font-bold xl:text-lg">
            {data.map((item, index) => {
              return (
                <a key={index} href="#">
                  {item}
                </a>
              );
            })}
          </div>
        </div>
        <div className="lg:pr-4 xl:pr-20">
          <button className="font-semibold text-white mr-4">Login</button>
          <button className="px-6 py-1 bg-[#f4dd5a] font-semibold rounded-md">
            Sign up
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {toggleMenu ? (
        <>
          <div
            className={`lg:hidden w-full flex flex-col h-screen bg-black absolute`}
          >
            <button
              onClick={() => setToggleMenu(false)}
              className="m-2 px-2 py-[6px] text-white text-2xl"
            >
              <ImCross />
            </button>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col pt-4 text-white pl-10 gap-2 text-lg font-light "
                >
                  <a href="#">{item}</a>
                  <hr className="opacity-20 w-72" />
                </div>
              );
            })}
            <div className="pl-10 flex gap-4 mt-10 text-sm font-semibold">
              <button className="px-12 py-1 bg-[#f4dd5a] rounded-md">
                Login
              </button>
              <button className="px-12 py-1 bg-[#19be9c] rounded-md text-white">
                Sign up
              </button>
            </div>
            <div className="mt-4 w-full py-3 bg-[#f4dd5a] fixed bottom-20">
              <button className="pl-32 text-lg font-semibold">
                Try Free Lesson
              </button>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => setToggleMenu(true)}
          className="m-2 px-2 py-[6px] text-white text-2xl lg:hidden"
        >
          <FaBars />
        </button>
      )}
    </div>
  );
}
