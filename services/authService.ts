import axios from "axios";
const API_URL = "https://apitest.instingku.my.id/api";

export const loginService = async (params: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/login`, params);
    return response.data;
};
