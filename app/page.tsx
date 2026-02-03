import { Hero } from '@/components/Hero';
import { ScrollJourney } from '@/components/ScrollJourney';
import { Footer } from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-black selection:bg-purple-500/30">
            <Hero />
            <ScrollJourney />
            <Footer />
        </main>
    );
}
