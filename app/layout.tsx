import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { AuthProvider } from "@/contexts/auth-context"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "CSI Centenary Wesley Church - Ramkote Hyderabad",
  description:
    "Welcome to CSI Centenary Wesley Church, Ramkote Hyderabad. Come, let us bow down in worship, let us kneel before the Lord our Maker.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${roboto.variable} antialiased`}>
        <AuthProvider>
          <Suspense>
            {children}
            <Analytics />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  )
}
