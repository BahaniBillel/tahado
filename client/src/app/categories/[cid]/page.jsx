import React from "react";
import ProductLy02 from "../../components/productsLayouts/ProdcutLy02";

function CategoryPage() {
  return (
    <div className="py-10 px-2 md:px-5 flex flex-col items-center justify-start">
      <div className=" grid  grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        <ProductLy02 />
        <ProductLy02 />
        <ProductLy02 />
        <ProductLy02 />
      </div>
    </div>
  );
}

export default CategoryPage;
