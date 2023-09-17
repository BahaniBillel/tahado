import axios from "axios";

async function FetchGifts() {
  const response = await axios.get("http://localhost:3001/api/v1/products");
  const gifts = await response.data.data.users;
  // console.log(gifts);
  return gifts;
}

export default FetchGifts;
