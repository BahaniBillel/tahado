import ProductsLine from "./components/layouts/ProductsLine";
import Image from "next/image";
import SectionLayout01 from "./components/layouts/SectionLayout01";
import SectionLayout02 from "./components/layouts/SectionLayout02";
import axios from "axios";

// Fetching data from database
import FetchGifts from "./api/FetchGifts";

export default async function Home() {
  const gifts = await FetchGifts();
  return (
    <main className="">
      <ProductsLine data={gifts} lineID={1} bottomLine={false} />
      <ProductsLine data={gifts} lineID={2} bottomLine={false} />
      <ProductsLine data={gifts} lineID={2} bottomLine={false} />
      <SectionLayout01 />
      <ProductsLine data={gifts} lineID={2} bottomLine={false} />
      <SectionLayout02 />
    </main>
  );
}
