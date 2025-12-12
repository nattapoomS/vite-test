import React from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Maximize2 } from 'lucide-react';
import '../styles/index.css';
import logo from './image/logo.png';
import ChefOat from './image/Chef Oat.png';
import ChefRadion from './image/Chef Radion.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.hero-content', {
            y: 50,
            opacity: 0,
            filter: "blur(10px)",
            duration: 4,
            ease: 'power3.out',
            delay: 0.5
        });

        // ScrollTrigger animation for news cards
        gsap.fromTo('.news-card',
            {
                y: 50,
                opacity: 0,
                filter: "blur(10px)"
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: 3,
                stagger: 0.15,
                duration: 1, // Added duration for smoothness
                ease: "power3.out"
            }
        );

        gsap.to('.gradient-overlay', {
            opacity: 1,
            duration: 1,
            delay: 4
        });
    });

    return (

        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Spline Background */}
            <div className="absolute inset-0 z-0 mt-25">
                <Spline scene="https://prod.spline.design/v9PrxjMH7noudnNL/scene.splinecode" />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>

            {/* News Cards Section - Bottom Right */}
            <div className="absolute bottom-[95px] right-[140px] z-10 flex flex-col gap-2 max-w-[650px] max-h-[480px]">
                {/* Morning Recap Card */}
                <div className="news-card opacity-0 translate-y-[50px] linear-gradient(175.45deg,#fff -2.27%,#141414 9.45%,#646464 87.42%,#fff 103.46%) backdrop-blur-xl rounded-xl p-4 border border-white/10 relative overflow-hidden group hover:bg-[#050505]/50 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-px from-blue-500/20 to-purple-500/20"></div>

                    <div className="flex justify-between items-start mb-3 ">
                        <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full ">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                            </div>
                            <span className="text-[10px] font-semibold text-gray-300">Morning recap</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-[10px]">
                            <span>Summarized at 1:13PM</span>
                            <Maximize2 size={10} className="cursor-pointer hover:text-white" />
                        </div>
                    </div>

                    <h3 className="text-sm text-gray-200 leading-snug mb-2">
                        DXY กำลังทดสอบแนวต้านสำคัญบริเวณ 104.50 ซึ่งเป็นโซนที่ตลาดจับตาอย่างใกล้ชิด เนื่องจากการทะลุขึ้นหรือตอบสนองจากระดับนี้อาจเป็นตัวกำหนดทิศทางของค่าเงินดอลลาร์ในระยะสั้นถึงกลาง ช่วงนี้คู่เงินหลักส่วนใหญ่ยังคงอยู่ในโหมดพักตัว      </h3>
                    <div className="gradient-overlay opacity-0 absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div >

                {/* NVDA News Card */}
                < div className="news-card opacity-0 translate-y-[50px] border border-white/10 w-fit" >
                    <div className="flex justify-between items-center mb-2">

                        <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full ">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                <img src={ChefRadion} alt="Chef Radion" className="w-10 h-10 object-contain" />
                            </div>
                            <span className="text-[10px] font-semibold text-gray-300">Chef Radion</span>
                        </div>

                        <span className="text-[10px] text-gray-600">Today · Just now</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        GBP/JPY กำลังแสดงสัญญาณ Bearish Divergence ชัดเจนบนกราฟ H4 ซึ่งบ่งบอกถึงการอ่อนแรงของโมเมนตัมฝั่งซื้อ แม้ว่าราคาจะทำจุดสูงใหม่ แต่ตัวชี้วัดเช่น RSI หรือ MACD กลับไม่สามารถยืนสูงตามราคาได้ </p>
                    <div className="gradient-overlay opacity-0 absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div >

                {/* MSFT News Card */}
                < div className="news-card opacity-0 translate-y-[50px]  border-white/10 w-fit rounded-xl p-3" >
                    <div className="flex justify-between items-center mb-0">

                        <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full  ">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                <img src={ChefOat} alt="Chef Oat" className="w-10 h-10 object-contain" />
                            </div>
                            <span className="text-[10px] font-semibold text-gray-300">Chef Oat</span>
                        </div>

                        <span className="text-[10px] text-gray-600">Today · 2 minutes ago</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        XAU/USD เบรคออกจากแพทเทิร์น Bullish Flag เข้า Buy ที่ 2350 เป้าหมาย New High ที่ 2400 เลื่อน Trailing Stop ตาม
                    </p>

                </div >
                <div className="gradient-overlay opacity-0 absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div >
        </section >
    );
};

export default Hero;
