'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-zinc-300">Available on the App Store</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    The Ultimate Toolkit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Getting Things Done</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Secure, private, and beautifully designed. Build your perfect productivity space with DoneKit's customizable widgets and themes.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Link
                        href="https://apps.apple.com/app/donekit/id123456789" // Replace with actual ID if known, else general link
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200"
                    >
                        <span className="mr-2">Download App</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#features"
                        className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium text-zinc-400 transition-colors hover:text-white border border-transparent hover:border-white/10 hover:bg-white/5"
                    >
                        Learn more
                    </Link>
                </motion.div>

                {/* Hero Image / Initial Phone */}
                <motion.div
                    className="mt-20 relative w-full max-w-[320px] md:max-w-[400px] aspect-[9/19.5]"
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    style={{ perspective: 1000 }}
                >
                    <div className="relative w-full h-full drop-shadow-2xl">
                        <Image
                            src="/images/mockups/step-2.png" // Home screen as Hero
                            alt="DoneKit Home Screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Glow effect behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-purple-500/20 blur-[100px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
