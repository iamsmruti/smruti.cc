const products = [
  {
    name: "Devian Desktop",
    status: "Launched",
    statusColor: "#10B981",
    description: "A desktop application crafted to enhance developer workflows. Designed and shipped as the first product under the Devian Labs umbrella.",
    features: ["Desktop App", "Developer Tools", "Productivity"],
    emoji: "🖥️",
  },
  {
    name: "Khao",
    status: "In Progress",
    statusColor: "#F59E0B",
    description: "A mobile application currently in active development. Solving a real-world problem — more details coming soon as we approach launch.",
    features: ["Mobile App", "Active Development", "Coming Soon"],
    emoji: "📱",
  },
]

const DevianLabs = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        {/* Company */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] bg-[#10B981] opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-5xl mb-6 block">🏢</span>
            <h2 className="text-3xl md:text-4xl font-light mb-3">
              <span className="text-[#10B981]">Devian</span> Labs
            </h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-2xl mb-6">
              A company born out of the passion to build software that people actually need. We focus on developer tools and consumer products — solving problems that we've personally felt.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs px-3 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                Founded by Smruti Ranjan
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-surface-3 text-gray-400 border border-surface-border">
                2 Products
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-surface-3 text-gray-400 border border-surface-border">
                Developer-First
              </span>
            </div>
          </div>
        </div>

        {/* Products */}
        <p className="sm:text-4xl text-2xl mb-3">
          <span className="font-extralight text-gray-400">Our </span>
          <span className="font-light">Products</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          What we've shipped and what we're building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="group glass rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: product.statusColor }} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{product.emoji}</span>
                  <span
                    className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{
                      color: product.statusColor,
                      borderColor: `${product.statusColor}33`,
                      backgroundColor: `${product.statusColor}15`,
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-medium mb-3 text-white">{product.name}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-5">{product.description}</p>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-surface-3 text-gray-500 border border-surface-border">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-light italic max-w-xl mx-auto">
            "The best products are built by people who are solving their own problems. That's the Devian Labs way."
          </p>
        </div>
      </div>
    </div>
  )
}

export default DevianLabs
