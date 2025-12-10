import React, { useState } from 'react';
import { Telescope, Bookmark, Home, Compass, Calendar, Image as ImageIcon, Hexagon, Search } from 'lucide-react';
import Rock from './image/Rock.jpg';
import '../styles/index.css';

const menuItems = [
    { id: 'home', icon: Home },
    { id: 'compass', icon: Compass },
    { id: 'calendar', icon: Calendar },
    {
        id: 'watchlist',
        icon: Bookmark,
        title: 'Watchlist and Holdings',
        description: 'Track all your portfolios in one place. Create lists, drag to reorder, and monitor what matters to you.'
    },
    { id: 'media', icon: ImageIcon },
    {
        id: 'finder',
        icon: Telescope,
        title: 'Stock Finder',
        description: 'Find stocks by typing what you want. No complex filters or jargon, just clear, intelligent results in seconds.'
    },
    { id: 'settings', icon: Hexagon },
];

const Function = () => {
    const [activeId, setActiveId] = useState('home');

    const activeItem = menuItems.find(item => item.id === activeId);
    const activeIndex = menuItems.findIndex(item => item.id === activeId);

    return (
        <section className="w-full bg-black py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl pb-20 text-shadow-[rgb(0, 0, 0) 0px 4px 24px] md:text-5xl font-bold bg-[linear-gradient(87.11deg, rgb(255, 255, 255) 17.87%, rgba(255, 255, 255, 0.9) 45.18%, rgba(255, 255, 255, 0.86) 57.76%) text]  tracking-tight">
                       From overwhelming to effortless.
                    </h1>

            <div className="relative w-full max-w-9xl flex justify-center items-center">
                {/* Central Image - Increased Size */}
                <div className="relative z-10 w-[600px] md:w-[800px]">
                    <img
                        src={Rock}
                        alt="Rock"
                        className="w-[2000px] h-full object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Floating Navigation Bar */}
                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-4 ">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 flex items-center gap-6 shadow-2xl relative">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeId === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`relative group p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-white/20 text-white scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <Icon size={28} strokeWidth={2} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Button */}
                    <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-2xl">
                        <Search size={32} />
                    </button>
                </div>

                {/* Dynamic Text Content & Connector Line */}
                {activeItem?.title && (
                    <div className="absolute top-[60%]  left-[140px] w-full max-w-5xl pointer-events-none z-99">
                        <div className="relative w-full h-full">
                            {/* Text Container */}
                            <div className="absolute top-20 right-0 md:right-[-150px] w-80 text-left pl-8 pointer-events-auto">
                                <h3 className="text-white text-lg font-bold mb-2">
                                    {activeItem.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed ">
                                    {activeItem.description}
                                </p>
                                
                            </div>

                            {/* Dynamic Connector Line */}
                            <svg className="absolute top-[-40px] left-0 w-full h-[100px] z-0 pointer-events-none overflow-visible ">
                                <path
                                    d={`M ${360 + (activeIndex * 71)} 0 V 100 H ${850}`}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.8)"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                />
                
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Function;