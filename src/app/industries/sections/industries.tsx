import c_data from "@/lib/c_data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const IndustryList = () => {
  return (
    <div className="bg-white px-[15vw] py-16">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Industries</h2>
          <div className="bg-red-700 h-1 w-16 mx-auto"></div>
        </div>
        <p>
          Welcome to Dina Holding SA, where we redefine productivity and safety
          for industries worldwide. With years of experience and a reputation
          built on trust and reliability, we offer integrated solutions that
          empower businesses to optimize their operations, maintain safety
          standards, and achieve sustainable growth.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center py-8">
        {c_data.categories.map((category) => {
          if (category.name === "Industries") {
            return category.items.map((industry) => (
              <div
                key={industry.name}
                className="w-80 flex flex-col items-center gap-4 shadow-sm rounded-md text-center bg-white border-zinc-200 border-[1px] p-8 transition-all hover:scale-105  duration 200 cursor-pointer hover:shadow-md"
              >
                <industry.icon
                  size={100}
                  strokeWidth={1}
                  className="text-red-700 mx-auto"
                  key={industry.name}
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{industry.name}</h3>
                  <div className="bg-red-700 h-[2px] w-8 mx-auto"></div>

                  <p>{industry.description}</p>
                </div>
                <Link
                  href="/industries/industryInfo"
                  className="flex items-center hover:text-red-700"
                >
                  <span>Learn more</span>
                  <ChevronRight
                    size={20}
                    strokeWidth={1}
                    className="mt-[1px]"
                  />
                </Link>
              </div>
            ));
          }
        })}
      </div>
    </div>
  );
};

export default IndustryList;
