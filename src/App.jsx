import React, { useState } from "react";
import Home from "./components/home/Home";
import RatingandReview from "./components/RatingandReview/RatingandReview";
import Learning from "./components/Learning/Learning";
import Platform from "./components/Platform/Platform";
import Feedback from "./components/Feedback/Feedback";
import Classroom from "./components/Classroom/Classroom";
import Teaching from "./components/Teaching/Teaching";
import Contact from "./components/Feedback/Contact";
import Cards from "./components/Feedback/Cards";

export default function App() {
  const [users, setUsers] = useState([]);
  const handleForm = (data) => {
    setUsers([...users, data]);
  };
  return (
    <div>
      <Home />
      <RatingandReview />
      <Learning />
      <Platform />
      {/* <Feedback /> */}
      <Cards />
      <Classroom />
      <Teaching />
      <Contact />
    </div>
  );
}
