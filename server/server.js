require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
// app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const productRoutes = require("./routes/productRoutes.js");
const wishlistRoutes = require("./routes/wishlistRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

// users
app.use("/api/v1/users", userRoutes);

//products

app.use("/api/v1/products", productRoutes);

//  wishListList

app.use("/api/v1/wishlist", wishlistRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`the app is running on port ${port}`);
});
