export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#" className="font-display text-lg font-semibold text-white">
            T. Riso Consulting
          </a>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} T. Riso Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
