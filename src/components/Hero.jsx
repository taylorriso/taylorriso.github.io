export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-600/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm text-gray-400 tracking-wide">Marketing for AEC Professionals</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight">
            Strategic positioning
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
              that wins work
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Pursuit strategy, proposal development, and brand positioning
            for architecture, engineering, and construction firms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Start a conversation
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-gray-300 font-medium rounded-full border border-gray-700 hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </a>
      </div>
    </section>
  )
}
