import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import Copywriting from "@/public/images/copywriting.svg";
import TraficMenagment from "@/public/images/traficmenagment.svg";
import PlanningMeetings from "@/public/images/planning-meetings.svg";
import SvgHappy from "@/public/images/svgHappy.svg";

export default function Features02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-4">
              Seu infoproduto mais vísivel no Digital
            </h2>
            <p className="text-lg text-slate-400">
              Estagnado com seu infoproduto sem gerar vendas? Deixe-nos ser seus
              aliados na transformação da sua presença online e na conquista de
              destaque em meio à concorrência acirrada. Com nossas Landing Pages
              feitas sob medida, você está prestes a embarcar em uma jornada
              acelerada em direção ao sucesso digital. Chegou a hora de decolar
            </p>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
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
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gray-950 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#A0E1C8" />
                              <stop
                                offset="100%"
                                stopColor="#A0E1C8"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-green-500 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-green-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-1">
                              Elevamos a visibilidade de seu infoproduto ao
                              patamar que ela merece!
                            </h3>
                            <p className="text-slate-400">
                              Somos especializados em criar Landing Pages
                              personalizadas para maximizar suas conversões,
                              seja em vendas ou geração de leads, fortalecendo
                              sua presença online e impulsionando seus
                              resultados.
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                            target="_blank"
                            href="https://wa.me//5517997123536?text=Quero%20uma%20Landingpage%20de%20alta%20conversão%20para%20o%20meu%20infoproduto"
                          >
                            <span className="relative inline-flex items-center">
                              Quero uma landing page de alta conversão
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0"
                          src={SvgHappy}
                          width="504"
                          height="400"
                          alt="Feature 01"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gray-950 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-1">
                            Copywriting e Conteúdo Estratégico
                          </h3>
                          <p className="text-slate-400">
                            A sua empresa está perdendo oportunidades por não
                            usar as palavras certas, e a EZPAGE tem um time de
                            especialistas para ajudar você com isso. Porque toda
                            marca precisa de um conteúdo que VENDE.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={Copywriting}
                          width={536}
                          height={230}
                          alt="Feature 02"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gray-950 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-1">
                            Gestão de Tráfego
                          </h3>
                          <p className="text-slate-400">
                            Desbloqueie o verdadeiro poder da venda de
                            infoprodutos com a Gestão de Tráfego: o segredo por
                            trás do sucesso digital. Transforme visitantes em
                            clientes fiéis enquanto eleva sua marca ao topo da
                            lista de desejos online. Domine a arte da conversão
                            e alcance novos patamares de lucratividade com nossa
                            abordagem estratégica em gestão de tráfego
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={TraficMenagment}
                          width={230}
                          height={20}
                          alt="Feature 03"
                          style={{ width: "97%", height: "97%" }}
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #4 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gray-950 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#A0E1C8" />
                              <stop
                                offset="100%"
                                stopColor="#A0E1C8"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-green-500 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-green-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-1">
                              Criativos, Curadoria e Reuniões de Planejamento
                            </h3>
                            <p className="text-slate-400">
                              Desvende o potencial oculto dos seus infoprodutos
                              com uma sinergia imbatível de criatividade,
                              curadoria e reuniões de planejamento estratégicas.
                              Aqui, cada detalhe é meticulosamente moldado para
                              cativar seu público-alvo, transformando meros
                              interessados em ávidos compradores. Descubra como
                              nossa abordagem refinada pode impulsionar suas
                              vendas e elevar sua marca a um novo patamar de
                              sucesso digital
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                            target="_blank"
                            href="https://wa.me//5517997123536?text=Quero%20uma%20Landingpage%20de%20alta%20conversão%20para%20o%20meu%20infoproduto"
                          >
                            <span className="relative inline-flex items-center">
                              Quero saber mais
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0"
                          src={PlanningMeetings}
                          width="504"
                          height="400"
                          alt="Feature 01"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
