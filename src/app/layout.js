import { League_Gothic } from 'next/font/google'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import './globals.css'

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-league-gothic',
})

export const metadata = {
  title: 'Dripsa - Soluciones integrales de riego',
  description: 'Soluciones integrales de riego',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${leagueGothic.variable} font-sans`}>
        <Navbar />
        {/* INCREASED PADDING TO MATCH BIGGER NAVBAR */}
        <main className="min-h-screen pt-[160px] md:pt-[200px] lg:pt-[240px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}