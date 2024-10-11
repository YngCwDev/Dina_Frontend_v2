"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import grid from "@/lib/discover";
import img3 from "@/assets/img-3.png";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Discover = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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

  return (
    <section className="bg-background py-12 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between gap-6 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-neutral-700">
            Discover Our Comprehensive Solutions for Your Productivity <br/> and
            Safety Needs
          </h2>
        </div>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {grid.map((item, index) => (
              <div key={index} className="px-2">
                <ProductCard {...item} />
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
        <div>
        <p className="md:text-lg text-sm md:text-start text-center text-muted-foreground pt-4">
            At Dina Holding SA, we provide a diverse range of services including
            heavy equipment rentals, electrical materials, and personal
            protective equipment (PPE). Our expert technical consulting ensures
            that you receive tailored solutions to enhance your operational
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="group relative overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="md:h-[24vw] h-96 p-[1px] bg-cover bg-center flex flex-col justify-between">
        <div className="relative w-full h-full">
          <Image
            src={img3}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-60" />
        </div>
        <motion.div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex flex-col items-start max-h-36">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-gray-200">{description}</p>
          <Link
            href={link}
            className="flex gap-1 items-center text-white  text-xs md:text-sm"
          >
            Learn More <ChevronRight size={18} color="white" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
