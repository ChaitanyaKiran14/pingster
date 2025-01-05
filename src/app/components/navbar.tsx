"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { cn } from "../lib/utils";
import { SignInButton } from "@clerk/nextjs";

export function NavbarDemo() {
  return (
    <div className="relative w-full mt-36 flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );

  function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
      <div className={cn("fixed pt-9 inset-x-0 max-w-3xl mx-auto z-50", className)}>
        <nav className="relative w-full flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl py-4 px-8 flex items-center space-x-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Instagram className="w-7 h-7 text-pink-500" />
              <span className="text-lg font-semibold text-gray-100">Pingster</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <Link
                href="#home"
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="#use-cases"
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Use Cases
              </Link>
              <Link
                href="#features"
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#team"
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Team
              </Link>
            </div>

            {/* GitHub Button */}
           
            
            <Link
              href="#github"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-xl text-base font-medium text-gray-200 hover:bg-gray-700/50 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>


            <SignInButton mode="modal"/>
          </div>
        </nav>
      </div>
    );
  }
}
