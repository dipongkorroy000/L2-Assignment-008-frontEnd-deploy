import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
import RouteProgress from "../components/shared/RouteProgress";
import {Suspense} from "react";
import {ThemeProvider} from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Local Guide",
  description: "Explore Bangladesh like a local",
  icons: "/plane-3989.svg",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <RouteProgress />
        </Suspense>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        <Toaster position="top-right" richColors></Toaster>
      </body>
    </html>
  );
}
