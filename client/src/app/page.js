import MiddleHeader from "@/components/headers/middleHeader";
import Navigation from "@/components/headers/navigation";
import ProductsLine from "@/components/layouts/ProductsLine";
import ProductLy01 from "@/components/productsLayouts/ProdcutLy01";
import Image from "next/image";
import data from "../db/giftData";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <MiddleHeader />
      <ProductsLine data={data} />
    </main>
  );
}
