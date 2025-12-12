import React, { useState, useRef } from 'react';
import { Telescope, Bookmark, Home, Compass, Calendar, Image as ImageIcon, Hexagon, Search } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rock from './image/rock.jpg';
import '../styles/index.css';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
    {
        id: 'home',
        icon: Home,
        title: 'หน้าหลัก',
        description: 'ภาพรวมพอร์ตโฟลิโอและการลงทุนของคุณในที่เดียว ติดตามความเคลื่อนไหวและจัดการรายการต่างๆ ได้อย่างง่ายดาย'
    },
    {
        id: 'compass',
        icon: Compass,
        title: 'สำรวจตลาด',
        description: 'ค้นพบโอกาสการลงทุนใหม่ๆ วิเคราะห์แนวโน้มตลาด และเกาะติดสถานการณ์โลกการเงิน'
    },
    {
        id: 'calendar',
        icon: Calendar,
        title: 'ปฏิทินเศรษฐกิจ',
        description: 'ติดตามเหตุการณ์สำคัญทางเศรษฐกิจ วันประกาศงบ และวันที่ขึ้นเครื่องหมายต่างๆ ไม่พลาดทุกความเคลื่อนไหว'
    },
    {
        id: 'watchlist',
        icon: Bookmark,
        title: 'รายการที่น่าสนใจ',
        description: 'ติดตามหุ้นและสินทรัพย์ที่คุณสนใจเป็นพิเศษ บันทึกและเฝ้าดูราคาเพื่อหาจังหวะการลงทุนที่ดีที่สุด'
    },
    {
        id: 'media',
        icon: ImageIcon,
        title: 'ข่าวสารและสื่อ',
        description: 'อัปเดตข่าวสาร บทวิเคราะห์ และสื่อการเรียนรู้เกี่ยวกับการลงทุนจากแหล่งข้อมูลที่เชื่อถือได้'
    },
    {
        id: 'finder',
        icon: Telescope,
        title: 'ค้นหาหุ้น',
        description: 'ค้นหาหุ้นที่ใช่ด้วยเครื่องมือกรองอัจฉริยะ ไม่ต้องใช้คำศัพท์ซับซ้อน เพียงพิมพ์สิ่งที่คุณต้องการ'
    },
    {
        id: 'settings',
        icon: Hexagon,
        title: 'ตั้งค่า',
        description: 'ปรับแต่งการใช้งานแอปพลิเคชัน จัดการบัญชี และตั้งค่าการแจ้งเตือนต่างๆ ให้เหมาะกับสไตล์ของคุณ'
    },
];

const Function = () => {
    const [activeId, setActiveId] = useState('home');
    const containerRef = useRef(null);

    const activeItem = menuItems.find(item => item.id === activeId);
    const activeIndex = menuItems.findIndex(item => item.id === activeId);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".function-header", {
            y: 50,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1,
            ease: "power3.out"
        })
            .from(".function-image", {
                scale: 0.8,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.5")
            .from(".function-nav", {
                y: 30,
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: containerRef });

    useGSAP(() => {
        gsap.fromTo(".function-text-content",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, { dependencies: [activeId], scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-black py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-screen">

            <div className="w-full max-w-7xl mb-0 mx-auto px-12 md:px-12 lg:px-24">
                <h1 className="text-5xl pb-20 text-shadow-[rgb(0, 0, 0) 0px 4px 24px] md:text-5xl font-bold bg-[linear-gradient(87.11deg, rgb(255, 255, 255) 17.87%, rgba(255, 255, 255, 0.9) 45.18%, rgba(255, 255, 255, 0.86) 57.76%) text]  tracking-tight function-header">
                    จากเรื่องยุ่งยากให้กลายเป็นเรื่องง่าย.
                </h1>
            </div>

            <div className="relative w-full max-w-9xl flex justify-center items-center">
                {/* Central Image - Increased Size */}
                <div className="relative z-10 w-[600px] md:w-[800px] function-image">
                    <img
                        src={Rock}
                        alt="Rock"
                        className="w-[2000px] h-full object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Floating Navigation Bar */}
                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-4 function-nav">
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
                    <div className="absolute top-[60%]  left-[140px] w-full max-w-5xl pointer-events-none z-99 function-text-content">
                        <div className="relative w-full h-full">
                            {/* Text Container */}
                            <div className="absolute top-10 right-0 md:right-[-100px] w-80 text-left pl-8 pointer-events-auto">
                                <h3 className="text-white text-lg font-bold mb-2">
                                    {activeItem.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed ">
                                    {activeItem.description}
                                </p>

                            </div>

                            {/* Dynamic Connector Line */}
                            <svg className="absolute top-[-100px] left-0 w-full h-[100px] z-0 pointer-events-none overflow-visible ">
                                <path
                                    d={`M ${360 + (activeIndex * 71)} 0 V 150 H ${820}`}
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