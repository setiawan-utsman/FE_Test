'use client'
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { loginService } from "@/services/authService";
import { toast } from "sonner";
import { Label } from "../shadcn/label";
import { Input } from "../shadcn/input";
import { cookies } from "next/headers";
import { setAuthToken } from "./auth";
import { useRouter } from "next/navigation";
import { Button } from "../shadcn/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const shema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shema) });
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
 
 const mutation = useMutation({
   mutationFn: loginService,
   onSuccess: (data) => {
     setAuthToken(data.token);
     router.push("/dashboard");
   },
   onError: (error) => {
     console.error("Login gagal ❌", error);
     toast.error("Login gagal.", {
       duration: 3000,
       position: "top-center",
       style: { backgroundColor: "#f96161", color: "white" },
     });
   },
 });

  const onSubmit = async (formData: any) => {
    mutation.mutate(formData);
  };

  return (
    <form className="space-y-5">
      <div>
        <Label className="block text-sm font-medium text-gray-700">
          Username
        </Label>
        <Input
          type="text"
          {...register("username")}
          name="username"
          placeholder="Username"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.username && (
          <p className="text-red-500 text-base">{errors.username.message}</p>
        )}
      </div>

      <div className="relative">
        <Label className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          type={isShowPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmit(onSubmit)();
            }
          }}
        />
        {errors.password && (
          <p className="text-red-500 text-base">{errors.password.message}</p>
        )}
        <div
          className="absolute top-7 right-4 flex items-center"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          {isShowPassword ? <EyeIcon /> : <EyeOffIcon />}
        </div>
      </div>

      <Button
        type="button"
        onClick={handleSubmit(onSubmit)}
        disabled={mutation.isPending}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        {mutation.isPending ? "Loading..." : "Login"}
      </Button>
    </form>
  );
}
