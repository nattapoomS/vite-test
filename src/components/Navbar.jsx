import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm bg-black/20 border-b border-white/5">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 cursor-pointer">
                    {/* Fey Logo Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        Features <ChevronDown size={14} />
                    </button>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors">Updates</a>
                    <a href="#" className="hover:text-white transition-colors">Students</a>
                    <a href="#" className="hover:text-white transition-colors">App</a>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                    <span className="font-semibold text-white">Fey has joined Wealthsimple</span>
                    <button className="px-3 py-1 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
                        Learn more
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;