import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keep Notes',
  description: 'Track your tasks which are too complex for human brains',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-t from-[#FFC8DD] to-[#BDE0FE]">
        <Header />
        {children}
      </body>
    </html>
  )
}
