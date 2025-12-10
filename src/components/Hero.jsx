import React from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Maximize2 } from 'lucide-react';
import '../styles/index.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.hero-content', {
            y: 50,
            opacity: 0,
            duration: 4,
            ease: 'power3.out',
            delay: 0.5
        });

        // ScrollTrigger animation for news cards
        gsap.to('.news-card', {
            // scrollTrigger: {
            //     trigger: "section",
            //     start: "top top",
            //     end: "20% top",
            //     scrub: 1,
            //     once: true,
            //     markers: true,
            //     toggleActions: "play none none none",
            // },
            y: 0,
            delay: 4,
            opacity: 1,
            stagger: 0.15
        });

        gsap.to('.gradient-overlay', {
            opacity: 1,
            duration: 1,
            delay: 4
        });
    });

    return (

        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Spline Background */}
            <div className="absolute inset-0 z-0">
                <Spline scene="https://prod.spline.design/v9PrxjMH7noudnNL/scene.splinecode" />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>

            {/* News Cards Section - Bottom Right */}
            <div className="absolute bottom-[140px] right-[125px] z-10 flex flex-col gap-2 max-w-[600px] max-h-[700px]">
                {/* Morning Recap Card */}
                <div className="news-card opacity-0 translate-y-[50px] linear-gradient(175.45deg,#fff -2.27%,#141414 9.45%,#646464 87.42%,#fff 103.46%) backdrop-blur-xl rounded-xl p-4 border border-white/10 relative overflow-hidden group hover:bg-[#050505]/50 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-px from-blue-500/20 to-purple-500/20"></div>

                    <div className="flex justify-between items-start mb-3 ">
                        <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full ">
                            <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                                <TrendingUp size={8} className="text-black" />
                            </div>
                            <span className="text-[10px] font-semibold text-gray-300">Morning recap</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-[10px]">
                            <span>Summarized at 1:13PM</span>
                            <Maximize2 size={10} className="cursor-pointer hover:text-white" />
                        </div>
                    </div>

                    <h3 className="text-sm font-bold text-gray-200 leading-snug mb-2">
                        Trump's renewed tariff push is shaking markets. Q1 GDP shrank 0.3% as firms rushed imports and pulled guidance.
                    </h3>
                    <div className="gradient-overlay opacity-0 absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* NVDA News Card */}
                <div className="news-card opacity-0 translate-y-[50px] border border-white/10 w-fit">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded bg-[#76b900] flex items-center justify-center text-black font-bold text-[6px]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M3 3h18v18H3V3m9 3a5 5 0 00-5 5v5h2v-4a3 3 0 116 0v4h2v-5a5 5 0 00-5-5z" /></svg>
                            </div>
                            <span className="text-xs font-bold text-gray-400">NVDA</span>
                        </div>
                        <span className="text-[10px] text-gray-600">Today · Just now</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Saudi Arabia partners with Nvidia to advance AI ambitions, bolstering cloud infrastructures through foreign collaborations, while Trump visits U.S. chip giant.
                    </p>
                     <div className="gradient-overlay opacity-0 absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* MSFT News Card */}
                <div className="news-card opacity-0 translate-y-[50px] border border-white/10 w-fit rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded bg-[#00a4ef] flex items-center justify-center text-white text-[6px]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M4 4h7v7H4V4m9 0h7v7h-7V4m-9 9h7v7H4v-7m9 0h7v7h-7v-7z" /></svg>
                            </div>
                            <span className="text-xs font-bold text-gray-400">MSFT</span>
                        </div>
                        <span className="text-[10px] text-gray-600">Today · 2 minutes ago</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Microsoft cuts 3% of its 228,000 staff to streamline management layers and enhance efficiency, impacting the technology giant's workforce worldwide.
                    </p>

                </div>
                <div className="gradient-overlay opacity-0 absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Hero;
