import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-full pt-[20vw]">
        <div className=" text-zinc-50  space-y-4  bg-gradient-to-t from-zinc-950 place-content-end min-h-[26vw]   p-12 md:pr-[30vw] w-full">
          <h1 className=" text-2xl font-bold">
            <span className="text-3xl">Dina Holding SA</span> <br /> Your
            Trusted Partner For Productivity and Safety Solutions
          </h1>
          <p className="pr-[10vw]">
            Welcome to Dina Holding SA, where we redefine productivity and
            safety for industries worldwide. With years of experience and a
            reputation built on trust and reliability, we offer integrated
            solutions that empower businesses to optimize their operations,
            maintain safety standards, and achieve sustainable growth. From
            heavy equipment rentals to premium industrial products, our
            commitment to quality ensures that we are always one step ahead in
            meeting the evolving demands of our clients across various sectors.
          </p>
        </div>
      </div>

      <div>
        <div className="bg-zinc-950 bg-opacity-10 w-full"></div>
        <Video className="w-screen md:min-h-none min-h-screen  object-cover  top-0 left-0 fixed -z-20" />
      </div>
    </div>
  );
};

const Video = ({ className }: any) => {
  return (
    <>
      <video loop autoPlay className={className} muted>
        <source src={"/videos/mining.mp4"} type="video/mp4" />
      </video>
    </>
  );
};
export default Hero;
