import React from "react";
import { categories } from "@/lib/categories";
import Link from "next/link";
function CategoriesNav() {
  return (
    <nav className="text-[1.2rem]">
      <ul className="flex gap-5">
        {categories.map((category) => (
          <li key={category.label}>
            <Link
              className="p-5 rounded-full flex flex-col items-center justify-center cursor-pointer gap-1"
              href="/"
            >
              <category.icon className=" h-10 w-10 text-gray-300 " />
              <p>{category.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoriesNav;
