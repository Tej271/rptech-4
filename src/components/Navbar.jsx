import React, { useState } from "react";
import RPLogo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row justify-around p-[2%]">
      {/* Brand Logo */}
      <div>
        <img src={RPLogo} alt={"rp-logo"} width={120} />
      </div>

      {/* Menu Items and Search Icon */}
      <div className="flex-row justify-between items-center w-[50%] text-lg hidden lg:flex">
        {[
          "Home",
          "About us",
          "Internship",
          "Our Youth",
          "Program",
          "Contact Us",
          "Login",
        ].map((menuItem, index) => (
          <h1
            className="font-normal peer  underline-offset-4 decoration-4 cursor-pointer"
            key={index}
          >
            {menuItem}
            <div className="hidden peer-hover:block bg-gradient-to-r from-pink-500 to-purple-500 leading-[2px]">
              &nbsp;
            </div>
          </h1>
        ))}
        <BsSearch />
      </div>
      <div
        className="block lg:hidden p-4 space-y-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className="block lg:hidden w-8 h-0.5 bg-black animate-pulse"></span>
        <span className="block lg:hidden w-8 h-0.5 bg-black animate-pulse"></span>
        <span className="block lg:hidden w-8 h-0.5 bg-black animate-pulse"></span>
      </div>
      <MobileMenu open={show} setOpen={setShow} />
    </div>
  );
}

export default NavBar;
