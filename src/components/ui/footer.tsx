import Link from "next/link";
import React from "react";
import { TfiWorld } from "react-icons/tfi";

function Footer() {
  return (
    <footer className=" h-20 flex justify-between items-center text-[1.4rem]">
      <nav className="flex justify-between items-center gap-4">
        <p>© 2023 Airbnb, Inc.</p>·<Link href="/">Privacy</Link>·
        <Link href="/">Terms</Link>·<Link href="/">Sitemap</Link>·
        <Link href="/">Destinations</Link>
      </nav>
      <nav className="flex justify-between items-center gap-4">
        <div className="hover:underline flex items-center justify-center cursor-pointer gap-3">
          <TfiWorld className="h-6 w-6 bg-white" />
          English (CA)
        </div>
        <div className="hover:underline flex items-center justify-center cursor-pointer gap-3">
          $ CAD
        </div>
        <div className="hover:underline cursor-pointer">
          Support & resources
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
