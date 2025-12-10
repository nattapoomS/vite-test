import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/index.css';



const Loader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const progressRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power4.inOut',
                    onComplete: onComplete
                });
            }
        });

        tl.to(progressRef.current, {
            width: '100%',
            duration: 2,
            ease: 'power2.inOut'
        })
            .to(textRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: 'power2.in'
            }, '-=0.5');

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
            <div className="w-64">
                {/* <div className="flex justify-between items-end mb-2" ref={textRef}>
                    <span className="text-white font-display font-bold text-2xl tracking-tight">Skillfi</span>
                    <span className="text-gray-500 font-mono text-xs">LOADING SYSTEM...</span>
                </div> */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div ref={progressRef} className="h-full bg-white w-0 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
