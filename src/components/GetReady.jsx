import React from "react";
import hero from "../assets/hero-1.jpg";
import Navbar from "../components/Navbar";

const GetReady = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        height: "750px",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="ml-[10%] mt-20">
        <h1 className="text-6xl leading-tight ">
          Ready To Start A<br />
          <span className="text-[#3F2208] border-r-4 border-[#3F2208] ">
            Successful
          </span>
          <br /> Life On Belief ?
        </h1>
        <p className="box-border h-auto w-[50%] p-4 border-2 border-black mt-4 text-center text-lg">
          The RedPhantom Group is a great resource for reshaping youth and
          communities towards success, with a particular emphasis on youth
          development.
        </p>
      </div>
    </div>
  );
};

export default GetReady;
