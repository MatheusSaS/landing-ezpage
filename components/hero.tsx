import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/glow-bottom.svg";

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-40 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60 pb-4"
              data-aos="fade-down"
            >
              Não perca mais vendas! Uma Landing Page otimizada é o segredo para conquistar mais clientes e aumentar seus lucros
            </h1>
            <p
              className="text-lg text-white mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Potencialize o desempenho das suas vendas com nossas Landing Pages exclusivas, e estratégias meticulosamente projetadas para impulsionar o seu produto digital!
            </p>
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
                  href="#"
                  title=""
                  className="relative z-10 btn text-gray-950 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group font-semibold p-4 text-lg"
                  role="button"
                >
                  Quero uma landing page de alta conversão
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
