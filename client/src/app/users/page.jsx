import React from "react";

async function UsersLists() {
  const users = await fetch("http://localhost:3001/api/v1/products");
  const response = await users.json();

  return response;
}

const UsersPage = async () => {
  const users = await UsersLists();
  console.log(users.data.users[0]);

  const product = users.data.users[1].product_name;
  return <div>{product}</div>;
};
export default UsersPage;
