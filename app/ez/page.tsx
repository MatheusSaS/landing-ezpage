import Image from "next/image";
import LogoImg from "@/public/images/ezpageIcon.svg";
import FeaturesEz from "@/components/features-ez";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "EZ - A metodogia escolhida pelos grandes do mercado digital",
  description: "Desbloqueie seu Potencial de Vendas",
};

export default function Ez() {
  return (
    <div id="content">
      <section className="relative bg-gray-950 text-white overflow-hidden mb-10">
        <div className="absolute inset-0">
          <Image
            priority
            className="mx-auto h-full lg:w-1/2 object-cover brightness-50"
            alt="Ezpage"
            width={450}
            height={940}
            src="/gifpage.gif"
          />
        </div>
        <nav className="relative border-b border-gray-500">
          <div className="flex items-center lg:px-8">
            <div className="h-full border-r border-gray-500 bg-gray-950">
              <button className="p-2 navbar-burger">
                <Image
                  src={LogoImg}
                  width={60}
                  height={60}
                  priority
                  alt="Ezpage"
                />
              </button>
            </div>
            <div className="ml-8">
              <a
                className="text-2xl text-white font-bold"
                href="#"
                data-config-id="brand"
              ></a>
            </div>
            <div className="hidden lg:block ml-auto">
              <a
                className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full"
                target="_blank"
                            href="https://wa.me//5517997123536?text=Quero%20uma%20Landingpage%20de%20alta%20conversão%20para%20o%20meu%20infoproduto"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </nav>
        <div className="relative container px-4 pt-24 md:pt-40 pb-32 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-12 md:mb-24">
            <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
              <div className=" mb-12 lg:mb-16">
                <span
                  className="text-lg font-bold text-white"
                  data-config-id="label"
                >
                  Desbloqueie seu Potencial de Vendas
                </span>
                <h1
                  className="mt-5 mb-5 text-6xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60"
                  data-config-id="header"
                >
                  Metodologia EZ a escolha dos grandes do mercado digital
                </h1>
              </div>

              <div
                className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="relative">
                  <div className="absolute -inset-5">
                    <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-white via-white to-white"></div>
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me//5517997123536?text=Quero%20uma%20Landingpage%20de%20alta%20conversão%20para%20o%20meu%20infoproduto"
                    title=""
                    className="relative z-10 btn text-center text-gray-950 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group font-semibold p-4 text-lg"
                    role="button"
                  >
                    Quero uma EZpage para vender mais
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-2/3 px-4">
              <div className="flex justify-end">
                <button className="inline-flex items-center justify-center w-28 h-28 text-white rounded-full border border-gray-100 hover:border-white">
                  <svg
                    className="h-6 w-6"
                    width="19"
                    height="34"
                    viewBox="0 0 19 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-5"
                  >
                    <path
                      d="M9.35111 33.2228L0.834172 24.7059L1.89879 23.6413L9.13287 30.8753L9.12754 0.751973L10.6287 0.751974L10.634 30.8753L17.3357 24.1736L18.4004 25.2382L10.4157 33.2228C10.1217 33.5168 9.64512 33.5168 9.35111 33.2228Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <p className="hidden lg:block text-gray-200 transform rotate-90">
                  Scroll para mais
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto -mb-12 flex flex-wrap items-center justify-center"></div>
        </div>
      </section>
      <section className="relative pt-20 2xl:py-20 bg-gray-950 overflow-hidden">
        <div className="absolute bottom-0 inset-x-0 h-full"></div>
        <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div>
        <div className="relative container px-3 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="text-lg text-start font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-200 to-green-600"
              data-config-id="label"
            >
              Todos os segredos revelados
            </span>
            <h2
              className="my-10 text-5xl text-start lg:text-6xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60"
              data-config-id="header"
            >
              A metodologia utilizada por nomes como Thiago Finch, Ruyter, Tiago Tessmann, agora disponivel para você
            </h2>
            <div className="max-w-md mx-auto">
              <p className="mb-20 text-start text-lg text-gray-200" data-config-id="desc">
              A metodologia EZ foi o segredo para esses ícones. Não perca a chance. Adote a EZpage e destaque-se no mercado digital 
              </p>
              <a
                className="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-green-500 hover:bg-green-600 rounded-full transition duration-200"
                href="#"
                data-config-id="primary-action"
              >
                Quero vender mais!
              </a>
            </div>
          </div>
        </div>
      </section>
      <FeaturesEz />
      <Footer />
    </div>
  );
}
