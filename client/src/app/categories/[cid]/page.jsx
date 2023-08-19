import React from "react";
import ProductLy02 from "../../components/productsLayouts/ProdcutLy02";

function CategoryPage() {
  return (
    <div className="py-10 px-2 md:px-5 flex flex-col items-center justify-start">
      <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10">
        <ProductLy02 title="قلادة زجاج البحر البدايات الجديدة" price="1200" fill />
        <ProductLy02 title="قلادة زجاج البحر البدايات الجديدة" price="1200" fill />
        <ProductLy02 title="قلادة زجاج البحر البدايات الجديدة" price="1200" fill />
        <ProductLy02 title="قلادة زجاج البحر البدايات الجديدة" price="1200" fill />
        
      </div>
    </div>
  );
}

export default CategoryPage;
