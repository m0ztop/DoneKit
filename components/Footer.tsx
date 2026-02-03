import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        {/* Logo placeholder if needed, or text */}
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                            DoneKit
                        </span>
                    </div>

                    <nav className="flex gap-8 text-sm font-medium text-zinc-400">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                    </nav>
                </div>

                <div className="mt-12 text-center text-xs text-zinc-600">
                    &copy; {new Date().getFullYear()} DoneKit. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
