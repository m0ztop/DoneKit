'use client';

import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { Logo } from '@/assets/Logo';

export default function TermsPage() {
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
                    {/* Terms Hero */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            Terms & Conditions
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Please read these terms carefully before using the app.
                        </p>
                    </div>

                    {/* Terms Content Card */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 w-fit rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800">
                                <Icons.Scale size={20} />
                            </div>
                            <h2 className="text-xl font-semibold text-zinc-100">Terms of Service</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <p className="text-muted-foreground leading-relaxed">
                                    By downloading, installing, or using DoneKit ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    The App is provided "as is" without warranties of any kind. We reserve the right to modify, suspend, or discontinue the App at any time without notice.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    You must be at least 13 years old to use this App. By using the App, you represent that you meet this age requirement.
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-4">User Responsibilities</h3>
                                <p className="text-muted-foreground mb-4">As a user of the App, you agree to:</p>
                                <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-2 marker:text-zinc-600">
                                    <li>Use the App only for lawful purposes</li>
                                    <li>Not attempt to reverse engineer, modify, or tamper with the App</li>
                                    <li>Not use the App in any way that could damage, disable, or impair its functionality</li>
                                    <li>Take responsibility for all activities that occur under your device</li>
                                </ul>
                                <p className="text-muted-foreground mt-4 leading-relaxed">
                                    You are solely responsible for the content you create within the App, including switch names and photos.
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Intellectual Property</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of DoneKit and are protected by international copyright, trademark, and other intellectual property laws.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    You may not reproduce, distribute, modify, or create derivative works from any part of the App without our prior written consent.
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Limitation of Liability</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To the fullest extent permitted by applicable law, DoneKit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    The App is designed as a personal reminder tool. We are not responsible for any consequences arising from missed reminders or forgotten tasks.
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Changes to Terms</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to update these Terms at any time. We will notify you of any changes by posting the new Terms within the App.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    Your continued use of the App after any changes indicates your acceptance of the new Terms.
                                </p>
                                <p className="text-sm text-zinc-500 mt-6">
                                    Last updated: December 2024
                                </p>
                            </div>

                            <div className="h-px w-full bg-zinc-800/50" />

                            <div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-2">Contact Us</h3>
                                <p className="text-muted-foreground">
                                    If you have any questions about these Terms & Conditions, please contact us at: <a href="mailto:support@donekit.app" className="text-zinc-200 hover:underline">support@donekit.app</a>
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
                        <Link href="/terms" className="text-white hover:underline transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
