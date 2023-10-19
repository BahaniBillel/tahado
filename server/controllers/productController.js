const db = require("../db/index");

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query("select * from products ");
    // console.log(result.rows);
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
