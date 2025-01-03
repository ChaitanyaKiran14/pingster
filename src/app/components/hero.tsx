//import { Button } from '@/components/ui/button'
"use client";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Image from 'next/image'
import { Instagram } from 'lucide-react'

const words = [
  {
    text: "Slide",
  },
  {
    text: "into",
  },
   {
      text: "Instagram",
      className: "text-pink-500 dark:text-pink-500",
    },

  
  {
    text: "DMs",
  },
  {
    text: "Automatically!",
  },
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl" />
      <TypewriterEffectSmooth words={words} />

      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
      Let your followers comment, and we’ll handle the rest—free guides, plans, or whatever you’re serving, delivered instantly!
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        Start for free
      </HoverBorderGradient>
       
      </div>
      
      
      <div className="mt-16 w-full max-w-6xl mx-auto">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-border-flow">
          <div className="absolute inset-0 blur-xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 animate-border-flow" />
          <div className="relative bg-black rounded-2xl overflow-hidden">
            <Image
              src="/homeee.png"
              alt="Dashboard Preview"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}

