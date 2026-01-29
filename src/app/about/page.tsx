import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-16 lg:py-24 max-w-4xl">
        {/* Header */}
        <header className="mb-20">
          <h1
            className="text-2xl lg:text-3xl text-white tracking-tight mb-2"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}
          >
            General Intuition
          </h1>
        </header>

        {/* Main Content */}
        <main>
          <div className="mb-32">
            <p
              className="text-3xl lg:text-5xl leading-relaxed lg:leading-relaxed text-white mb-0"
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                lineHeight: '1.4'
              }}
            >
              Born in video games, we believe that truly intelligent machines must move from words to worlds, and acquire the capacity to perceive, anticipate, and improvise. They need to obtain a general intuition of reality.
            </p>
          </div>

          {/* Contact/Links Section */}
          <div className="border-t border-[#4D4D4D] pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2
                  className="text-sm uppercase tracking-wider text-gray-500 mb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Website
                </h2>
                <a
                  href="https://generalintuition.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-[#F2D8CD] transition-colors duration-500"
                  style={{
                    fontFamily: 'Georgia, serif',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  generalintuition.ai
                </a>
              </div>

              <div>
                <h2
                  className="text-sm uppercase tracking-wider text-gray-500 mb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Connect
                </h2>
                <div>
                  <a
                    href="https://x.com/gen_intuition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white hover:text-[#F2D8CD] transition-colors duration-500"
                    style={{
                      fontFamily: 'Georgia, serif',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
