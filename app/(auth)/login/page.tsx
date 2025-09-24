import Login from '@/components/auth/Login';
import React from 'react'


export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Kiri: Form Login */}
      <div className="flex flex-1 items-center justify-center bg-white">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">App Logo</h2>
          </div>

          {/* Form */}
         <Login />
        </div>
      </div>

      {/* Kanan: Background / Illustration */}
      <div className="hidden flex-1 items-center justify-center bg-gray-100 lg:flex">
        <h2 className="text-2xl font-semibold text-gray-600">
          App Illustration / Background
        </h2>
      </div>
    </div>
  );
}
