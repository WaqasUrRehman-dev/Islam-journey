import React from "react";
import Home from "./components/home/Home";
import RatingandReview from "./components/RatingandReview/RatingandReview";
import Learning from "./components/Learning/Learning";
import Platform from "./components/Platform/Platform";
import Feedback from "./components/Feedback/Feedback";
import Classroom from "./components/Classroom/Classroom";
import Teaching from "./components/Teaching/Teaching";
import Contact from "./components/Feedback/Contact";

export default function App() {
  return (
    <div>
      <Home />
      <RatingandReview />
      <Learning />
      <Platform />
      <Feedback />
      <Classroom />
      <Teaching />
      <Contact />
    </div>
  );
}
