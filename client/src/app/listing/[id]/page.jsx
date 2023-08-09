import React from "react";

function ProductDetail({ params }) {
  const { id } = params;
  console.log(params.id);
  return <div>{id}</div>;
}

export default ProductDetail;
