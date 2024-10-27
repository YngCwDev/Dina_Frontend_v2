import React from "react";
import c_data from "@/lib/c_data";
import { TriangleAlert, ChevronRight, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Safety = () => {
  const safety = [
    {
      icon: TriangleAlert,
      title: "Customized Risk Analysis",
      description:
        "Comprehensive evaluation of industry-specific risks, addressing critical areas for optimal safety.",
    },
    {
      icon: ShieldCheck,
      title: "Implementation of Safety Policies",
      description:
        "Creation and application of tailored safety measures to meet the operational demands of the company.",
    },
    {
      icon: Activity,
      title: "Practical Training and Regular Audits",
      description:
        "Consistent training programs for staff and periodic audits to uphold compliance with safety standards.",
    },
  ];

  return (
    <div className="container text-center py-[5vh]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">
          {c_data.categories[1].items[3].name}
        </h2>
        <p className="px-[10vw]">
          Safety is a priority in all our services. We provide comprehensive
          safety training programs that cover various operational risks and
          regulatory requirements. The training is hands-on and designed to
          empower your workforce with the skills needed to prevent accidents and
          handle emergency situations effectively.
        </p>
      </div>
      <div className="flex gap-16 justify-center">
        {safety.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-8 w-[20vw]">
            <item.icon size={60} className="text-red-700" />
            <div className="space-y-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div> 
      <div className="flex   gap-2 items-center mx-auto my-4 bg-zinc-200 rounded-xl w-fit">
        <Button variant={"ghost"} className="bg-red-700 text-white rounded-xl">
          Contact Now
        </Button> 
        <Link
          href={c_data.categories[1].items[3].link}
          className="flex items-center "
        >
          <span className="font-medium">Request a Quote</span><ChevronRight size={20} strokeWidth={1}/>
        </Link>
      </div>
    </div>
  );
};

export default Safety;
