import { useState } from 'react'

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-400 font-medium text-sm uppercase tracking-widest mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Let's start a conversation
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Ready to elevate your firm's marketing? Get in touch to discuss your next pursuit.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Expandable Contact Form */}
          {!isFormOpen ? (
            <button
              onClick={() => setIsFormOpen(true)}
              className="group flex items-center gap-4 bg-primary-500 hover:bg-primary-600 px-8 py-5 rounded-full transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white font-medium text-lg">Get in touch</span>
            </button>
          ) : (
            <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-display text-xl font-semibold">Send a message</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form
                action="https://formsubmit.co/d37664080c8ef2410db0062ca2bde052"
                method="POST"
                className="space-y-5"
              >
                {/* Formsubmit configuration */}
                <input type="hidden" name="_subject" value="New contact from T Riso Consulting website" />
                <input type="hidden" name="_next" value="https://trisoconsulting.com/#contact" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Honeypot field - Formsubmit's built-in spam protection */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-colors duration-300"
                >
                  Send message
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
