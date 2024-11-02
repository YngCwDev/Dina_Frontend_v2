import Link from "next/link";
import React from "react";

const Language = () => {
  return (
    <div className="relative bg-white drop-shadow-md  py-4 flex flex-col items-center  rounded-lg">
      <div className="absolute bg-white -top-2 h-4 w-4 rotate-45"></div>
      <div className="text-start font-normal flex flex-col">
        <Link href="" className="py-2 pl-4 pr-14 hover:bg-zinc-100">
          English
        </Link>
        <Link href="" className="py-2 pl-4 pr-14 hover:bg-zinc-100">
          Portuguese
        </Link>
      </div>
    </div>
  );
};

export default Language;
