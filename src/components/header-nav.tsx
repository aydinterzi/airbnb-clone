import Link from "next/link";
import React from "react";
import { TfiWorld } from "react-icons/tfi";
import Profile from "./profile";
function HeaderNav() {
  return (
    <nav className="flex gap-5 items-center">
      <Link href="/">Airbnb your home</Link>
      <TfiWorld />
      <Profile />
    </nav>
  );
}

export default HeaderNav;
