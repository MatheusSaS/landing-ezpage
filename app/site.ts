export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ezpage - Seu infoproduto mais vísivel no Digital",
  description: "Potencialize o desempenho das suas vendas com nossas Landing Pages exclusivas",
  ogImage: "http://landing.ezpage.app/twitter-cards/ezpage.png",
  author: "Ezpage",
  email: "gabriel88sa@hotmail.com",
  siteUrl: "http://landing.ezpage.app",
  creator: "@ezpagebr",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "http://landing.ezpage.app",
    siteName: "Ezpage",
    description: "Potencialize o desempenho das suas vendas com nossas Landing Pages exclusivas",
    images: [
      {
        url: "http://landing.ezpage.app/twitter-cards/ezpage.png",
        width: 1200,
        height: 630,
        alt: "Ezpage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezpage - Seu infoproduto mais vísivel no Digital",
    description: "Potencialize o desempenho das suas vendas com nossas Landing Pages exclusivas",
    image: "http://landing.ezpage.app/twitter-cards/ezpage.png",
    creator: "@ezpagebr",
  },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
};