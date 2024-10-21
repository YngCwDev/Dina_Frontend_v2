import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Support = () => {
  return (
    <div className="bg-home-support bg-zinc-50 px-[10vw] py-[10vw] bg-no-repeat flex justify-center         ">
      <div className=" flex gap-8 items-center flex-wrap">
        <div className="w-[450px] space-y-4">
          <h2 className="text-4xl text-red-700 font-bold">
            Supporting diverse Sectors with tailored Solutions
          </h2>
          <p className="text-[1.1rem] pr-24">
            Empowering a wide range of sectors with customized solutions that
            enhance productivity and safety. From mining and construction to
            energy and healthcare. <br /> Our expertise and quality products are
            designed to meet the unique challenges of each industry we support.
          </p>
          <Button variant={"ghost"} className="bg-red-700 text-white">
            <Link href="/#">Explore More</Link>
          </Button>
        </div>
        <div>
          <Video className="border-none" />
        </div>
      </div>
    </div>
  );
};
const Video = ({ className }: any) => {
  return (
    <>
      <video controls width={750} className={className} muted>
        <source src={"/videos/mining.mp4"} type="video/mp4" />
      </video>
    </>
  );
};

export default Support;
