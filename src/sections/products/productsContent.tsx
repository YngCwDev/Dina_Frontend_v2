import { Button } from "@/components/ui/button";
import c_data from "@/lib/c_data";
import Image from "next/image";
import React from "react";
import img from "@/assets/img-3.png";

const ProductsContent = () => {
  return (
    <div className="bg-white">
      <div className="bg-home-hero p-[15vw] bg-no-repeat px-[]">
        <h1 className="text-6xl font-semibold text-white"> Our Products</h1>
      </div>
      <div className="p-16  px-[15vw]">
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
      <div></div>
      {/* products */}
      <div className="space-y-16">
        {c_data.categories.map((category) => {
          if (category.name === "Products") {
            return category.items.map((catItem) => {
              return (
                <div
                  key={catItem.name}
                  className="px-[15vw]  py-4 flex flex-col justify-center"
                >
                  {/* header */}

                  <div className=" bg-electrical   text-white ">
                    <div className="flex px-[5vw] bg-zinc-950/65 justify-between items-center h-[20vh] py-[5vh]">
                      <div className="space-y-4 ">
                        <h2 className="text-3xl font-semibold">
                          {catItem.name}
                        </h2>
                        <div className="bg-red-700 h-1 w-32"></div>
                      </div>
                      <p className="w-[28vw]">
                        Explore our categories to discover the products that
                        drive productivity and safety.Explore our categories to
                        discover the products that drive productivity and
                        safety.Explore our categories to discover the products
                        that drive productivity and safety.
                      </p>
                    </div>
                  </div>
                  {/* the flex */}
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
                </div>
              );
            });
          }
        })}
      </div>
    </div>
  );
};

const ProductsNav = () => {
  return (
    <div className="flex justify-center divide-x-2 bg-zinc-950 text-white p-[1vw]">
     {c_data.categories[0].items.map((item)=>(
      <div key={item.name} className="p-2 px-4 text-lg font-medium hover:text-red-600/100 transition-colors duration-150">
        {item.name}
      </div>
     ))}
    </div>
  );
};

export default ProductsContent;
