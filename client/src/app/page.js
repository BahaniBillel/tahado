import Navigation from "./components/headers/navigation";
import ProductsLine from "./components/layouts/ProductsLine";
import ProductLy01 from "./components/productsLayouts/ProdcutLy01";
import Image from "next/image";
import data from "../db/giftData";
import SectionLayout01 from "./components/layouts/SectionLayout01";
import SectionLayout02 from "./components/layouts/SectionLayout02";

export default function Home() {
  return (
    <main className="">
      <ProductsLine data={data} lineID={1} bottomLine={false} />
      <ProductsLine data={data} lineID={2} bottomLine={false} />
      <ProductsLine data={data} lineID={2} bottomLine={false} />
      <SectionLayout01 />
      <ProductsLine data={data} lineID={2} bottomLine={false} />
      <SectionLayout02 />
    </main>
  );
}
