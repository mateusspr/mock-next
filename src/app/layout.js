import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './nav/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mateus Dev | Portifólio',
  description: 'Site para apresentação de projetos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />          
      </body>
    </html>
  )
}
