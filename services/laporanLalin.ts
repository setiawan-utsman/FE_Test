import axios from "axios";

const API_URL = "https://apitest.instingku.my.id/api";
// import { apiServer } from "@/lib/axios";
export const getLaporanLalin = async (params: any) => {
  try {
    const response = await axios.get(`${API_URL}/lalins`, { params});
    const raw = response.data.data.rows;
    return raw.rows;
  } catch (e) {}
}