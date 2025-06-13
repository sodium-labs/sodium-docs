import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BASE_URL } from "@/config";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: "Sodium Docs",
    description: "The documentation of all Sodium modules",
    keywords: ["docs", "documentation", "sodium", "labs", "sodiumlabs", "modules", "npm", "types"],
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {
        title: "Sodium Docs",
        type: "website",
        description: "The documentation of all Sodium modules",
    },
};

export const viewport: Viewport = {
    themeColor: "#7499d6",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>{children}</body>
        </html>
    );
}
