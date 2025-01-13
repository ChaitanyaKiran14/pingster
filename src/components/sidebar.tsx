"use client";
import React, { useState } from "react";
import { useUser } from '@clerk/clerk-react';
import { Sidebar, SidebarBody, SidebarLink } from "./global/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconAutomaticGearboxFilled,
  IconBlendMode
} from "@tabler/icons-react";
import { User } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { v4 as uuid } from 'uuid';
import { usePaths } from "@/hooks/user-nav";

type SidebarDemoProps = {
  swag: string;
  page: string;
};

export function SidebarDemo({ swag, page }: SidebarDemoProps) {
  const links = [
    {
      label: "Dashboard",
      id: uuid(),
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Automations",
      href: "#",
      id: uuid(),
      icon: (
        <IconAutomaticGearboxFilled className="h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Integrations",
      href: "#",
      id: uuid(),
      icon: (
        <IconBlendMode className="h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      id: uuid(),
      icon: (
        <IconSettings className="h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      id: uuid(),
      icon: (
        <IconArrowLeft className="h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const { user } = useUser();

  const UserProfile = () => (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm">
        <UserButton>
          <UserButton.UserProfileLink 
            label="Dashboard"
            url="/dashboard"
            labelIcon={<User size={16} />}
          />
        </UserButton>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className="text-sm font-medium text-white">
              {user?.firstName && user?.lastName 
                ? `${user.firstName} ${user.lastName}`
                : user?.username 
                  ? user.username
                  : user?.emailAddresses[0]?.emailAddress?.split('@')[0] 
                    || 'User'}
            </span>
            <span className="text-xs text-neutral-400">View Profile</span>
          </motion.div>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-screen flex">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-r border-neutral-800 justify-between gap-10 py-6">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4">
            <div className="flex items-center gap-2 px-2">
              {open ? <Logo /> : <LogoIcon />}
            </div>
            <nav className="mt-8 flex flex-col gap-2">
              {links.map((link) => {
                const isActive =
                  page === link.label || (page === swag && link.label === 'home');

                return (
                  <Link
                    key={link.id}
                    href={`/dashboard/${swag}/${link.label === 'home' ? '/' : link.label}`}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-150',
                      'hover:bg-neutral-800/50 hover:backdrop-blur-sm group/sidebar',
                      isActive ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white' : 'text-neutral-400'
                    )}
                  >
                    <div className={cn(
                      'transition-colors duration-150',
                      isActive ? 'text-white' : 'text-neutral-400 group-hover/sidebar:text-white'
                    )}>
                      {link.icon}
                    </div>
                    {open && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={cn(
                          'text-sm font-medium transition-transform duration-150 group-hover/sidebar:translate-x-1',
                          isActive ? 'text-white' : 'text-neutral-400 group-hover/sidebar:text-white'
                        )}
                      >
                        {link.label}
                      </motion.span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
          <UserProfile />
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link href="#" className="flex items-center gap-3 mr-4">
      <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
        <span className="font-bold text-white">P</span>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-semibold text-white"
      >
        Pingster
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link href="#" className="block mr-4">
      <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
        <span className="font-bold text-white">P</span>
      </div>
    </Link>
  );
};

const Dashboard = () => {
    return (
        <div className="flex-1 relative bg-black p-8">
         
          <div
            className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl"
          />
          <div
            className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"
          />
          <div className="relative text-white">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="mb-4">
              Welcome to your dashboard. Here you can view and manage all your data.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-lg text-center">
                <h3 className="text-lg font-bold">Card 1</h3>
                <p>Details about Card 1</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-lg text-center">
                <h3 className="text-lg font-bold">Card 2</h3>
                <p>Details about Card 2</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-lg text-center">
                <h3 className="text-lg font-bold">Card 3</h3>
                <p>Details about Card 3</p>
              </div>
            </div>
          </div>
        </div>
      );
};
