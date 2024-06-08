import './globals.css'
import { Navbar } from '@/components/navbar'
import { AptosProvider } from '@/components/aptos-provider'
import Script from 'next/script'
import { Bai_Jamjuree as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'

const fontSans = FontSans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-sans',
})

export const metadata = {
	title: 'Aptos WebXR',
	description: 'Discover Phygital Xperiences & Utility NFTs',
}

export default function RootLayout({ children }) {
	return (
		<AptosProvider>
			<html lang='en' suppressHydrationWarning>
				<head>
					<Script src='https://aframe.io/releases/1.5.0/aframe.min.js'></Script>
				</head>
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable
					)}
				>
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
		</AptosProvider>
	)
}
