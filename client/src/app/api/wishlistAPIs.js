import axios from "axios";

export async function PostWishlist(user_id) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/wishlist/wish",
      {
        user_id: user_id, // You'll need to get this from your app's user state or some other way
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function RemoveWishlist(wishlist_id, user_id) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/wishlist/unwish",
      {
        wishlist_id: wishlist_id,
        user_id: user_id,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetAllWishlist() {
  try {
    const response = await axios.get("http://localhost:3001/api/v1/wishlist");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
