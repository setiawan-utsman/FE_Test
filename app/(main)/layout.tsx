'use client'
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Toaster } from '@/components/shadcn/toaster';
import { LaporanLalinProvider } from '@/context/LaporanLalinContext';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from 'react'

const queryClient = new QueryClient();

interface Props {
    children: React.ReactNode
}
export default function MainLayout({children}: Props) {
const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className={`${sidebarOpen ? "block" : "hidden"} lg:block`}>
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>
      <div className="flex flex-1 flex-col">
        <Header
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="h-full w-full relative">
            <LaporanLalinProvider>{children}</LaporanLalinProvider>
            {/* <Toaster /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
