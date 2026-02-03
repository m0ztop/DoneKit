import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'DoneKit - The Ultimate Toolkit for Getting Things Done',
    description: 'Secure, private, and customizable toolkit for your productivity. Widgets, Themes, and Spaces designed for iOS.',
    keywords: 'DoneKit, Productivity, iOS, Widgets, Tasks, Planner, Secure, Private',
    openGraph: {
        title: 'DoneKit',
        description: 'The Ultimate Toolkit for Getting Things Done.',
        url: 'https://donekit.app',
        siteName: 'DoneKit',
        images: [
            {
                url: '/images/mockups/step-2.png', // Hero image
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DoneKit',
        description: 'The Ultimate Toolkit for Getting Things Done.',
        images: ['/images/mockups/step-2.png'],
    },
    icons: {
        icon: '/favicon.png',
        apple: '/app-icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={clsx(inter.variable, "font-sans min-h-screen flex flex-col scroll-smooth")}>
                {children}
            </body>
        </html>
    );
}
