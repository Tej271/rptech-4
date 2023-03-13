import React from "react";
import Intern from "./OnlineLearning";

const Internship = () => {
  return (
    <div className=" text-white ml-10 ">
      <Intern />
      <div className="border-l-2 leading-normal">
        <h3 className="ml-4 text-3xl pb-5">Internship</h3>
        <p className="ml-4 pb-4">
          Career Phoenix - The World's Biggest Internship Cum Training
          <br /> Program. An Ideal and best platform for young people to grow
          <br />
          and succeed.
        </p>
        <div className="bg-red-600 px-6 py-2 rounded text-white w-36 ml-4 pb-4">
          <span>Explore More</span>
        </div>
      </div>
    </div>
  );
};

export default Internship;
