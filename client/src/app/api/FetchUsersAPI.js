import axios from "axios";

async function FetchUsersAPI() {
  const response = await axios.get("http://localhost:3001/api/v1/users");
  const users = await response.data.data.users;
  // console.log(gifts);
  return users;
}

export default FetchUsersAPI;
