const db = require("../db/index");
const prisma = require("../prisma/prisma");

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query("select * from products ");
    console.log(result.rows);
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        products: result.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// GET A PRODUCT BY ID
exports.getProduct = (req, res) => {
  // Your logic to fetch a single product
  res.send(`Product ${req.params.id}`);
};

// Add new gift to products table

exports.addGift = async (req, res) => {
  console.log(req.body);
  const giftData = req.body;

  console.log(giftData);

  try {
    const gift = await prisma.products.create({
      data: giftData,
    });
    res.status(201).json({ message: "Gift Added to product table", gift });
  } catch (error) {
    console.error("Prisma Error:", error);
    res.status(500).json({ error: "Failed to add new gift", details: error });
  }
};
