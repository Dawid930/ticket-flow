import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font - poppins",
})

export const metadata: Metadata = {
  title: "Ticket Flow",
  description: "Your ticket to the world",
  icons: { icon: "assets/images/logo.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
