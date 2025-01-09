"use client";
import React, { useState } from "react";
import {Sidebar, SidebarBody,SidebarLink } from "./global/sidebar";
import {
  
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconAutomaticGearboxFilled,
  IconBlendMode
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Automations",
      href: "#",
      icon: (
        <IconAutomaticGearboxFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
        label: "Integrations",
        href: "#",
        icon: (
          <IconBlendMode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },



    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 hover:text-pink-500">
              {links.map((link, idx) => (
                <SidebarLink  key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Chaitu Stark",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Pingster
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
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
