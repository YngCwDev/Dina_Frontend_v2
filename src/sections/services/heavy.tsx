"use client";

import {
  ShieldCheck,
  SearchCheck,
  Handshake,
  ChevronRight,
} from "lucide-react";
import React from "react";
import Image, { StaticImageData } from "next/image";
import c_data from "@/lib/c_data";
import img1 from "./../../../public/img-2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "@/lib/images";


interface Item{
  item: StaticImageData
}

const Heavy = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const heavyMR = [
    {
      icon: ShieldCheck,
      detail: "	High-quality equipment",
    },
    {
      icon: SearchCheck,
      detail: "	Regular maintenance to ensure safety",
    },
    {
      icon: Handshake,
      detail: "	Flexible rental terms according to your needs",
    },
  ];

  return (
    <div className=" space-y-4 py-16">
      {/* Services */}
      <div className="px-[15vw]">
        <div className="flex gap-8 justify-between">
          <div className="w-[50vw] space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                {c_data.categories[1].items[0].name}
              </h2>
              <div className="bg-red-700 h-1 w-[6vw]"></div>
            </div>{" "}
            <p>
              We provide a wide selection of machinery to support your project&apos;s
              demands, from excavators and bulldozers to cranes and loaders.
              Each piece of equipment undergoes rigorous maintenance and
              inspections to ensure top performance and safety standards.
            </p>
            <div className="space-y-2 pl-4 py-4">
              {heavyMR.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <item.icon className="text-red-700" />
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex   gap-2 items-center   bg-zinc-200 rounded-xl w-fit">
              <Button
                variant={"ghost"}
                className="bg-red-700 text-white rounded-xl"
              >
                Contact Now
              </Button>
              <Link
                href={c_data.categories[1].items[3].link}
                className="flex items-center "
              >
                <span className="font-medium">Request a Quote</span>
                <ChevronRight size={20} strokeWidth={1} />
              </Link>
            </div>
          </div>
          <div>
            <Image src={img1} alt="" className="w-[50vw]" />
          </div>
        </div>
        <div className="relative py-4">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="px-2">
                <Slide item={item}/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Slide = ({item}: Item) => {
  return (
    <div className="w-[320px]">
      <Image src={item} alt="" />
    </div>
  );
};
export default Heavy;
