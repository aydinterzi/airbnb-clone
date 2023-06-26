import React from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import HeaderNav from "./header-nav";

function Header() {
  return (
    <header className="text-[1.4rem] flex flex-row justify-between py-8 items-center">
      <Logo />
      <SearchBar />
      <HeaderNav />
    </header>
  );
}

export default Header;
