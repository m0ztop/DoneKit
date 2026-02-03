'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const STEPS = [
    {
        id: 1,
        title: "Start Your Journey",
        description: "A seamless onboarding experience designed to get you set up in seconds. No complex sign-ups, just immediate value.",
        image: "/images/mockups/step-1.png",
        accent: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        title: "Your Personal Space",
        description: "Organize your life into Spaces. Whether it's 'Home', 'Work', or 'Creative', keep your contexts checked and balanced.",
        image: "/images/mockups/step-2.png",
        accent: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        title: "Deep Customization",
        description: "Make it truly yours. Customize every switch and detail. Choose generic icons or upload your own photos for instant recognition.",
        image: "/images/mockups/step-3.png",
        accent: "from-amber-500 to-orange-500"
    },
    {
        id: 4,
        title: "Visual Memories",
        description: "Attach photos to your tasks. Sometimes a text reminder isn't enough—see exactly what needs to be done.",
        image: "/images/mockups/step-4.png",
        accent: "from-emerald-500 to-teal-500"
    },
    {
        id: 5,
        title: "Practice Makes Perfect",
        description: "Use the Practice mode to build habits. Interactive sessions help reinforce your routine without the pressure.",
        image: "/images/mockups/step-5.png",
        accent: "from-indigo-500 to-violet-500"
    },
    {
        id: 6,
        title: "Detailed Insights",
        description: "Track your progress with detailed lesson views. Understand your patterns and improve your productivity over time.",
        image: "/images/mockups/step-6.png",
        accent: "from-rose-500 to-red-500"
    },
    {
        id: 7,
        title: "Interactive Mini-Apps",
        description: "Experience unique mini-apps within DoneKit. Dynamic interactions that bring joy to the mundane.",
        image: "/images/mockups/step-7.png",
        accent: "from-fuchsia-500 to-purple-600"
    }
];

export function ScrollJourney() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative bg-black" id="features">
            {STEPS.map((step, index) => (
                <JourneyStep
                    key={step.id}
                    step={step}
                    index={index}
                    total={STEPS.length}
                />
            ))}
        </div>
    );
}

function JourneyStep({ step, index, total }: { step: typeof STEPS[0], index: number, total: number }) {
    // Mobile: Stacked view
    // Desktop: Sticky image

    return (
        <div className="relative min-h-[100vh] flex items-center justify-center p-6 border-b border-white/5 last:border-0">
            <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Side (Alternating) */}
                <motion.div
                    className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-purple-900/20`}>
                        {step.id}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{step.title}</h2>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">{step.description}</p>
                </motion.div>

                {/* Image Side */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                    <motion.div
                        className="relative w-full max-w-[320px] aspect-[9/19.5]"
                        initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 5 : -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    >
                        {/* Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${step.accent} blur-[80px] opacity-20 -z-10`} />

                        <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-contain drop-shadow-2xl"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
