const clients = [
  { name: 'Procore', logo: '/images/clients/procore.png' },
  { name: 'Lease Crutcher Lewis', logo: '/images/clients/lewis.svg' },
  { name: 'SERA Architects', logo: '/images/clients/sera.svg' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
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

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group aspect-[3/2] flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain opacity-50 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
