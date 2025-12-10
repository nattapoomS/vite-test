import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import commandK from './image/command-k_2x.d804c7ad.jpg';
import newsletterCard from './image/newsletter-card_2x.f7adffbf.jpg';

const Earnings = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animation for "At your command" section
        tl.from('.command-section', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Animation for "Weekly insights" section
        tl.from('.insights-section', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 lg:py-32 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Section 1: At your command */}
                <div className="command-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-60">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            At your command.
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                            Navigate Fey with natural language. Quickly search stocks, find news, or manage your portfolio. Without lifting your hands from your keyboard.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <img
                            src={commandK}
                            alt="Command K Interface"
                            className="w-full max-w-[400px] rounded-2xl border border-white/10 shadow-2xl"
                        />
                    </div>
                </div>

                {/* Section 2: Weekly insights */}
                <div className="insights-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-64 items-center ">
                    <div className="flex justify-center lg:justify-start">
                        <div className="absolute justify-center lg:justify-start inset-0 bg-linear-to-l from-black via-transparent  pointer-events-none " />
                        <img
                            src={newsletterCard}
                            alt="Weekly Insights Notification"
                            className="max-w-[700px] rounded-2xl border border-white/10 "
                        />
                        </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Weekly insights.
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                            Start each week ahead. Every Monday, get personalized insights on your watchlist, portfolio updates, and market-moving stories <span className="text-white font-semibold">directly in your inbox</span>.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Earnings;
