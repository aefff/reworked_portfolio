import type { Metadata } from "next";
import { Iceland } from "next/font/google";
import Shell from "@/components/Shell";
import "./globals.css";


const IceLand = Iceland({
    variable: "--font-iceland",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

    return (
        <html lang="en">
        <body className={`${IceLand.variable} antialiased`}>
        <Shell>
            {children}
        </Shell>
        </body>
        </html>
    );
}
