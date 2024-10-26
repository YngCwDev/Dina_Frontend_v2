"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/img-2.png";
import { c_data } from "@/lib/c_data";
import { Button } from "@/components/ui/button";
const products = c_data.categories[0].items;

const Product = () => {
  const [visibleProduct, setVisible] = useState(0);
  const handleClick = (currentProduct: number) => {
    setVisible(currentProduct);
  };
  return (
    <div>
      {/* navsidebar */}
      <div className="flex">
        <ul className="block">
          {products.map((product, index) => (
            <li
              key={product.name}
              onClick={() => handleClick(index)}
              className="border-y-[1px] border-zinc-200 bg-white w-72 p-4 cursor-pointer hover:bg-zinc-100"
            >
              {product.name}
            </li>
          ))}
        </ul>
        <div>
          <Content productIndex={visibleProduct} />
        </div>
      </div>
    </div>
  );
};

const Content = ({ productIndex }: any) => {
  const product = products[productIndex];
  return (
    <div>
      <h2>{product.description}</h2>
      <div>
        <ul>
          <li className="p-4 w-64">
            <div className="md:h-[24vh] h-96  flex flex-col justify-between p-1">
              <div className="relative w-full h-[20vh]">
                <Image
                  src={img}
                  alt=""
                  width={undefined}
                  fill
                  className="object-cover"
                />
              </div>
              <h3>xxxxxxxxxx</h3>
              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <Button>Contact Now</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
