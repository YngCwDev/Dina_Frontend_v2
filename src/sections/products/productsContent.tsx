"use client";

import { Button } from "@/components/ui/button";
import c_data from "@/lib/c_data";
import Image from "next/image";
import React, { useState } from "react";
import img from "@/assets/img-3.png";
import { ChevronRight } from "lucide-react";

const ProductsHero = () => {
  return (
    <div className="bg-white">
      <div className="bg-home-hero p-[12vw] bg-no-repeat"></div>
      <div className="px-[15vw] py-20 space-y-6">
        <h1 className="text-4xl font-bold text-red-700"> Our Products</h1>
        <p>
          Welcome to our Products Page, where we proudly showcase a
          comprehensive range of high-quality products designed to optimize
          performance and enhance safety across various industries. From
          reliable heavy equipment and advanced electrical solutions to
          essential personal protective equipment and premium lubricants, we
          provide the tools needed to keep your operations running smoothly. Our
          offerings are tailored to meet the demanding requirements of sectors
          such as mining, construction, energy, and industrial manufacturing,
          ensuring that you always have access to the right solutions for any
          challenge. Explore our categories to discover the products that drive
          productivity and safety.
        </p>
      </div>
      <ProductsNav />
    </div>
  );
};

/* const ProductsContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCat, setOpenCat] = useState({});
  const handleCat = (CatName: string) => {
    setIsOpen(!isOpen);
    setOpenCat((prev: object) => ({
      ...prev,
      [CatName]: !prev[CatName],
    }));
  };

  return (
    <div className=" bg-white">
      {c_data.categories.map((category) => {
        if (category.name === "Products") {
          return category.items.map((catItem) => {
            return (
              <div
                key={catItem.name}
                className="px-[15vw]  py-2 flex flex-col justify-center"
              >
                // header

                <div
                  className="text-zinc-950 cursor-pointer border-b border-red-700"
                  onClick={() => handleCat(catItem.name)}
                >
                  <div className="flex items-center justify-between py-[3vh]">
                    <div>
                      <h2 className="text-2xl font-bold text-red-700">
                        {catItem.name}
                      </h2>
                    </div>
                    <div className="w-[28vw] flex items-center justify-between  text-md">
                      <p className="">{catItem.description}</p>
                      <ChevronRight
                        size={50}
                        strokeWidth={1}
                        className={
                          openCat[catItem.name] &&
                          `transition-all duration-200  rotate-[90deg] ease-linear`
                        }
                      />
                    </div>
                  </div>
                </div>
                // the flex 
                {openCat[catItem.name] && (
                  <div className="my-8">
                    <div className="flex flex-wrap gap-8">
                      {catItem.sub_items.map((cat_sub_item) => {
                        return (
                          <div
                            key={cat_sub_item}
                            className="h-[450px] w-[420px] drop-shadow-md  rounded-lg bg-white"
                          >
                            <div className="w-[420px] bg-zinc-200 flex items-center justify-center ">
                              <Image src={img} alt="" />
                            </div>
                            <div className="p-2 py-4 space-y-2">
                              <h3 className="text-lg font-semibold">
                                {cat_sub_item}
                              </h3>
                              <p className="text-md text-pretty">
                                We proudly offer an robust extensive selection
                                of high-quality electrical materials, robust
                                power generators,
                              </p>
                              <Button
                                variant={"ghost"}
                                className="bg-red-700 text-white relative"
                              >
                                Learn More
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          });
        }
      })}
    </div>
  );
}; */

const ProductsNav = () => {
  return (
    <div className="flex justify-center divide-x-2 divide-zinc-400 bg-zinc-200 text-zinc-900 p-[1vw]">
      <h3 className="text-2xl">Explore Our Products</h3>
      {/*   {c_data.categories[0].items.map((item) => (
        <div
          key={item.name}
          className="p-2 px-4 text-lg text-zinc-950 font-medium hover:text-red-600/100 transition-colors duration-150"
        >
          {item.name}
        </div>
      ))} */}
    </div>
  );
};

export { ProductsHero };
