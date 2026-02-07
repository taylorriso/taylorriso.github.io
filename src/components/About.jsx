export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/images/taylor-headshot.jpg"
                alt="Taylor Riso - Principal of T. Riso Consulting"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
              <div className="text-4xl font-display font-semibold text-primary-500 mb-1">10+</div>
              <div className="text-sm text-gray-500">Years in AEC marketing</div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-200 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary-500 font-medium text-sm uppercase tracking-widest mb-4">
              About
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Your partner in
              <br />
              <span className="text-primary-500">winning pursuits</span>
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                T. Riso Consulting specializes in strategic marketing support for
                professionals in the construction, architecture, and engineering
                sectors.
              </p>
              <p>
                With deep industry knowledge and a passion for helping firms succeed,
                we bring expertise in large group projects, proposal work, and project
                management. Whether you need help with a single pursuit or ongoing
                marketing support, we tailor our approach to your firm's unique needs.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8 items-stretch">
              <div className="bg-white rounded-2xl shadow-xl p-6 h-[140px] mt-8 flex flex-col justify-center items-center text-center">
                <div className="text-4xl font-display font-semibold text-primary-500 mb-1">100+</div>
                <div className="text-sm text-gray-500">Proposals delivered</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 h-[140px] mt-8 flex flex-col justify-center items-center text-center">
                <div className="font-display font-semibold text-primary-500 mb-1"><span className="text-xl">up to</span> <span className="text-3xl">$1 billion</span></div>
                <div className="text-sm text-gray-500">Contract value (per pursuit)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
