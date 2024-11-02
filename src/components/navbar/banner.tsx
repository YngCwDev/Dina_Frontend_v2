import React from "react";
import Link from "next/link";
import { CircleUser } from "lucide-react";

export const Banner = () => {
  return (
    <div className="hidden bg-red-700 p-1 text-white md:block">
      <div className="px-[10vw] mx-auto flex justify-between  md:px-20">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href='/support'>Locations</Link>
            </li>
            <li>
              <Link href="/support">Offices</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </nav>
        <Link href="#" className="flex items-center gap-2">
          <CircleUser className="h-5 w-5" />
          <span>Client Portal</span>
        </Link>
      </div>
    </div>
  );
};
