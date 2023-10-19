const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");

// GET ALL USERS
exports.getUsers = async (req, res) => {
  console.log(req.body);
  try {
    // const result = await db.query("select * from users ");
    const result = await prisma.users.findMany();
    // console.log(result.rows);
    res.status(200).json({
      status: "success",
      results: result.length,
      data: {
        users: result,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// CREATE NEW USER

exports.createUser = async (req, res) => {
  console.log(req.body);
  const userData = req.body;

  // Hash the password
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(
      userData.password_hash,
      saltRounds
    );

    // Replace the plaintext password with the hashed password
    userData.password_hash = hashedPassword;

    const user = await prisma.users.create({
      data: userData,
    });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("Prisma Error:", error);
    res.status(500).json({ error: "Failed to create user", details: error });
  }
};
