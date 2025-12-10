import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/index.css';
import hl1 from './image/hl1.png';
import hl2 from './image/hl2.png';
import hl3 from './image/hl3.png';
import hl4 from './image/hl4.png';

const highlightsData = [
    {
        id: 1,
        img: hl1,
        title: "Beautiful Stock and ETF pages",
    },
    {
        id: 2,
        img: hl2,
        title: "Insider transactions",
    },
    {
        id: 3,
        img: hl3,
        title: "Graph comparison",
    },
    {
        id: 4,
        img: hl4,
        title: "Portfolio analytics", // Assumed title for hl4
    }
];

const Highlights = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400; // Adjust scroll amount as needed
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full bg-black py-0 px-0 md:px-0 lg:px-0 overflow-hidden">
            <div className="max-w-7xl mx-auto px-12 md:px-12 lg:px-24">
                {/* Top Header */}
                <div className="mb-36">
                    <h2 className="text-gray-500 text-xl font-medium mb-2">Fey</h2>
                    <h1 className="text-5xl text-shadow-[rgb(0, 0, 0) 0px 4px 24px] md:text-5xl font-bold bg-[linear-gradient(87.11deg, rgb(255, 255, 255) 17.87%, rgba(255, 255, 255, 0.9) 45.18%, rgba(255, 255, 255, 0.86) 57.76%) text]  tracking-tight">
                        Make better investments.
                    </h1>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-16">
                    {/* Left Text Content */}
                    <div className="max-w-2xl">
                        <span className="text-[#ff5500] font-bold text-lg mb-4 block">
                            Highlights
                        </span>
                        <p className="text-1xl md:text-1xl text-white font-medium leading-snug">
                            Fey turns complex data, gated tools, and noisy news into instant earnings alerts, clear summaries, and a beautiful interface—so anyone can stay informed, without feeling overwhelmed.
                        </p>
                    </div>

                    {/* Right Navigation Buttons */}
                    <div className="flex justify-start lg:justify-end gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto ml-40 px-12 md:px-12 lg:px-24 pb-12 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {highlightsData.map((item) => (
                    <div key={item.id} className="snap-start flex flex-col gap-6 shrink-0">
                        <div className="rounded-4xl overflow-hidden border border-white/10 bg-white/5 h-[600px] w-auto">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-full w-auto object-cover"
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold pl-2">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Highlights;
