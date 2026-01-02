import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import { BASE_URL, DESCRIPTION } from "@/lib/constants";
import { Providers } from "./providers";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        template: "%s | Sodium",
        default: "Sodium Docs",
    },
    description: DESCRIPTION,
    keywords: ["docs", "documentation", "sodium", "labs", "sodiumlabs", "modules", "npm", "packages"],
    icons: {
        other: [
            {
                url: "/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
        ],
        apple: ["/apple-touch-icon.png"],
    },
    manifest: "/site.webmanifest",
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {
        siteName: "Sodium Docs",
        title: "Sodium Docs",
        type: "website",
        description: DESCRIPTION,
    },
};

export const viewport: Viewport = {
    themeColor: "#8ec5ff",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${geistMono.variable} dark antialiased overscroll-y-none`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
