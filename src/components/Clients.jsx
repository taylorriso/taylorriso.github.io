import { useState, useEffect, useCallback } from 'react'

const clients = [
  { name: 'Procore', logo: '/images/clients/procore.png' },
  { name: 'Lease Crutcher Lewis', logo: '/images/clients/lewis.svg' },
  { name: 'SERA Architects', logo: '/images/clients/sera.svg' },
  { name: 'PAE Engineers', logo: '/images/clients/pae.png' },
  { name: 'ONYX Design and Consulting', logo: '/images/clients/onyx.png' },
  { name: 'Hydro Temp', logo: '/images/clients/hyrdo-temp.png' },
  { name: 'DiLandro Andrews Engineering', logo: '/images/clients/dilandro-andrews.png', className: 'max-h-20' },
  { name: 'Bonton Associates', logo: '/images/clients/Bonton Associates-Logo-Full Color.png' },
  { name: 'OpenScope Studio', logo: '/images/clients/openscope.png' },
]

const SLOT_COUNT = 5
const SWAP_INTERVAL = 1400
const FADE_MS = 350

function getInitialSlots() {
  return clients.slice(0, SLOT_COUNT).map((c, i) => ({ ...c, id: i }))
}

function getRandomAvailable(currentSlots) {
  const currentNames = new Set(currentSlots.map((s) => s.name))
  const available = clients.filter((c) => !currentNames.has(c.name))
  if (available.length === 0) return clients[Math.floor(Math.random() * clients.length)]
  return available[Math.floor(Math.random() * available.length)]
}

export default function Clients() {
  const [slots, setSlots] = useState(getInitialSlots)
  const [fadingOut, setFadingOut] = useState(null)
  const [idCounter, setIdCounter] = useState(SLOT_COUNT)

  const swapOne = useCallback(() => {
    const slotIndex = Math.floor(Math.random() * SLOT_COUNT)
    setFadingOut(slotIndex)

    setTimeout(() => {
      setSlots((prev) => {
        const next = [...prev]
        const replacement = getRandomAvailable(prev)
        setIdCounter((c) => c + 1)
        next[slotIndex] = { ...replacement, id: idCounter }
        return next
      })
      setFadingOut(null)
    }, FADE_MS)
  }, [idCounter])

  useEffect(() => {
    const timer = setInterval(swapOne, SWAP_INTERVAL)
    return () => clearInterval(timer)
  }, [swapOne])

  return (
    <section id="clients" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-500 font-medium text-sm uppercase tracking-widest mb-4">
            Clients
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            We partner with forward-thinking firms in architecture, engineering, and construction.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 max-w-5xl mx-auto">
          {slots.map((client, index) => (
            <div
              key={client.id}
              className="flex-1 aspect-[3/2] flex items-center justify-center p-6 bg-gray-50 rounded-2xl"
              style={{
                transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
                opacity: fadingOut === index ? 0 : 1,
                transform: fadingOut === index ? 'scale(0.7)' : 'scale(1)',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.className || 'max-h-12'} max-w-full object-contain opacity-50`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
