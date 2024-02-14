import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./AuthProvider";
import { Toaster, toast } from 'sonner'
import NextTopLoader from 'nextjs-toploader';
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dipak Khade",
  description: "Projext to store notes , coded in Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <MaxWidthWrapper>
          <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mt-24">
            <NextTopLoader color="#2563EB" height={2}/>
              {children}
              </main>
            <Toaster />
            <Footer />

          </ThemeProvider>
          </NextAuthProvider>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
