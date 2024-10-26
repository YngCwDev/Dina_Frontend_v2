import React from "react";
import Link from "next/link";
import { CircleUser } from "lucide-react";

export const Banner = () => {
  return (
    <div className="hidden bg-red-800 p-1 text-white md:block">
      <div className="container mx-auto flex justify-between px-4 md:px-20">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="#">Locations</Link>
            </li>
            <li>
              <Link href="#">Offices</Link>
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
