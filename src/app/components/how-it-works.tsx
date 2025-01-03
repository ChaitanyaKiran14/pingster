import { Instagram } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our AI Engine Analyzes Your Instagram Performance And Suggests
            <br />
            The Best Times For Maximum Engagement
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line with glow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[15%] h-[70%] w-[1px]">
            <div className="h-full w-full bg-pink-500/20" />
            <div className="absolute inset-0 w-full h-full bg-pink-500/20 blur-sm" />
          </div>
          
          {/* Logo Card */}
          <div className="relative z-10 flex justify-center mb-16">
            <div className="bg-black/80 backdrop-blur-sm px-12 py-6 rounded-[32px] shadow-lg" style={{
              boxShadow: '0 0 40px rgba(219, 39, 119, 0.1)'
            }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-medium">
                  <span className="instagram-text-gradient">Insta</span>
                  <span className="text-white">-automate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add Post Card */}
          <div className="relative z-10 flex justify-center mb-16">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-12 h-12 instagram-gradient rounded-full flex items-center justify-center text-white text-2xl">
                    +
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-pink-500 blur-xl opacity-50" />
                </div>
              </div>
              
              <div className="bg-black/80 rounded-[32px] p-8 min-w-[400px]" style={{
                boxShadow: '0 0 40px rgba(219, 39, 119, 0.1)'
              }}>
                <div className="bg-pink-500/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20" />
                    <div className="h-2 w-24 bg-pink-500/20 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-pink-500/20 rounded-full" />
                    <div className="h-2 w-3/4 bg-pink-500/20 rounded-full" />
                    <div className="h-2 w-1/2 bg-pink-500/20 rounded-full" />
                  </div>
                </div>
                <p className="text-gray-400 text-center mt-4">Create Instagram Post</p>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="relative z-10 flex justify-center mb-16">
            <div className="bg-black/80 rounded-[40px] p-10 max-w-2xl backdrop-blur-sm" style={{
              boxShadow: '0 0 40px rgba(219, 39, 119, 0.1)'
            }}>
              <p className="text-center text-2xl leading-relaxed mb-8">
                <span className="text-white">Insta-automate Will </span>
                <span className="instagram-text-gradient">Automatically Schedule</span>
                <br />
                <span className="text-white">Your Posts For Maximum Engagement</span>
                <br />
                <span className="text-white">Using </span>
                <span className="instagram-text-gradient">AI-Powered Analytics</span>
              </p>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full opacity-20 blur-sm transition-opacity group-hover:opacity-30 bg-gradient-to-r from-pink-500 to-purple-500" />
                  <div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="relative z-10 flex justify-center">
            <div className="bg-black/80 rounded-[32px] p-8 min-w-[500px] backdrop-blur-sm" style={{
              boxShadow: '0 0 40px rgba(219, 39, 119, 0.1)'
            }}>
              <div className="flex items-center justify-between mb-6">
                <div className="text-white">Post Schedule</div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>Weekly</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="bg-pink-500/10 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-pink-500/20" />
                      <div className="h-2 w-20 bg-pink-500/20 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-pink-500/20 rounded-full" />
                      <div className="h-2 w-3/4 bg-pink-500/20 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                View And Adjust Your Instagram Schedule With Real-Time Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

