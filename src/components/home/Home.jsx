import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-blue-500 w-full">
      <Navbar />
      <Banner />
    </div>
  );
}

export default Home;
