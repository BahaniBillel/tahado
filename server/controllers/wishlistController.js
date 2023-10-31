const db = require("../db/index");

const prisma = require("../prisma/prisma");

// GET ALL THE TABLE OF WISHLIST FROM DATABASE
exports.getAllWishList = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM wishlist");

    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        wishlist: result.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// POST WISH TO WISHLIST TABLE IN DATABASE
exports.postToWishList = async (req, res) => {
  const wishlistData = req.body;
  console.log("About to insert the following data:", wishlistData);
  wishlistData.user_id = parseInt(wishlistData.user_id, 10);

  try {
    const wish = await prisma.wishlist.create({
      data: wishlistData,
    });
    res.status(200).json(wish);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a wish" });
  }
};

// Remove wish from wishlist table in the database
exports.removeFromWishList = async (req, res) => {
  const wishlistData = req.body;
  try {
    const wish = await prisma.wishlist.delete({
      where: {
        // Assuming you have a unique constraint on wishlist_id and user_id
        wishlist_id_user_id: {
          wishlist_id: parseInt(wishlistData.wishlist_id, 10),
          user_id: parseInt(wishlistData.user_id, 10),
        },
      },
    });
    res.status(200).json({ message: "Successfully removed wish" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove a wish" });
  }
};
