// "use client";
import { MenuIcon, Settings, SidebarClose, SidebarCloseIcon, User } from "lucide-react";
import React, { useState } from "react";
import Setting from "./Setting";
import { Button } from "../shadcn/button";
interface HeaderProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}
export default function Header({ sidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-16 bg-white border-b px-4">
      <button
        className="p-2 rounded-md hover:bg-gray-100"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <div className="cursor-pointer">
            <SidebarCloseIcon size={20} />
          </div>
        ) : (
          <div className="cursor-pointer">
            <MenuIcon size={20} />
          </div>
        )}
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <Button className="p-2 rounded-full border-0" variant={"outline"}>
          <User size={20} />
        </Button>

        <Setting />
      </div>
    </header>
  );
}
