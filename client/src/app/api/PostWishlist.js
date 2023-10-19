import axios from "axios";

async function PostWishlist(gift_id, user_id) {
  try {
    const response = await axios.post("http://localhost:3001/api/v1/wishlist", {
      wishlist_id: gift_id,
      user_id: user_id, // You'll need to get this from your app's user state or some other way
    });
    const wishlistAction = response.data;
    console.log("the returned data hohoh:", wishlistAction);
    return wishlistAction;
  } catch (error) {
    console.log(error);
  }
}

export default PostWishlist;
