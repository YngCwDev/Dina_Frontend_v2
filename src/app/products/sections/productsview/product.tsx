"use client";

import React, { useState } from "react";
import Image from "next/image";
import img from "./../../../../../public/img/img-2.png";
import c_data from "@/lib/c_data";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const products = c_data.categories[0].items;

interface Index{
  productIndex: number
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
              className=" bg-white w-72 p-4 cursor-pointer hover:bg-zinc-100"
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
      <div>
        <h2>{product.description}</h2>
      </div>
      <div>
        <ul className="flex flex-wrap gap-8">
          {product.sub_items.map((productElement) => (
            <li key={productElement} className="w-80 bg-white drop-shadow-xl rounded-md">
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
                    <Link href='/support' className={buttonVariants({ variant: "outline" })}>Contact Now</Link>
                    <Link href='/products/productsview'>See more</Link>
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
