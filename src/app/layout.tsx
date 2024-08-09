" use client"
import React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"

import "./globals.css"
import { Header } from "./sections/Header"


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})


export const metadata: Metadata = {
  title: "Core Admin - Weblabs Studio",
  description: "",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
