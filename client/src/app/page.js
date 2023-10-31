import ProductsLine from "../components/layouts/ProductsLine";
import SectionLayout01 from "../components/layouts/SectionLayout01";
import SectionLayout02 from "../components/layouts/SectionLayout02";

// Fetching data from database
import { FetchGifts } from "./api/giftsAPIs";

export default async function Home() {
  const gifts = await FetchGifts();

  const occasionArray = gifts.map((gift) => gift.occasion);

  console.log(occasionArray);
  return (
    <main className="">
      <ProductsLine
        giftsData={gifts}
        lineID={1}
        bottomLine={false}
        occasionLabel={occasionArray[0]}
        occasionFilter={occasionArray[0]}
      />
      <ProductsLine
        giftsData={gifts}
        lineID={2}
        bottomLine={false}
        occasionLabel={occasionArray[1]}
        occasionFilter={occasionArray[1]}
      />
      <ProductsLine
        giftsData={gifts}
        lineID={2}
        bottomLine={false}
        occasionLabel={occasionArray[2]}
        occasionFilter={occasionArray[2]}
      />
      <SectionLayout01 />
      {/* <ProductsLine
        giftsData={gifts}
        lineID={2}
        bottomLine={false}
        occasionLabel={occasionArray[3]}
        occasionFilter={occasionArray[3]}
      /> */}
      <SectionLayout02 />
    </main>
  );
}
