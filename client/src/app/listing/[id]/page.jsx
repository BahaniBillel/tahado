import { useRouter } from "next/navigation";
import React from "react";

function ProductDetail({ params }) {
  return <div>{params.id}</div>;
}

export default ProductDetail;
