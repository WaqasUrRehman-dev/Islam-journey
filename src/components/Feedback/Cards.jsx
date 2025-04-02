import React from "react";
import Feedback from "./Feedback";

export default function Cards() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between py-10">
      <div className="w-full flex justify-center items-center px-3">
        <h1 className="text-5xl font-extrabold text-center">
          What they say about us
        </h1>
      </div>
        <Feedback />
    </div>
  );
}
