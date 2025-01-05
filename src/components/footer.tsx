import Link from 'next/link'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-900/50 to-pink-600/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-200 300C-100 250 0 400 100 350C200 300 300 450 400 400C500 350 600 500 700 450C800 400 900 550 1000 500C1100 450 1200 600 1300 550C1400 500 1500 650 1600 600" 
                stroke="url(#gradient)" strokeWidth="200" strokeLinecap="round"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DB2777" />
              <stop offset="100%" stopColor="#C026D3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Instagram className="w-8 h-8 text-pink-500" />
              <div className="text-2xl font-semibold">
                <span className="instagram-text-gradient">Insta</span>
                <span className="text-white">-automate</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Insta-automate helps you schedule, analyze, and automate Instagram content, saving you time and growing your following with AI-powered insights.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Features</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Integrations</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Enterprise</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Guides</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Webinars</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Partners</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Cookie Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 Insta-automate Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

