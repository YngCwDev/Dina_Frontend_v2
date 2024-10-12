import { Truck } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-zinc-100 h-96 px-[10vw] flex flex-col justify-center items-center">
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center max-w-[20vw] text-center">
            <Truck size={50} />
            <h3>Heavy Equipment Rental</h3>
            <p>
              We are dedicated to delivering exceptional quality and service.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[20vw] text-center">
            <Truck size={50} />
            <h3>Heavy Equipment Rental</h3>
            <p>
              We are dedicated to delivering exceptional quality and service.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[20vw] text-center">
            <Truck size={50} />
            <h3>Heavy Equipment Rental</h3>
            <p>
              We are dedicated to delivering exceptional quality and service.{" "}
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Services;
