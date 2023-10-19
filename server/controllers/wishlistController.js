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
  const { wishlist_id, user_id } = req.body;
  const wishlistData = req.body;
  console.log(req.body);
  try {
    const wish = await prisma.wishlist.create({
      data: wishlistData,
    });
    res.status(200).json(wish);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a wish" });
  }
};

//  try {
//    // Check if the item already exists
//    const existingItem = await db.query(
//      "SELECT * FROM wishlist WHERE  user_id = $1",
//      [2]
//    );

//    if (existingItem.rows.length > 0) {
//      // Remove from wishlist
//      await db.query("DELETE FROM wishlist WHERE user_id = $1", [2]);
//      res.status(200).json({ status: "success", action: "removed" });
//    } else {
//      // Add to wishlist
//      const result = await db.query(
//        "INSERT INTO wishlist (user_id) VALUES ($1) ",
//        [2]
//      );
//      res.status(200).json({
//        status: "success",
//        action: "added",
//        data: { wishlist: result.rows },
//      });
//    }
//  } catch (error) {
//    console.log(error);
//  }
