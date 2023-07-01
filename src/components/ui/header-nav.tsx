import Link from "next/link";
import React from "react";
import { TfiWorld } from "react-icons/tfi";
import Profile from "./profile";
function HeaderNav() {
  return (
    <nav className="flex gap-5 items-center">
      <Link
        className="font-medium hover:bg-gray-100 p-5 rounded-full flex items-center justify-center cursor-pointer"
        href="/"
      >
        Airbnb your home
      </Link>
      <div className="hover:bg-gray-100 p-5 rounded-full flex items-center justify-center cursor-pointer">
        <TfiWorld className="h-6 w-6 bg-white" />
      </div>
     
        <Profile />
    
    </nav>
  );
}

export default HeaderNav;
