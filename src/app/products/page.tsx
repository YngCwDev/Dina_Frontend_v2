import Contact from "@/components/contact";
import { ProductsHero } from "@/app/products/sections/hero";
import Product from "@/app/products/sections/product";

import React from "react";

const Products = () => {
  return (
    <>
      <section>
        <ProductsHero />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Products;
