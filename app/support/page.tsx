'use client';

import { Accordion } from '@/components/Accordion';
import { Icons } from '@/components/Icons';
import { Logo } from '@/assets/Logo';
import Link from 'next/link';

const FAQ_ITEMS = [
    {
        title: "How do I create a space?",
        content: "Tap the \"+\" button on the main screen, give your space a name, and start adding switches."
    },
    {
        title: "How do I add photos to items?",
        content: "Open a checklist item or switch on, and tap the camera icon to take a photo."
    },
    {
        title: "How do I report a bug?",
        content: "Email us at support@donekit.app with a description of the issue and any relevant screenshots. Include your device model, iOS version, and steps to reproduce."
    },
    {
        title: "How do I request a feature?",
        content: "Send your feature suggestions to support@donekit.app. We review all feedback to improve the app."
    },
    {
        title: "Does DoneKit require an account?",
        content: "No, DoneKit does not require an account. Your checklists and photos are available on this device."
    }
];

export default function SupportPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container flex h-16 max-w-screen-2xl items-center justify-center mx-auto px-4 md:px-8 relative">
                    <Link
                        href="/"
                        className="absolute left-4 md:left-8 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all focus:outline-none"
                        aria-label="Go home"
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
                <div className="space-y-6 animate-in fade-in duration-500">
                    {/* Hero Section */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            Get Support
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            This page provides support resources and answers to common questions.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                                    <Icons.Mail size={20} />
                                </div>
                                <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
                            </div>

                            <div className="space-y-4">
                                <p className="text-muted-foreground">For support inquiries, please email us at:</p>
                                <a href="mailto:support@donekit.app" className="text-2xl font-medium text-white hover:underline block break-all">
                                    support@donekit.app
                                </a>
                                <p className="text-sm text-zinc-500">
                                    Response time takes 1–3 business days.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 md:p-8 shadow-sm backdrop-blur-sm">
                        <h2 className="text-xl font-semibold mb-6 tracking-tight text-zinc-100">
                            Frequently Asked Questions
                        </h2>
                        <Accordion items={FAQ_ITEMS} />
                    </div>

                    {/* Refund Section */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                                <Icons.Shield size={20} />
                            </div>
                            <h2 className="text-xl font-semibold text-zinc-100">Refund</h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                All purchases and refunds are processed directly by Apple. If you need to request a refund, visit Apple's support page and follow the instructions there.
                            </p>
                            <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-4 text-sm text-zinc-300 flex gap-3 items-start">
                                <span className="shrink-0 mt-0.5">❗</span>
                                <p>
                                    Please note: If Apple rejects your refund request, we're unable to override that decision, as all billing is handled exclusively through their platform.
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
                        <Link href="/privacy" className="hover:text-foreground hover:underline transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground hover:underline transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
