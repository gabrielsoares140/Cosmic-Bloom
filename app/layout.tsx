import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Cinzel_Decorative } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-cinzel-decorative",
})

export const metadata: Metadata = {
  title: "The Cosmic Bloom - VTuber Agency",
  description: "A mystical VTuber agency where cosmic dreams bloom into reality",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cinzelDecorative.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
