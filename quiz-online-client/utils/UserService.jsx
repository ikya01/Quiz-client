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

export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteUser = async (username) => {
  try {
    await api.delete(`/users/${username}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};