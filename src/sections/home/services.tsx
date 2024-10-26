import { Cable, HardHat, Truck } from "lucide-react";
import { TbCarCrane } from "react-icons/tb";
import React from "react";
import crane from "@/assets/Crane.png";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
const Services = () => {
  const Crane = () => {
    return (
      <>
        <Image src={crane} width={20} alt="crane-icon" className="" />
      </>
    );
  };
  const qualities = [
    {
      icon: TbCarCrane,
      title: "Heavy Equipment Rental",
      description:
        "Providing a dependable fleet of high-quality heavy machinery, including bulldozers, excavators, and cranes, to support industrial and construction projects with unmatched reliability and performance.",
    },
    {
      icon: Cable,
      title: "Electrical Parts and Generators",
      description:
        "Supplying an extensive range of electrical materials and powerful generators to meet the demands of various industries, ensuring reliable power and seamless operations at all times.",
    },
    {
      icon: HardHat,
      title: "Personal Protective Equipment",
      description:
        "Ensuring workplace safety through a comprehensive selection of personal protective equipment, including respirators, gloves, and protective clothing, to safeguard workers across all industries.",
    },
  ];

  return (
    <section className="bg-zinc-50 text-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="px-2 lg:container mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-center text-red-700 text-3xl font-bold">
            Our Core Services
          </h2>
          <p>
            Discover our comprehensive range of solutions designed to enhance
            your operations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality, index) => (
               <Link href='/'>
            <Card key={index} className="bg-white py-8 border-none drop-shadow-lg text-zinc-950 hover:scale-105 transition-all duration-150 ease-in-out">
              <CardHeader>
                <quality.icon
                  className="w-12 h-12 text-red-700 mx-auto"
                  aria-hidden="true"
                />
                <CardTitle className="text-center text-lg font-semibold text-zinc-950">
                  {quality.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-zinc-900">
                  {quality.description}
                </p>
             
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
