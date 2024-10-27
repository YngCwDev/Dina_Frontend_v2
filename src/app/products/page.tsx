import Contact from "@/components/contact";
import { ProductsHero } from "@/sections/products/productsContent";
import Product from "@/sections/products/productsview/product";

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
