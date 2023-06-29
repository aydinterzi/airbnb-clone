"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Popover from "./popover";
import MenuItem from "./menu-item";
function Profile() {

  const menuItems = [{ label: "Sign up", to: "/" }, { label: "Log in", to: "/" }, { label: "Airbnb your home", to: "/" }, { label: "Help", to: "/" }]

    return (
      <Popover className="relative inline-block">
        <Popover.Button className="flex p-4 border-2 rounded-full gap-4 text-gray-500 items-center cursor-pointer transition duration-300 hover:shadow-md">
          <AiOutlineMenu className="w-6 h-6" /> <FaUser className="w-8 h-8" />
        </Popover.Button>
        <Popover.Panel className="absolute top-20 right-0 w-96 border-2 rounded-3xl list-none">
          <nav>
            <ul className="p-4">
              {menuItems.slice(0, 2).map((item) => (
                <MenuItem label={item.label} to={item.to} key={item.label} />
              ))}
            </ul>
            <hr />
            <ul className="p-4 ">
              {menuItems.slice(2, 4).map((item) => (
                <MenuItem label={item.label} to={item.to} key={item.label} />
              ))}
            </ul>
          </nav>
        </Popover.Panel>
      </Popover>
    );
}

export default Profile;
