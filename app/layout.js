import Footer from './components/footer'
import Navegation from './components/navegation'
import './styles/globals.css'

export const metadata = {
  title: 'Chuletas de ati',
  description: 'Generated by Next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navegation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
