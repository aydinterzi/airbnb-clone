import React from "react";
import { FaAirbnb } from "react-icons/fa";
function Logo() {
  return (
    <div className="flex gap-2 items-center text-logo">
      <FaAirbnb className="text-[4rem]" />
      <p className="text-[2.2rem] font-extrabold">airbnb</p>
    </div>
  );
}

export default Logo;
