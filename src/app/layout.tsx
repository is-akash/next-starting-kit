import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { absoluteUrl, cn } from "../lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import { siteConfig } from "../config/site";
import type { Viewport } from "next";
import { TailwindIndicator } from "../components/tailwind-indicator";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export const metadata = {
    metadataBase: new URL(absoluteUrl("")),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Portfolio",
    ],
    authors: [
        {
            name: "skies-codes",
            url: "https://x.com/skies_codes",
        },
    ],
    creator: "skies-codes",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@skies_codes",
    },
    icons: {
        icon: "/logo-icon.png",
    },
};
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    {children}
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}
