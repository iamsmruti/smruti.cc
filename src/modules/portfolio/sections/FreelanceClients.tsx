import SecurePasswordsLogo from "../../../assets/securepasswords.png"
import BottomStreetLogo from "../../../assets/bottomstreet.png"
import SerVLogo from "../../../assets/serv.png"
import { useSectionTimer } from '../../../hooks/useSectionTimer'

const clients = [
  { name: "Secure Passwords", logo: SecurePasswordsLogo },
  { name: "Bottom Street", logo: BottomStreetLogo },
  { name: "SerV", logo: SerVLogo },
]

const FreelanceClients = () => {
  const ref = useSectionTimer("freelance-clients")

  return (
    <div ref={ref as any} className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3">
          <span className="font-extralight text-gray-400">Freelance </span>
          <span className="font-light">Clients</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">Companies I've worked with on the side.</p>

        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-6 flex flex-col items-center card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface-2 border border-surface-border flex items-center justify-center mb-4 overflow-hidden group-hover:border-white/10 transition-colors">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <span className="text-gray-400 font-light text-sm text-center">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FreelanceClients