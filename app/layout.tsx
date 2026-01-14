import type {Metadata} from "next";
import {Iceland} from "next/font/google";
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

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en">
        <head>
            <title>Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.png" />
        </head>
        <body className={`${IceLand.variable} antialiased`}>
        <Shell>
            {children}
        </Shell>
        </body>
        </html>
    );
}
