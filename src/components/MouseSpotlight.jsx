import React, { useEffect, useRef } from 'react';

const MouseSpotlight = () => {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (spotlightRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={spotlightRef}
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: 'radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.1), transparent 40%)'
            }}
        />
    );
};

export default MouseSpotlight;
