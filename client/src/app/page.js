import Navigation from "./components/headers/navigation";
import ProductsLine from "./components/layouts/ProductsLine";
import ProductLy01 from "./components/productsLayouts/ProdcutLy01";
import Image from "next/image";
import data from "../db/giftData";
import Layout01 from "./components/layouts/Layout01";
import MiddleHeader from "./components/headers/middleHeader";

export default function Home() {
  return (
    <main className="">
      <ProductsLine data={data} lineID={1} bottomLine={false} />
      <ProductsLine data={data} lineID={2} bottomLine={false} />
      <Layout01 />
    </main>
  );
}
