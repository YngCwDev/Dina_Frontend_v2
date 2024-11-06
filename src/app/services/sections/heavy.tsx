"use client";

import { ShieldCheck, SearchCheck, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import c_data from "@/lib/c_data";
import img1 from "./../../../../public/img/img-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "@/lib/images";
import { CtaButton } from "@/components/cta_button";
import { Button } from "@/components/ui/button";

interface Item {
  item: StaticImageData;
}

const Heavy = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
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
              We provide a wide selection of machinery to support your
              project&apos;s demands, from excavators and bulldozers to cranes
              and loaders. Each piece of equipment undergoes rigorous
              maintenance and inspections to ensure top performance and safety
              standards.
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
              <CtaButton classname="" />
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
                <Slide item={item} />
              </div>
            ))}
          </Slider>
          <Button
            variant="ghost"
            size="icon"
            className="absolute md:flex hidden -left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={100} strokeWidth={1} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute md:flex hidden -right-10 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={100} strokeWidth={1} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Slide = ({ item }: Item) => {
  return (
    <div className="w-[320px] transition-all duration-150 hover:scale-105 cursor-pointer">
      <Image src={item} alt="" />
    </div>
  );
};
export default Heavy;
