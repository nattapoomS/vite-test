import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logo from './image/logo.png';

const Navbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(navRef.current, {
            y: -100,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
            delay: 1,
            ease: "power4.out"
        })
            .from(".nav-item", {
                y: -20,
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.8,
                stagger: 0.1,
                delay: 1,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: navRef });

    return (
        <nav ref={navRef} className="fixed top-10 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm bg-black/20 border-b border-white/5">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 cursor-pointer nav-item">
                    {/* Fey Logo Icon */}
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <button className="flex items-center gap-1 hover:text-white transition-colors nav-item">
                        คอร์ส
                    </button>
                    <a href="#" className="hover:text-white transition-colors nav-item">โปรโมชั่น</a>
                    <a href="#" className="hover:text-white transition-colors nav-item">ไลฟ์สด</a>
                    <a href="#" className="hover:text-white transition-colors nav-item">ชุมชน</a>
                    <a href="#" className="hover:text-white transition-colors nav-item">บันทึกเทรด</a>
                </div>
            </div>

            <div className="flex items-center gap-5 nav-item">
                <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
                    <span className="font-semibold text-sm text-white">เข้าสู่ระบบ</span>
                    <button className="px-3 py-1 text-sm bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
                        สมัครสมาชิก
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;