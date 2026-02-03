'use client';

import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { Logo } from '@/assets/Logo';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container flex h-16 max-w-screen-2xl items-center justify-center mx-auto px-4 md:px-8 relative">
                    <Link
                        href="/support"
                        className="absolute left-4 md:left-8 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all focus:outline-none"
                        aria-label="Go back"
                    >
                        <Icons.ArrowLeft size={20} />
                    </Link>

                    <div className="flex items-center gap-3 font-semibold select-none">
                        <Logo />
                        <span className="text-lg text-white">DoneKit Support</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 container max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-6">
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Privacy Hero */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Your privacy is important to us. This section explains how we collect, use, and protect your information.
                        </p>
                    </div>

                    {/* Privacy Content Card */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                                <Icons.FileText size={20} />
                            </div>
                            <h2 className="text-xl font-semibold text-zinc-100">Policy Details</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Data Collection</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    The App stores your switches, spaces, and photos locally on your device. We do not collect or transmit your personal data to external servers.
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Photos</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Any photos you take within the App are stored locally on your device and are not uploaded to any cloud service.
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Analytics</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may collect anonymous usage statistics to improve the App experience. This data cannot be used to identify you personally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-white/10 py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row max-w-screen-2xl mx-auto px-4 md:px-8 text-center md:text-left">
                    <p className="text-sm text-muted-foreground leading-loose">
                        &copy; {new Date().getFullYear()} DoneKit. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/privacy" className="text-white hover:underline transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground hover:underline transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
