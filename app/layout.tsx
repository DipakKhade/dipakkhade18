import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./AuthProvider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import NavigationBar from '../components/NavigationBar'
//font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

//meta data
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Server Components"],
  authors: [
    {
      name: "Dipak Khade",
      url: "https://dipakkhade-dev.vercel.app/",
    },
  ],
  creator: "Dipak Khade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, fontHeading.variable)}>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

  
          <NextAuthProvider>
    
              {/* <Header /> */}
              <main className="bg-gradient-to-r from-indigo-500">
              <NavigationBar/>
                <NextTopLoader color="#000000" height={1} />
                {children}
              <Footer />
              </main>
              <Toaster />

          </NextAuthProvider>
          </ThemeProvider>
    
      </body>
    </html>
  );
}
