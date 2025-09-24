'use client'
import React from 'react'
// import { DropdownMenu } from '../shadcn/dropdown-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";
import { LogOutIcon, Settings } from 'lucide-react';
import { Button } from '../shadcn/button';
import { logout } from '@/lib/axios';
// import { logout } from '@/services/authService';
// import { LogOut } from '@/services/authService';
// import { LogOut } from '../auth/auth';

export default function Setting() {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2 rounded-full" size={"icon"}>
          <Settings size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="right" sideOffset={20}>
        <DropdownMenuLabel>Super Admin</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div
            className="text-red-500 flex items-center gap-2"
            onClick={logout}
          >
            <LogOutIcon size={20} />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
