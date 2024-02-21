export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          {/* Radial gradient */}
          <div
            className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-green-500 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-green-400 rounded-full blur-[40px]" />
          </div>
          {/* Blurred shape */}
          <div
            className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs5-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#1ed891" />
                  <stop offset="100%" stopColor="#1ed891" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#bs5-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-4">
              Não perca mais tempo
            </h2>
            <p className="text-lg text-slate-400 mb-8">
            Pronto para impulsionar seu sucesso online? Clique no botão abaixo para agendar sua cotação exclusiva de landing pages otimizadas para altas conversões. Descubra como nossas estratégias de Copywriting, Conteúdo Estratégico, Tráfego Pago e Marketing Digital podem transformar sua presença na web e alavancar seus resultados!
            </p>
            <div>
              <a
                className="relative z-10 btn text-gray-950 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white  transition duration-150 ease-in-out group font-semibold p-4 text-lg"
                href="#0"
              >
                Realizar cotação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
