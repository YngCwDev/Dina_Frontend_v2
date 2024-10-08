"use client"

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import grid from "@/lib/discover";
import img3 from "@/assets/img-3.png";
import { ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discover = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover our products and services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of premium products designed to meet the needs
            of various industries. Explore our product categories to find the
            right solution for your business.
          </p>
        </div>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((item, index) => (
            <ProductCard key={index} title={item.title} />
          ))}
        </div>
        <div className="md:hidden">
          <Slider {...settings}>
            {grid.map((item, index) => (
              <div key={index} className="px-2">
                <Mobile title={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ title }: { title: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div
        className={cn(
          "h-80 bg-cover bg-center p-6 flex flex-col justify-between",
          "bg-grid"
        )}
      >
        <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
        <div className="relative z-10 flex items-center space-x-4">
          <Image
            src={img3}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-300">2 min read</p>
          </div>
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-200">
            Explore our range of products designed for optimal performance and safety.
          </p>
        </div>
      </div>
    </div>
  );
};

const Mobile = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">Swipe to explore</p>
      </div>
      <ChevronRight className="text-gray-400" size={24} aria-hidden="true" />
    </div>
  );
};

export default Discover;