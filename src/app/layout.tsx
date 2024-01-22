import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '../../utils/Providers'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import BootstrapClient from './components/BootstrapClient'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Provider>
            {children}
            <BootstrapClient />
          </Provider>
        </body>
    </html>
  )
}
