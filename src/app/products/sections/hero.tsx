import React  from "react";

const ProductsHero = () => {
  return (
    <div className="bg-white">
      <div className="bg-home-hero p-[14vw] bg-no-repeat"></div>
      <div className="px-[15vw] py-24 space-y-6">
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
      <div className="flex justify-center  bg-zinc-900 text-white p-[1vw] mt-4">
        <h3 className="text-2xl font-semibold">Explore Our Products</h3>
      </div>
    </div>
  );
};

export { ProductsHero };
