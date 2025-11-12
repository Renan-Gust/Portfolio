import './globals.css';

import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';

const dm = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Renan Gustavo - Desenvolvedor',
  description: 'Sou um desenvolvedor focado em criar aplicativos dinâmicos, escaláveis e otimizados. Ao longo da minha jornada, trabalhei em diversos projetos desafiadores, sempre buscando entregar soluções eficientes. Tenho um forte compromisso com a qualidade do código e a experiência do usuário, além de estar sempre em busca de novas ferramentas e boas práticas de desenvolvimento.',
  robots: "index, follow",
  copyright: "© 2025 Renan Gustavo. Todos os direitos reservados.",
  keywords: ""
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
