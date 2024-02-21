import './css/style.css'

import { Inter } from 'next/font/google'
import {Metadata} from "next";
import {siteConfig} from "./site";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Landing Page",
    "Infoprodutos",
    "InfoProdutos",
    "Info Produtos",
    "Venda de infoprodutos",
    "Markting digital",
    "Criação de criativos",
    "Landingpage",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "Ezpage",
      url: "https://ezpage.app",
    },
  ],
  creator: "expage",
  viewport:
    "viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-inter antialiased bg-gray-950 text-slate-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
