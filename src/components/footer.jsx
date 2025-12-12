import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-400 py-12 border-white/10 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-12">

                {/* Center Section */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-sm text-gray-500">
                        © 2025 Skillfi.io — Platform สำหรับ Creator และ Instructor
                    </p>
                    <div className="flex gap-6 text-sm font-medium text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Creator Support</a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-4 text-[10px] uppercase tracking-wider text-gray-600">
                    <span>A THING BY SKILLFI TEAM</span>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
