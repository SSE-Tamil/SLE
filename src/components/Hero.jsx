import React, { useRef, useState } from 'react';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
    // 3D Tilt Logic
    const cardRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="badge">Chennai's #1 Welding Experts</span>
                    <h1>Precision <br />Spot Welding Services</h1>
                    <p>Sri Lakshmi Engineering is the premier provider of high-quality spot welding and metal joining solutions in Chennai. Serving automotive and industrial sectors with unmatched accuracy.</p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Get a Quote</a>
                        <a href="#services" className="btn btn-outline">Our Services</a>
                    </div>
                </div>

                {/* 3D Tilt Container */}
                <div
                    className="hero-image tilt-container"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={cardRef}
                        className="image-wrapper tilt-element"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                            boxShadow: `${-rotate.y * 2}px ${rotate.x * 2}px 30px rgba(0,0,0,0.1)`
                        }}
                    >
                        <img src={heroImg} alt="Industrial Welding Factory" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
