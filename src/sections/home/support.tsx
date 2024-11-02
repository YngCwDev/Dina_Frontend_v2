import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


interface VideoProps{
  className: string
}

const Support = () => {
  return (
    <div className="bg-home-support bg-zinc-100 md:px-[10vw] lg:py-[16vh]  py-[5vh] md:tex bg-no-repeat flex justify-center px-4 ">
      <div className="flex  md:gap-16 gap-8 items-center md:justify-start justify-center flex-wrap">
        <div className="space-y-4 lg:w-[450px]">
          <h2 className="text-4xl  text-red-700 font-bold">
            Supporting diverse Sectors with tailored Solutions
          </h2>
          <p className="text-[1.1rem] md:pr-24">
            Empowering a wide range of sectors with customized solutions that
            enhance productivity and safety. From mining and construction to
            energy and healthcare. <br /> Our expertise and quality products are
            designed to meet the unique challenges of each industry we support.
          </p>
          <Button
            variant={"ghost"}
            className="bg-red-700 text-white lg:flex hidden"
          >
            <Link href="/services">Explore More</Link>
          </Button>
        </div>
        <div>
          <Video className="border-none" />
        </div>

        <Button
          variant={"ghost"}
          className="bg-red-700 text-white lg:hidden w-full"
        >
          <Link href="/services">Explore More</Link>
        </Button>
      </div>
    </div>
  );
};
const Video = ({ className }: VideoProps) => {
  return (
    <>
      <video controls width={750} className={className} muted>
        <source src={"/videos/mining.mp4"} type="video/mp4" />
      </video>
    </>
  );
};

export default Support;
