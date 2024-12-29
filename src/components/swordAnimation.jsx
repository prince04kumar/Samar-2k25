import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 import swordImage from '../assets/illustration/sword.png';
// const swordImage = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453610/sword_dysppw.png"
gsap.registerPlugin(ScrollTrigger);

const SwordAnimation = () => {
    const swordRef = useRef(null);

    useEffect(() => {
        const sword = swordRef.current;

        // GSAP Animation for sword
        gsap.to(sword, {
            x: '-100vw', // Move sword from right to left
            y: '+=150', // Wavy effect along the y-axis
            rotation: 720, // Increased rotation for a more dynamic effect
            ease: 'sine.inOut', // Smooth wavy motion
            scrollTrigger: {
                trigger: sword,
                start: 'top 90%', // Animation starts slightly later
                end: 'bottom -100%', // Reduced range for faster effect
                scrub: true, // Tied to scroll progress
            },
        });

        return () => {
            ScrollTrigger.killAll(); // Cleanup ScrollTriggers on unmount
        };
    }, []);

    return (
        <div className="relative">
            <img
                ref={swordRef}
                src={swordImage}
                alt="Sword"
                className="absolute top-[80%] right-24 translate-y-[-50%] w-[150px]"
            />
        </div>
    );
};

export default SwordAnimation;