'use client'
import { MENUS } from '@/public/assets/data/menu';
import Link from 'next/link';
import React, { useState } from 'react'
import PrefetchLink from '../ui/prefetch-link';
// import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { div } from 'motion/react-client';
import { usePathname } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../shadcn/accordion';
interface Props {
  sidebarOpen: boolean
}
export default function Sidebar({ sidebarOpen }: Props) {
   const pathname = usePathname();
   const isActive = (path: string) => pathname.startsWith(path);
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-0"
      } bg-white border-r transition-all duration-300 overflow-hidden h-full`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b">
          <span className="text-lg font-bold">Logo</span>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-1">
          {MENUS.map((menu) =>
            !menu.children ? (
              <Link
                key={menu.id}
                href={menu.path}
                className={`block rounded px-3 py-2 cursor-pointer transition-colors ${
                  isActive(menu.path)
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {menu.name}
              </Link>
            ) : (
              <Accordion
                key={menu.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={`menu-${menu.id}`}>
                  <AccordionTrigger
                    className={`px-3 py-2 text-left rounded transition-colors text-base ${
                      isActive(menu.path)
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {menu.name}
                  </AccordionTrigger>
                  <AccordionContent className="ml-3 space-y-1 pb-0 text-base">
                    {menu.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.path}
                        className={`block rounded px-3 py-1 cursor-pointer transition-colors ${
                          isActive(child.path)
                            ? "bg-blue-400 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
