'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from '../shadcn/toaster';

const queryClient = new QueryClient();
interface Props {
    children: React.ReactNode
}
export default function Layout({children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">{children}</div>
      {/* <Toaster /> */}
    </QueryClientProvider>
  );
}
