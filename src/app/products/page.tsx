import Contact from "@/components/contact";
import {
  ProductsContent,
  ProductsHero,
} from "@/sections/products/productsContent";
import React from "react";

const Products = () => {
  return (
    <>
      <section>
        <ProductsHero />
      </section>
     {/*  <section>
        <ProductsContent />
      </section> */}
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Products;
