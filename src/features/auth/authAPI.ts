import axios from "../../utils/axiosInstance";

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post("/auth/register", { email, password });
  return response.data;
};
