import React, { useEffect, useRef, useState } from 'react';

const Stats = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [counts, setCounts] = useState({
        experience: 0,
        clients: 0,
        projects: 0,
        quality: 0
    });

    const targets = {
        experience: 40,
        clients: 500,
        projects: 10000,
        quality: 100
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                animateCounters();
            }
        }, { threshold: 0.2 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4); // EaseOutQuart

            setCounts({
                experience: Math.floor(ease * targets.experience),
                clients: Math.floor(ease * targets.clients),
                projects: Math.floor(ease * targets.projects),
                quality: Math.floor(ease * targets.quality)
            });

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };

    return (
        <section className="stats reveal fade-bottom" ref={sectionRef}>
            <div className="container grid-4">
                <div className="stat-card">
                    <h3>{counts.experience}+</h3>
                    <p>Years Experience</p>
                </div>
                <div className="stat-card">
                    <h3>{counts.clients}+</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="stat-card">
                    <h3>{counts.projects >= 1000 ? (counts.projects / 1000).toFixed(0) + 'k' : counts.projects}+</h3>
                    <p>Projects Delivered</p>
                </div>
                <div className="stat-card">
                    <h3>{counts.quality}%</h3>
                    <p>Quality Assurance</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
