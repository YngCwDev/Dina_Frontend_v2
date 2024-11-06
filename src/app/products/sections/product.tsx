"use client";

import React, { useState } from "react";
import Image from "next/image";
import img from "./../../../../public/img/img-2.png";
import c_data from "@/lib/c_data";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const products = c_data.categories[0].items;

interface Index {
  productIndex: number;
}

const Product = () => {
  const [visibleProduct, setVisible] = useState(0);
  const handleClick = (currentProduct: number) => {
    setVisible(currentProduct);
  };
  return (
    <div className="px-[10vw] py-[5vh] bg-white">
      {/* navsidebar */}
      <div className="flex gap-4 bg-white divide-x">
        <ul className="block divide-y">
          {products.map((product, index) => (
            <li
              key={product.name}
              onClick={() => handleClick(index)}
              className=" bg-white font-medium w-80 p-4 cursor-pointer hover:bg-zinc-100"
            >
              {product.name}
            </li>
          ))}
        </ul>
        <div className="px-8 py-4 bg-white">
          <Content productIndex={visibleProduct} />
        </div>
      </div>
    </div>
  );
};

const Content = ({ productIndex }: Index) => {
  const product = products[productIndex];
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">{product.description}</h2>
        <div className="h-[2px] w-16 bg-red-700"></div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-8">
          {product.sub_items.map((productElement) => (
            <li
              key={productElement}
              className="w-80 bg-white cursor-pointer drop-shadow-md rounded-md transition-all duration-150 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col justify-between ">
                <div className="w-full">
                  <Image
                    src={img}
                    alt=""
                    width={undefined}
                    className="object-cover"
                  />
                </div>
                <div className="relative p-4 space-y-4">
                  <h3 className="text-lg font-medium">{productElement}</h3>
                  <p className="text-wrap text-sm">
                    I will say something later
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/support"
                      className={buttonVariants({ variant: "red" })}
                    >
                      Contact Now
                    </Link>
                    <Link
                      href="/products/productsview"
                      className="flex items-center hover:text-red-700"
                    >
                      See more
                      <ChevronRight
                        size={20}
                        strokeWidth={1}
                        className="relative top-[1px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
