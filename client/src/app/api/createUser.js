import axios from "axios";

const CreateUserAPI = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/users/createUser",
      userData
    );
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default CreateUserAPI;
