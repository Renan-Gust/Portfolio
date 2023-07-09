import './globals.css';

import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';

const dm = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Renan Gustavo - Desenvolvedor full stack',
  description: 'Desenvolvimento de sites responsivos, modernos e de alta qualidade usando as melhores tecnologias do mercado.',
  robots: "index, follow",
  copyright: "© 2023 Renan Gustavo. Todos os direitos reservados.",
  keywords: "criação de sites personalizados, criação de sites profissionais, criação de sites, sites profissionais, sites responsivos, responsivo sites, sites com seo, seo de sites, desenvolvimento de web site, criar sites, criacao de websites, site barato, meu site, quero um site, agencia de sites, sites rio de janeiro, desenvolvimento de site rio de janeiro sites, criacao de site rio de janeiro, sites em rio de janeiro, desenvolvimento de site em rio de janeiro, desenvolvedor web, desenvolvedor web front-end, front-end web designer, programador, programador web, html, html5, css, css3, javascript, programador javascript, reactjs, programador reactjs, programador html, css e js, web standards, seo, acessibilidade, website, freela, freelancer, portfolio, sites com otimização para seo, desenvolvimento de site com seo, sites com qualidade, sites completos, sites com aplicações completas, renan gustavo, renan desenvolvimento"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={dm.className}>
      <body className="bg-very-dark-gray">
        <Header />

          <main className="pt-28 px-8 xl:px-52">
            {children}
            <Analytics />
          </main>
      </body>
    </html>
  );
}
