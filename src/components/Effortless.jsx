import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Effortless = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".effortless-header", {
            y: 50,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1,
            ease: "power3.out"
        })
            .from(".effortless-divider", {
                scaleX: 0,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
            .from(".effortless-card", {
                y: 50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-black py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-20 effortless-header">
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        ปลดล็อกมุมมอง
                        <br />
                        <span className=" text-5xl text-shadow-[rgb(0, 0, 0) 0px 4px 24px] md:text-5xl font-bold bg-[linear-gradient(87.11deg, rgb(255, 255, 255) 17.87%, rgba(255, 255, 255, 0.9) 45.18%, rgba(255, 255, 255, 0.86) 57.76%) text text-gray-500">ตลาดด้วยแนวคิด ICT ที่แท้จริง</span>
                    </h1>
                </div>
                <div className="w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent my-8 effortless-divider"></div>
                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-[#0a0a0a00] rounded-3xl p-8 border border-white/5 flex flex-col effortless-card">
                        <div className="mb-8">
                            <h3 className="text-white text-xl font-semibold mb-2">Basic</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl font-bold text-white">฿6,990</span>
                                <span className="text-gray-500 text-sm">/บาท</span>
                            </div>
                            <p className="text-gray-400 text-sm italic mb-1">Mastering ICT</p>
                            <p className="text-gray-400 text-sm">การเทรดตามแนวคิด Smart Money</p>
                        </div>

                        <button className="w-full bg-black text-white border border-white/20 rounded-full py-3 font-medium mb-12 hover:bg-white/10 transition-colors">
                            Start For Begin
                        </button>

                        <div className="space-y-6 grow">
                            <div>
                                <h4 className="text-gray-300 text-sm font-semibold mb-4">ไฮไลท์ของคอร์ส</h4>
                                <ul className="space-y-3">
                                    {[
                                        "เข้าใจโครงสร้างตลาดและการไล่ล่าสภาพคล่องของ Smart Money",
                                        "วิเคราะห์จุดกลับตัวที่แม่นยำด้วยเครื่องมือของ ICT",
                                        "เรียนรู้แนวคิด Liquidity, FVG, Order Block และ Breaker Block สิ่งที่คุณจะได้เรียนรู้"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check size={16} className="text-white mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-3">
                                    {[
                                        "พื้นฐานและโครงสร้าง ICT Concept",
                                        "การวิเคราะห์สภาพคล่อง (Liquidity) และแนวทางการเทรด",
                                        "เทคนิคการใช้ FVG, Order Block และ Breaker Block",
                                        "กลยุทธ์การเข้าเทรดและการบริหารความเสี่ยง"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check size={16} className="text-white mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-gray-300 text-sm font-semibold mb-4">คอร์สประกอบด้วย</h4>
                                <ul className="space-y-3">
                                    {[
                                        "เนื้อหามากกว่า 40 ชั่วโมง ครอบคลุมทุกหัวข้อ",
                                        "คลาสสอนสด พร้อมถาม-ตอบแบบ Real-time",
                                        "ตัวอย่างการเทรดจริง พร้อมแผนการเทรด",
                                        "เข้าถึงคอมมูนิตี้นักเทรด ICT"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check size={16} className="text-white mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* All Access Plan */}
                    <div className="bg-[#0a0a0a00] rounded-3xl p-8 border border-white/5 flex flex-col effortless-card">
                        <div className="mb-8">
                            <h3 className="text-white text-xl font-semibold mb-2">All Access</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl font-bold text-white">฿14,900</span>
                                <span className="text-gray-500 text-sm">/บาท</span>
                            </div>
                            <p className="text-gray-400 text-sm italic mb-1">ALL ACCESS</p>
                            <p className="text-gray-400 text-sm">สิทธิเข้าถึงทุกคอร์สเรียนแบบเต็มรูปแบบ</p>
                        </div>

                        <button className="w-full bg-white text-black rounded-full py-3 font-medium mb-12 hover:bg-gray-200 transition-colors">
                            Get started
                        </button>

                        <div className="space-y-6 grow">
                            <div>
                                <h4 className="text-gray-300 text-sm font-semibold mb-4">ไฮไลท์ของคอร์ส</h4>
                                <ul className="space-y-3">
                                    {[
                                        "สิทธิเข้าถึงทุกคอร์สเรียน ทั้งหมดในแพลตฟอร์ม",
                                        "เรียนรู้การเทรด Futures และการบริหารความเสี่ยงระดับมืออาชีพ",
                                        "เทคนิคการใช้ Breaker Block และ Macro Timing ในตลาดจริง",
                                        "ทำความเข้าใจ MMXM Model เพื่อการเทรดแบบ Smart Money สิ่งที่คุณจะได้เรียนรู้"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check size={16} className="text-white mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-3">
                                    {[
                                        "พื้นฐาน ICT ตั้งแต่โครงสร้างตลาดไปจนถึงกลยุทธ์ขั้นสูง",
                                        "การเทรด Futures และการบริหารพอร์ตให้เหมาะสมกับกองทุน",
                                        "เทคนิคการเข้าเทรดด้วย Breaker Block, FVG และ Order Flow",
                                        "การจับจังหวะตลาดผ่าน Macro Timing และการวิเคราะห์สภาพคล่อง",
                                        "การใช้ MMXM Model เพื่อเพิ่มความแม่นยำในการเข้าเทรด",
                                        "การวางแผนและจัดการความเสี่ยงสำหรับการสอบกองทุน"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check size={16} className="text-white mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-gray-300 text-sm font-semibold mb-4">คอร์สประกอบด้วย</h4>
                                <ul className="space-y-3">
                                    {[
                                        "สิทธิเข้าถึง ทุกคอร์ส บนแพลตฟอร์ม",
                                        "คลาสสอนสด พร้อมถาม-ตอบแบบเรียลไทม์",
                                        "เครื่องมือคำนวณ MM & Risk Management",
                                        "วิดีโอย้อนหลัง อัปเดตเนื้อหาใหม่อย่างต่อเนื่อง"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check size={16} className="text-white mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Effortless;
