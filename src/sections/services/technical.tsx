import React from "react";
import img1 from "@/assets/img-2.png";
import Image from "next/image";
import { c_data } from "@/lib/c_data";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Technical = () => {
  const technical = [
    {
      icon: IoAnalyticsOutline,
      detail: "Personalized analysis of your operations",
    },
    {
      icon: IoMdCheckboxOutline,
      detail: "	Recommendations for efficiency improvement",
    },
    {
      icon: MdOutlineSupportAgent,
      detail: "Continuous support throughout the project",
    },
  ];

  return (
    <div className="px-[15vw] bg-zinc-100 space-y-8 py-16">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">
          {c_data.categories[1].items[1].name}
        </h2>
        <div className="bg-red-700 h-1 w-[6vw]"></div>
      </div>
      <div className="flex gap-14">
        <Image src={img1} alt="" />
        <div className="space-y-2">
          <p>
            Our technical consultancy service is aimed at optimizing your
            operations through expert advice and innovative solutions. Our
            consultants have extensive experience in various fields and work
            closely with your team to identify challenges, streamline processes,
            and implement best practices that maximize efficiency.
          </p>
          <div className="space-y-2 pl-4 py-4">
            {technical.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <item.icon size={20} className="text-red-700" />
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="flex   gap-2 items-center my-4 bg-zinc-200 rounded-xl w-fit">
            <Button
              variant={"ghost"}
              className="bg-red-700 text-white rounded-xl"
            >
              Contact Now
            </Button>
            <Link
              href={c_data.categories[1].items[1].link}
              className="flex items-center "
            >
              <span className="font-medium">Request a Quote</span>
              <ChevronRight size={20} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
