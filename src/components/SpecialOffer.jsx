import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import '../styles/index.css';

const SpecialOffer = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            yPercent: -100,
            duration: 3,
            ease: "power4.out",
            delay: 3
        });
    }, { scope: containerRef });

    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (val) => val.toString().padStart(2, '0');

    return (
        <div ref={containerRef} className="special-offer fixed top-0 left-0 right-0 z-[60] h-10 bg-[#0a0a0a] flex items-center justify-center text-[11px] md:text-xs font-medium text-gray-300 border-b border-white/5 overflow-hidden">
            {/* Gradient Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-linear-to-r  from-transparent via-white/5 to-transparent blur-xl pointer-events-none" />

            <div className="relative flex items-center gap-3 z-10">
                <span className="text-amber-50">ข้อเสนอพิเศษสิ้นสุดใน:</span>
                <div className="flex items-center gap-1 font-mono text-white">
                    <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">{formatTime(timeLeft.hours)}</span>
                    <span>:</span>
                    <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">{formatTime(timeLeft.minutes)}</span>
                    <span>:</span>
                    <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">{formatTime(timeLeft.seconds)}</span>
                </div>
                <div className="w-px h-3 bg-white/20 mx-2" />
                <a href="#" className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors group">
                    สมัครสมาชิกตอนนี้
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default SpecialOffer;
