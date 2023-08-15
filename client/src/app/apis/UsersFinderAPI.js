import React from "react";

export default async function UsersFinderAPI() {
  return fetch("api/v1/users");
}
