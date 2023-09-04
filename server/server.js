require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/index.js");

const app = express();
app.use(cors());
app.use(express.json());

// Get User list name

app.get("/api/v1/products", async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query("select * from products ");
    console.log(result.rows);
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        users: result.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`the app is running on port ${port}`);
});
