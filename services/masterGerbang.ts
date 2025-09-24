import { apiServer } from "@/lib/axios";
import axios from "axios";
const API_URL = "https://apitest.instingku.my.id/api";

export const getGerbang = async () => {
  try {
    const response = await axios.get(`${API_URL}/gerbangs`);
    const raw = response.data.data.rows;
    return raw.rows;
  } catch (e) {}
};

export const createGerbang = async (params: any) => {
  try {
    const response = await axios.post(`${API_URL}/gerbangs`, params);
    return response.data;
  } catch (e) {}
};

export const updateGerbang = async (params: any) => {
  try {
    const response = await axios.put(`${API_URL}/gerbangs`, params);
    return response.data;
  } catch (e) {}
};

export const deleteGerbang = async (params: { id: number; IdCabang: number }) => {
  try {
    const response = await axios.delete(`${API_URL}/gerbangs`, { data: params });
    return response.data;
  } catch (e) {}
};
