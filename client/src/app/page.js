import Navigation from "./components/headers/navigation";
import ProductsLine from "./components/layouts/ProductsLine";
import ProductLy01 from "./components/productsLayouts/ProdcutLy01";
import Image from "next/image";
import data from "../db/giftData";
import SectionLayout01 from "./components/layouts/SectionLayout01";
import SectionLayout02 from "./components/layouts/SectionLayout02";
import axios from "axios";

// Fetching data from database
async function FetchGifts() {
  const response = await axios.get("http://localhost:3001/api/v1/products");
  const gifts = await response.data.data.users;
  console.log(gifts);
  return gifts;
}

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
