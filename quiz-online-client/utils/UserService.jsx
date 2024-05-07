import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9192/api"
});

export const registerUser = async(user) => {
  try {
    await api.post("/register", user);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const loginUser = async(user) => {
  try {
    await api.post("/login", user);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};