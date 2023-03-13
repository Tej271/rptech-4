import React from "react";
import ResearchDev from "./ResearchDev";

const ResearchAndDevelopment = () => {
  return (
    <div className="text-white ml-10 pb-10 md:ml-0 md:pb-10">
      <ResearchDev />
      <div className="border-l-2 leading-normal">
        <h3 className="ml-4 text-3xl pb-5">Research and Development</h3>
        <p className="ml-4 pb-4">
          R&D develops new knowledge. It's where we innovate, process,
          <br /> and improve product.We work on different things using trending
          <br />
          technologies.
        </p>
        <div className="bg-red-600 px-6 py-2 rounded text-white w-36 ml-4 pb-4">
          <span>Explore More</span>
        </div>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;
