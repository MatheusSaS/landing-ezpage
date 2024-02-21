export default function Features04() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blurred shape */}
        <div
          className="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient
                id="bs4-a"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1ed891" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bs4-a)"
              fillRule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-4">
              Nossa missão
            </h2>
            <p className="text-lg text-white">
              Descubra como impulsionamos sua empresa para prosperar,
              destacando-se na captação e venda de infoprodutos. Com nossa
              expertise em mãos, você alcançará novos horizontes de sucesso,
              capturando a atenção do seu público-alvo e convertendo-os em
              clientes fiéis. Prepare-se para uma jornada de crescimento
              exponencial, onde sua marca se tornará uma referência
              incontestável no mercado digital
            </p>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {/* Row */}
            <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-6">
                  Landing Page
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <p className="text-sm text-white">
                  Capture a atenção instantânea do seu público-alvo com uma landing page irresistível, o primeiro passo para converter visitantes em compradores entusiastas
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <p className="text-sm text-white">
                  Destaque-se na multidão digital com uma landing page estratégica, projetada para transmitir valor, credibilidade e confiança aos seus potenciais clientes.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <p className="text-sm text-white">
                  Transforme cliques em vendas com uma landing page otimizada, onde cada elemento é meticulosamente planejado para guiar os visitantes em uma jornada de compra eficaz e envolvente.
                  </p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-6">
                Copywriting e Conteúdo Estratégico
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <p className="text-sm text-white">
                  Domine a arte da persuasão online com copywriting estratégico, onde cada palavra é cuidadosamente escolhida para conquistar e converter seu público-alvo em clientes fiéis.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  
                  <p className="text-sm text-white">
                  Catapulte sua marca para o sucesso com conteúdo estratégico que não apenas informa, mas também encanta e motiva sua audiência a agir, gerando conexões emocionais e impulsionando vendas.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  
                  <p className="text-sm text-white">
                  Desbloqueie o potencial do seu negócio com copywriting e conteúdo estratégico, criando uma narrativa envolvente que ressoa com os desejos e necessidades do seu mercado-alvo, destacando-se em meio à concorrência.
                  </p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-6">
                  Tráfego pago e Marketing digital
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  
                  <p className="text-sm text-white">
                  Acelere o crescimento do seu negócio com tráfego pago, uma estratégia inteligente que direciona visitantes altamente qualificados para suas ofertas, maximizando o retorno sobre o investimento.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  
                  <p className="text-sm text-white">
                  Alavanque sua presença online com marketing digital eficaz, onde o tráfego pago desempenha um papel crucial na ampliação do alcance da sua marca, aumentando a visibilidade e impulsionando as vendas.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  
                  <p className="text-sm text-white">
                  Não deixe seu negócio ficar despercebido na vastidão da internet. Utilize o tráfego pago como uma poderosa ferramenta de marketing digital para segmentar seu público-alvo com precisão, gerando resultados tangíveis e crescendo de forma exponencial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
