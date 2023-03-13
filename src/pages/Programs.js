import React from "react";
import Internship from "../components/Internship";
import ResearchAndDevelopment from "../components/ResearchAndDevelopment";

const Programs = () => {
  return (
    <div className="bg-black">
      <h2 className="text-white text-center py-6 text-5xl">Our Programs</h2>
      <div className="flex flex-col justify-around mt-[2%] pb-[2%] md:flex-row">
        <Internship />
        <ResearchAndDevelopment />
      </div>
    </div>
  );
};

export default Programs;
