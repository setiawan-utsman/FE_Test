"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";

const API_URL = "https://apitest.instingku.my.id/api";

export async function apiServer(path: string, options: any = {}) {
  const cookiesObj = await cookies();
  const token = cookiesObj.get("auth_token")?.value;
  // console.log(token);
  
  //   const refreshToken = cookiesObj.get("refresh_token")?.value;

  try {
    const res = await axios({
      url: path,
      method: options.method || "GET",
      data: options.data || {},
      headers: {
        ...(options.headers || {}),
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    
    // console.log(res);
    
    return res.data;
  } catch (error: any) {
    // if (error.response?.status === 401 && refreshToken) {
    //   // kalau expired, coba refresh manual
    //   await axios.post(
    //     `${API_URL}/auth/refresh`,
    //     {},
    //     { withCredentials: true }
    //   );
    //   // retry sekali
    //   return apiServer(path, options);
    // }
    throw error;
  }
}

export async function logout() {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();

  allCookies.forEach((cookie) => {
    cookieStore.delete(cookie.name);
  });

  // Arahkan pengguna ke halaman login
  redirect("/login");
}
