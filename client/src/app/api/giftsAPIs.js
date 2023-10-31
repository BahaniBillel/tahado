import axios from "axios";

// Fetch all products
export async function FetchGifts() {
  const response = await axios.get("http://localhost:3001/api/v1/products");
  const gifts = await response.data.data.products;
  // console.log(gifts);
  return gifts;
}

// ADD GIFT TO PRODUCTS TABLE
export async function AddGift(giftData) {
  console.log("Gift Data being sent:", giftData);

  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/products/addGift",
      giftData,
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log("This error is coming from addgift in giftsAPIs", error);
  }
}
