import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import MyProfilePic from '@/components/MyProfilePic'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Blog Site',
	description: 'A simple example of a blog site'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Navbar />
				<MyProfilePic />
				{children}
			</body>
		</html>
	)
}
