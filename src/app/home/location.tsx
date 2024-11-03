"use client";

import MapLocation from "@/components/map";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Location = () => {
  const Maputo = { lat: -25.969268, lng: 32.573176 };
  const Tete = { lat: -16.138379, lng: 33.610681 };
  const [currentPosition, setPosition] = useState(Maputo);

  const handleClick = (location: string) => {
    if (location === "Maputo") {
      setPosition(Maputo);
    } else {
      setPosition(Tete);
    }
  };
  return (
    <div className="px-4 bg-zinc-50 lg:px-[20vw] py-[5vh]  border-b-zinc-200 border-b-[1px] space-y-4">
      <div className=" flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold text-red-700">
          Our Locations Across Mozambique
        </h2>
        <p className="lg:px-24">
          Empowering a wide range of sectors with customized solutions that
          enhance productivity and safety.
        </p>
      </div>
      <div>
        <div>
          <p className="pl-1 pb-2 text-sm">Choose one location:</p>
          <div className="flex">
            <Button
              variant={"ghost"}
              className="bg-red-700 rounded-sm h-6 px-4 border-2 text-white"
              onClick={() => handleClick("Maputo")}
            >
              Maputo
            </Button>
            <Button
              variant={"ghost"}
              className="bg-red-700 rounded-sm h-6 px-6 border-2   text-white"
              onClick={() => handleClick("Tete")}
            >
              Tete
            </Button>
          </div>
        </div>
       <MapLocation current={currentPosition} classname='' />
      </div>
    </div>
  );
};

export default Location;
