import React from 'react'
interface Props {
    children: React.ReactNode
}
export default function AuthLayout({children}: Props) {
  return <div className="relative min-h-screen">
    {children}
    </div>;
}
